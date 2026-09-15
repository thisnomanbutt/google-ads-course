# Lesson 11.2 — Five Free Scripts That Watch Your Account

*Phase 6 · Automation and Working With Data — Module 11 · Save Time With Scripts and Automation*
**📎 Templates included:** `scripts/` folder — all five scripts, ready to configure

---

## Quick Recap From Module 8

You know what to monitor. This lesson makes the monitoring happen automatically, every day, without you.

---

## 🎯 What You Will Learn

- What Google Ads Scripts are, and what they can do
- How to install and schedule a script safely
- The five scripts every professional should run
- How to modify a script without knowing JavaScript
- The safety rules that prevent a script causing damage

---

## What Google Ads Scripts Are

A Google Ads Script is a small program that runs inside your Google Ads account on a schedule. It is written in JavaScript.

**What scripts can do:**
- Read any data in your account
- Write to Google Sheets
- Send emails
- Change bids, budgets, and campaign status
- Add negatives, pause keywords, label things
- Check external URLs

**What they cost:** nothing. They are a free feature.

**Think of hiring an assistant who works every night while you sleep.** They cannot make judgement calls, but they will check the same fifty things every single night without ever forgetting or getting bored.

---

## Do You Need to Know JavaScript?

**No, to use these scripts.** Each one has a configuration block at the top with plain settings — your email address, your thresholds, your spreadsheet URL. Change those and it works.

**Yes, to modify them a lot.** But basic changes — thresholds, date ranges, email recipients — need no programming knowledge at all.

**A realistic path:**
1. Install the scripts as provided, changing only the config
2. Run them for a month
3. When you want a change, ask an AI to modify it, describing exactly what you want
4. **Always test on preview before authorising**

---

## How to Install a Script

**Step 1.** Tools → Bulk actions → **Scripts** → **+** to create a new script.

**Step 2.** Name it clearly: `Weekly N-Gram Report`.

**Step 3.** Delete the placeholder code. Paste the script.

**Step 4.** Edit the CONFIG block at the top. This is the only part you change.

**Step 5.** Click **Preview**. Read the logs.

⚠️ **Preview runs the script without making changes.** Always preview first, every time you edit a script.

**Step 6.** If the preview looks correct, click **Authorise** and then **Run**.

**Step 7.** Set the schedule. Click the frequency dropdown and choose daily, weekly or hourly.

---

## The Safety Rules

Scripts can change your account. Treat them with respect.

### Rule 1: Read every line before running
Never run a script from the internet without reading it. A script can pause every campaign in your account.

### Rule 2: Always preview first
Every time. Including after a small edit.

### Rule 3: Start read-only
Scripts that only report are safe. Scripts that change things are not. Run the reporting scripts for a month before you deploy anything that makes changes.

### Rule 4: Add a safety limit to any script that changes things
The budget pacer script includes a maximum change percentage. Never remove it.

### Rule 5: Log everything
Every script here writes what it did to a log or an email. If something goes wrong, you need to know what happened.

### Rule 6: Test on one account first
Do not deploy across an MCC until it has run correctly on a single account for two weeks.

⚠️ **The most common script disaster:** a bid or budget script with a bug that makes a large change overnight. The safety limit is what prevents this from being catastrophic.

---

## The Five Scripts

### 1. N-Gram Analyser
`scripts/01-ngram-analyser.js`

**What it does:** breaks every search term into single words and word pairs, aggregates cost and conversions across all of them, and writes the results to a Google Sheet. Emails you a summary of the biggest waste.

**Why it matters:** this is Lesson 3.4's n-gram analysis, automated. It finds waste that is invisible in a term-by-term list.

**Schedule:** weekly, Monday morning.
**Risk level:** 🟢 Read-only. Safe.

### 2. Anomaly Detector
`scripts/02-anomaly-detector.js`

**What it does:** compares yesterday's spend, clicks and conversions against a trailing average. Emails you if anything is outside the tolerance band.

**Why it matters:** this is Lesson 8.4's early warning. Broken tracking, a disapproved ad or a budget problem reaches you in a day instead of three weeks.

**Schedule:** daily, early morning.
**Risk level:** 🟢 Read-only. Safe.

### 3. Broken Link Checker
`scripts/03-link-checker.js`

**What it does:** checks the final URL of every active ad and keyword. Emails you about anything returning an error or redirecting unexpectedly.

**Why it matters:** a broken landing page means you are paying for clicks that go nowhere. It happens after every website update, and nothing tells you.

**Schedule:** weekly.
**Risk level:** 🟢 Read-only. Safe.

### 4. Budget Pacer
`scripts/04-budget-pacer.js`

**What it does:** calculates month-to-date pacing against target, emails a daily report, and optionally adjusts budgets within a safety limit.

**Why it matters:** this is Lesson 10.2, automated. It prevents both the month-end sprint and the month-end freeze.

**Schedule:** daily.
**Risk level:** 🟡 Can change budgets. **Start with `MAKE_CHANGES: false`.**

### 5. Quality Score Tracker
`scripts/05-quality-score-tracker.js`

**What it does:** records the Quality Score and all three components for every keyword with spend, appending to a Google Sheet each week so you build a historical record.

**Why it matters:** Google's interface shows today's score. This builds the history you need to prove whether your Lesson 4.5 work actually improved anything.

**Schedule:** weekly.
**Risk level:** 🟢 Read-only. Safe.

---

## Configuring Them

Every script has a CONFIG block at the top:

```javascript
var CONFIG = {
  EMAIL: 'you@youragency.com',
  SPREADSHEET_URL: '',
  LOOKBACK_DAYS: 30,
  MIN_COST_THRESHOLD: 5000
};
```

**Change these values. Change nothing else** until you are comfortable.

### Getting a spreadsheet URL

1. Create a new Google Sheet
2. Copy the URL from the address bar
3. Paste it into the config

Leave it blank and most scripts will create a sheet for you and email you the link on first run.

---

## Running Scripts Across an MCC

At the MCC level, scripts can run across all your accounts at once.

**Where:** MCC → Tools → Bulk actions → Scripts.

**The structure is different.** MCC scripts use `AdsManagerApp` and loop through accounts:

```javascript
var accountIterator = AdsManagerApp.accounts().get();
while (accountIterator.hasNext()) {
  var account = accountIterator.next();
  AdsManagerApp.select(account);
  // your logic here
}
```

Each provided script includes a note on adapting it for MCC use.

⚠️ **Execution time limits apply.** MCC scripts running across 50 accounts can time out. For large MCCs, use `executeInParallel()` or split into batches.

---

## Beyond These Five

Once comfortable, other scripts worth building:

| Script | Purpose |
|---|---|
| Disapproved ad alert | Immediate notification of policy issues |
| Merchant Center feed checker | Price mismatch detection (Lesson 6.1) |
| Search term promoter | Auto-flag terms above a conversion threshold |
| Competitor monitor | Track Auction Insights changes (Lesson 9.6) |
| Impression share reporter | Automated scaling analysis (Lesson 8.1) |
| Label manager | Apply labels based on performance rules |
| Ad copy tester | Statistical significance on RSA assets |

**Build them one at a time.** A collection of five scripts you understand and trust beats twenty you copied and never read.

---

## When Scripts Are Not the Right Tool

Be honest about the limits.

**Scripts are good for:** monitoring, reporting, alerting, and simple rule-based changes within one Google Ads account.

**Scripts are poor for:**
- Complex data joins across systems — use BigQuery (Lesson 7.6)
- Anything needing more than 30 minutes of execution time
- Heavy processing across very large accounts
- Integration with external systems needing authentication
- Machine learning or statistical modelling

**For those, use the Google Ads API with Python** — Lesson 11.3.

---

## 📖 Real-World Example: The Monday Morning Email

Bilal's agency reached 21 clients with three staff (Lesson 10.1). The limit was not skill. It was attention.

**The problem:** with 21 accounts, nobody could check everything. Problems were found late, usually by the client.

Over six months he built a script suite. The centrepiece was a single Monday morning email.

### What the email contained

```
AGENCY MONDAY REPORT — 21 accounts

🔴 URGENT (3)
- Client D: conversions down 71% vs 14-day average (since Thursday)
- Client K: 4 ads disapproved — Misrepresentation
- Client Q: budget pacing 134% — projected £4,100 over

🟡 ATTENTION (6)
- Client B: 3 broken landing page URLs (404)
- Client F: Lost IS budget 31% on top campaign, CPA under target
- Client H: n-gram flagged "repair" — £890, 0 conversions
- Client M: Quality Score fell from 7.2 to 5.8 on top 10 keywords
- Client N: budget pacing 82% — projected £2,300 under
- Client S: Merchant Center — 14 price mismatches

🟢 NO ISSUES (12)
```

**Everything on that list came from the five scripts.**

### The impact on how the agency worked

**Before:** Monday morning meant opening 21 accounts and checking each one. Roughly four hours, and things were still missed because attention degrades after the sixth account.

**After:** Monday morning meant reading one email and acting on nine items. Roughly 90 minutes, and nothing was missed.

### Measured results over 12 months

| Metric | Before scripts | After |
|---|---|---|
| Average time to detect a tracking failure | 11 days | **1.2 days** |
| Broken landing pages found per quarter | 2 (by clients) | **19 (by script)** |
| Accounts over budget at month end | 4 of 21 | **0 of 21** |
| Monday check time | 4 hrs | **1.5 hrs** |
| Client-reported problems | 14/quarter | **2/quarter** |

**That first row is the most valuable.** Eleven days of broken tracking, as in Lesson 8.4's clinic example, costs real money in mis-optimised bidding. Reducing it to one day was worth more than every other improvement combined.

### The one that nearly went wrong

Early on, he deployed the budget pacer with `MAKE_CHANGES: true` on his largest client, without a preview run.

There was a bug in his date handling. On the 1st of the month, "days elapsed" calculated as 0, which meant expected spend was 0, which meant pacing was infinite, which triggered the maximum reduction.

**The script reduced every campaign budget by 15% at 6am on the 1st of the month.**

He caught it at 9am because the script emailed its own log — the safety feature that saved him.

**Damage:** three hours of reduced delivery. Recoverable.

**What it would have been without the safety limit:** the bug could have reduced budgets to near zero, and without the log email he would not have known for days.

**His rules after that:**
1. Every change-making script starts with `MAKE_CHANGES: false` for two weeks
2. Every change-making script has a maximum change percentage
3. Every script emails its own log, always
4. Never deploy a change-making script on the 1st or the 31st of a month without testing those specific dates

---

## 📊 Mastery Score

**Level: Advanced**

Scripts are not difficult. The skill is knowing what to monitor, which comes from Modules 8 and 10.

---

## 📌 Key Takeaways

- Scripts run free, on a schedule, and can read, report, alert and change.
- You do not need JavaScript to use them — change only the CONFIG block.
- Always preview before running. Always start with read-only scripts.
- Any script that changes things needs a maximum change limit and a log email.
- The five core scripts turn Module 8's diagnostics into automatic daily monitoring.

---

## ☑️ Self-Assessment

1. How long would it take you to notice if tracking broke on your third-largest account?
2. Do you have any automated alerting today?
3. How many hours a week do you spend on routine checking that a script could do?
4. Have you ever found a broken landing page after the client did?
5. Could you read a script and understand what it changes?

---

## 🧠 Quiz

**1. What must you always do before running a script?**
a) Nothing
b) Preview it and read the logs
c) Back up the account
d) Ask Google support

**2. Which script type is safe to deploy immediately?**
a) Bid adjusters
b) Read-only reporting and alerting scripts
c) Budget changers
d) Campaign pausers

**3. What prevents a buggy budget script from causing serious damage?**
a) Google's protection
b) A maximum change percentage limit and a log email
c) Nothing
d) Running it weekly

**4. What are scripts poor at?**
a) Monitoring and alerting
b) Complex data joins across systems and heavy processing
c) Sending emails
d) Reading account data

**5. What was the most valuable result of Bilal's script suite?**
a) Time saved
b) Time to detect a tracking failure fell from 11 days to 1.2
c) Better reports
d) Fewer client calls

---

## 💪 Practical Exercise (45 minutes)

Install and run two scripts.

1. Install the Anomaly Detector. Configure your email and thresholds.
2. Preview it. Read the log output carefully.
3. Run it and check the email you receive.
4. Schedule it daily.
5. Install the N-Gram Analyser. Configure it and preview.
6. Run it and review the spreadsheet output. Find one waste pattern you did not know about.

---

## 🎯 Expert Challenge

Build a complete monitoring suite for a portfolio.

- Deploy all five scripts at MCC level, adapted for multiple accounts, with attention to execution time limits.
- Design the consolidated alert email: one message per morning, grouped by severity, across every account.
- Define the severity thresholds per client, since a 30% conversion drop means different things at different volumes.
- Build the response process: for each alert type, who acts, within what time, and what the first three diagnostic steps are.
- Add two custom scripts specific to your clients' needs — a feed checker for e-commerce, or a call tracking monitor for service businesses.
- Then measure the system: track time-to-detection for every incident over six months. If it is not improving, your thresholds are wrong — either too loose to catch things, or so tight that alerts are ignored.

---

## ✅ Quiz Answers

1 — **b**. Preview and read the logs, every time.
2 — **b**. Read-only reporting scripts cannot damage anything.
3 — **b**. A change limit plus a log email.
4 — **b**. Complex joins and heavy processing belong in BigQuery or the API.
5 — **b**. Detection time falling from 11 days to just over one.

---

**Next lesson:** 11.3 — When to Use the API, and When Not To
