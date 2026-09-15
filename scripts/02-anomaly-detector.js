/**
 * ANOMALY DETECTOR
 * Companion to Lesson 8.4 and Lesson 11.2
 *
 * WHAT IT DOES
 * Compares yesterday's spend, clicks, conversions and conversion rate
 * against a trailing average. Emails you only when something is
 * outside your tolerance band.
 *
 * WHY IT MATTERS
 * Tracking breaks silently. Ads get disapproved silently. This gets the
 * news to you in one day instead of three weeks.
 *
 * RISK LEVEL: GREEN — read only. It changes nothing in your account.
 *
 * SCHEDULE: Daily, early morning (after Google's data has settled).
 */

// ============================================================
// CONFIG — change these values only
// ============================================================
var CONFIG = {
  EMAIL: 'you@youragency.com',

  // How many days to use for the comparison average.
  // 14 is a good default. Use 28 if your business is very weekly-patterned.
  BASELINE_DAYS: 14,

  // Tolerance bands. A metric must move MORE than this to be flagged.
  // Values are percentages. Set them from your own normal variation
  // (Lesson 8.4) — too tight and you will ignore the alerts.
  THRESHOLDS: {
    COST_DROP: 40,        // spend fell by more than X%
    COST_RISE: 50,        // spend rose by more than X%
    CLICKS_DROP: 40,
    CONVERSIONS_DROP: 45, // the most important one
    CONVERSIONS_RISE: 100,
    CONV_RATE_DROP: 40
  },

  // Do not alert on days with very low volume — the percentages
  // become meaningless. Skip if yesterday had fewer clicks than this.
  MIN_CLICKS_TO_ALERT: 30,

  // Also check for these account-level problems every day.
  CHECK_DISAPPROVED_ADS: true,
  CHECK_ZERO_SPEND_CAMPAIGNS: true,

  // Send an email even when nothing is wrong? Useful for the first
  // two weeks so you know the script is running.
  SEND_ALL_CLEAR: false
};
// ============================================================
// END OF CONFIG
// ============================================================


function main() {
  var accountName = AdsApp.currentAccount().getName();
  Logger.log('Anomaly Detector starting for: ' + accountName);

  var daily = fetchDailyMetrics();

  if (daily.length < CONFIG.BASELINE_DAYS + 1) {
    Logger.log('Not enough history. Need ' + (CONFIG.BASELINE_DAYS + 1) +
               ' days, found ' + daily.length + '. Exiting.');
    return;
  }

  // The most recent complete day is the last row.
  var yesterday = daily[daily.length - 1];
  var baseline = averageOf(daily.slice(daily.length - 1 - CONFIG.BASELINE_DAYS,
                                        daily.length - 1));

  Logger.log('Yesterday (' + yesterday.date + '): cost ' + round2(yesterday.cost) +
             ', clicks ' + yesterday.clicks + ', conv ' + round2(yesterday.conversions));
  Logger.log('Baseline average: cost ' + round2(baseline.cost) +
             ', clicks ' + round2(baseline.clicks) + ', conv ' + round2(baseline.conversions));

  var alerts = [];

  if (yesterday.clicks < CONFIG.MIN_CLICKS_TO_ALERT) {
    Logger.log('Yesterday had only ' + yesterday.clicks +
               ' clicks — below the minimum for reliable comparison. Skipping metric checks.');
  } else {
    alerts = alerts.concat(checkMetrics(yesterday, baseline));
  }

  if (CONFIG.CHECK_DISAPPROVED_ADS) {
    alerts = alerts.concat(checkDisapprovedAds());
  }

  if (CONFIG.CHECK_ZERO_SPEND_CAMPAIGNS) {
    alerts = alerts.concat(checkZeroSpendCampaigns());
  }

  if (alerts.length > 0) {
    Logger.log(alerts.length + ' alert(s) found.');
    sendAlertEmail(accountName, alerts, yesterday, baseline);
  } else {
    Logger.log('No anomalies detected.');
    if (CONFIG.SEND_ALL_CLEAR) {
      sendAllClearEmail(accountName, yesterday, baseline);
    }
  }

  Logger.log('Anomaly Detector finished.');
}


/**
 * Pulls account-level metrics for each of the last N days.
 */
function fetchDailyMetrics() {
  var days = CONFIG.BASELINE_DAYS + 5;   // a little extra headroom
  var query =
    'SELECT ' +
    '  segments.date, ' +
    '  metrics.cost_micros, ' +
    '  metrics.clicks, ' +
    '  metrics.impressions, ' +
    '  metrics.conversions, ' +
    '  metrics.conversions_value ' +
    'FROM customer ' +
    'WHERE segments.date DURING LAST_30_DAYS';

  var rows = [];
  var iterator = AdsApp.search(query);

  while (iterator.hasNext()) {
    var r = iterator.next();
    rows.push({
      date: r.segments.date,
      cost: Number(r.metrics.costMicros) / 1000000,
      clicks: Number(r.metrics.clicks),
      impressions: Number(r.metrics.impressions),
      conversions: Number(r.metrics.conversions),
      value: Number(r.metrics.conversionsValue)
    });
  }

  // Sort oldest first so the last entry is the most recent day.
  rows.sort(function(a, b) { return a.date < b.date ? -1 : 1; });

  // Drop today (incomplete data) if it appears.
  var today = formatDate(new Date());
  if (rows.length > 0 && rows[rows.length - 1].date === today) {
    rows.pop();
  }

  return rows.slice(Math.max(0, rows.length - days));
}


function averageOf(rows) {
  var sum = { cost: 0, clicks: 0, impressions: 0, conversions: 0, value: 0 };
  for (var i = 0; i < rows.length; i++) {
    sum.cost += rows[i].cost;
    sum.clicks += rows[i].clicks;
    sum.impressions += rows[i].impressions;
    sum.conversions += rows[i].conversions;
    sum.value += rows[i].value;
  }
  var n = rows.length || 1;
  return {
    cost: sum.cost / n,
    clicks: sum.clicks / n,
    impressions: sum.impressions / n,
    conversions: sum.conversions / n,
    value: sum.value / n
  };
}


function checkMetrics(y, base) {
  var alerts = [];
  var t = CONFIG.THRESHOLDS;

  var costChange = pctChange(y.cost, base.cost);
  var clicksChange = pctChange(y.clicks, base.clicks);
  var convChange = pctChange(y.conversions, base.conversions);

  var yRate = y.clicks > 0 ? (y.conversions / y.clicks * 100) : 0;
  var baseRate = base.clicks > 0 ? (base.conversions / base.clicks * 100) : 0;
  var rateChange = pctChange(yRate, baseRate);

  if (costChange <= -t.COST_DROP) {
    alerts.push({
      severity: 'HIGH',
      title: 'Spend dropped ' + Math.abs(round1(costChange)) + '%',
      detail: 'Yesterday ' + round2(y.cost) + ' vs baseline ' + round2(base.cost) +
              '. Check: budget exhausted, campaigns paused, ads disapproved, ' +
              'or bid strategy throttling due to a conversion drop.'
    });
  }

  if (costChange >= t.COST_RISE) {
    alerts.push({
      severity: 'MEDIUM',
      title: 'Spend rose ' + round1(costChange) + '%',
      detail: 'Yesterday ' + round2(y.cost) + ' vs baseline ' + round2(base.cost) +
              '. Check: budget change, target loosened, new campaign live, ' +
              'or a competitor exiting the auction.'
    });
  }

  if (clicksChange <= -t.CLICKS_DROP) {
    alerts.push({
      severity: 'MEDIUM',
      title: 'Clicks dropped ' + Math.abs(round1(clicksChange)) + '%',
      detail: 'Yesterday ' + y.clicks + ' vs baseline ' + round1(base.clicks) + '.'
    });
  }

  if (convChange <= -t.CONVERSIONS_DROP) {
    alerts.push({
      severity: 'HIGH',
      title: 'Conversions dropped ' + Math.abs(round1(convChange)) + '%',
      detail: 'Yesterday ' + round2(y.conversions) + ' vs baseline ' +
              round2(base.conversions) + '. ' +
              'CHECK TRACKING FIRST (Lesson 2.5). Compare against the ' +
              'business\'s own records before assuming a performance problem.'
    });
  }

  if (convChange >= t.CONVERSIONS_RISE) {
    alerts.push({
      severity: 'LOW',
      title: 'Conversions rose ' + round1(convChange) + '%',
      detail: 'Yesterday ' + round2(y.conversions) + ' vs baseline ' +
              round2(base.conversions) + '. Verify this is real and not ' +
              'double counting from a new tag (Lesson 7.1).'
    });
  }

  if (rateChange <= -t.CONV_RATE_DROP && y.clicks >= CONFIG.MIN_CLICKS_TO_ALERT) {
    alerts.push({
      severity: 'HIGH',
      title: 'Conversion rate dropped ' + Math.abs(round1(rateChange)) + '%',
      detail: 'Yesterday ' + round2(yRate) + '% vs baseline ' + round2(baseRate) + '%. ' +
              'Clicks are steady but conversions are not — this points to the ' +
              'landing page or tracking, not the ads (Lesson 8.4).'
    });
  }

  return alerts;
}


function checkDisapprovedAds() {
  var alerts = [];
  var count = 0;
  var examples = [];

  var ads = AdsApp.ads()
    .withCondition('ad_group_ad.status = ENABLED')
    .withCondition('ad_group_ad.policy_summary.approval_status = DISAPPROVED')
    .get();

  while (ads.hasNext() && count < 200) {
    var ad = ads.next();
    count++;
    if (examples.length < 5) {
      examples.push(ad.getCampaign().getName() + ' / ' + ad.getAdGroup().getName());
    }
  }

  if (count > 0) {
    alerts.push({
      severity: 'HIGH',
      title: count + ' disapproved ad(s) found',
      detail: 'Examples: ' + examples.join('; ') +
              '. Check the policy reason and see Lesson 1.5.'
    });
  }
  return alerts;
}


function checkZeroSpendCampaigns() {
  var alerts = [];
  var names = [];

  var campaigns = AdsApp.campaigns()
    .withCondition('campaign.status = ENABLED')
    .forDateRange('YESTERDAY')
    .get();

  while (campaigns.hasNext()) {
    var c = campaigns.next();
    var stats = c.getStatsFor('YESTERDAY');
    if (stats.getImpressions() === 0) {
      names.push(c.getName());
    }
  }

  if (names.length > 0) {
    alerts.push({
      severity: 'MEDIUM',
      title: names.length + ' enabled campaign(s) had zero impressions yesterday',
      detail: names.slice(0, 10).join('; ') +
              '. Check: budget, bid target too tight, ad approval, ' +
              'or targeting too narrow.'
    });
  }
  return alerts;
}


function sendAlertEmail(accountName, alerts, y, base) {
  var high = countSeverity(alerts, 'HIGH');

  var subject = (high > 0 ? '[URGENT] ' : '[Check] ') +
                'Google Ads anomaly — ' + accountName;

  var body = '';
  body += 'ANOMALY REPORT — ' + accountName + '\n';
  body += 'Comparison day: ' + y.date + '\n';
  body += 'Baseline: previous ' + CONFIG.BASELINE_DAYS + ' days\n\n';

  body += 'YESTERDAY vs BASELINE\n';
  body += '  Spend:       ' + round2(y.cost) + '   (baseline ' + round2(base.cost) + ')\n';
  body += '  Clicks:      ' + y.clicks + '   (baseline ' + round1(base.clicks) + ')\n';
  body += '  Conversions: ' + round2(y.conversions) + '   (baseline ' + round2(base.conversions) + ')\n\n';

  body += 'ALERTS (' + alerts.length + ')\n';
  body += '-------------------------------------------\n';

  for (var i = 0; i < alerts.length; i++) {
    body += '[' + alerts[i].severity + '] ' + alerts[i].title + '\n';
    body += '   ' + alerts[i].detail + '\n\n';
  }

  body += '-------------------------------------------\n';
  body += 'DIAGNOSTIC ORDER (Lesson 8.4):\n';
  body += '1. Is tracking working? Compare to the business\'s real numbers.\n';
  body += '2. Check change history for the last 3 days.\n';
  body += '3. Check impression share and Auction Insights.\n';
  body += '4. Compare CTR vs conversion rate to split ad problems from page problems.\n';

  MailApp.sendEmail(CONFIG.EMAIL, subject, body);
  Logger.log('Alert email sent to ' + CONFIG.EMAIL);
}


function sendAllClearEmail(accountName, y, base) {
  var body = 'No anomalies detected for ' + accountName + ' on ' + y.date + '.\n\n' +
             'Spend ' + round2(y.cost) + ' (baseline ' + round2(base.cost) + ')\n' +
             'Conversions ' + round2(y.conversions) + ' (baseline ' + round2(base.conversions) + ')\n';
  MailApp.sendEmail(CONFIG.EMAIL, '[OK] Google Ads daily check — ' + accountName, body);
}


function countSeverity(alerts, level) {
  var n = 0;
  for (var i = 0; i < alerts.length; i++) {
    if (alerts[i].severity === level) { n++; }
  }
  return n;
}

function pctChange(current, baseline) {
  if (baseline === 0) { return current > 0 ? 100 : 0; }
  return ((current - baseline) / baseline) * 100;
}

function formatDate(d) {
  return Utilities.formatDate(d, AdsApp.currentAccount().getTimeZone(), 'yyyy-MM-dd');
}

function round1(n) { return Math.round(n * 10) / 10; }
function round2(n) { return Math.round(n * 100) / 100; }


/* ------------------------------------------------------------
 * TUNING THE THRESHOLDS
 *
 * Run this in report-only mode for two weeks before trusting it.
 * If you get an alert most days, the thresholds are too tight and
 * you will start ignoring them — which is worse than no alerting.
 *
 * Set each threshold from your OWN normal variation. Plot 90 days
 * of daily conversions and find the range that covers about 95%
 * of normal days. Alert outside that.
 * ------------------------------------------------------------ */
