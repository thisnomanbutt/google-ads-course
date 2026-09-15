/**
 * BROKEN LINK CHECKER
 * Companion to Lesson 2.5 and Lesson 11.2
 *
 * WHAT IT DOES
 * Checks the final URL of every enabled ad, keyword and sitelink.
 * Emails you about anything that returns an error, redirects
 * unexpectedly, or is slow to respond.
 *
 * WHY IT MATTERS
 * A broken landing page means you are paying for clicks that go nowhere.
 * It happens after every website update and nothing warns you.
 *
 * RISK LEVEL: GREEN — read only by default.
 * Set PAUSE_BROKEN to true only after running it in report mode
 * for at least two weeks.
 *
 * SCHEDULE: Weekly.
 */

// ============================================================
// CONFIG — change these values only
// ============================================================
var CONFIG = {
  EMAIL: 'you@youragency.com',

  // Response codes that count as a problem.
  // 404 = not found, 500 = server error, 403 = forbidden.
  BAD_CODES: [400, 401, 403, 404, 410, 500, 502, 503, 504],

  // Flag redirects too? A redirect is not always a fault, but an
  // unexpected one can strip your GCLID (Lesson 2.6).
  FLAG_REDIRECTS: true,

  // Maximum URLs to check per run. Protects against script timeouts
  // on very large accounts. Increase carefully.
  MAX_URLS: 500,

  // Check these entity types.
  CHECK_ADS: true,
  CHECK_KEYWORDS: true,
  CHECK_SITELINKS: true,

  // DANGEROUS: pause ads whose URL is broken.
  // Leave false until you fully trust the script.
  PAUSE_BROKEN: false,

  // Send an email even when everything is fine?
  SEND_ALL_CLEAR: false
};
// ============================================================
// END OF CONFIG
// ============================================================


function main() {
  var accountName = AdsApp.currentAccount().getName();
  Logger.log('Link Checker starting for: ' + accountName);

  var urlMap = collectUrls();
  var urls = Object.keys(urlMap);

  Logger.log('Unique URLs found: ' + urls.length);

  if (urls.length > CONFIG.MAX_URLS) {
    Logger.log('More than MAX_URLS (' + CONFIG.MAX_URLS + '). Checking the first ' +
               CONFIG.MAX_URLS + ' only. Raise MAX_URLS or run more often.');
    urls = urls.slice(0, CONFIG.MAX_URLS);
  }

  var problems = [];
  var checked = 0;

  for (var i = 0; i < urls.length; i++) {
    var url = urls[i];
    var result = checkUrl(url);
    checked++;

    if (result.isProblem) {
      result.usedBy = urlMap[url];
      problems.push(result);
      Logger.log('PROBLEM: ' + url + ' — ' + result.message);
    }
  }

  Logger.log('Checked ' + checked + ' URLs. Problems found: ' + problems.length);

  if (CONFIG.PAUSE_BROKEN && problems.length > 0) {
    pauseBrokenEntities(problems);
  }

  if (problems.length > 0) {
    sendProblemEmail(accountName, problems, checked);
  } else if (CONFIG.SEND_ALL_CLEAR) {
    MailApp.sendEmail(CONFIG.EMAIL,
      '[OK] Link check — ' + accountName,
      'Checked ' + checked + ' URLs. No problems found.');
  }

  Logger.log('Link Checker finished.');
}


/**
 * Builds a map of URL -> list of things using it.
 */
function collectUrls() {
  var map = {};

  if (CONFIG.CHECK_ADS) {
    var ads = AdsApp.ads()
      .withCondition('ad_group_ad.status = ENABLED')
      .withCondition('campaign.status = ENABLED')
      .withCondition('ad_group.status = ENABLED')
      .get();

    while (ads.hasNext()) {
      var ad = ads.next();
      var url = safeFinalUrl(ad);
      if (url) {
        addToMap(map, url, 'Ad: ' + ad.getCampaign().getName() + ' / ' + ad.getAdGroup().getName());
      }
    }
    Logger.log('Ad URLs collected.');
  }

  if (CONFIG.CHECK_KEYWORDS) {
    var keywords = AdsApp.keywords()
      .withCondition('ad_group_criterion.status = ENABLED')
      .withCondition('campaign.status = ENABLED')
      .withCondition('ad_group.status = ENABLED')
      .get();

    while (keywords.hasNext()) {
      var kw = keywords.next();
      var kwUrl = safeFinalUrl(kw);
      if (kwUrl) {
        addToMap(map, kwUrl, 'Keyword: ' + kw.getText() +
                 ' (' + kw.getCampaign().getName() + ')');
      }
    }
    Logger.log('Keyword URLs collected.');
  }

  if (CONFIG.CHECK_SITELINKS) {
    try {
      var sitelinks = AdsApp.extensions().sitelinks().get();
      while (sitelinks.hasNext()) {
        var sl = sitelinks.next();
        var slUrl = null;
        try { slUrl = sl.urls().getFinalUrl(); } catch (e) { slUrl = null; }
        if (slUrl) {
          addToMap(map, slUrl, 'Sitelink: ' + sl.getLinkText());
        }
      }
      Logger.log('Sitelink URLs collected.');
    } catch (e) {
      Logger.log('Could not read sitelinks: ' + e);
    }
  }

  return map;
}


function safeFinalUrl(entity) {
  try {
    var u = entity.urls().getFinalUrl();
    if (!u) { return null; }
    // Skip URLs containing tracking placeholders the fetcher cannot resolve.
    if (u.indexOf('{') !== -1) { return null; }
    return u;
  } catch (e) {
    return null;
  }
}


function addToMap(map, url, description) {
  if (!map[url]) { map[url] = []; }
  if (map[url].length < 10) { map[url].push(description); }
}


/**
 * Fetches the URL and decides whether it is a problem.
 */
function checkUrl(url) {
  var result = { url: url, isProblem: false, code: null, message: '', finalUrl: url };

  try {
    var response = UrlFetchApp.fetch(url, {
      muteHttpExceptions: true,
      followRedirects: false,      // we want to see the redirect itself
      validateHttpsCertificates: false
    });

    var code = response.getResponseCode();
    result.code = code;

    if (CONFIG.BAD_CODES.indexOf(code) !== -1) {
      result.isProblem = true;
      result.message = 'HTTP ' + code + ' — page is not loading correctly';
      return result;
    }

    if (code >= 300 && code < 400) {
      var location = response.getHeaders()['Location'] ||
                     response.getHeaders()['location'] || '(unknown)';
      result.finalUrl = location;
      if (CONFIG.FLAG_REDIRECTS) {
        result.isProblem = true;
        result.message = 'HTTP ' + code + ' redirect to: ' + location +
                         ' — check the GCLID survives this redirect (Lesson 2.6)';
      }
      return result;
    }

    if (code === 200) {
      result.message = 'OK';
      return result;
    }

    result.isProblem = true;
    result.message = 'Unexpected HTTP ' + code;
    return result;

  } catch (e) {
    result.isProblem = true;
    result.message = 'Could not reach the page: ' + e;
    return result;
  }
}


function pauseBrokenEntities(problems) {
  // Only pause on genuine errors, never on redirects.
  var pausedCount = 0;

  for (var i = 0; i < problems.length; i++) {
    var p = problems[i];
    if (CONFIG.BAD_CODES.indexOf(p.code) === -1) { continue; }

    var ads = AdsApp.ads()
      .withCondition('ad_group_ad.status = ENABLED')
      .get();

    while (ads.hasNext()) {
      var ad = ads.next();
      if (safeFinalUrl(ad) === p.url) {
        ad.pause();
        pausedCount++;
      }
    }
  }
  Logger.log('PAUSE_BROKEN was on. Ads paused: ' + pausedCount);
}


function sendProblemEmail(accountName, problems, checkedCount) {
  var errors = [];
  var redirects = [];

  for (var i = 0; i < problems.length; i++) {
    if (problems[i].code >= 300 && problems[i].code < 400) {
      redirects.push(problems[i]);
    } else {
      errors.push(problems[i]);
    }
  }

  var subject = (errors.length > 0 ? '[URGENT] ' : '[Check] ') +
                'Broken links — ' + accountName +
                ' (' + errors.length + ' errors, ' + redirects.length + ' redirects)';

  var body = '';
  body += 'LINK CHECK — ' + accountName + '\n';
  body += 'URLs checked: ' + checkedCount + '\n\n';

  if (errors.length > 0) {
    body += '=== ERRORS (' + errors.length + ') — fix these today ===\n';
    body += 'You are paying for clicks that go to a broken page.\n\n';
    for (var e = 0; e < errors.length; e++) {
      body += 'URL: ' + errors[e].url + '\n';
      body += '  Problem: ' + errors[e].message + '\n';
      body += '  Used by: ' + errors[e].usedBy.join('; ') + '\n\n';
    }
  }

  if (redirects.length > 0) {
    body += '=== REDIRECTS (' + redirects.length + ') — check these ===\n';
    body += 'A redirect is not always a fault, but it can strip the GCLID\n';
    body += 'and break your conversion tracking (Lesson 2.6).\n\n';
    for (var r = 0; r < redirects.length; r++) {
      body += 'URL: ' + redirects[r].url + '\n';
      body += '  ' + redirects[r].message + '\n';
      body += '  Used by: ' + redirects[r].usedBy.join('; ') + '\n\n';
    }
  }

  body += '---\n';
  body += 'NEXT STEPS\n';
  body += '1. Open each broken URL yourself and confirm the problem.\n';
  body += '2. If the page moved, update the final URL — do not rely on a redirect.\n';
  body += '3. For redirects, click a real ad and check the GCLID survives (Lesson 2.5).\n';
  body += '4. Ask the developer to tell you before future site changes.\n';

  MailApp.sendEmail(CONFIG.EMAIL, subject, body);
  Logger.log('Problem email sent to ' + CONFIG.EMAIL);
}


/* ------------------------------------------------------------
 * NOTES
 *
 * 1. URL fetching has daily quotas. On very large accounts, raise
 *    MAX_URLS gradually and watch for quota errors in the logs.
 *
 * 2. Some sites block automated requests. If you see errors for a
 *    URL that works fine in a browser, the site may be blocking the
 *    script's user agent. Verify manually before acting.
 *
 * 3. FLAG_REDIRECTS is on by default because redirects are a common
 *    cause of GCLID loss. If your site legitimately redirects
 *    everything (for example http to https), set it to false and
 *    check the redirect behaviour manually instead.
 *
 * 4. PAUSE_BROKEN is powerful and dangerous. A false positive pauses
 *    a working ad. Run in report mode for at least two weeks first.
 * ------------------------------------------------------------ */
