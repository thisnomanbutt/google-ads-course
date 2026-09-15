# Lesson 10.3 — Plan for Busy Seasons Like Ramadan and Eid

*Phase 5 · Running Big Accounts and Clients — Module 10 · Handling Big Budgets and Clients*

---

## Quick Recap From Lesson 5.1

You know never to make changes during an anomaly. This lesson is about the anomalies you can see coming, and how to prepare for them.

---

## 🎯 What You Will Learn

- The difference between seasonality and a one-off event
- How to build a seasonality model from your own data
- Seasonality adjustments — what they do and when to use them
- The peak preparation timeline
- Managing Ramadan, Eid, Black Friday and other major peaks

---

## Two Different Things

People use "seasonality" for two situations that need opposite treatment.

### 1. Recurring seasonality

A pattern that repeats every year. Summer, winter, back to school, Ramadan.

**Smart Bidding already knows about these.** It has your historical data and it recognises annual patterns. Do not use seasonality adjustments for these.

### 2. Short, unusual events

A two-day flash sale. A one-off Eid promotion. A television appearance.

**Smart Bidding cannot predict these**, because they have not happened before or the timing differs each year.

**This is what seasonality adjustments are for.**

⚠️ **The most common mistake:** applying a seasonality adjustment for a normal weekend, or for Christmas in a business that has had Christmas peaks for nine years. Smart Bidding already handles it, and your adjustment double-counts the effect.

---

## Building a Seasonality Model

Before managing seasonality, measure it.

### The method

**Step 1.** Export three years of monthly data if available, otherwise as much as you have: conversions, revenue, cost, conversion rate.

**Step 2.** Calculate the monthly index.

> **Index = Month's conversions ÷ Average monthly conversions**

**Step 3.** Repeat for each year and check whether the pattern is consistent.

### A worked example — Sana's water filter store

| Month | Year 1 | Year 2 | Year 3 | Average index | Note |
|---|---|---|---|---|---|
| January | 0.81 | 0.79 | 0.84 | **0.81** | Post-holiday slowdown |
| February | 0.88 | 0.91 | 0.89 | **0.89** | |
| March | 1.04 | 1.08 | 1.06 | **1.06** | |
| April | 1.09 | 1.12 | 1.11 | **1.11** | |
| **May** | **1.42** | **1.38** | **1.47** | **1.42** | **Summer heat begins** |
| **June** | **1.61** | **1.58** | **1.66** | **1.62** | **Peak — water quality concerns** |
| July | 1.44 | 1.51 | 1.48 | **1.48** | |
| August | 1.21 | 1.18 | 1.24 | **1.21** | |
| September | 0.98 | 1.02 | 0.99 | **1.00** | |
| October | 0.86 | 0.84 | 0.88 | **0.86** | |
| November | 0.79 | 0.82 | 0.78 | **0.80** | |
| December | 0.87 | 0.79 | 0.84 | **0.83** | |

**The pattern is remarkably consistent across three years.** June is twice as strong as November.

### What to do with this

**1. Budget allocation.** Do not spend an equal amount every month. Weight the annual budget toward the index.

If the annual budget is PKR 12,000,000:
- June should get roughly 1.62 ÷ 12.09 × 12,000,000 = **PKR 1,608,000**
- November should get roughly **PKR 794,000**

**2. Forecasting.** You can now predict next month with reasonable confidence.

**3. Client expectations.** A 20% drop in November is normal. Showing the index prevents a panicked conversation.

**4. Resource planning.** Staff up before June, not during it.

⚠️ **The pattern is conversions, not conversion rate.** Check both. Sometimes volume rises but conversion rate falls — a different situation needing a different response.

---

## Seasonality Adjustments

A **seasonality adjustment** tells Google to expect an unusual conversion rate for a specified period.

### How it works

You specify:
- A date range
- The campaigns affected
- The **expected conversion rate change** as a percentage

Google adjusts bidding to account for it, rather than waiting to observe the change.

### When to use it

✅ A flash sale lasting 1–7 days
✅ An unusual promotion with a known start and end
✅ A one-off event — a product launch, a media appearance
✅ A situation where you really expect a conversion rate change of 20%+

### When NOT to use it

❌ Normal weekly patterns — Smart Bidding knows these
❌ Recurring annual seasonality — Smart Bidding knows these too
❌ Periods longer than about 7 days — the tool is designed for short events
❌ Traffic volume changes without a conversion rate change
❌ When you are guessing

### Getting the number right

The adjustment asks for the **expected conversion rate change**, not the expected volume change.

**Example:** last year's Eid sale saw conversion rate rise from 2.4% to 4.1%.

```
Change = (4.1 − 2.4) ÷ 2.4 = +71%
```

Enter **+71%**.

⚠️ **Base it on historical data.** If you have never run this promotion before, either do not use an adjustment or use a conservative estimate. A wrong adjustment is worse than none — Google will bid aggressively for a conversion rate lift that does not arrive.

### Where to set it

Tools → Budgets and bidding → **Seasonality adjustments** → Create.

---

## The Peak Preparation Timeline

Major peaks need preparation weeks in advance. Here is the schedule.

### 8 weeks before

- [ ] Review last year's data for this peak. What worked, what failed?
- [ ] Confirm the promotional offer with the business (Lesson 0.2)
- [ ] Agree the budget for the peak period
- [ ] Check inventory and capacity. **Can the business actually deliver a 3× increase?**
- [ ] Brief creative production — new images, video, ad copy

⚠️ **That capacity question matters enormously.** Driving triple demand to a business that cannot fulfil it produces refunds, bad reviews and long-term damage. Ask early.

### 4 weeks before

- [ ] Build the peak campaigns, paused and ready
- [ ] Write and review all ad copy (Lessons 4.1, 4.3)
- [ ] Build promotion assets with correct dates (Lesson 4.2)
- [ ] Update the feed with sale prices and dates (Lesson 6.1)
- [ ] Test landing pages under load
- [ ] Check tracking end to end (Lesson 2.5)

### 2 weeks before

- [ ] Begin building remarketing audiences — people browsing now will buy during the peak
- [ ] Increase budgets slightly to grow the audience pool
- [ ] **Complete all structural changes now.** No structural changes during the peak.
- [ ] Set up seasonality adjustments if warranted
- [ ] Brief the client on the plan, the timeline and the reporting cadence

### 1 week before

- [ ] Final tracking test
- [ ] Confirm feed prices match the website exactly (Lesson 1.5)
- [ ] Confirm the sale end date on every promotion asset
- [ ] Set up monitoring and alerts
- [ ] **Freeze all changes** except emergencies

### During the peak

- [ ] Monitor spend pacing daily (Lesson 10.2)
- [ ] Monitor for disapprovals or policy issues
- [ ] Watch stock levels — pause out-of-stock products immediately
- [ ] **Make no bid strategy or structural changes**
- [ ] Add negatives only

### After the peak

- [ ] Remove promotion assets and sale prices promptly
- [ ] Return budgets to normal gradually, not abruptly
- [ ] Expect a post-peak dip. It is normal.
- [ ] Document everything for next year

---

## The Post-Peak Dip

After every major peak comes a drop, and it is usually worse than the pre-peak baseline.

**Why:**
- Demand was pulled forward — people bought early
- Price-sensitive buyers already purchased
- Competitors are still discounting
- Smart Bidding is recalibrating from unusual data

**Typical pattern:** 2–4 weeks below baseline, then recovery.

**What to do:**

1. **Warn the client before the peak**, not during the dip
2. Reduce budgets to match reduced demand — do not chase volume
3. Do not panic-optimise. The data from the peak period is unusual and should not drive permanent changes.
4. Use the period for remarketing to peak-period browsers who did not buy

⚠️ **Do not judge campaign performance using peak data.** A tROAS target set during Black Friday will be wrong for February.

---

## Ramadan and Eid: A Specific Guide

For Pakistani, Middle Eastern and Muslim-most markets, this is the most important commercial period of the year, and it behaves unlike Western peaks.

### The pattern

| Phase | Typical behaviour |
|---|---|
| **Pre-Ramadan (2 weeks before)** | Food, kitchen and household buying rises sharply |
| **Ramadan weeks 1–2** | Daytime traffic drops, **late-night traffic rises a lot** |
| **Ramadan weeks 3–4** | Eid shopping begins — clothing, gifts, electronics |
| **Last 10 days** | Peak intensity for gift and clothing categories |
| **Eid days** | Most categories collapse; travel and food rise |
| **Post-Eid week** | Slow recovery |

### What this means practically

**1. The daily pattern changes completely.**

Normal browsing hours shift. Traffic often peaks after Iftar and again late at night, sometimes past 1am.

**Check your data from last Ramadan**, not your normal-period data. If you use a restrictive ad schedule (Lesson 4.4), it may be blocking your best hours.

**2. Category timing differs enormously.**

- Food and grocery: peaks before and during
- Clothing: peaks in the last two weeks
- Electronics and gifts: peaks in the last ten days
- Travel: peaks around Eid itself
- Services and B2B: usually falls throughout

**Do not treat Ramadan as one period.** It has separate phases.

**3. The dates move each year.**

Ramadan moves roughly 11 days earlier each year on the Gregorian calendar. **Your year-on-year comparisons will not align by date.** Compare by Ramadan day number, not by calendar date.

**4. Eid day itself is usually poor for most advertisers.**

Consider reducing budgets on Eid days for non-relevant categories. People are with family, not shopping.

**5. Payment behaviour changes.**

Cash on delivery demand often rises. Delivery expectations tighten before Eid — "will it arrive before Eid?" becomes the dominant question. Address it directly in ad copy and on the page.

### The practical checklist

- [ ] Pull last year's data by Ramadan day number, not calendar date
- [ ] Check the hourly pattern from last Ramadan
- [ ] Remove or widen restrictive ad schedules
- [ ] Plan budget by phase, not evenly across the month
- [ ] Prepare "delivery before Eid" messaging with a real cut-off date
- [ ] Plan for reduced spend on Eid days in non-relevant categories
- [ ] Prepare the post-Eid dip explanation in advance

---

## Forecasting

Clients ask "what will next quarter look like?" Here is how to answer credibly.

### The method

**Step 1: Baseline.** Take the last 3 months' average monthly conversions.

**Step 2: Apply the seasonal index** for each forecast month.

**Step 3: Apply the growth trend.** Compare this year to last year at the same point.

**Step 4: Apply the budget change**, using your response curve if you have one (Lesson 8.1). Remember it is not linear — 30% more budget rarely means 30% more conversions.

**Step 5: State a range, never a single number.**

### A worked forecast

- Baseline: 290 conversions/month
- October index: 0.86
- Year-on-year growth: +22%
- Budget change: none

```
Forecast = 290 × 0.86 × 1.22 = 304 conversions
Range = 260 to 350 (roughly ±15%)
```

**Present it as:** *"We expect 260–350 conversions in October, most likely around 300. October is seasonally weak — about 14% below our average month — so a lower number than September is expected, not a problem."*

⚠️ **Always give a range and always explain the seasonality.** A single-number forecast will be wrong, and you will be judged against it.

---

## 📖 Real-World Example: Two Ramadan Campaigns

Sana ran Ramadan campaigns two years running. The first went badly. The second is why this lesson exists.

### Year 1: The mistakes

She treated Ramadan as a normal month with a bigger budget.

**What she did:**
- Increased the budget 40% for the whole month, evenly
- Kept her normal ad schedule: 9am–11pm
- Used her normal ad copy
- Made no plans for Eid days
- Judged results weekly against her normal targets

**What happened:**

| Week | Spend | Sales | Cost per sale |
|---|---|---|---|
| Ramadan week 1 | PKR 168,000 | 41 | PKR 4,098 |
| Week 2 | PKR 171,000 | 58 | PKR 2,948 |
| Week 3 | PKR 169,000 | 94 | PKR 1,798 |
| Week 4 | PKR 172,000 | 121 | PKR 1,421 |
| Eid days (3) | PKR 74,000 | 8 | **PKR 9,250** |
| Post-Eid week | PKR 165,000 | 34 | PKR 4,853 |

**Two clear failures:**

1. **Week 1 was terrible** and she spent full budget on it. Demand simply was not there yet.
2. **Eid days cost her PKR 74,000 for 8 sales.** She had not reduced budgets and people were not shopping.

She also discovered afterwards, from her hourly data, that her single best hour was **11pm to midnight** — and her ad schedule had been cutting off at 11pm, missing the tail entirely.

**Total month:** PKR 919,000 spent, 356 sales, PKR 2,581 cost per sale. Against a PKR 2,600 margin, she barely broke even in her biggest month of the year.

### Year 2: The preparation

**8 weeks before**, she pulled the previous year's data **by Ramadan day number** and built the phase model.

| Phase | Days | Sales index | Budget allocation |
|---|---|---|---|
| Pre-Ramadan | −14 to −1 | 1.1 | 12% |
| Ramadan week 1 | 1–7 | 0.6 | 7% |
| Week 2 | 8–14 | 0.9 | 11% |
| Week 3 | 15–21 | 1.4 | 22% |
| **Week 4 (last 10 days)** | 22–30 | **2.1** | **38%** |
| Eid days | — | 0.2 | **2%** |
| Post-Eid week | +1 to +7 | 0.7 | 8% |

**She also:**
- Extended the ad schedule to run until 2am
- Built specific creative: "Delivered Before Eid — Order by [date]"
- Set a real delivery cut-off date and put it in the ads, assets and landing page
- Applied a seasonality adjustment for the final 5 days (+68%, based on last year's conversion rate lift)
- Warned the client — herself, in this case — that the post-Eid week would be poor
- Froze all structural changes two weeks before

**Same total budget: PKR 919,000. Allocated completely differently.**

### Year 2 results

| Phase | Spend | Sales | Cost per sale |
|---|---|---|---|
| Pre-Ramadan | PKR 110,000 | 51 | PKR 2,157 |
| Week 1 | PKR 64,000 | 34 | PKR 1,882 |
| Week 2 | PKR 101,000 | 62 | PKR 1,629 |
| Week 3 | PKR 202,000 | 148 | PKR 1,365 |
| **Week 4** | **PKR 349,000** | **312** | **PKR 1,119** |
| Eid days | PKR 18,000 | 11 | PKR 1,636 |
| Post-Eid | PKR 75,000 | 41 | PKR 1,829 |

**Total: PKR 919,000 spent, 659 sales, PKR 1,394 cost per sale.**

| | Year 1 | Year 2 |
|---|---|---|
| Spend | PKR 919,000 | PKR 919,000 |
| Sales | 356 | **659** |
| Cost per sale | PKR 2,581 | **PKR 1,394** |
| Gross margin | PKR 6,764 | **PKR 795,254** |

**Identical budget. 85% more sales.**

### Where the gains came from

1. **Moving budget from week 1 to week 4** was the single largest factor. Week 4 converted at nearly four times week 1's rate, and she funded it properly.
2. **Reducing Eid-day spend from PKR 74,000 to PKR 18,000** saved PKR 56,000 that had been producing almost nothing.
3. **Extending the schedule to 2am** captured her best hours.
4. **The "delivered before Eid" messaging** raised conversion rate in week 4 a lot, because it answered the only question buyers had at that point.

**She changed no bids, no keywords and no bid strategy. She changed when the money was spent and what the ads said.**

---

## 📊 Mastery Score

**Level: Advanced**

Seasonal planning is where preparation beats optimisation decisively. The work happens weeks before the money is spent.

---

## 📌 Key Takeaways

- Smart Bidding already knows recurring annual seasonality. Seasonality adjustments are for short, unusual events only.
- Build a seasonal index from your own data, and allocate annual budget by index rather than evenly.
- Prepare peaks on an 8-week timeline. Freeze all structural changes two weeks before.
- Expect a post-peak dip and warn the client before it happens, not during it.
- Ramadan is several separate phases, not one period. Compare year on year by Ramadan day, not calendar date.

---

## ☑️ Self-Assessment

1. Have you built a seasonal index from your own historical data?
2. Is your annual budget allocated by season, or spread evenly?
3. Do you know your hourly traffic pattern during your biggest peak?
4. Have you ever used a seasonality adjustment? Was it for a really short, unusual event?
5. Do you warn clients about the post-peak dip in advance?

---

## 🧠 Quiz

**1. When should you use a seasonality adjustment?**
a) Every weekend
b) For short, unusual events of 1–7 days where you expect a significant conversion rate change
c) For annual seasonality
d) Never

**2. Why does Smart Bidding not need help with recurring seasonality?**
a) It ignores seasonality
b) It has your historical data and recognises annual patterns
c) Seasonality does not affect bidding
d) It does need help

**3. What must a seasonality adjustment be based on?**
a) Your expectations
b) Historical data showing the actual conversion rate change
c) Google's recommendation
d) The budget increase

**4. How should you compare Ramadan year on year?**
a) By calendar date
b) By Ramadan day number, because the dates move each year
c) By month
d) You cannot compare

**5. What produced most of Sana's Year 2 improvement?**
a) New keywords
b) Reallocating budget from the weak first week to the strong final week
c) A higher budget
d) A new bid strategy

---

## 💪 Practical Exercise (40 minutes)

Build a seasonality model for one business.

1. Export as much monthly history as you have: conversions, revenue, cost, conversion rate.
2. Calculate the monthly index for each year.
3. Check consistency across years. Is the pattern reliable?
4. Reallocate the annual budget by index and compare to current allocation.
5. Find the next major peak. Work backwards and write the 8-week preparation timeline with dates.
6. Write the post-peak dip warning you would send the client.

---

## 🎯 Expert Challenge

Build a complete seasonal planning system.

- Build the multi-year seasonal model at weekly rather than monthly detail, and separate volume seasonality from conversion rate seasonality. These often move differently and need different responses.
- Design the annual budget allocation model driven by the index, including the capacity limit check with the business.
- Build the peak playbook as a repeatable document: the 8-week timeline, owners for each task, and the freeze dates.
- Design the forecasting model with a stated confidence range, and track your forecast accuracy over a year. Consistently optimistic forecasting damages trust more than poor performance does.
- Build the phase model for the most important peak in your market, with budget allocation by phase and the specific messaging for each.
- Then run the post-peak analysis properly: separate the genuine incremental effect of the peak from demand that was simply pulled forward from adjacent weeks. Most peak reporting overstates the true benefit, and knowing the real figure makes next year's planning far better.

---

## ✅ Quiz Answers

1 — **b**. Short, unusual events with a significant expected conversion rate change.
2 — **b**. It has the historical data and recognises the pattern.
3 — **b**. Historical evidence of the actual conversion rate change.
4 — **b**. By Ramadan day number; the calendar dates shift annually.
5 — **b**. Budget reallocation from the weak phase to the strong one.

---

**Next lesson:** 10.4 — Getting Real Help From Google
