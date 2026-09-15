# Lesson 5.4 — Moving Safely to Value-Based Bidding

*Phase 3 · Bidding and Other Ad Types — Module 5 · How to Set Your Bids*

---

## Quick Recap From Lesson 5.3

You have a working tCPA or tROAS and you have found the profit peak. Now we make the bigger move: from counting conversions to valuing them.

---

## 🎯 What You Will Learn

- Why switching to value-based bidding breaks accounts when done carelessly
- The five prerequisites you must meet first
- The four-step ladder that makes the transition safe
- How to calculate your first value-based target
- The rollback plan, and when to use it

---

## Why This Transition Is Risky

Moving from tCPA to tROAS is not a settings change. **It changes what Google is hunting for.**

| Before (tCPA) | After (tROAS) |
|---|---|
| Find me more conversions | Find me more *value* |
| All conversions equal | Conversions weighted by worth |
| Optimises for count | Optimises for money |

The AI must rebuild its entire model. Everything it learned about which auctions are good is now measured differently.

**Think of a football team changing from "score the most goals" to "score against the strongest opponents".** Same sport, same players, completely different tactics. The team will play badly for several weeks while it adapts.

**What goes wrong when people rush it:**

- Conversion volume collapses while the AI chases high-value outliers
- Cost per conversion rises sharply
- The account panics, switches back, and now has two broken learning phases
- Everyone concludes value bidding "does not work for us"

---

## The Five Prerequisites

Do not begin until all five are true. This is not optional.

### ✅ 1. Accurate, checked conversion values

Every conversion must carry a value, and that value must be right.

**Check with Lesson 2.5:** run a real test conversion and confirm the value arriving in Google matches the actual order.

⚠️ **Check especially:** are values excluding tax and shipping (Lesson 0.4)? Are lead values based on real close rates (Lesson 2.3)?

### ✅ 2. Genuine value variation

If every conversion is worth the same amount, value bidding gives you nothing. tROAS on identical values behaves almost exactly like tCPA, with more complexity.

**Test it:** export your conversions with values for 90 days. Calculate the standard deviation, or simply look at the range. If 90% of conversions fall within ±15% of the average, stay on tCPA.

### ✅ 3. Enough volume

**Minimum: 50 conversions in the last 30 days per campaign.** More is better. Value bidding needs more data than count bidding, because it is learning a more complex relationship.

Below 50, use a portfolio strategy to pool campaigns (Lesson 5.3), or stay on tCPA.

### ✅ 4. Stable current performance

The campaign should have been running steadily for at least 30 days with no major changes.

**Never transition a campaign that is already struggling.** Fix the underlying problem first. Value bidding is not a rescue tool.

### ✅ 5. Business tolerance for a dip

Weeks 1–3 will be worse. Sometimes a lot worse.

**Get written agreement before you start.** If the business cannot survive three weeks of reduced performance, do the transition in a low season, or do not do it at all.

---

## The Four-Step Ladder

Do not jump from tCPA to tROAS. Climb.

```
STEP 1: tCPA (where you are now)
   ↓  add values, observe only — 30 days
STEP 2: tCPA + accurate values flowing
   ↓  switch to Maximise Conversion Value, no target — 14–21 days
STEP 3: Maximise Conversion Value (no target)
   ↓  add a loose tROAS target — 14 days
STEP 4: Maximise Conversion Value + tROAS
   ↓  tighten in 10–15% steps
DONE
```

Each step is a separate learning phase. **The whole process takes 8–12 weeks.** Anyone promising it in a week is either lucky or about to damage an account.

---

## Step 1: Add Values While Staying on tCPA (30 days)

**What you do:** set up accurate conversion values. Change nothing about bidding.

**Why:** you get 30 days of value data flowing in while the campaign continues performing normally. If the values are wrong, you find out now — with no bidding consequences.

**What to check during this period:**

- Do the values in Google match the business's actual records? Compare monthly totals.
- Is there a value on every conversion, or are some arriving at zero?
- Do the values look sensible? Any absurd outliers?

⚠️ **Zero-value conversions are the most common problem here.** If 30% of your conversions arrive with no value, value bidding will treat them as worthless and stop pursuing them. Find and fix this before Step 2.

**Do not proceed until the monthly value total in Google is within 10% of the business's actual figure.**

---

## Step 2: Maximise Conversion Value, No Target (14–21 days)

**What you do:** switch the bid strategy to Maximise Conversion Value. **Set no target.**

**Why no target:** you are asking the AI to learn the value relationship first. Adding a target at the same time gives it two new problems at once.

**What to expect:**

| Week | Typical behaviour |
|---|---|
| 1 | Volume drops, average order value rises, ROAS unstable |
| 2 | Beginning to settle |
| 3 | Approaching a new normal |

**What to watch:** total conversion value, not conversion count. Count will probably fall. Value should hold or rise.

**Do not intervene** unless something is really broken.

---

## Step 3: Calculate and Add Your First tROAS

After Step 2 has stabilised, read your **actual achieved ROAS** over the last 14 days.

### The calculation

Say Step 2 settled at an actual ROAS of **3.6x**.

**Set your first target 10% below the actual: 3.2x.**

Why below? Because a target slightly looser than your actual keeps volume stable while giving Google a floor. Setting it above your actual immediately squeezes volume and starts you in a fight.

### Sanity checks

Cross-check against Lesson 0.3:

- **Breakeven ROAS** = AOV ÷ contribution margin. Your target must be above this.
- **Target ROAS** = breakeven × 1.3–1.5.

Sana: breakeven 1.92x, so her target range is 2.5–2.9x. Her actual is 3.6x, which is comfortably above the range.

**In that case, do not loosen to 2.5x.** She is already achieving more. Set 3.2x and see whether volume grows without profit falling.

⚠️ **The rule:** the theoretical target range tells you the *floor*. Your actual performance tells you the *starting point*. Use whichever is higher.

---

## Step 4: Tighten Gradually

Same ladder as Lesson 5.3. 10–15% steps, 14 days apart.

```
3.2x → hold 14 days → 3.5x → hold 14 days → 3.9x → volume falls 40% → back to 3.5x
```

**Stop when total profit stops rising.** Not when ROAS stops rising. These are different points, and confusing them is the most common error at this stage.

---

## The Rollback Plan

Write this before you start. You will not think clearly in the middle of a bad week.

### Rollback triggers

Define these as numbers, in advance:

| Trigger | Example threshold |
|---|---|
| Total conversion value falls below X% of baseline | Below 70% for 10 consecutive days |
| Conversion volume falls below X% of baseline | Below 50% for 10 consecutive days |
| Total profit falls below X | Below breakeven for 14 days |
| Something is clearly broken | Immediate |

### How to roll back

1. Switch back to the exact previous strategy and target
2. **Expect another 14-day learning phase.** Rolling back is not instant recovery.
3. Investigate the cause before trying again
4. Do not attempt the transition again for at least 60 days

⚠️ **The most important rule:** do not roll back on day 4. Weeks 1–2 are supposed to look bad. Your rollback triggers should need **10–14 consecutive days** of poor performance, not a bad Tuesday.

---

## Common Failure Modes

### Failure 1: Values are wrong
**Symptom:** the AI chases strange traffic; average order value moves in odd directions.
**Cause:** tax included, shipping included, or zero-value conversions.
**Fix:** go back to Step 1. Do not proceed until values reconcile with business records.

### Failure 2: Not enough value variation
**Symptom:** tROAS behaves identically to tCPA, with more work.
**Cause:** all conversions are worth roughly the same.
**Fix:** stay on tCPA. There is no shame in this — it is the correct choice for many businesses.

### Failure 3: Transitioned during a seasonal period
**Symptom:** the AI learns a pattern that then disappears.
**Cause:** Ramadan, Eid, Black Friday, or a one-off promotion during the warm-up.
**Fix:** never transition during an anomaly. Wait for normal conditions.

### Failure 4: Skipped Step 2
**Symptom:** volume collapses immediately and does not recover.
**Cause:** jumping straight from tCPA to tROAS with a target.
**Fix:** roll back, wait 60 days, do it properly.

### Failure 5: The business could not tolerate the dip
**Symptom:** the client demands a rollback in week two.
**Cause:** expectations were not set in writing beforehand.
**Fix:** this is a communication failure, not a technical one. Prevent it with Step 0 — the written agreement.

---

## 📖 Real-World Example: A Transition Done Twice

Sana attempted the transition to value bidding twice. The first attempt failed. Understanding both is more useful than the success alone.

### Attempt 1 (failed)

She read about value bidding and switched her main campaign straight from tCPA PKR 1,750 to tROAS 3.0x on a Monday.

**What she had not checked:** 22% of her conversions were arriving with **zero value**. A checkout plugin update had broken the value on orders paid by cash on delivery — which was 22% of her business.

**What happened:**

| Week | Sales | Revenue | ROAS |
|---|---|---|---|
| Baseline | 78 | PKR 390,000 | 3.4x |
| Week 1 | 41 | PKR 246,000 | 2.9x |
| Week 2 | 33 | PKR 214,000 | 3.1x |
| Week 3 | 29 | PKR 203,000 | 3.4x |

Google had learned that cash-on-delivery buyers were worthless, because that is what the data said. It always stopped bidding on the traffic that produced them — which in Karachi was a large share of her best customers.

She rolled back in week 3. Recovery took another three weeks. **Total cost of the mistake: roughly PKR 180,000 in lost margin.**

### Attempt 2 (successful, 11 weeks later)

**Step 0 (week 1).** She fixed the cash-on-delivery value bug. Then she reconciled: Google's monthly conversion value versus her actual order system.

- Google: PKR 1,402,000
- Her system: PKR 1,455,000
- Gap: 3.6% ✅ Acceptable

**Step 1 (weeks 2–5).** Values flowing, still on tCPA. She checked the reconciliation weekly. She also found and fixed two products sending values including 18% tax.

**Step 2 (weeks 6–8).** Switched to Maximise Conversion Value, no target.

| Week | Sales | Total value | Avg order |
|---|---|---|---|
| Baseline | 81 | PKR 402,000 | PKR 4,963 |
| Week 6 | 64 | PKR 371,000 | PKR 5,797 |
| Week 7 | 71 | PKR 428,000 | PKR 6,028 |
| Week 8 | 74 | PKR 461,000 | PKR 6,230 |

**Sales fell. Value rose.** Google had found buyers who purchased the filter *plus* cartridges, rather than the cheap bottle. Exactly the intended behaviour (Lesson 0.4).

Note that she judged on **total value**, not sales count. Had she judged on count, week 6 would have looked like a failure.

**Step 3 (week 9).** Actual ROAS over weeks 7–8: 3.7x. She set tROAS at **3.4x**.

**Step 4 (weeks 10–18).** Tightened: 3.4x → 3.7x → 4.0x. At 4.0x, volume fell 31% and total profit fell. She returned to 3.7x and settled.

### Final comparison

| | Before (tCPA) | After (tROAS 3.7x) |
|---|---|---|
| Sales/month | 324 | 291 |
| Revenue/month | PKR 1,608,000 | PKR 1,824,000 |
| Ad spend | PKR 473,000 | PKR 493,000 |
| Average order value | PKR 4,963 | PKR 6,268 |
| **Gross profit** | **PKR 363,000** | **PKR 456,000** |

**10% fewer sales. 26% more profit.**

**Her note in the change log:** *"Attempt 1 failed because I skipped the boring part. The boring part was the whole job."*

---

## 📊 Mastery Score

**Level: Expert**

This is where most agencies stop. The transition is slow, unglamorous and easy to get wrong. Doing it properly is a genuine differentiator.

---

## 📌 Key Takeaways

- Value bidding changes what Google hunts for. The AI must rebuild its entire model.
- Five prerequisites: accurate values, real value variation, 50+ conversions/month, stable performance, and business tolerance for a dip.
- Climb the four-step ladder. Never jump straight from tCPA to tROAS with a target.
- Set your first tROAS 10% below your actual achieved ROAS, and cross-check against breakeven.
- Write rollback triggers in advance, needing 10–14 consecutive bad days — not a bad Tuesday.

---

## ☑️ Self-Assessment

1. Do your conversion values reconcile with the business's actual records within 10%?
2. What percentage of your conversions arrive with zero value? Have you checked?
3. Is there genuine value variation in your conversions, or are they all similar?
4. Does the business have the cash and patience for a three-week dip?
5. Have you written your rollback triggers as specific numbers?

---

## 🧠 Quiz

**1. Why is switching from tCPA to tROAS risky?**
a) It costs more
b) It changes what Google optimises for, so the AI must rebuild its model
c) Google charges a fee
d) It is against policy

**2. What is the minimum monthly conversion volume for value bidding?**
a) 5
b) 15
c) 50
d) 500

**3. Why does Step 2 use Maximise Conversion Value with NO target?**
a) Targets are not available
b) So the AI learns the value relationship before also handling a limit
c) To save money
d) It is faster

**4. Your actual ROAS after Step 2 is 3.6x. What should your first target be?**
a) 5.0x
b) About 3.2x
c) 1.5x
d) 10x

**5. 22% of conversions arrive with zero value. What will happen with tROAS?**
a) Nothing
b) Google will treat that traffic as worthless and stop bidding on it
c) Google will estimate the value
d) The campaign will pause

---

## 💪 Practical Exercise (40 minutes)

Assess one account's readiness for value-based bidding.

1. Check each of the five prerequisites and score pass or fail.
2. Export 90 days of conversions with values. Calculate the average and the range.
3. Count how many conversions arrived with zero value. Calculate the percentage.
4. Reconcile Google's monthly conversion value against the business's actual figure.
5. If ready, write the full 12-week plan with dates for each step.
6. Write your rollback triggers as specific numbers.

---

## 🎯 Expert Challenge

Design and document a complete value-based bidding migration for a real business.

- Build the value accuracy audit: every conversion path, what value it should carry, what value it actually carries, and the gap. Include edge cases — refunds, partial orders, cash on delivery, subscription renewals.
- Model the expected transition curve week by week, so you have a written prediction to compare against. Include the worst realistic case, not just the expected case.
- Design the reconciliation process that will run monthly forever afterwards, comparing Google's values to the business's books.
- Write the stakeholder agreement: what the business is signing up for, what the dip will look like, what triggers a rollback, and who has authority to call it.
- Build the post-transition analysis: how you will prove, at week 16, that the transition was worth doing — separating value bidding's effect from every other change that happened in that period. Most people cannot do this, which is why most agencies cannot prove their own value.

---

## ✅ Quiz Answers

1 — **b**. The optimisation objective changes entirely.
2 — **c**. 50 per month minimum, more is better.
3 — **b**. One new problem at a time.
4 — **b**. About 10% below the achieved actual.
5 — **b**. Zero-value traffic is treated as worthless and abandoned.

---

**Next lesson:** 5.5 — Tell Google Which Leads Are Worth More
