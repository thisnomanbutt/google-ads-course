/**
 * QUALITY SCORE TRACKER
 * Companion to Lesson 4.5 and Lesson 11.2
 *
 * WHAT IT DOES
 * Records the Quality Score and all three components for every keyword
 * with spend, appending a dated snapshot to a Google Sheet each week.
 * Over time this builds the historical record Google's interface does not keep.
 *
 * WHY IT MATTERS
 * The interface shows today's score. Without history you cannot prove
 * whether your Quality Score work actually improved anything, or tell
 * a real decline from normal fluctuation.
 *
 * RISK LEVEL: GREEN — read only. It changes nothing in your account.
 *
 * SCHEDULE: Weekly, on the same day each week.
 */

// ============================================================
// CONFIG — change these values only
// ============================================================
var CONFIG = {
  EMAIL: 'you@youragency.com',

  // Paste a Google Sheet URL. Leave blank and the script creates one
  // and emails you the link on the first run.
  SPREADSHEET_URL: '',

  // Only track keywords that spent at least this much in the period.
  // Cheap keywords with poor scores are not worth your attention (Lesson 4.5).
  MIN_COST: 500,

  // The period used for the cost filter and the metrics snapshot.
  DATE_RANGE: 'LAST_7_DAYS',

  // Email a summary of movements since the previous snapshot?
  EMAIL_SUMMARY: true,

  // Flag a keyword in the email if its Quality Score moved by
  // this many points or more since last time.
  ALERT_MOVEMENT: 2,

  // Maximum keywords to record. Protects against timeouts on huge accounts.
  MAX_KEYWORDS: 5000
};
// ============================================================
// END OF CONFIG
// ============================================================


function main() {
  var accountName = AdsApp.currentAccount().getName();
  var tz = AdsApp.currentAccount().getTimeZone();
  var today = Utilities.formatDate(new Date(), tz, 'yyyy-MM-dd');

  Logger.log('Quality Score Tracker starting for: ' + accountName);
  Logger.log('Snapshot date: ' + today);

  var keywords = fetchKeywordQualityData();
  Logger.log('Keywords with Quality Score and spend above threshold: ' + keywords.length);

  if (keywords.length === 0) {
    Logger.log('Nothing to record. Check MIN_COST and the date range.');
    return;
  }

  var ss = getSpreadsheet(accountName);
  var previous = readPreviousSnapshot(ss);

  writeSnapshot(ss, today, keywords);
  writeCurrentView(ss, keywords);

  var summary = buildSummary(keywords, previous);
  Logger.log('Average Quality Score: ' + summary.avgScore);
  Logger.log('Weighted by cost: ' + summary.weightedScore);

  if (CONFIG.EMAIL_SUMMARY) {
    sendSummaryEmail(accountName, today, summary, ss.getUrl());
  }

  Logger.log('Quality Score Tracker finished. Sheet: ' + ss.getUrl());
}


/**
 * Pulls keyword-level Quality Score data using GAQL.
 */
function fetchKeywordQualityData() {
  var query =
    'SELECT ' +
    '  campaign.name, ' +
    '  ad_group.name, ' +
    '  ad_group_criterion.keyword.text, ' +
    '  ad_group_criterion.keyword.match_type, ' +
    '  ad_group_criterion.quality_info.quality_score, ' +
    '  ad_group_criterion.quality_info.creative_quality_score, ' +
    '  ad_group_criterion.quality_info.post_click_quality_score, ' +
    '  ad_group_criterion.quality_info.search_predicted_ctr, ' +
    '  metrics.cost_micros, ' +
    '  metrics.impressions, ' +
    '  metrics.clicks, ' +
    '  metrics.conversions ' +
    'FROM keyword_view ' +
    'WHERE segments.date DURING ' + CONFIG.DATE_RANGE + ' ' +
    '  AND ad_group_criterion.status = "ENABLED" ' +
    '  AND campaign.status = "ENABLED" ' +
    '  AND metrics.impressions > 0';

  var rows = [];
  var iterator = AdsApp.search(query);

  while (iterator.hasNext() && rows.length < CONFIG.MAX_KEYWORDS) {
    var r = iterator.next();
    var cost = Number(r.metrics.costMicros) / 1000000;

    if (cost < CONFIG.MIN_COST) { continue; }

    var qi = r.adGroupCriterion.qualityInfo || {};
    var score = qi.qualityScore;

    // Keywords without enough data have no Quality Score. Skip them.
    if (score === undefined || score === null) { continue; }

    rows.push({
      campaign: r.campaign.name,
      adGroup: r.adGroup.name,
      keyword: r.adGroupCriterion.keyword.text,
      matchType: r.adGroupCriterion.keyword.matchType,
      qualityScore: Number(score),
      adRelevance: readableRating(qi.creativeQualityScore),
      landingPage: readableRating(qi.postClickQualityScore),
      expectedCtr: readableRating(qi.searchPredictedCtr),
      cost: cost,
      impressions: Number(r.metrics.impressions),
      clicks: Number(r.metrics.clicks),
      conversions: Number(r.metrics.conversions)
    });
  }

  // Sort by cost, highest first — fix the expensive ones first (Lesson 4.5).
  rows.sort(function(a, b) { return b.cost - a.cost; });
  return rows;
}


/**
 * Turns Google's enum values into plain words.
 */
function readableRating(value) {
  if (!value) { return 'UNKNOWN'; }
  var map = {
    'ABOVE_AVERAGE': 'Above average',
    'AVERAGE': 'Average',
    'BELOW_AVERAGE': 'Below average',
    'UNKNOWN': 'Unknown',
    'UNSPECIFIED': 'Unknown'
  };
  return map[value] || String(value);
}


function getSpreadsheet(accountName) {
  if (CONFIG.SPREADSHEET_URL && CONFIG.SPREADSHEET_URL.length > 10) {
    return SpreadsheetApp.openByUrl(CONFIG.SPREADSHEET_URL);
  }
  var ss = SpreadsheetApp.create('Quality Score History - ' + accountName);
  Logger.log('Created a new spreadsheet: ' + ss.getUrl());
  Logger.log('Paste that URL into CONFIG.SPREADSHEET_URL so future runs append to it.');
  return ss;
}


/**
 * Reads the most recent snapshot so we can compare movement.
 * Returns a map of "campaign|adgroup|keyword" -> quality score.
 */
function readPreviousSnapshot(ss) {
  var sheet = ss.getSheetByName('History');
  if (!sheet || sheet.getLastRow() < 2) { return {}; }

  var data = sheet.getDataRange().getValues();
  var header = data[0];
  var dateCol = header.indexOf('Snapshot Date');
  var kwCol = header.indexOf('Keyword');
  var cgCol = header.indexOf('Campaign');
  var agCol = header.indexOf('Ad Group');
  var qsCol = header.indexOf('Quality Score');

  if (dateCol === -1 || qsCol === -1) { return {}; }

  // Find the most recent date present.
  var latestDate = '';
  for (var i = 1; i < data.length; i++) {
    var d = String(data[i][dateCol]);
    if (d > latestDate) { latestDate = d; }
  }
  if (!latestDate) { return {}; }

  var map = {};
  for (var j = 1; j < data.length; j++) {
    if (String(data[j][dateCol]) !== latestDate) { continue; }
    var key = data[j][cgCol] + '|' + data[j][agCol] + '|' + data[j][kwCol];
    map[key] = Number(data[j][qsCol]);
  }

  Logger.log('Previous snapshot found: ' + latestDate + ' (' +
             Object.keys(map).length + ' keywords)');
  return map;
}


function writeSnapshot(ss, dateString, keywords) {
  var sheet = ss.getSheetByName('History');
  if (!sheet) {
    sheet = ss.insertSheet('History');
    sheet.appendRow([
      'Snapshot Date', 'Campaign', 'Ad Group', 'Keyword', 'Match Type',
      'Quality Score', 'Expected CTR', 'Ad Relevance', 'Landing Page Exp',
      'Cost', 'Impressions', 'Clicks', 'Conversions'
    ]);
    sheet.getRange(1, 1, 1, 13).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }

  var rows = [];
  for (var i = 0; i < keywords.length; i++) {
    var k = keywords[i];
    rows.push([
      dateString, k.campaign, k.adGroup, k.keyword, k.matchType,
      k.qualityScore, k.expectedCtr, k.adRelevance, k.landingPage,
      round2(k.cost), k.impressions, k.clicks, round2(k.conversions)
    ]);
  }

  sheet.getRange(sheet.getLastRow() + 1, 1, rows.length, 13).setValues(rows);
  Logger.log('Appended ' + rows.length + ' rows to History.');
}


/**
 * A clean "current state" tab, overwritten each run, sorted by cost.
 */
function writeCurrentView(ss, keywords) {
  var sheet = ss.getSheetByName('Current');
  if (!sheet) { sheet = ss.insertSheet('Current'); }
  sheet.clear();

  sheet.appendRow([
    'Campaign', 'Ad Group', 'Keyword', 'Match Type', 'Quality Score',
    'Expected CTR', 'Ad Relevance', 'Landing Page Exp',
    'Cost', 'Clicks', 'Conversions', 'Priority'
  ]);
  sheet.getRange(1, 1, 1, 12).setFontWeight('bold');
  sheet.setFrozenRows(1);

  var rows = [];
  for (var i = 0; i < keywords.length; i++) {
    var k = keywords[i];
    rows.push([
      k.campaign, k.adGroup, k.keyword, k.matchType, k.qualityScore,
      k.expectedCtr, k.adRelevance, k.landingPage,
      round2(k.cost), k.clicks, round2(k.conversions),
      priorityLabel(k)
    ]);
  }

  if (rows.length > 0) {
    sheet.getRange(2, 1, rows.length, 12).setValues(rows);
  }
}


/**
 * Ranks what to fix first: high cost plus low score (Lesson 4.5).
 */
function priorityLabel(k) {
  if (k.qualityScore <= 4) { return 'HIGH - fix first'; }
  if (k.qualityScore <= 6) { return 'MEDIUM'; }
  return 'OK';
}


function buildSummary(keywords, previous) {
  var totalScore = 0;
  var totalCost = 0;
  var weightedSum = 0;
  var belowAverage = { ctr: 0, relevance: 0, page: 0 };
  var movements = [];

  for (var i = 0; i < keywords.length; i++) {
    var k = keywords[i];
    totalScore += k.qualityScore;
    totalCost += k.cost;
    weightedSum += k.qualityScore * k.cost;

    if (k.expectedCtr === 'Below average') { belowAverage.ctr++; }
    if (k.adRelevance === 'Below average') { belowAverage.relevance++; }
    if (k.landingPage === 'Below average') { belowAverage.page++; }

    var key = k.campaign + '|' + k.adGroup + '|' + k.keyword;
    if (previous[key] !== undefined) {
      var change = k.qualityScore - previous[key];
      if (Math.abs(change) >= CONFIG.ALERT_MOVEMENT) {
        movements.push({
          keyword: k.keyword,
          campaign: k.campaign,
          from: previous[key],
          to: k.qualityScore,
          change: change,
          cost: k.cost
        });
      }
    }
  }

  // Biggest movers by cost impact first.
  movements.sort(function(a, b) { return b.cost - a.cost; });

  return {
    count: keywords.length,
    avgScore: round2(totalScore / keywords.length),
    weightedScore: totalCost > 0 ? round2(weightedSum / totalCost) : 0,
    totalCost: round2(totalCost),
    belowAverage: belowAverage,
    movements: movements,
    worstByCost: keywords.filter(function(k) { return k.qualityScore <= 5; }).slice(0, 15)
  };
}


function sendSummaryEmail(accountName, dateString, s, url) {
  var body = '';
  body += 'QUALITY SCORE SNAPSHOT — ' + accountName + '\n';
  body += 'Date: ' + dateString + '\n';
  body += 'Full history: ' + url + '\n';
  body += '==========================================\n\n';

  body += 'Keywords tracked:        ' + s.count + '\n';
  body += 'Average Quality Score:   ' + s.avgScore + '\n';
  body += 'Cost-weighted average:   ' + s.weightedScore + '  <-- the one that matters\n';
  body += 'Total cost in period:    ' + s.totalCost + '\n\n';

  body += 'COMPONENTS RATED "BELOW AVERAGE"\n';
  body += '  Expected CTR:          ' + s.belowAverage.ctr + '\n';
  body += '  Ad Relevance:          ' + s.belowAverage.relevance + '  (fastest to fix)\n';
  body += '  Landing Page Exp:      ' + s.belowAverage.page + '  (slowest, most valuable)\n\n';

  if (s.movements.length > 0) {
    body += 'SIGNIFICANT MOVEMENTS SINCE LAST SNAPSHOT\n';
    body += '------------------------------------------\n';
    for (var i = 0; i < Math.min(s.movements.length, 20); i++) {
      var m = s.movements[i];
      var arrow = m.change > 0 ? 'UP  ' : 'DOWN';
      body += '  ' + arrow + ' ' + m.from + ' -> ' + m.to +
              '   ' + m.keyword + '  (' + m.campaign + ', cost ' + round2(m.cost) + ')\n';
    }
    body += '\n';
  }

  if (s.worstByCost.length > 0) {
    body += 'HIGHEST SPEND WITH LOW QUALITY SCORE (fix these first)\n';
    body += '------------------------------------------\n';
    for (var j = 0; j < s.worstByCost.length; j++) {
      var w = s.worstByCost[j];
      body += '  QS ' + w.qualityScore + '  cost ' + round2(w.cost) + '  ' + w.keyword + '\n';
      body += '        CTR: ' + w.expectedCtr + ' | Relevance: ' + w.adRelevance +
              ' | Page: ' + w.landingPage + '\n';
    }
    body += '\n';
  }

  body += '------------------------------------------\n';
  body += 'FIXING ORDER (Lesson 4.5)\n';
  body += '1. Ad Relevance  — 1-2 weeks. Usually a keyword in the wrong ad group.\n';
  body += '2. Expected CTR  — 2-4 weeks. Rewrite ads, build the full asset set.\n';
  body += '3. Landing Page  — 4-6 weeks. Slowest, but it also lifts conversion rate.\n\n';
  body += 'Sort by COST, not by score. A QS of 3 spending nothing does not matter.\n';

  MailApp.sendEmail(
    CONFIG.EMAIL,
    'Quality Score snapshot ' + s.weightedScore + '/10 — ' + accountName,
    body
  );
  Logger.log('Summary emailed to ' + CONFIG.EMAIL);
}


function round2(n) { return Math.round(n * 100) / 100; }


/* ------------------------------------------------------------
 * HOW TO USE THE HISTORY
 *
 * After a few months the History tab becomes genuinely valuable.
 *
 * 1. Build a pivot table: Snapshot Date as columns, Campaign as rows,
 *    average Quality Score as values. You can now see the trend.
 *
 * 2. When you complete a Quality Score project (Lesson 4.5), compare
 *    the weighted average before and after. This is how you PROVE the
 *    work paid off rather than asserting it.
 *
 * 3. Watch the cost-weighted average, not the simple average. A
 *    hundred cheap keywords at QS 9 can hide ten expensive ones at QS 3.
 *
 * 4. A sudden fall across many keywords usually means a landing page
 *    or site change, not an ad problem. Check with the developer.
 * ------------------------------------------------------------ */
