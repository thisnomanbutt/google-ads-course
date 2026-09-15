# Lesson 8.4 — Why Results Drop, and How to Find the Cause

*Phase 4 · Tracking and Reading Your Results — Module 8 · Reading Reports and Fixing Problems*

---

## Quick Recap From Module 8

You can measure, report and model. Now the most valuable diagnostic skill: **the account was fine, and now it is not. Why?**

---

## 🎯 What You Will Learn

- The eight causes of performance decay, and how to tell them apart
- The diagnostic sequence — what to check, in what order
- How to distinguish a real problem from normal variation
- Ad fatigue, audience saturation and bid volatility, explained
- What "Search lost to AI Overviews" actually looks like in your data

---

## First: Is Anything Actually Wrong?

Before diagnosing, confirm there is a problem. Most "the account is broken" panics are normal variation.

### The variation test

**Step 1.** Look at 90 days, not 7. Plot the metric weekly.

**Step 2.** Calculate the normal range. If cost per conversion has bounced between PKR 1,400 and PKR 2,100 all year, then PKR 1,950 is not a problem.

**Step 3.** Check the sample size. Twelve conversions in a week tells you almost nothing. A "50% increase in cost per conversion" from 4 conversions to 2 is noise.

**Step 4.** Check the same period last year. Some declines are seasonal (Lesson 10.3).

> **Rule: a change is only real if it persists for 14+ days and sits outside the historical range.**

⚠️ **Investigating noise is worse than ignoring it**, because it leads to changes that restart learning phases (Lesson 5.2). Most damage in Google Ads accounts is done by people responding to randomness.

---

## The Eight Causes of Decay

Once you have confirmed a real decline, it is one of these.

| # | Cause | Speed | Signature |
|---|---|---|---|
| 1 | **Tracking broke** | Sudden | Conversions drop, business results unchanged |
| 2 | **Competitor entered** | Gradual | CPC rises, impression share falls |
| 3 | **Ad fatigue** | Gradual | CTR falls, frequency high, CPC rises |
| 4 | **Audience saturation** | Gradual | Reach exhausted, frequency climbs, conversion rate falls |
| 5 | **Landing page changed** | Sudden | Conversion rate drops, CTR unchanged |
| 6 | **Seasonality** | Predictable | Matches last year's pattern |
| 7 | **Bid or budget change** | Sudden | Traceable in change history |
| 8 | **Search behaviour shift / AI Overviews** | Gradual | Impressions fall, position unchanged |

**The signature column is the diagnostic key.** Each cause leaves a different fingerprint.

---

## The Diagnostic Sequence

Work through these in order. Do not skip ahead — the early checks are the fastest and catch the most common causes.

### Check 1: Is it tracking? (5 minutes)

**Always check this first.** It is the most common cause and the easiest to confirm.

- Compare Google Ads conversions to the business's actual results
- If Google shows a fall and the business shows no change → **tracking broke**
- Run the Lesson 2.5 process

**Signature:** conversions drop sharply on a specific date, with no corresponding change in real sales.

### Check 2: Change history (5 minutes)

Tools → Change history. Filter to the two weeks before the decline began.

- Did anyone change a bid strategy, budget, target, or conversion setting?
- Did Google auto-apply something? (This is why auto-apply is off — Lesson 1.3)
- Were keywords paused?

**Signature:** the decline starts within 1–3 days of a specific change.

### Check 3: Impression share (10 minutes)

Compare IS, Lost IS (Budget) and Lost IS (Rank) before and after.

| Pattern | Meaning |
|---|---|
| IS down, Lost IS (Rank) up | Competitor pressure, or your Ad Rank fell |
| IS down, Lost IS (Budget) up | Budget limit, or CPCs rose |
| IS stable, impressions down | **Fewer searches happening** — market or AI Overviews |

That last row is important and often misread. **If your impression share held but impressions fell, you did not lose share — the market shrank.**

### Check 4: Auction Insights (10 minutes)

Campaigns → Insights → Auction insights. Compare month over month.

- Has a new competitor appeared?
- Has an existing competitor's impression share risen sharply?
- Has their overlap rate with you increased?

**Signature:** a new domain in the list, or a competitor's share jumping 15+ points.

### Check 5: Conversion rate vs click-through rate (10 minutes)

This splits the problem in two.

| CTR | Conversion rate | Diagnosis |
|---|---|---|
| Down | Stable | **Ad problem** — fatigue, or a competitor's better offer |
| Stable | **Down** | **Landing page or offer problem** |
| Down | Down | Traffic quality changed — check search terms |
| Stable | Stable, but fewer conversions | Volume problem — check impressions |

**This single table resolves a large share of diagnostic questions.**

### Check 6: Search terms (15 minutes)

Compare the search terms report before and after.

- Are new, irrelevant terms appearing?
- Has the mix shifted toward lower intent?
- Did a broad match keyword start matching something new?

**Signature:** cost concentrating on terms that were not present before.

### Check 7: Landing page (10 minutes)

- Did the page change? Ask the developer.
- Test the page speed today (Lesson 0.5)
- Complete the conversion process yourself, on a phone
- Check for a new cookie banner, pop-up or chat widget

**Signature:** conversion rate falls on a specific date, CTR unchanged.

### Check 8: Seasonality (10 minutes)

Compare the same period last year, and the year before.

- Is this decline an annual pattern?
- Ramadan, Eid, summer holidays, Christmas, exam season

**Signature:** the shape matches previous years.

---

## Ad Fatigue: What It Actually Is

**Ad fatigue** is when the same audience sees the same creative too many times and stops responding.

### Where it really happens

- Display and remarketing (Lesson 6.6)
- YouTube and Demand Gen (Lessons 6.4, 6.5)
- Small, tightly targeted audiences

### Where it mostly does not

⚠️ **Search campaigns rarely suffer true ad fatigue**, because most searchers see your ad once and are different people each time. A "tired" search ad is usually a competitive problem or a Quality Score problem, not fatigue.

### The signature

| Metric | Fatigue pattern |
|---|---|
| CTR | Declining steadily over weeks |
| Frequency | High and rising |
| Conversion rate | Declining |
| Reach | Flat — no new people |
| CPC | Rising (lower CTR → lower Ad Rank) |

### The fix

1. **New creative**, not edited creative. A different concept, not a reworded headline.
2. **Expand the audience** so fresh people enter.
3. **Increase frequency caps' strictness** (Lesson 6.6).
4. **Rotate creative on a schedule** before fatigue sets in — typically every 6–10 weeks for visual channels.

---

## Audience Saturation

Different from fatigue, though related. **Saturation** is when you have reached everyone in the audience who was ever going to convert.

### The signature

- Reach has plateaued
- Frequency is rising even with a stable budget
- Conversion rate falling steadily
- Cost per conversion rising steadily
- New creative does not help much

### The fix

New creative will not solve saturation, because the problem is the audience, not the message.

1. **Expand the audience** — broader lookalikes, new in-market segments
2. **New geographies** (Lesson 9.3)
3. **New channels** (Lesson 1.2)
4. **Accept the ceiling** and optimise for efficiency rather than growth

⚠️ **The common mistake:** treating saturation as fatigue and burning money producing new creative for an exhausted audience.

**How to tell them apart:** if reach is still growing, it is fatigue. If reach has plateaued, it is saturation.

---

## Bid Volatility

Sometimes performance swings wildly week to week with no obvious cause.

### Common causes

1. **Too few conversions.** With 8 conversions a month, weekly numbers are meaningless noise (Lesson 8.3).
2. **A target set too tightly.** The campaign oscillates between serving and not serving.
3. **Frequent changes.** Every change restarts learning (Lesson 5.1).
4. **Really volatile demand.** Some markets are simply spiky.
5. **A large competitor with an intermittent budget.** They spend hard for two weeks a month, and your costs move with them.

### The fix

- Judge over 30 days, not 7
- Stop changing things for 21 days and observe
- Loosen an over-tight target
- If volume is the issue, consider the proxy approach from Lesson 8.3

---

## Search Lost to AI Overviews

From Lesson 1.1: AI Overviews answer many informational queries directly, so fewer people click anything.

### The signature

This is the distinctive one:

| Metric | Pattern |
|---|---|
| **Impressions** | Falling |
| **Impression share** | **Stable or rising** |
| Average position | Unchanged |
| CTR | Stable or slightly down |
| Conversion rate | **Stable or improving** |
| Conversions | Falling in proportion to impressions |

**Read that carefully.** Your share of the market held; the market got smaller. And the remaining traffic often converts *better*, because the casual researchers were the ones who stopped clicking.

### How to confirm it

1. Check whether the decline is concentrated in **informational keywords** (Lesson 3.1). Transactional and local terms should be far less affected.
2. Check Search Console. Are organic impressions stable while organic clicks fall? That is the same effect on the free side.
3. Search your keywords manually. Is an AI answer appearing?

### The response

**Do not fight it.** You cannot bid your way back into a search that no longer produces clicks.

1. **Shift budget toward transactional and local intent** (Lesson 3.1)
2. **Accept a smaller but better-quality informational segment**
3. **Reset expectations with the client** — show them that conversion rate held or improved
4. **Look for volume elsewhere** — new channels, new markets (Lesson 1.2)

⚠️ **Do not report this as a failure.** Falling impressions with stable conversion rate and stable impression share is a market change, not a performance problem. Explain it clearly, with the data.

---

## 📖 Real-World Example: Three Declines, Three Different Causes

Bilal managed three accounts that all declined in the same quarter. Each had a completely different cause, and treating them the same would have made all three worse.

### Account 1: The clinic

**Symptom:** conversions fell from 108 to 34 per month over three weeks. Cost per conversion tripled.

**Check 1 — tracking.** He compared to the clinic's booking system. **The clinic had booked 114 appointments that month** — more than the previous month.

**Diagnosis: tracking broke.** The clinic's web developer had updated the booking widget, changing the confirmation page URL. The GTM trigger no longer fired (Lesson 2.5).

**Fix:** 20 minutes. Conversions recovered immediately. But Smart Bidding had spent three weeks learning from bad data and took another four weeks to recover fully.

**Cost of the delay:** roughly PKR 190,000 in lost bookings, caused entirely by nobody checking for three weeks.

### Account 2: The e-commerce store

**Symptom:** cost per sale rose from $34 to $58 over six weeks. Gradual, steady.

**Check 1 — tracking.** Fine. Google matched their order system.

**Check 2 — change history.** Nothing significant.

**Check 3 — impression share.** IS fell from 64% to 41%. Lost IS (Rank) rose from 12% to 39%.

**Check 4 — Auction Insights.** A new competitor domain appeared, going from 0% to 34% impression share in six weeks. A large, well-funded new entrant.

**Diagnosis: competitor pressure.**

**Fix — and this is the important part.** He did **not** simply raise bids to match, which would have started a bidding war he could not win against a better-funded competitor.

Instead:
1. Analysed the competitor's offer (Lesson 0.2). They were cheaper but had a 14-day return policy against the client's 60-day.
2. Rebuilt the ads around the guarantee rather than price.
3. Fixed Quality Score across the top 20 keywords (Lesson 4.5), which raised Ad Rank without raising bids.
4. Moved budget toward keyword clusters where the competitor was weaker.

**Result after 10 weeks:** cost per sale back to $39. Not the original $34 — the market really had become more competitive — but a manageable position rather than a collapse.

### Account 3: The B2B software company

**Symptom:** impressions down 31% over two months. Conversions down 26%.

**Check 1 — tracking.** Fine.
**Check 2 — change history.** Nothing.
**Check 3 — impression share.** **IS actually rose slightly, from 58% to 61%. Lost IS (Rank) fell.**

That combination — impressions down while impression share up — pointed immediately to the market, not the account.

**Check 5 — CTR and conversion rate.** CTR stable. **Conversion rate rose from 3.1% to 3.9%.**

**Check 6 — search terms.** The decline was concentrated entirely in informational queries: "what is project management software", "how to manage construction projects", "project management best practices".

Transactional terms — "construction project software pricing", "site management app" — were unchanged.

**Diagnosis: AI Overviews.**

He confirmed it by searching the affected terms manually. Every one showed an AI answer at the top.

**The response:**
1. Moved 70% of the informational keyword budget to transactional and comparison clusters
2. Kept a small informational budget with remarketing attached (Lesson 3.1)
3. Increased Demand Gen budget to replace the lost top-of-funnel reach (Lesson 6.4)
4. **Reset the client's expectations with the data**

**The client conversation was the hardest part.** They saw a 31% impression decline and assumed something was broken.

Bilal showed them three numbers: impression share up, conversion rate up, cost per customer flat. Then he explained: *"We did not lose share. Fewer of those searches now produce a click for anyone. The traffic we do get is better than before."*

**Result after 12 weeks:** impressions still 28% below the original level. Conversions recovered to 94% of the original, at a **13% lower cost per customer**, because the remaining traffic was higher intent.

### The lesson across all three

**Three declines. Three completely different causes. Three completely different responses.**

If Bilal had applied the same fix to all three — say, raising budgets — he would have wasted money on all three and solved none of them.

**The diagnostic sequence is what tells them apart.** Working through it in order takes about an hour and is the most valuable hour in account management.

---

## 📊 Mastery Score

**Level: Expert**

Diagnosis is the skill clients actually pay for. Anyone can build a campaign. Working out why a working one stopped working is the professional job.

---

## 📌 Key Takeaways

- Confirm the decline is real first. Fourteen days, outside the historical range, enough sample size.
- Check tracking before anything else. It is the most common cause and the fastest to confirm.
- CTR versus conversion rate splits most problems in two: ad problem or page problem.
- Ad fatigue means reach is still growing; saturation means reach has plateaued. The fixes are different.
- Falling impressions with stable impression share means the market shrank, not that you lost. AI Overviews look exactly like this.

---

## ☑️ Self-Assessment

1. When performance drops, what do you check first? Is it tracking?
2. Do you look at 90 days before concluding something is wrong?
3. Can you tell ad fatigue from audience saturation using your data?
4. Have you checked Auction Insights in the last month?
5. Would you recognise the AI Overviews signature in your own account?

---

## 🧠 Quiz

**1. What should you check first when performance drops?**
a) Bid strategy
b) Whether tracking broke — compare to the business's real results
c) Competitor activity
d) Ad copy

**2. CTR is stable but conversion rate fell. What is the likely problem?**
a) Ad copy
b) The landing page or the offer
c) Competitor bidding
d) Budget

**3. How do you tell ad fatigue from audience saturation?**
a) You cannot
b) With fatigue, reach is still growing; with saturation, reach has plateaued
c) By checking CPC
d) By the campaign type

**4. Impressions fell 30% but impression share rose. What happened?**
a) You lost to competitors
b) The market shrank — fewer searches producing clicks, possibly AI Overviews
c) Your budget ran out
d) Tracking broke

**5. How long must a change persist before it counts as real?**
a) 1 day
b) 3 days
c) 14+ days, outside the historical range
d) 6 months

---

## 💪 Practical Exercise (45 minutes)

Run the full diagnostic sequence on any account, whether or not it is declining.

1. Plot 90 days of cost per conversion weekly. Set up the normal range.
2. Compare Google Ads conversions to the business's real results for last month.
3. Review change history for the last 60 days.
4. Compare impression share, Lost IS (Budget) and Lost IS (Rank) month over month.
5. Open Auction Insights and compare to three months ago.
6. Build the CTR versus conversion rate table for the same periods.
7. Write your diagnosis, even if the answer is "nothing is wrong".

---

## 🎯 Expert Challenge

Build a decay detection and diagnosis system.

- Design the anomaly detection layer: which metrics are monitored, at what thresholds, over what windows, with alerts that distinguish real signal from noise. A system that alerts on daily variation is worse than no system.
- Build the diagnostic runbook as a formal decision tree, so any team member can work through it identically and reach the same conclusion.
- Create the market-change monitor: track impressions, impression share and conversion rate together, so market contraction is distinguishable from performance loss automatically.
- Build the creative rotation schedule for visual channels, based on your measured fatigue curve rather than a generic interval.
- Design the client communication templates for each of the eight causes, so that when a decline happens you send a clear explanation within a day rather than a defensive message after a week.
- Then run a post-mortem on a past decline. How long did it take to detect? How long to diagnose? What would have caught it sooner? The answer to that last question is your next system improvement.

---

## ✅ Quiz Answers

1 — **b**. Tracking, always. Most common and fastest to check.
2 — **b**. Page or offer. The ad is still earning the click.
3 — **b**. Reach growing means fatigue; reach plateaued means saturation.
4 — **b**. Market contraction, not competitive loss.
5 — **c**. Fourteen days and outside the normal range.

---

**Next lesson:** 8.5 — Fake Clicks: How to Spot and Stop Them
