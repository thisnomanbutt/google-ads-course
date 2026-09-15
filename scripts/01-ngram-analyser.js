/**
 * N-GRAM ANALYSER
 * Companion to Lesson 3.4 and Lesson 11.2
 *
 * WHAT IT DOES
 * Breaks every search term into single words (1-grams) and word pairs (2-grams),
 * then adds up the cost and conversions for each across ALL search terms.
 * This reveals waste that is invisible when you read search terms one by one.
 *
 * RISK LEVEL: GREEN — read only. It changes nothing in your account.
 *
 * HOW TO USE
 * 1. Tools > Bulk actions > Scripts > +
 * 2. Paste this whole file.
 * 3. Change ONLY the CONFIG block below.
 * 4. Click PREVIEW. Read the logs.
 * 5. If the logs look right, Authorise and Run.
 * 6. Schedule: weekly, Monday morning.
 */

// ============================================================
// CONFIG — change these values only
// ============================================================
var CONFIG = {
  // Where to send the summary email. Leave blank to skip email.
  EMAIL: 'you@youragency.com',

  // Paste a Google Sheet URL here. Leave blank and the script
  // creates one for you and emails you the link.
  SPREADSHEET_URL: '',

  // How far back to look. Options include:
  // LAST_7_DAYS, LAST_14_DAYS, LAST_30_DAYS, LAST_90_DAYS
  // Use at least 30 days. N-gram needs volume to be meaningful.
  DATE_RANGE: 'LAST_90_DAYS',

  // Ignore n-grams that spent less than this (in your account currency).
  // Raise this for large accounts so the report stays readable.
  MIN_COST: 2000,

  // Ignore words shorter than this. Filters out "a", "in", "of".
  MIN_WORD_LENGTH: 3,

  // How many waste items to include in the email.
  TOP_N_EMAIL: 20,

  // Words to ignore completely (very common connecting words).
  STOP_WORDS: ['the', 'and', 'for', 'with', 'from', 'that', 'this',
               'you', 'your', 'are', 'was', 'can', 'has', 'have']
};
// ============================================================
// END OF CONFIG — you should not need to change anything below
// ============================================================


function main() {
  Logger.log('N-Gram Analyser starting. Date range: ' + CONFIG.DATE_RANGE);

  var searchTerms = fetchSearchTerms();
  Logger.log('Search terms retrieved: ' + searchTerms.length);

  if (searchTerms.length === 0) {
    Logger.log('No search terms found. Check the date range and that campaigns are running.');
    return;
  }

  var oneGrams = buildNgrams(searchTerms, 1);
  var twoGrams = buildNgrams(searchTerms, 2);

  Logger.log('Unique 1-grams: ' + Object.keys(oneGrams).length);
  Logger.log('Unique 2-grams: ' + Object.keys(twoGrams).length);

  var oneGramRows = toSortedRows(oneGrams);
  var twoGramRows = toSortedRows(twoGrams);

  var sheet = getSpreadsheet();
  writeSheet(sheet, '1-gram', oneGramRows);
  writeSheet(sheet, '2-gram', twoGramRows);

  Logger.log('Results written to: ' + sheet.getUrl());

  sendEmail(oneGramRows, twoGramRows, sheet.getUrl());

  Logger.log('N-Gram Analyser finished.');
}


/**
 * Pulls search term data using GAQL.
 */
function fetchSearchTerms() {
  var query =
    'SELECT ' +
    '  search_term_view.search_term, ' +
    '  metrics.cost_micros, ' +
    '  metrics.clicks, ' +
    '  metrics.conversions, ' +
    '  metrics.conversions_value ' +
    'FROM search_term_view ' +
    'WHERE segments.date DURING ' + CONFIG.DATE_RANGE + ' ' +
    '  AND metrics.impressions > 0';

  var rows = [];
  var iterator = AdsApp.search(query);

  while (iterator.hasNext()) {
    var row = iterator.next();
    rows.push({
      term: String(row.searchTermView.searchTerm).toLowerCase(),
      cost: Number(row.metrics.costMicros) / 1000000,
      clicks: Number(row.metrics.clicks),
      conversions: Number(row.metrics.conversions),
      value: Number(row.metrics.conversionsValue)
    });
  }
  return rows;
}


/**
 * Splits every search term into n-grams and totals the metrics for each.
 */
function buildNgrams(searchTerms, n) {
  var totals = {};

  for (var i = 0; i < searchTerms.length; i++) {
    var item = searchTerms[i];
    var words = cleanWords(item.term);

    // Build every n-word chunk in this search term.
    var seenInThisTerm = {};
    for (var j = 0; j <= words.length - n; j++) {
      var gram = words.slice(j, j + n).join(' ');

      // Count each n-gram only once per search term, so a repeated
      // word does not multiply that term's cost.
      if (seenInThisTerm[gram]) { continue; }
      seenInThisTerm[gram] = true;

      if (!totals[gram]) {
        totals[gram] = { gram: gram, cost: 0, clicks: 0, conversions: 0, value: 0, terms: 0 };
      }
      totals[gram].cost += item.cost;
      totals[gram].clicks += item.clicks;
      totals[gram].conversions += item.conversions;
      totals[gram].value += item.value;
      totals[gram].terms += 1;
    }
  }
  return totals;
}


/**
 * Removes punctuation, stop words and very short words.
 */
function cleanWords(term) {
  var raw = term.replace(/[^a-z0-9\s]/g, ' ').split(/\s+/);
  var out = [];
  for (var i = 0; i < raw.length; i++) {
    var w = raw[i];
    if (w.length < CONFIG.MIN_WORD_LENGTH) { continue; }
    if (CONFIG.STOP_WORDS.indexOf(w) !== -1) { continue; }
    out.push(w);
  }
  return out;
}


/**
 * Converts the totals object into sorted rows, filtered by minimum cost.
 */
function toSortedRows(totals) {
  var rows = [];
  for (var key in totals) {
    var t = totals[key];
    if (t.cost < CONFIG.MIN_COST) { continue; }

    var costPerConv = t.conversions > 0 ? (t.cost / t.conversions) : null;
    var roas = t.cost > 0 ? (t.value / t.cost) : 0;

    rows.push([
      t.gram,
      round2(t.cost),
      t.clicks,
      round2(t.conversions),
      round2(t.value),
      costPerConv === null ? 'NO CONVERSIONS' : round2(costPerConv),
      round2(roas),
      t.terms
    ]);
  }

  // Sort by cost, highest first. Money leaks are the priority.
  rows.sort(function(a, b) { return b[1] - a[1]; });
  return rows;
}


function getSpreadsheet() {
  if (CONFIG.SPREADSHEET_URL && CONFIG.SPREADSHEET_URL.length > 10) {
    return SpreadsheetApp.openByUrl(CONFIG.SPREADSHEET_URL);
  }
  var name = 'N-Gram Report - ' + AdsApp.currentAccount().getName();
  var ss = SpreadsheetApp.create(name);
  Logger.log('Created a new spreadsheet: ' + ss.getUrl());
  Logger.log('Paste that URL into CONFIG.SPREADSHEET_URL so future runs reuse it.');
  return ss;
}


function writeSheet(spreadsheet, tabName, rows) {
  var sheet = spreadsheet.getSheetByName(tabName);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(tabName);
  }
  sheet.clear();

  var header = ['N-Gram', 'Cost', 'Clicks', 'Conversions', 'Conv Value',
                'Cost/Conv', 'ROAS', 'Search Terms'];
  sheet.appendRow(header);
  sheet.getRange(1, 1, 1, header.length).setFontWeight('bold');

  if (rows.length === 0) {
    sheet.appendRow(['No n-grams above the minimum cost threshold.']);
    return;
  }

  sheet.getRange(2, 1, rows.length, header.length).setValues(rows);
  sheet.setFrozenRows(1);
}


function sendEmail(oneGramRows, twoGramRows, url) {
  if (!CONFIG.EMAIL || CONFIG.EMAIL.indexOf('@') === -1) {
    Logger.log('No email configured. Skipping email.');
    return;
  }

  var waste1 = filterWaste(oneGramRows).slice(0, CONFIG.TOP_N_EMAIL);
  var waste2 = filterWaste(twoGramRows).slice(0, CONFIG.TOP_N_EMAIL);

  var totalWaste = 0;
  for (var i = 0; i < waste2.length; i++) { totalWaste += waste2[i][1]; }

  var body = '';
  body += 'N-GRAM REPORT — ' + AdsApp.currentAccount().getName() + '\n';
  body += 'Period: ' + CONFIG.DATE_RANGE + '\n';
  body += 'Full report: ' + url + '\n\n';

  body += '=== TOP WASTE: WORD PAIRS (cost, zero conversions) ===\n';
  body += 'These word pairs spent money and produced nothing.\n\n';
  body += formatWasteList(waste2);

  body += '\n=== TOP WASTE: SINGLE WORDS (cost, zero conversions) ===\n';
  body += 'Check these carefully — a single word can appear in good terms too.\n\n';
  body += formatWasteList(waste1);

  body += '\n---\n';
  body += 'BEFORE BLOCKING ANY OF THESE:\n';
  body += '1. Check the full search terms containing them (Lesson 3.4)\n';
  body += '2. Confirm none of your converting terms would be blocked\n';
  body += '3. Prefer negative PHRASE match when unsure\n';

  MailApp.sendEmail(
    CONFIG.EMAIL,
    'N-Gram Report — ' + AdsApp.currentAccount().getName(),
    body
  );
  Logger.log('Email sent to ' + CONFIG.EMAIL);
}


function filterWaste(rows) {
  var out = [];
  for (var i = 0; i < rows.length; i++) {
    if (rows[i][3] === 0) { out.push(rows[i]); }  // zero conversions
  }
  return out;
}


function formatWasteList(rows) {
  if (rows.length === 0) { return '  Nothing above the cost threshold with zero conversions.\n'; }
  var s = '';
  for (var i = 0; i < rows.length; i++) {
    s += '  ' + pad(rows[i][0], 34) + ' cost ' + rows[i][1] +
         '  clicks ' + rows[i][2] + '  terms ' + rows[i][7] + '\n';
  }
  return s;
}


function pad(text, len) {
  var s = String(text);
  while (s.length < len) { s += ' '; }
  return s;
}

function round2(n) {
  return Math.round(n * 100) / 100;
}


/* ------------------------------------------------------------
 * RUNNING THIS ACROSS AN MCC
 * Replace main() with the version below and install at MCC level.
 *
 * function main() {
 *   var accounts = AdsManagerApp.accounts().get();
 *   while (accounts.hasNext()) {
 *     var account = accounts.next();
 *     AdsManagerApp.select(account);
 *     try {
 *       runForOneAccount();   // rename the body of main() to this
 *     } catch (e) {
 *       Logger.log('Failed for ' + account.getName() + ': ' + e);
 *     }
 *   }
 * }
 *
 * NOTE: MCC scripts have execution time limits. For more than about
 * 20 accounts, split into batches or use executeInParallel().
 * ------------------------------------------------------------ */
