# Lesson 5.2 — The Learning Phase: Why You Must Wait

*Phase 3 · Bidding and Other Ad Types — Module 5 · How to Set Your Bids*

---

## Quick Recap From Lesson 5.1

You know which strategy to choose. Now we look closely at the two you will use most, and at the learning phase that decides whether they succeed.

---

## 🎯 What You Will Learn

- Exactly what Maximise Conversions does with your budget
- When to use conversion *count* versus conversion *value*
- What the learning phase is, and what happens inside it
- The 14-day process that protects a new strategy
- How to recover a campaign stuck in learning

---

## Maximise Conversions: What It Really Does

**The instruction you give Google:** "Spend my whole daily budget, and get me as many conversions as you can with it."

Read that carefully. **It will spend the entire budget.** Every day, if the traffic exists.

### What this means in practice

✅ **Good:** it will not under-spend. If there is winnable traffic, it will find it.

⚠️ **Watch out:** if your budget is too high for your market, it will spend the extra money on progressively worse traffic to hit the budget.

**Think of a shopping instruction.** "Spend all PKR 10,000 and buy as many mangoes as possible." If good mangoes cost PKR 100 each, you get 100 good mangoes. If only 60 good mangoes exist in the market, you will come home with 60 good ones and 40 poor ones — because you were told to spend everything.

### The practical implication

**Your budget becomes your control mechanism.** With Maximise Conversions and no target, the budget *is* the lever.

- Too low → you miss winnable conversions
- Too high → you buy poor traffic to fill the budget
- Correct → all winnable good traffic, nothing wasted

**How to find the right budget:** watch **Search lost impression share (budget)**. If it is above about 10%, you are leaving winnable conversions unbought. If it is near zero and cost per conversion is rising, your budget may exceed the good traffic available (Lesson 8.1).

---

## Maximise Conversion Value: When to Use It Instead

**The instruction:** "Spend my whole budget, and get me as much conversion *value* as possible."

### Use conversion count (Maximise Conversions) when:

- Every conversion is worth roughly the same
- Lead generation with a single service
- You do not yet have reliable values

### Use conversion value (Maximise Conversion Value) when:

- Order values vary a lot
- You sell products with different margins (Lesson 0.4)
- You have assigned different values to different lead types (Lesson 2.3)
- Your conversion values are accurate and stable

### Why the difference matters

Sana sells filters at PKR 5,000 and cartridges at PKR 1,200.

**On Maximise Conversions:** Google treats both as one conversion. It will happily chase 100 cartridge sales instead of 40 filter sales, because 100 is more than 40.

**On Maximise Conversion Value:** Google sees PKR 5,000 versus PKR 1,200 and pursues value.

**And if she sends profit instead of revenue** (Lesson 0.4), Google pursues actual profit. That is the elite configuration.

⚠️ **Prerequisite:** Maximise Conversion Value only works if your values are accurate. Wrong values produce confidently wrong bidding. Check with Lesson 2.5 before switching.

---

## The Learning Phase: What Actually Happens

When you create a new campaign, or make a significant change, the campaign enters the **learning phase**.

### What Google is doing

It is running experiments. It bids differently across different auction types, watches what converts, and builds a prediction model.

**Some of those experiments will lose money.** That is not a fault — it is how learning works. You cannot find out that 2am mobile traffic converts badly without buying some of it.

### What triggers a learning phase

| Change | Triggers learning? |
|---|---|
| New campaign | ✅ Yes |
| Changing bid strategy | ✅ Yes |
| Large budget change (over ~30%) | ✅ Usually |
| Large target change (over ~20%) | ✅ Usually |
| Changing conversion actions | ✅ Yes |
| Changing conversion values | ✅ Yes |
| Adding or pausing many keywords | ⚠️ Sometimes |
| Adding negative keywords | ❌ No |
| Editing ad copy | ❌ Usually not |
| Adding assets | ❌ No |

**Notice the last three.** These are the changes you *can* safely make during learning. That is exactly what the Lesson 4.6 launch process allows.

### How long it lasts

Officially, usually 7 days or roughly enough conversions to build a model. In practice, **plan for 14 days** before judging anything.

Low-volume campaigns take longer. A campaign with 8 conversions a month may take a month or more.

### What to expect during learning

| | Typical pattern |
|---|---|
| Days 1–3 | Volatile. Cost per conversion often 2–3× target. |
| Days 4–7 | Still unstable, beginning to settle. |
| Days 8–14 | Approaching normal. First useful signal. |
| Days 15+ | Judge now, not before. |

---

## The 14-Day Learning Phase Process

Follow this exactly whenever you launch a campaign or change a bid strategy.

### Before you start

- [ ] Confirm conversion tracking works *(Lesson 2.5)*
- [ ] Confirm only 1–2 Primary conversions *(Lesson 2.3)*
- [ ] Set the budget you actually intend to keep for a month
- [ ] Write down your expected cost per conversion, **before launch**
- [ ] Tell the client the timeline in writing

### Days 1–3
**Allowed:** add negatives, fix broken URLs, replace disapproved ads.
**Forbidden:** bid strategy, budget, targets, pausing keywords.
**Check:** are ads serving? Any disapprovals? Is tracking firing?

### Days 4–7
**Allowed:** negatives, ad asset additions.
**Forbidden:** everything else.
**Check:** search terms daily. Is traffic broadly relevant?

### Days 8–14
**Allowed:** negatives, assets, minor ad copy improvements.
**Forbidden:** bid strategy, budget, targets.
**Check:** is cost per conversion trending downward? Direction matters more than level.

### Day 15: First honest review

Now compare against your written expectation.

| Result | Action |
|---|---|
| At or better than target | Consider adding a tCPA slightly below the current actual *(Lesson 5.3)* |
| Within 30% of target and improving | Wait another 7 days. It is still settling. |
| More than 50% above target and flat | Investigate: tracking, offer, landing page, keyword intent. **Not the bid strategy.** |
| Almost no conversions at all | Check volume. The campaign may lack enough traffic to work at all. |

⚠️ **Notice what is not on that list: "switch bid strategy".** If a strategy fails, the cause is almost always elsewhere — tracking, offer, page, or intent. Switching strategies restarts learning and hides the real problem.

---

## The "Limited by Budget" Warning

You will often see a "Limited by budget" label during learning.

**What it means:** Google would spend more if you let it.

**Should you raise the budget?** Not automatically. Check first:

1. **Is the cost per conversion acceptable?** If it is above target, more budget buys more expensive conversions. Do not raise it.
2. **Is Search lost IS (budget) high?** Above 10% means real missed opportunity.
3. **Is the campaign still in learning?** If yes, wait. Raising budget mid-learning restarts it.

**The correct sequence:** finish learning → check cost per conversion is acceptable → then raise budget by 20–30% → wait a week → repeat.

---

## Rescuing a Campaign Stuck in Learning

Some campaigns never leave learning. Here is how to diagnose it.

### Cause 1: Not enough conversions

**Symptom:** fewer than 15 conversions a month.

**Fixes:**
- Merge with a similar campaign (Lesson 1.4)
- Temporarily use a strong micro-conversion as Primary, with a planned exit (Lesson 2.3)
- Widen targeting or match types
- Raise the budget if impression share allows
- Accept that a very small business may need manual bidding

### Cause 2: Too many changes

**Symptom:** Change History shows frequent edits.

**Fix:** stop. 21 days of stability. Negatives only.

### Cause 3: Conversion tracking problems

**Symptom:** conversions arriving inconsistently, or dropping suddenly.

**Fix:** run the Lesson 2.5 process. This is the most commonly missed cause.

### Cause 4: The budget is too small for the market

**Symptom:** the daily budget buys 2–3 clicks.

**Fix:** consolidate budget into fewer campaigns, or narrow the targeting so your budget concentrates on the best traffic.

### Cause 5: Genuine seasonality or volatility

**Symptom:** demand swings wildly week to week.

**Fix:** seasonality adjustments (Lesson 10.3), and longer judgement windows.

---

## 📖 Real-World Example: Two Campaigns, One Difference

Sana launched two campaigns on the same day, with identical setups, budgets and offers. The only difference was how she managed them.

**Campaign A: `Search | PK-KHI | Water Filters | Phrase | Sales`** — she followed the process.
**Campaign B: `Search | PK-KHI | Water Filters | Broad | Sales`** — she managed it "actively", as she had always done.

Both: PKR 1,500/day, Maximise Conversions, same keywords in different match types, same ads, same landing page.

### Campaign A: The process

| Days | What she did | Cost per sale |
|---|---|---|
| 1–3 | Added 14 negatives. Nothing else. | PKR 4,800 |
| 4–7 | Added 9 negatives. Nothing else. | PKR 3,100 |
| 8–14 | Added 6 negatives, added 4 sitelinks. | PKR 2,050 |
| 15–21 | Reviewed. Added tCPA at PKR 1,800. | PKR 1,740 |
| 22–35 | Nothing. | PKR 1,520 |

### Campaign B: "Active management"

| Days | What she did | Cost per sale |
|---|---|---|
| 1–3 | Panicked at PKR 5,100. Lowered budget 50%. | PKR 5,100 |
| 4–6 | Still bad. Switched to Manual CPC at PKR 30. | PKR 4,600 |
| 7–9 | Almost no impressions. Raised bid to PKR 60. | PKR 5,400 |
| 10–13 | Switched to tCPA at PKR 1,500. | PKR 6,200 |
| 14–17 | "tCPA too tight." Raised to PKR 3,000. | PKR 3,900 |
| 18–24 | Switched back to Maximise Conversions. | PKR 4,100 |
| 25–35 | Gave up, left it alone. | PKR 2,900 |

### The comparison at day 35

| | Campaign A | Campaign B |
|---|---|---|
| Total spend | PKR 52,500 | PKR 41,200 |
| Sales | 32 | 11 |
| Cost per sale | **PKR 1,641** | **PKR 3,745** |
| Profit (margin PKR 2,600) | **+PKR 30,700** | **−PKR 12,600** |

**Same offer. Same ads. Same market. Same starting day.**

Campaign B was not badly built. It was badly *managed*. Every intervention felt reasonable at the time, and each one restarted learning before the previous one could work.

Notice also that Campaign B's numbers finally began improving in the last stretch — **after she gave up and left it alone.** That is the whole lesson, delivered by accident.

**Sana's note in her change log afterwards:** *"Doing nothing was the highest-value work I did all month."*

---

## 📊 Mastery Score

**Level: Intermediate**

The technical content here is simple. The behavioural discipline is what most people never master.

---

## 📌 Key Takeaways

- Maximise Conversions spends your entire budget. The budget is your control lever.
- Use Maximise Conversion Value when conversions are worth different amounts — but only if your values are accurate.
- Learning takes 7–14 days. Plan for 14 before judging anything.
- During learning, you may add negatives, assets and minor ad edits. Nothing else.
- If a strategy appears to fail, look at tracking, offer, page and intent — not at the bid strategy.

---

## ☑️ Self-Assessment

1. Are any of your campaigns currently in the learning phase? For how long?
2. Do you write down your expected cost per conversion before launching?
3. When did you last change a budget by more than 30% in one step?
4. Which of your campaigns should be on value bidding rather than conversion count?
5. Could you tell a client "I am changing nothing for 14 days" and hold to it?

---

## 🧠 Quiz

**1. What does Maximise Conversions do with your budget?**
a) Spends only what is efficient
b) Spends the entire daily budget, seeking as many conversions as possible
c) Saves unused budget
d) Bids the same on every auction

**2. When should you use Maximise Conversion Value instead of Maximise Conversions?**
a) Always
b) When conversions are worth different amounts and your values are accurate
c) Only for lead generation
d) When you have a small budget

**3. Which change does NOT trigger a new learning phase?**
a) Changing bid strategy
b) Adding negative keywords
c) Doubling the budget
d) Changing conversion values

**4. Day 5 of a new campaign shows cost per conversion at 3× target. What do you do?**
a) Switch bid strategy
b) Halve the budget
c) Add negatives, fix errors, and wait
d) Pause the campaign

**5. A campaign has been in learning for 8 weeks. What is the most likely cause?**
a) Google is broken
b) Not enough conversion volume, or too many changes
c) The ads are bad
d) The budget is too large

---

## 💪 Practical Exercise (30 minutes)

Set up a proper learning phase process for one campaign.

1. Write down the campaign's expected cost per conversion, before any change.
2. Check Change History for the last 30 days and count significant changes.
3. Write the 14-day plan: what you will do on days 1–3, 4–7, 8–14.
4. Write the day-15 decision rules — the specific numbers that trigger each action.
5. Draft the message you will send the client explaining the timeline.

---

## 🎯 Expert Challenge

Build a launch and learning management system.

- Create the pre-launch forecast document: expected cost per conversion, expected volume, and the confidence range, based on the Lesson 0.3 maths and comparable accounts.
- Design the learning phase dashboard: which campaigns are learning, how long they have been, and the trend in cost per conversion within the window.
- Define the escalation rules: at what point does a struggling campaign move from "wait" to "investigate", and what specific checks happen in the investigation, in order.
- Build the diagnosis tree for a campaign stuck in learning, covering all five causes, with the specific evidence that distinguishes them.
- Then measure your own forecasting accuracy over the next quarter. Compare your written pre-launch predictions against the day-30 reality. Consistently over-optimistic forecasts damage client trust more than poor performance does.

---

## ✅ Quiz Answers

1 — **b**. It spends everything, so the budget is your control.
2 — **b**. Varying values, with accurate value data.
3 — **b**. Negatives do not restart learning. That is why they are allowed.
4 — **c**. This is normal learning behaviour. Hold.
5 — **b**. Insufficient volume or excessive changes are the usual causes.

---

**Next lesson:** 5.3 — Setting Target CPA and Target ROAS
