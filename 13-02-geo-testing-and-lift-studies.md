# Lesson 13.2 — Prove Your Ads Caused the Sales

*Phase 7 · Proving What Works, and Growing — Module 13 · Prove What Actually Works*

---

## Quick Recap From Lesson 13.1

Campaign experiments measure changes *within* Google Ads, using Google's own conversion data. Geo-testing measures the effect on your *whole business*, using your own revenue data. That difference matters enormously.

---

## 🎯 What You Will Learn

- What incrementality actually means, and why attribution cannot measure it
- How a geo experiment works
- How to select matched test and control regions
- How to calculate the result and its confidence
- What lift studies do, and their limitations

---

## The Question Attribution Cannot Answer

Attribution answers: *"Which touchpoint should get credit for this sale?"*

**Incrementality answers a different and more important question:** *"Would this sale have happened without the advertising?"*

### Why this matters

From Lesson 6.3: PMax reported 94 conversions. Total account conversions rose by 8. **Most of those 94 sales would have happened anyway.**

Attribution said PMax was a success. Incrementality said it was mostly a transfer.

⚠️ **No attribution model can answer the incrementality question**, because attribution only sees people who converted. It cannot see the counterfactual — what would have happened if you had not advertised.

**Think of a shop that hires someone to hand out flyers outside the door.** At the end of the day, 200 people who took a flyer came in. Did the flyers cause those visits, or would those people have walked in anyway? Counting flyer-holders cannot tell you. **You need a day with no flyers to compare against.**

**Geo-testing gives you that day.**

---

## How a Geo Experiment Works

The principle is simple. The execution needs care.

```
1. Split your market into TEST regions and CONTROL regions
2. Check the two groups behaved similarly historically
3. Change something in the TEST regions only
4. Leave CONTROL regions completely unchanged
5. Measure TOTAL BUSINESS RESULTS in both groups
6. The difference between them is your incremental effect
```

### The critical detail

**You measure your own total revenue or customers, not Google Ads conversions.**

This is what makes geo-testing powerful. It bypasses attribution entirely. It does not matter whether Google, Meta or organic gets the credit — you are measuring what the business actually earned.

---

## What Geo-Testing Can Measure

| Question | Testable? |
|---|---|
| Is PMax incremental to Search? | ✅ Yes |
| Does YouTube drive sales it never gets credit for? | ✅ Yes |
| Is our brand campaign worth running? | ✅ Yes — the classic use |
| Would 30% more budget produce 30% more customers? | ✅ Yes |
| Does Demand Gen create demand or capture it? | ✅ Yes |
| Which keyword converts best? | ❌ No — too detailed |
| Which headline performs better? | ❌ No — use a campaign experiment |

**Geo-testing is for channel-level and budget-level questions.** For anything within a campaign, use Lesson 13.1.

---

## Selecting Matched Regions

**This is the step that works out whether your test is valid.**

### The what you need

**1. Enough regions.** Minimum 6 per group; 10+ is much better. Two regions per group is not a test, it is an anecdote.

**2. Enough volume per region.** Each region needs enough conversions that its results are not pure noise. Apply the sample size logic from Lesson 13.1 to the group total.

**3. Historical similarity.** The two groups must have moved together before the test.

**4. No spillover.** Regions must be geographically separated enough that people do not routinely cross between them. Testing two adjacent city districts fails this.

**5. No structural differences.** Do not put all your cities in one group and all rural areas in the other.

### The matching method

**Step 1.** Export 6–12 months of weekly revenue or customers by region.

**Step 2.** For each region, calculate the average and the trend.

**Step 3.** Pair regions with similar volume and similar trend.

**Step 4.** Assign one of each pair to test and one to control.

**Step 5. Check the match.** Plot the two group totals over the historical period. **They should track closely.**

⚠️ **If the two lines diverge historically, your regions are not matched and the test will produce a meaningless result.** Re-pair and check again.

### A worked matching

| Region | Weekly avg revenue | 12-month trend | Assigned |
|---|---|---|---|
| Karachi Central | 412,000 | +14% | Test |
| Lahore Central | 398,000 | +16% | Control |
| Islamabad | 218,000 | +9% | Test |
| Faisalabad | 224,000 | +11% | Control |
| Rawalpindi | 186,000 | +12% | Control |
| Multan | 179,000 | +10% | Test |
| Peshawar | 141,000 | +7% | Test |
| Gujranwala | 138,000 | +8% | Control |
| Hyderabad | 96,000 | +6% | Control |
| Sialkot | 91,000 | +7% | Test |

**Test group total:** 1,006,000/week
**Control group total:** 1,054,000/week
**Difference:** 4.6% — close enough, and you correct for it in the analysis.

---

## Running the Test

### Step 1: Set up the baseline

Run both groups unchanged for **4–8 weeks**, recording weekly results.

**Calculate the baseline ratio:**

```
Baseline ratio = Test group revenue ÷ Control group revenue
```

If the test group runs consistently at 0.954 of the control, that is your baseline. You will compare against this ratio, not against raw numbers.

### Step 2: Apply the change to test regions only

**Examples:**
- Pause the brand campaign in test regions
- Add YouTube spend in test regions
- Increase budget 40% in test regions
- Launch PMax in test regions

⚠️ **Change nothing in the control regions. Nothing at all.** Not budgets, not creative, not bids. Any change to the control destroys the comparison.

### Step 3: Run for long enough

**Minimum 4 weeks. Typically 6–10.**

Longer for:
- Channels with delayed effects — YouTube, Demand Gen (Lesson 6.5)
- Long consideration cycles
- Low volume

⚠️ **Avoid running through anomalous periods.** A test spanning Ramadan or Black Friday is worthless (Lesson 10.3).

### Step 4: Measure and calculate

**Compare the ratio during the test to the baseline ratio.**

```
Baseline ratio:        0.954
During-test ratio:     1.087
Lift = (1.087 ÷ 0.954) − 1 = +13.9%
```

**The test regions performed 13.9% better than they would have, relative to the control.**

### Step 5: Convert to money

```
Test group revenue during test:  PKR 8,940,000
Expected without the change:     8,940,000 ÷ 1.139 = PKR 7,849,000
Incremental revenue:             PKR 1,091,000
Extra spend in test:        PKR 340,000
Incremental ROAS:                3.2x
```

**That incremental ROAS is a real number.** Unlike platform ROAS, it reflects revenue that would not otherwise have existed.

---

## Reading the Result Honestly

### Confidence

With 5 regions per group and 8 weeks of data, you have 40 region-weeks per group. That is usually enough to detect a 10–15% effect.

**Check the week-by-week consistency.** A genuine effect appears in most weeks. A result driven by one unusual week in one region is noise.

⚠️ **Plot it.** A chart of the ratio over time, with the test start marked, tells you more than any single number. A genuine effect shows as a visible step change.

### Three possible outcomes

**1. Clear positive lift.** The change was incremental. Roll it out.

**2. No detectable lift.** Either the change really does nothing incremental, or the effect is smaller than your test could detect.

**3. Negative lift.** The change harmed results. Valuable, and it happens.

### The most valuable result

⚠️ **A well-designed geo test showing that a channel is NOT incremental will save more money than most optimisations will ever earn.**

Turning off a channel that reports good ROAS but produces no incremental revenue is one of the highest-value actions available — and only a geo test can justify it.

---

## Lift Studies

Google offers formal lift studies through a representative, typically for larger advertisers.

### The types

**Brand lift** — surveys people who did and did not see your ads, measuring differences in awareness, consideration and intent.

**Search lift** — measures whether people exposed to your video or display ads later searched for your brand more than a holdout group.

**Conversion lift** — measures the difference in conversion rate between exposed and holdout groups.

### The advantages

- Google holds out a genuine randomised control group
- Statistically careful
- Measures effects invisible to attribution

### The limitations

⚠️ **Availability.** Usually needs significant spend and a rep relationship (Lesson 10.4).

⚠️ **Google runs the study.** The measurement is done by the party selling the advertising. That does not make it wrong, but you should treat it as one input rather than the final word.

⚠️ **Brand lift measures attitudes, not sales.** A 12% lift in "consideration" is interesting. It is not revenue.

**Use lift studies alongside geo-testing, not instead of it.** A geo test you designed and measured with your own revenue data is more trustworthy than any study run by a vendor.

---

## When Not to Geo-Test

Be honest about the cost.

❌ **Not enough regions or volume.** Below roughly 6 regions per group with meaningful volume, the result will not be reliable.

❌ **Regions that are not separable.** If your customers routinely cross between test and control areas, spillover contaminates the result.

❌ **The question is too small.** Geo tests are expensive in time and opportunity. Use them for decisions worth tens or hundreds of thousands.

❌ **You will not act on the result.** If the business will keep running the brand campaign regardless, do not spend eight weeks proving it should not.

⚠️ **That last point is worth taking seriously.** Ask before you start: *"If this test shows no lift, will we actually turn the channel off?"* If the answer is no, the test is theatre.

---

## 📖 Real-World Example: The Brand Campaign Test

The most common and most contested question in paid search: **is the brand campaign worth running?**

Bilal had this argument with three clients. He decided to settle it with data.

### The client

A UK retailer, £84,000 monthly spend (the account from Lesson 9.1). Brand campaign spend: £4,200 a month, reporting a ROAS of 14.2x.

**The client's position:** brand is our best channel, look at the ROAS.
**Bilal's position:** most of those people would have found us anyway.
**Neither had evidence.**

### The design

**Regions:** he used 12 UK regions, matched into 6 test and 6 control.

**Matching verification:** he plotted 26 weeks of weekly revenue for both groups. The lines tracked closely, with a stable baseline ratio of 0.968.

**The change:** pause the brand campaign entirely in the 6 test regions. Leave control regions completely unchanged.

**Duration:** 8 weeks.

**The measurement:** total revenue from all sources in each region group — not Google Ads conversions. Taken from the client's order system, by delivery postcode.

**The pre-agreement, in writing:** *"If total revenue in test regions falls by more than 4% relative to control, brand is incremental and we keep it everywhere. If it falls by less than 2%, we reduce it a lot. Between 2 and 4%, we reduce it partially."*

⚠️ **Agreeing the decision rule before seeing the data is essential.** Without it, whoever is most persuasive after the fact wins the argument.

### The results

| Week | Test group revenue | Control group revenue | Ratio |
|---|---|---|---|
| Baseline avg (8 wks) | £298,400 | £308,300 | 0.968 |
| Test week 1 | £286,100 | £301,400 | 0.949 |
| Test week 2 | £291,700 | £312,800 | 0.933 |
| Test week 3 | £284,900 | £304,100 | 0.937 |
| Test week 4 | £302,200 | £319,600 | 0.946 |
| Test week 5 | £288,400 | £306,700 | 0.940 |
| Test week 6 | £294,100 | £314,200 | 0.936 |
| Test week 7 | £281,600 | £299,800 | 0.939 |
| Test week 8 | £296,300 | £316,100 | 0.937 |

**Average during test: 0.940**
**Baseline: 0.968**

```
Lift = (0.940 ÷ 0.968) − 1 = −2.9%
```

**Pausing brand reduced total revenue by 2.9%.**

### What that meant in money

- Test group revenue during 8 weeks: £2,325,300
- Expected with brand running: 2,325,300 ÷ 0.971 = £2,394,700
- **Revenue lost by pausing brand: £69,400 over 8 weeks**
- Brand spend saved in test regions: £16,800 over 8 weeks

**Pausing brand saved £16,800 and cost £69,400 in revenue.**

At their 42% gross margin, £69,400 of revenue is £29,150 of gross profit.

**Net effect of pausing: −£12,350 over 8 weeks.** Brand was incremental.

### But look at the numbers more carefully

Brand campaign attribution said it produced 14.2x ROAS. Across the whole account that implied roughly £59,600 of revenue per month from £4,200 of spend.

**The geo test showed the true incremental revenue was about £4,340 per month per region group** — scaling up, roughly £8,700 monthly across the business.

**Attribution: £59,600. Incremental: £8,700.**

**Brand was incremental — but at about 15% of the level attribution claimed.**

### The decision

The pre-agreed rule said 2–4% meant partial reduction.

They reduced brand spend from £4,200 to £2,400 a month, keeping enough for competitive defence (Lesson 9.6) and focusing it on the terms where competitors were actually bidding.

**Revenue impact: almost nothing. Saving: £1,800 a month, reallocated to non-brand search.**

### Why both sides were partly wrong

**The client was wrong** that brand was their best channel. A 14.2x ROAS was mostly credit for sales that would have happened.

**Bilal was wrong** that it produced nothing. It really contributed, just far less than reported.

**The test found the answer neither of them had guessed**, which is the point of testing.

### What made this test work

1. **Twelve regions**, properly matched and checked against historical data
2. **Total business revenue** as the metric, not Google Ads conversions
3. **Eight weeks**, long enough for a consistent weekly pattern
4. **A decision rule agreed in writing beforehand**
5. **Nothing changed in the control regions**
6. **A consistent effect across weeks**, not one anomalous week

**Remove any one of those and the result would have been arguable.**

---

## 📊 Mastery Score

**Level: Top 1%**

Incrementality testing is the highest form of measurement available to a marketer. It is also the one that most often produces answers people do not want to hear.

---

## 📌 Key Takeaways

- Attribution asks who gets credit. Incrementality asks whether the sale would have happened anyway. Only the second matters for budget decisions.
- Measure total business revenue by region, not Google Ads conversions. This bypasses attribution entirely.
- Match regions on historical performance and check the match by plotting the two group totals before the test.
- Agree the decision rule in writing before you see the data.
- A test proving a channel is not incremental saves more money than most optimisations earn.

---

## ☑️ Self-Assessment

1. Could you split your market into 6+ matched test and control regions?
2. Do you have revenue data by region, from the business rather than from Google?
3. Which channel in your account do you most suspect is not incremental?
4. If a test showed it was not incremental, would the business actually turn it off?
5. Have you ever agreed a decision rule before running a test?

---

## 🧠 Quiz

**1. What does a geo experiment measure that attribution cannot?**
a) Cost per click
b) Whether the sales would have happened without the advertising
c) Quality Score
d) Impression share

**2. What should you measure during a geo test?**
a) Google Ads conversions in each region
b) Total business revenue or customers by region, from your own system
c) Impressions
d) Click-through rate

**3. How many regions per group do you need?**
a) 1
b) 2
c) 6 minimum, 10+ better
d) 50

**4. What must you check before starting?**
a) The weather forecast
b) That the two region groups tracked closely in historical data
c) Your Quality Score
d) That budgets are equal

**5. Brand attribution claimed £59,600/month. The geo test showed £8,700 incremental. What does this mean?**
a) The tracking was broken
b) Brand contributed really, but at roughly 15% of the level attribution claimed
c) Brand was worthless
d) The test was wrong

---

## 💪 Practical Exercise (40 minutes)

Design a geo experiment.

1. Export 6 months of weekly revenue by region from the business's own system.
2. Find how many regions have enough volume to be usable.
3. Pair them by volume and trend, and assign to test and control.
4. Plot both group totals over the historical period. Do they track closely?
5. Calculate the baseline ratio.
6. Write the test design: what changes, for how long, and the decision rule with specific numbers.

---

## 🎯 Expert Challenge

Build an incrementality measurement programme.

- Build the region matching model properly, using correlation of historical weekly revenue rather than eyeballing the numbers, and document why each pairing was made.
- Design a rolling test calendar: which channel gets tested when, so that over eighteen months every significant channel has been measured for incrementality at least once.
- Calculate the minimum detectable effect for your region structure. If you can only detect a 20% lift, be clear that a genuine 10% effect would return as "no lift" — and do not let that be misread as proof of no effect.
- Build the decision rules for each test in advance, agreed and signed by whoever controls the budget.
- Design the spillover check: measure whether control regions show any change during the test. If they do, your regions are not independent and the result needs adjusting.
- Then build the incrementality-adjusted reporting: for every channel, show attribution-reported performance alongside measured incremental performance. Once a business sees that comparison, it never goes back to reporting on attribution alone — and that shift in how the business thinks is worth more than any single test result.

---

## ✅ Quiz Answers

1 — **b**. The counterfactual — what would have happened otherwise.
2 — **b**. Total business results by region, from your own data.
3 — **c**. Six minimum, ten or more preferred.
4 — **b**. That the groups tracked closely historically.
5 — **b**. Really incremental, but far less than attribution claimed.

---

**Next lesson:** 13.3 — Google, Meta and TikTok: Who Gets the Credit?
