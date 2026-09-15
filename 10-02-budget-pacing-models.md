# Lesson 10.2 — Spend the Budget Evenly, Not All at Once

*Phase 5 · Running Big Accounts and Clients — Module 10 · Handling Big Budgets and Clients*

---

## Quick Recap From Lesson 5.2

You know that daily budgets can vary up to 2× and are capped monthly. At high spend, that variation becomes a real operational problem. This lesson solves it.

---

## 🎯 What You Will Learn

- Why pacing matters more as budgets grow
- The three pacing models, and when to use each
- How to calculate and monitor pacing correctly
- What to do when you are ahead or behind
- Managing hard budget caps and month-end limits

---

## Why Pacing Matters

At PKR 50,000 a month, being 10% over budget means PKR 5,000. An inconvenience.

At PKR 5,000,000 a month, being 10% over means PKR 500,000. That is a serious conversation, and in some organisations it is a compliance issue.

**Three reasons pacing matters at scale:**

1. **Financial control.** Large budgets are approved amounts. Exceeding them without authorisation damages trust.
2. **Under-spending is also failure.** Ending the month 15% under budget means you missed conversions you were funded to buy.
3. **Uneven pacing damages performance.** Spending 70% of the month's budget in the first ten days and then throttling produces worse results than steady delivery.

**Think of fuel on a long drive.** Running out before the destination is obviously bad. Arriving with a third of the tank unused means you could have taken a better route or driven faster. Neither is good planning.

---

## The Pacing Calculation

The core formula:

> **Expected spend to date = (Days elapsed ÷ Days in month) × Monthly budget**
>
> **Pacing % = Actual spend to date ÷ Expected spend to date × 100**

### A worked example

- Monthly budget: PKR 3,000,000
- Days in month: 30
- Today: day 12
- Actual spend so far: PKR 1,340,000

```
Expected = (12 ÷ 30) × 3,000,000 = PKR 1,200,000
Pacing = 1,340,000 ÷ 1,200,000 × 100 = 112%
```

**You are 12% ahead.** At this rate, month-end spend would be PKR 3,350,000 — PKR 350,000 over.

### The tolerance bands

| Pacing | Status | Action |
|---|---|---|
| 95–105% | ✅ On track | None |
| 105–115% | 🟡 Slightly ahead | Monitor daily |
| Above 115% | 🔴 Ahead | Act |
| 85–95% | 🟡 Slightly behind | Monitor |
| Below 85% | 🔴 Behind | Act |

⚠️ **Do not act on days 1–3.** Early-month variance is normal and correcting it causes more harm than the variance.

---

## The Three Pacing Models

### Model 1: Even pacing

Spend the same amount every day.

> **Daily budget = Monthly budget ÷ 30.4**

**Use when:**
- Demand is steady across the month
- The client wants predictability
- You have no strong data on within-month patterns

**Simplest and correct for most accounts.**

### Model 2: Demand-weighted pacing

Spend more on high-demand days, less on low-demand days.

**How to build it:**

1. Export 12 months of daily conversion data
2. Calculate the average conversions per day of week
3. Calculate the index for each day

**A B2B example:**

| Day | Avg conversions | Index | Budget share |
|---|---|---|---|
| Monday | 24 | 1.31 | 18.7% |
| Tuesday | 26 | 1.42 | 20.3% |
| Wednesday | 25 | 1.37 | 19.5% |
| Thursday | 22 | 1.20 | 17.2% |
| Friday | 16 | 0.87 | 12.5% |
| Saturday | 8 | 0.44 | 6.3% |
| Sunday | 7 | 0.38 | 5.5% |

**Use when:** demand varies strongly and predictably by day.

⚠️ **With Smart Bidding, this is often unnecessary.** The AI already bids differently by day and hour (Lesson 5.1). Manual day-weighting can work against it.

**Where it really helps:** when a **hard monthly cap** exists and you want spend concentrated on the best days rather than distributed evenly.

### Model 3: Front-loaded or back-loaded

On purpose uneven, for a strategic reason.

**Front-loaded** — spend more early:
- A product launch
- A sale with a fixed end date
- Learning phase for a new campaign (Lesson 5.2)
- When you want data early enough to act on it

**Back-loaded** — spend more late:
- Salary-day patterns. In Pakistan, spending often concentrates in the days after month-end pay.
- Seasonal build-up toward a peak
- Deadline-driven purchases

⚠️ **Back-loading is risky.** If something breaks in week three, you have no time to recover.

---

## Monitoring Pacing

### The daily check (2 minutes)

At high spend, do this every working day.

1. Month-to-date spend
2. Expected spend to date
3. Pacing percentage
4. Projected month-end spend

**Automate it.** A script (Lesson 11.2) or a Looker Studio scorecard removes the manual work.

### The pacing dashboard

A simple table per client:

| Client | Budget | MTD spend | Expected | Pacing | Projected | Status |
|---|---|---|---|---|---|---|
| A | 3,000,000 | 1,340,000 | 1,200,000 | 112% | 3,350,000 | 🟡 |
| B | 850,000 | 290,000 | 340,000 | 85% | 725,000 | 🔴 |
| C | 1,200,000 | 478,000 | 480,000 | 100% | 1,195,000 | ✅ |

**Client B is the more urgent problem**, even though under-spending feels safer. They are on track to leave PKR 125,000 unspent — conversions they were funded to buy and did not.

---

## What to Do When You Are Ahead

**Diagnose before acting.** Ahead of pace is not automatically bad.

### Step 1: Is performance good?

| Performance | Ahead of pace means |
|---|---|
| Cost per conversion at or better than target | ✅ **Good.** You found more profitable demand. |
| Cost per conversion worse than target | 🔴 **Bad.** You are buying poor traffic. |

**If performance is good, the right conversation is with the client about increasing the budget** — not with the account about slowing it down (Lesson 8.1).

### Step 2: If you must slow down

In order of preference:

**1. Reduce the budget on the worst-performing campaign.** Preserve the good ones.

**2. Tighten the bid target** by 10–15% (Lesson 5.3). This reduces spend and improves efficiency at the same time.

**3. Pause the lowest-value campaign** entirely, if the overspend is large.

❌ **Do not** cut every campaign's budget evenly. That damages your best performers alongside your worst.

❌ **Do not** make large changes in the last three days. Learning phase disruption at month-end carries into next month.

---

## What to Do When You Are Behind

Under-spending is a genuine failure. You were funded to buy conversions and did not.

### Step 1: Diagnose why

| Cause | How to find | Fix |
|---|---|---|
| Budget-limited campaigns exist elsewhere | Lost IS (budget) high in another campaign | Move budget there |
| Bid target too tight | Lost IS (rank) high, low volume | Loosen target 10–15% |
| Not enough eligible traffic | IS already high, both losses low | Expand — new keywords, channels, geography |
| Campaigns paused or disapproved | Check status | Fix |
| Seasonal demand dip | Compare to last year | Accept it |
| Tracking broke, so bidding throttled | Conversions dropped | Lesson 2.5 |

**That last one is important.** A common cause of sudden under-spending is broken tracking causing Smart Bidding to reduce bids because it thinks performance collapsed.

### Step 2: Act early

**Recovering under-spend is much harder in the last week.** By day 24, you cannot spend 30% of a month's budget in six days without buying very poor traffic.

**Check pacing from day 5. Act by day 10.**

---

## Hard Budget Caps

Some clients have really inflexible caps — public sector, regulated industries, or a board-approved figure.

### The problem

Google's daily budget can spend up to 2× on a given day. The month is capped at daily × 30.4, but **that monthly cap is Google's, not yours** — and if you change budgets mid-month, the calculation shifts.

### Managing a hard cap

**Method 1: Budget slightly under.**
Set the daily budget to 92–95% of the true limit. Use the remaining headroom for month-end adjustment.

**Method 2: Shared budgets with a controlled total** (Lesson 9.1).
One pool, one number to manage.

**Method 3: Manual payments (prepay).**
Where available, load a fixed amount. Spending stops when it runs out. Absolute control, but the stop is abrupt.

**Method 4: A pacing script.**
A Google Ads script (Lesson 11.2) that checks spend daily and automatically reduces budgets when projected spend exceeds the cap.

**Method 5: Automated rules.**
Simpler than a script. A rule that pauses campaigns when month-to-date spend reaches a threshold.

⚠️ **Method 5 is a blunt instrument.** Pausing campaigns at 95% of budget on day 26 means four days of zero delivery and a learning phase disruption. **Reducing budgets is almost always better than pausing.**

---

## Month-End Behaviour

Two mistakes happen at month-end.

### Mistake 1: The sprint

Realising on day 27 that you are 20% under, and doubling budgets to catch up.

**What happens:** you buy four days of poor traffic at a high cost, damaging your monthly performance figures and disrupting learning going into the new month.

**Better:** accept the under-spend, explain it, and fix the pacing process for next month.

### Mistake 2: The freeze

Realising on day 25 that you are over, and pausing everything.

**What happens:** five days of zero delivery, competitors take your traffic, and every campaign enters a learning phase on day 1 of the new month.

**Better:** reduce budgets gradually from day 20 when you first see the trend.

> **The rule: pacing corrections should be small and early, never large and late.**

---

## 📖 Real-World Example: The £180,000 Month-End Problem

Bilal's largest client had a £180,000 monthly budget, board-approved and really inflexible. Exceeding it needed a formal variance report, which the marketing director wanted to avoid.

### The first month went badly

He set daily budgets to £180,000 ÷ 30.4 = £5,921 across campaigns and monitored weekly.

**Day 7:** pacing 103%. Fine.
**Day 14:** pacing 108%. Slightly ahead, monitoring.
**Day 21:** pacing 119%. Now a problem.
**Day 24:** projected month-end spend £198,000. £18,000 over.

He panicked and paused three campaigns on day 25.

**What happened:**
- Days 25–30: spend collapsed to almost nothing
- Final spend: £171,000 — now £9,000 **under**
- Conversions for the month: 12% below the previous month
- All three paused campaigns entered a learning phase on 1st of the next month
- The following month's first two weeks were poor

**He had missed in both directions and damaged two months.**

### The system he built

**1. Daily automated pacing report.**

A Google Ads script (Lesson 11.2) emailing every morning:

```
CLIENT: [Name]
Budget: £180,000 | Day 12 of 30
MTD spend: £74,200 | Expected: £72,000
Pacing: 103% | Projected: £185,500
Status: MONITOR
Recommended action: none
```

**2. Tolerance bands with defined actions.**

| Pacing | Action |
|---|---|
| 95–107% | None |
| 107–112% | Tighten tROAS by 5% on the lowest-performing campaign |
| 112–118% | Reduce budget 10% on the two lowest-performing campaigns |
| Above 118% | Reduce budget 15% across the bottom three, escalate to client |
| 88–95% | Loosen tROAS by 5% on the best-performing campaign |
| Below 88% | Move budget to campaigns with Lost IS (budget), escalate |

**Actions defined in advance, so the response was never emotional.**

**3. The 92% rule.**

He set daily budgets to total 92% of the true cap, holding 8% as a controlled reserve. If pacing ran under by day 15, he released some reserve into the best-performing campaign. If it ran over, the reserve absorbed it.

**4. No changes after day 26.**

A hard rule. Whatever the pacing said on day 26, he accepted it. Protecting the next month's learning was worth more than hitting the cap exactly.

**5. Monthly variance reporting.**

He reported final spend against budget every month, with an explanation, before the client asked. Small variances explained proactively never became problems.

### Results over 12 months

| Metric | Before the system | After |
|---|---|---|
| Average absolute variance from budget | 7.4% | **1.9%** |
| Months needing a variance report | 4 of 6 | **0 of 12** |
| Month-end campaign pauses | 3 | **0** |
| Campaigns starting the month in learning | Frequently | **Never** |
| Average cost per conversion | £61 | **£48** |

### Why cost per conversion improved

This was the unexpected benefit.

By eliminating month-end sprints and freezes, campaigns ran continuously with stable budgets. **No campaign ever entered a learning phase because of a pacing decision.**

The pacing system's largest benefit was not financial control. It was **stability** — which, from Lesson 5.2, is what Smart Bidding needs most.

**Bilal's note:** *"I built it to keep the finance director happy. It turned out to be one of the biggest performance improvements of the year."*

---

## 📊 Mastery Score

**Level: Advanced**

Pacing is operational discipline rather than clever strategy. At high spend it is one of the most visible measures of whether you are professional.

---

## 📌 Key Takeaways

- Pacing % = actual spend to date ÷ expected spend to date. Check it daily at high spend.
- Under-spending is as much a failure as over-spending. You were funded to buy conversions you did not buy.
- Diagnose before correcting. Ahead of pace with good performance is an argument for more budget, not less.
- Correct with small, early adjustments. Never large, late ones.
- Reducing budgets beats pausing campaigns. Pausing destroys learning and carries damage into the next month.

---

## ☑️ Self-Assessment

1. Do you check pacing daily, weekly, or only at month-end?
2. What was your variance from budget last month, in both directions?
3. Do you have defined actions for each pacing band, or do you improvise?
4. Have you ever paused campaigns at month-end? What did the following month look like?
5. Is any of your pacing monitoring automated?

---

## 🧠 Quiz

**1. How do you calculate pacing percentage?**
a) Spend ÷ budget
b) Actual spend to date ÷ expected spend to date × 100
c) Conversions ÷ target
d) Days elapsed ÷ days in month

**2. You are 15% ahead of pace and cost per conversion is better than target. What does this suggest?**
a) Slow down immediately
b) You found more profitable demand — the conversation is about increasing the budget
c) The tracking is broken
d) Pause campaigns

**3. Which is worse: 10% over budget or 10% under?**
a) Over is always worse
b) Both are failures — under means you missed conversions you were funded to buy
c) Under is fine
d) Neither matters

**4. What is the best way to reduce spend when ahead of pace?**
a) Pause everything
b) Reduce budgets on the worst-performing campaigns, or tighten targets
c) Cut every campaign evenly
d) Wait until month-end

**5. Why did the pacing system improve cost per conversion?**
a) Better keywords
b) It eliminated month-end sprints and freezes, keeping campaigns out of the learning phase
c) Lower bids
d) A coincidence

---

## 💪 Practical Exercise (30 minutes)

Build a pacing model for one account.

1. Calculate current pacing: MTD spend, expected spend, pacing %, projected month-end.
2. Review the last six months. Calculate the variance from budget for each.
3. Define your tolerance bands and the specific action for each.
4. Check whether any campaign has high Lost IS (budget) — that is where under-spend should go.
5. Build a simple daily pacing scorecard, in a sheet or Looker Studio.

---

## 🎯 Expert Challenge

Design a portfolio-wide pacing system.

- Build the automated daily pacing report across every account, with projected month-end spend and a status flag.
- Define the tolerance bands and prescribed actions per client, adjusted for their tolerance for variance. A public sector client and an e-commerce startup need different bands.
- Design the reserve mechanism: how much headroom you hold back, how it is released, and who authorises it.
- Build the demand-weighted model for one account using 12 months of daily data, and test whether it outperforms even pacing. Be prepared to conclude it does not — Smart Bidding may already handle it.
- Design the month-end process with a hard no-changes date, and document the reasoning so nobody overrides it under pressure.
- Then measure the second-order effect: track how many campaigns enter a learning phase due to pacing decisions, before and after. That number, and its performance cost, is the real business case.

---

## ✅ Quiz Answers

1 — **b**. Actual over expected, as a percentage.
2 — **b**. Good performance plus overspend means an opportunity, not a problem.
3 — **b**. Both are failures. Under-spend means missed funded conversions.
4 — **b**. Targeted reduction on the weakest, or a tighter target.
5 — **b**. Stability kept campaigns out of the learning phase.

---

**Next lesson:** 10.3 — Plan for Busy Seasons Like Ramadan and Eid
