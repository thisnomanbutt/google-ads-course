/**
 * BUDGET PACER
 * Companion to Lesson 10.2 and Lesson 11.2
 *
 * WHAT IT DOES
 * Calculates month-to-date pacing against your monthly budget target,
 * emails a daily report, and optionally adjusts campaign budgets
 * within a strict safety limit.
 *
 * WHY IT MATTERS
 * It prevents both the month-end sprint and the month-end freeze —
 * the two mistakes that damage performance into the following month.
 *
 * RISK LEVEL: AMBER — this script CAN change budgets.
 * START WITH MAKE_CHANGES SET TO FALSE. Run it in report mode for
 * at least two weeks before allowing it to change anything.
 *
 * SCHEDULE: Daily, early morning.
 */

// ============================================================
// CONFIG — change these values only
// ============================================================
var CONFIG = {
  EMAIL: 'you@youragency.com',

  // Your monthly budget target, in your account currency.
  // This is YOUR number, not Google's. Set it deliberately.
  MONTHLY_BUDGET: 500000,

  // MASTER SAFETY SWITCH.
  // false = report only, changes nothing. START HERE.
  // true  = the script will adjust campaign budgets.
  MAKE_CHANGES: false,

  // The maximum a single campaign budget may change in one run,
  // as a percentage. NEVER remove this limit.
  MAX_CHANGE_PERCENT: 15,

  // Tolerance bands. Pacing outside these triggers action.
  UPPER_TOLERANCE: 107,   // above this, we are ahead
  LOWER_TOLERANCE: 93,    // below this, we are behind

  // Do not make any changes in the last N days of the month.
  // Protects the following month's learning phase (Lesson 5.2).
  FREEZE_LAST_DAYS: 4,

  // Do not make changes in the first N days either — early-month
  // variance is normal and correcting it causes harm.
  FREEZE_FIRST_DAYS: 3,

  // Campaigns to exclude from adjustment, by exact name.
  // Brand campaigns usually belong here.
  EXCLUDE_CAMPAIGNS: [],

  // Only adjust campaigns whose name contains this text.
  // Leave blank to consider all campaigns.
  ONLY_CAMPAIGNS_CONTAINING: '',

  // Send the report every day, or only when action is needed?
  SEND_DAILY_ALWAYS: true
};
// ============================================================
// END OF CONFIG
// ============================================================


function main() {
  var accountName = AdsApp.currentAccount().getName();
  var tz = AdsApp.currentAccount().getTimeZone();
  var now = new Date();

  var dayOfMonth = Number(Utilities.formatDate(now, tz, 'd'));
  var daysInMonth = getDaysInMonth(now, tz);
  var daysElapsed = dayOfMonth - 1;   // yesterday was the last complete day

  Logger.log('Budget Pacer starting for: ' + accountName);
  Logger.log('Day ' + dayOfMonth + ' of ' + daysInMonth);
  Logger.log('MAKE_CHANGES is ' + (CONFIG.MAKE_CHANGES ? 'ON' : 'OFF'));

  // Guard against a divide-by-zero on the 1st of the month.
  if (daysElapsed < 1) {
    Logger.log('It is the 1st of the month. Nothing to pace yet. Exiting.');
    return;
  }

  var mtdSpend = getMonthToDateSpend();
  var expected = (daysElapsed / daysInMonth) * CONFIG.MONTHLY_BUDGET;
  var pacing = expected > 0 ? (mtdSpend / expected * 100) : 0;
  var dailyRate = mtdSpend / daysElapsed;
  var projected = dailyRate * daysInMonth;
  var variance = projected - CONFIG.MONTHLY_BUDGET;

  Logger.log('MTD spend: ' + round2(mtdSpend));
  Logger.log('Expected:  ' + round2(expected));
  Logger.log('Pacing:    ' + round1(pacing) + '%');
  Logger.log('Projected: ' + round2(projected) + ' (variance ' + round2(variance) + ')');

  var status = getStatus(pacing);
  var frozen = isFrozen(dayOfMonth, daysInMonth);
  var actions = [];

  if (frozen) {
    Logger.log('Change window is FROZEN (day ' + dayOfMonth + '). Reporting only.');
  } else if (status === 'AHEAD' || status === 'BEHIND') {
    actions = planActions(status, pacing);
    if (CONFIG.MAKE_CHANGES) {
      applyActions(actions);
    } else {
      Logger.log('MAKE_CHANGES is off. The following would have been done:');
      for (var i = 0; i < actions.length; i++) {
        Logger.log('  ' + actions[i].description);
      }
    }
  }

  if (CONFIG.SEND_DAILY_ALWAYS || status !== 'ON TRACK') {
    sendReport(accountName, {
      day: dayOfMonth,
      daysInMonth: daysInMonth,
      mtdSpend: mtdSpend,
      expected: expected,
      pacing: pacing,
      projected: projected,
      variance: variance,
      status: status,
      frozen: frozen,
      actions: actions
    });
  }

  Logger.log('Budget Pacer finished.');
}


function getMonthToDateSpend() {
  var total = 0;
  var campaigns = AdsApp.campaigns().get();
  while (campaigns.hasNext()) {
    var c = campaigns.next();
    total += c.getStatsFor('THIS_MONTH').getCost();
  }
  return total;
}


function getStatus(pacing) {
  if (pacing > CONFIG.UPPER_TOLERANCE) { return 'AHEAD'; }
  if (pacing < CONFIG.LOWER_TOLERANCE) { return 'BEHIND'; }
  return 'ON TRACK';
}


function isFrozen(day, daysInMonth) {
  if (day <= CONFIG.FREEZE_FIRST_DAYS) { return true; }
  if (day > daysInMonth - CONFIG.FREEZE_LAST_DAYS) { return true; }
  return false;
}


/**
 * Decides which campaigns to adjust and by how much.
 * AHEAD  -> reduce the WORST performing campaigns
 * BEHIND -> increase the BEST performing campaigns
 * Never adjusts every campaign evenly (Lesson 10.2).
 */
function planActions(status, pacing) {
  var candidates = getAdjustableCampaigns();

  if (candidates.length === 0) {
    Logger.log('No adjustable campaigns found.');
    return [];
  }

  // Sort by cost per conversion. Best (lowest) first.
  candidates.sort(function(a, b) {
    if (a.costPerConv === null) { return 1; }
    if (b.costPerConv === null) { return -1; }
    return a.costPerConv - b.costPerConv;
  });

  // How far off are we? Bigger gap, bigger correction — capped.
  var gap = Math.abs(pacing - 100);
  var changePercent = Math.min(gap / 2, CONFIG.MAX_CHANGE_PERCENT);
  changePercent = Math.max(changePercent, 3);   // never a pointless 0.4% change

  var actions = [];
  var targetCount = Math.min(3, candidates.length);

  if (status === 'AHEAD') {
    // Reduce the worst performers — the end of the sorted list.
    for (var i = 0; i < targetCount; i++) {
      var worst = candidates[candidates.length - 1 - i];
      var newBudget = worst.budget * (1 - changePercent / 100);
      actions.push({
        campaignName: worst.name,
        oldBudget: worst.budget,
        newBudget: round2(newBudget),
        description: 'REDUCE "' + worst.name + '" from ' + round2(worst.budget) +
                     ' to ' + round2(newBudget) + ' (-' + round1(changePercent) + '%) — ' +
                     'cost/conv ' + (worst.costPerConv === null ? 'no conversions' : round2(worst.costPerConv))
      });
    }
  } else {
    // BEHIND: increase the best performers — the start of the list.
    for (var j = 0; j < targetCount; j++) {
      var best = candidates[j];
      if (best.costPerConv === null) { continue; }   // never scale up a non-converter
      var raised = best.budget * (1 + changePercent / 100);
      actions.push({
        campaignName: best.name,
        oldBudget: best.budget,
        newBudget: round2(raised),
        description: 'INCREASE "' + best.name + '" from ' + round2(best.budget) +
                     ' to ' + round2(raised) + ' (+' + round1(changePercent) + '%) — ' +
                     'cost/conv ' + round2(best.costPerConv)
      });
    }
  }

  return actions;
}


function getAdjustableCampaigns() {
  var out = [];
  var campaigns = AdsApp.campaigns()
    .withCondition('campaign.status = ENABLED')
    .get();

  while (campaigns.hasNext()) {
    var c = campaigns.next();
    var name = c.getName();

    if (CONFIG.EXCLUDE_CAMPAIGNS.indexOf(name) !== -1) { continue; }
    if (CONFIG.ONLY_CAMPAIGNS_CONTAINING &&
        name.indexOf(CONFIG.ONLY_CAMPAIGNS_CONTAINING) === -1) { continue; }

    var stats = c.getStatsFor('LAST_30_DAYS');
    var conv = stats.getConversions();
    var cost = stats.getCost();

    out.push({
      campaign: c,
      name: name,
      budget: c.getBudget().getAmount(),
      cost: cost,
      conversions: conv,
      costPerConv: conv > 0 ? (cost / conv) : null
    });
  }
  return out;
}


function applyActions(actions) {
  for (var i = 0; i < actions.length; i++) {
    var a = actions[i];
    try {
      var campaigns = AdsApp.campaigns()
        .withCondition('campaign.name = "' + a.campaignName.replace(/"/g, '\\"') + '"')
        .get();
      if (campaigns.hasNext()) {
        var c = campaigns.next();
        c.getBudget().setAmount(a.newBudget);
        Logger.log('APPLIED: ' + a.description);
      }
    } catch (e) {
      Logger.log('FAILED to apply change to ' + a.campaignName + ': ' + e);
    }
  }
}


function sendReport(accountName, d) {
  var flag = d.status === 'ON TRACK' ? '[OK]' :
             (d.status === 'AHEAD' ? '[AHEAD]' : '[BEHIND]');

  var body = '';
  body += 'BUDGET PACING — ' + accountName + '\n';
  body += '======================================\n';
  body += 'Day ' + d.day + ' of ' + d.daysInMonth + '\n\n';

  body += 'Monthly budget:  ' + round2(CONFIG.MONTHLY_BUDGET) + '\n';
  body += 'Spend to date:   ' + round2(d.mtdSpend) + '\n';
  body += 'Expected by now: ' + round2(d.expected) + '\n';
  body += 'PACING:          ' + round1(d.pacing) + '%   ' + d.status + '\n\n';

  body += 'Projected month end: ' + round2(d.projected) + '\n';
  body += 'Projected variance:  ' + (d.variance >= 0 ? '+' : '') + round2(d.variance) + '\n\n';

  if (d.frozen) {
    body += 'CHANGE WINDOW: FROZEN\n';
    body += 'No changes are made in the first ' + CONFIG.FREEZE_FIRST_DAYS +
            ' or last ' + CONFIG.FREEZE_LAST_DAYS + ' days of the month.\n';
    body += 'This protects the next month\'s learning phase.\n\n';
  }

  if (d.actions.length > 0) {
    body += (CONFIG.MAKE_CHANGES ? 'CHANGES APPLIED' : 'CHANGES THAT WOULD BE APPLIED') +
            ' (' + d.actions.length + ')\n';
    body += '--------------------------------------\n';
    for (var i = 0; i < d.actions.length; i++) {
      body += '  ' + d.actions[i].description + '\n';
    }
    body += '\n';
    if (!CONFIG.MAKE_CHANGES) {
      body += 'MAKE_CHANGES is OFF. Nothing was actually changed.\n\n';
    }
  } else if (d.status !== 'ON TRACK' && !d.frozen) {
    body += 'No suitable campaigns found to adjust. Review manually.\n\n';
  }

  body += '--------------------------------------\n';
  body += 'REMINDERS (Lesson 10.2)\n';
  body += '- Under-spending is a failure too. It means missed conversions.\n';
  body += '- Ahead of pace with GOOD performance is a case for MORE budget,\n';
  body += '  not less. Check cost per conversion before slowing down.\n';
  body += '- Corrections should be small and early, never large and late.\n';

  MailApp.sendEmail(
    CONFIG.EMAIL,
    flag + ' Budget pacing ' + round1(d.pacing) + '% — ' + accountName,
    body
  );
  Logger.log('Report emailed to ' + CONFIG.EMAIL);
}


function getDaysInMonth(date, tz) {
  var year = Number(Utilities.formatDate(date, tz, 'yyyy'));
  var month = Number(Utilities.formatDate(date, tz, 'MM'));
  return new Date(year, month, 0).getDate();
}

function round1(n) { return Math.round(n * 10) / 10; }
function round2(n) { return Math.round(n * 100) / 100; }


/* ------------------------------------------------------------
 * SAFETY NOTES — READ BEFORE SETTING MAKE_CHANGES TO TRUE
 *
 * 1. Run with MAKE_CHANGES: false for at least two weeks. Read the
 *    proposed changes in the daily email. Would you have made them?
 *
 * 2. Test the edge dates deliberately. Run a manual preview on the
 *    1st, the 2nd and the last day of a month. A date-handling bug
 *    on the 1st is the classic way this script causes damage.
 *
 * 3. NEVER raise MAX_CHANGE_PERCENT above about 20. Large automated
 *    budget swings restart learning phases (Lesson 5.2), which costs
 *    more than the pacing error you were correcting.
 *
 * 4. Add your brand campaign to EXCLUDE_CAMPAIGNS. Brand budget
 *    should be managed deliberately, not automatically.
 *
 * 5. This script uses account-level pacing against ONE monthly budget.
 *    For per-client pacing across an MCC, run it at MCC level with a
 *    lookup table of budgets keyed by account name.
 * ------------------------------------------------------------ */
