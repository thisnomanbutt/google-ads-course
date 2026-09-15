# Lesson 12.2 — Work Out Which Customers Are Worth Most

*Phase 6 · Automation and Working With Data — Module 12 · Use Your Own Customer Data*

---

## Quick Recap From Lesson 0.3

You calculated LTV as margin × repeat purchases. That is a historical average. This lesson estimates what a *specific* customer will be worth, before they prove it.

---

## 🎯 What You Will Learn

- Why average LTV hides the most important information
- Three methods of predicting LTV, from simple to advanced
- The RFM model, and how to build it in a spreadsheet
- How to turn predicted LTV into bidding decisions
- The traps that make LTV models dangerous

---

## Why Average LTV Is Not Enough

From Lesson 0.3, Sana's average customer LTV was PKR 6,500.

**But almost nobody is average.**

| Customer group | Share | Average lifetime margin |
|---|---|---|
| Top 10% | 10% | PKR 24,100 |
| Next 20% | 20% | PKR 9,800 |
| Middle 40% | 40% | PKR 4,200 |
| Bottom 30% | 30% | PKR 1,140 |
| **Overall average** | 100% | **PKR 6,500** |

**The top 10% are worth 21 times the bottom 30%.**

Using one average LTV to set one maximum CAC means:
- You **underbid** for the customers who would have been worth PKR 24,100
- You **overbid** for the ones worth PKR 1,140

**Think of a bank lending money using one interest rate for everyone.** They lose the best borrowers to competitors offering better rates, and they keep the worst ones. Averages attract adverse selection.

**Predictive LTV lets you bid differently for different customers, before you know which is which.**

---

## Method 1: Cohort-Based Prediction (start here)

The simplest useful method. No modelling, just observation.

### The approach

Group customers by an observable characteristic at acquisition, then measure what each group was actually worth over time.

### A worked example

Sana grouped by **first product purchased**:

| First product | Customers | 12-month margin | vs average |
|---|---|---|---|
| Gravity filter (no electricity) | 412 | PKR 11,240 | **1.73×** |
| RO filter | 388 | PKR 7,110 | 1.09× |
| Cartridge only | 194 | PKR 3,880 | 0.60× |
| Steel bottle | 141 | PKR 1,020 | 0.16× |

**A customer whose first purchase is a gravity filter is worth 11 times one who first bought a bottle.**

### Why this works

**The first purchase is observable at the moment of conversion.** You can send a different conversion value immediately, without waiting or modelling.

### Other useful cohort dimensions

| Dimension | Often predictive because |
|---|---|
| First product purchased | Product choice reveals need depth |
| Acquisition channel | Discovery channels bring loyal buyers (Lesson 7.6) |
| First order value | Bigger first order often means bigger need |
| Geography | Local customers repeat more |
| Device at purchase | Sometimes correlates with segment |
| Time to first purchase | Fast deciders vs long researchers behave differently |
| Discount used at first purchase | **Often strongly negative** — discount hunters return for discounts |

⚠️ **That last row surprises people.** Customers acquired with a heavy discount frequently have far lower lifetime value. If you have discount data, check it before you run another sale.

### Setup

Once you know the cohort values, send them as conversion values (Lesson 5.5) or apply value rules (Lesson 11.4).

**This is achievable this month, with a spreadsheet.**

---

## Method 2: RFM Scoring

**RFM** stands for Recency, Frequency, Monetary. It is a long-set up segmentation method, and it works.

### The three dimensions

| Dimension | Question | Why it matters |
|---|---|---|
| **Recency** | How recently did they buy? | Recent buyers are far more likely to buy again |
| **Frequency** | How many times have they bought? | Repeat behaviour predicts more repeat behaviour |
| **Monetary** | How much margin have they produced? | Past value predicts future value |

### Building it in a spreadsheet

**Step 1.** Export every customer with: last purchase date, purchase count, total margin.

**Step 2.** For each dimension, split customers into five equal groups (quintiles) and score 1–5.

- Recency: most recent 20% score 5, oldest 20% score 1
- Frequency: most purchases score 5
- Monetary: highest margin scores 5

**Step 3.** Combine into a three-digit score: `555` is your best customer, `111` your worst.

**Step 4.** Group the scores into named segments.

### The standard segments

| Segment | RFM pattern | What to do |
|---|---|---|
| **Champions** | 5-5-5, 5-5-4 | Lookalike seed. Protect them. |
| **Loyal** | 4-4-4 to 5-4-5 | Cross-sell, lookalike seed |
| **Potential loyalists** | 5-2-3 range | Nurture — recent, promising |
| **New customers** | 5-1-1 | Onboard well; too early to judge |
| **At risk** | 2-4-4 | **Win-back before they lapse** |
| **Cannot lose** | 1-5-5 | High value, gone quiet. Urgent. |
| **Hibernating** | 2-2-2 | Low-budget reactivation test |
| **Lost** | 1-1-1 | Usually not worth pursuing |

### Why RFM is really useful

**It is simple, explainable and it works.** You can build it in an afternoon, explain it to a business owner in two minutes, and act on it immediately.

**It also finds urgent problems.** The "Cannot lose" segment — high-value customers who have gone quiet — is often the single most valuable list in the business, and nobody has ever looked at it.

---

## Method 3: Statistical Prediction

The advanced option. Use a model to predict future value from behaviour.

### The approaches

**GA4 predictive audiences** (Lesson 6.7)
Google builds the model. Free, needs enough volume.

**BigQuery ML**
Train a model on your own data inside BigQuery (Lesson 7.6). Needs SQL, not full data science.

**A dedicated model**
Python, a proper feature set, cross-validation. Needs genuine data science capability.

### The honest check

⚠️ **Most businesses should not start here.**

**Because:**
- Cohort analysis captures much of the value for a fraction of the effort
- A model built on insufficient data is confidently wrong
- An unmaintained model decays and nobody notices (Lesson 11.3)
- Explaining a black-box model to a business owner is difficult

**When statistical modelling is really worth it:**
- Large customer base — tens of thousands
- Significant variation in customer value
- Data science capability in-house or reliably available
- The cohort method has already been exhausted

**The order:** cohort → RFM → statistical. Do not skip.

---

## Turning Prediction Into Bidding

A prediction that does not change a bid is an interesting report, not a business result.

### Route 1: Different conversion values by cohort

If first product predicts value, send a different conversion value per product (Lesson 5.5).

```
Gravity filter purchase → value = PKR 11,240 × margin rate
Steel bottle purchase   → value = PKR 1,020 × margin rate
```

Smart Bidding immediately pays more for traffic likely to buy the gravity filter.

### Route 2: Value rules by audience

Build RFM segments as Customer Match lists, then apply value rules (Lesson 11.4).

### Route 3: Different campaigns by predicted value

Separate campaigns for products or segments with very different predicted LTV, each with its own target (Lesson 1.4).

### Route 4: Lookalikes from high-predicted-value customers

The strongest seed available (Lesson 12.1).

### Route 5: Different maximum CAC by segment

From Lesson 0.3, replace one maximum CAC with several:

| Predicted LTV segment | 12-month margin | Max CAC (40% of LTV) |
|---|---|---|
| High | PKR 11,240 | **PKR 4,496** |
| Medium | PKR 7,110 | PKR 2,844 |
| Low | PKR 3,880 | PKR 1,552 |
| Very low | PKR 1,020 | **PKR 408** |

**You can now pay 11 times more for a high-value customer than a low-value one** — and win auctions your competitors, using one average, will not enter.

---

## The Traps

### Trap 1: Cash flow

From Lesson 0.3. **A twelve-month LTV does not pay this month's invoice.**

If you bid up to 40% of a twelve-month LTV, you are financing customer acquisition for a year. Confirm the business can fund that gap before recommending it.

### Trap 2: Prediction based on too little history

If your business is eighteen months old, you do not have twelve-month LTV data for most customers. You have partial data and an assumption.

**Be clear about the assumption**, and use a conservative figure.

### Trap 3: Correlation mistaken for causation

Gravity filter buyers are worth more. That does not mean *selling more gravity filters to anyone* creates high-value customers.

**The product choice reveals the customer type. It does not create it.** Pushing the gravity filter to bottle buyers will not transform them.

### Trap 4: Model decay

Close rates change. Product mix changes. Competitors change.

**A model trained on 2024 data may be wrong in 2026.** Recalculate quarterly.

### Trap 5: Optimising for LTV the business cannot deliver

If your model points the account at enterprise customers and your support team can only handle small accounts, you have created an operational crisis, not a win.

**Check capacity before shifting the customer mix** (Lesson 5.5).

---

## 📖 Real-World Example: The Discount That Destroyed Value

Sana had run a Ramadan sale every year — 25% off, heavily promoted, and always her biggest month by volume.

In month 26 she built her first cohort LTV analysis, and it changed how she ran the business.

### The analysis

She grouped customers by whether their **first purchase used a discount code**.

| First purchase | Customers | Avg first order margin | 12-month margin | Repeat rate |
|---|---|---|---|---|
| **Full price** | 1,847 | PKR 2,640 | **PKR 8,910** | 61% |
| **25% discount** | 1,204 | PKR 1,340 | **PKR 2,180** | 19% |

**Customers acquired on discount were worth 24% of a full-price customer over twelve months.**

Two effects compounded:
1. Lower margin on the first order — obviously
2. **A repeat rate of 19% versus 61%** — they came for the discount and left with it

### What she checked next

She wondered whether the discount customers were simply people who would never have bought at full price — in which case they were still incremental, just less valuable.

She looked at the timing.

| Period | Full-price orders | Discount orders | Total |
|---|---|---|---|
| Two weeks before the sale | 284 | 0 | 284 |
| Sale fortnight | **61** | 1,204 | 1,265 |
| Two weeks after | **119** | 0 | 119 |

**Full-price orders collapsed during and after the sale.**

A large share of discount buyers were people who would have paid full price, waiting for the sale they knew was coming.

### The recalculation

| | Sale approach | Estimated no-sale approach |
|---|---|---|
| Orders in the six-week window | 1,668 | ~850 |
| First-order margin | PKR 2,428,000 | PKR 2,244,000 |
| 12-month cohort margin | PKR 5,241,000 | **PKR 7,574,000** |

**The sale increased volume and reduced twelve-month profit by roughly 31%.**

### What she changed

She did not cancel the Ramadan promotion — that would have been an overcorrection, and Ramadan really is her market's biggest commercial period (Lesson 10.3).

She changed **what the promotion was**.

| Old offer | New offer |
|---|---|
| 25% off everything | Free installation + 2 free cartridges (worth PKR 2,400, cost to her PKR 800) |
| Discount code, widely shared | Bundle, not transferable |
| Attracted discount hunters | Attracted people who wanted the product |

**The new offer had a similar perceived value and a much lower cost — and critically, it did not train customers to wait for a discount.**

### Results the following year

| Metric | Discount year | Bundle year |
|---|---|---|
| Ramadan orders | 1,668 | 1,441 |
| First-order margin | PKR 2,428,000 | PKR 3,102,000 |
| Repeat rate at 12 months | 34% | **58%** |
| **12-month cohort margin** | PKR 5,241,000 | **PKR 9,880,000** |

**14% fewer orders. 89% more twelve-month profit.**

### What made this possible

**She could only see this because she measured cohort value over twelve months.** Every metric available inside Google Ads said the discount year was better — more conversions, higher conversion rate, lower cost per acquisition.

The account data was correct and the conclusion it implied was wrong.

**This needed joining advertising data to twelve months of order history** (Lesson 7.6). No amount of account optimisation would ever have revealed it.

**And the fix was not an advertising change at all.** It was an offer change (Lesson 0.2), which is where this course started.

---

## 📊 Mastery Score

**Level: Master**

Predictive LTV moves you from optimising campaigns to shaping the customer base. It is the point where paid media becomes business strategy.

---

## 📌 Key Takeaways

- Average LTV hides the most important information. Your best customers may be 20× your worst.
- Start with cohort analysis — group by an observable characteristic at acquisition and measure real twelve-month value.
- RFM scoring is simple, explainable and effective. Build it in an afternoon.
- Turn prediction into bidding: different conversion values, value rules, or different maximum CAC by segment.
- Discount-acquired customers frequently have far lower lifetime value. Check before running another sale.

---

## ☑️ Self-Assessment

1. Do you know the twelve-month margin of your top 10% versus your bottom 30%?
2. Which observable characteristic at acquisition best predicts value in your business?
3. Have you ever measured the lifetime value of discount-acquired customers?
4. Do you use one maximum CAC, or several by segment?
5. Could the business fund a twelve-month payback if you bid on LTV?

---

## 🧠 Quiz

**1. Why is a single average LTV insufficient?**
a) It is hard to calculate
b) It causes you to underbid for valuable customers and overbid for poor ones
c) Google does not accept it
d) It changes too often

**2. What does RFM stand for?**
a) Rate, Frequency, Margin
b) Recency, Frequency, Monetary
c) Revenue, Forecast, Model
d) Return, Fee, Multiple

**3. Which method should most businesses start with?**
a) BigQuery ML
b) Cohort analysis by an observable characteristic
c) A custom Python model
d) GA4 predictive audiences

**4. Why are discount-acquired customers often worth less?**
a) They spend less on the first order and repeat far less often
b) They complain more
c) Google devalues them
d) They are in poorer areas

**5. Sana's sale produced more orders but 31% less twelve-month profit. Why?**
a) Tracking error
b) Discount buyers repeated at 19% vs 61%, and many would have paid full price anyway
c) Prices were too low
d) The ads were poor

---

## 💪 Practical Exercise (45 minutes)

Build a cohort LTV analysis.

1. Export customers with acquisition date, first product or service, and total margin since.
2. Restrict to customers acquired at least twelve months ago, so the data is complete.
3. Group by first product or service. Calculate average twelve-month margin per group.
4. Calculate each group's multiple versus the overall average.
5. If you have discount data, split by whether the first purchase used a discount.
6. Write the new maximum CAC for each group, at 40% of twelve-month margin.

---

## 🎯 Expert Challenge

Build a complete predictive value system.

- Run cohort analysis across every observable acquisition characteristic. Rank them by predictive power, and find the two or three that matter.
- Build the RFM model and segment your entire customer base. Find the "Cannot lose" segment and quantify the revenue at risk in it.
- Design the setup: which predictions drive conversion values, which drive value rules, which drive separate campaigns, and which drive lookalike seeds.
- Build the segment-specific maximum CAC model, replacing one number with several, and check each against the business's cash flow tolerance.
- Design the quarterly recalculation, because every one of these numbers decays.
- Then run the discount analysis. For any business that promotes, compare the twelve-month cohort value of discount-acquired versus full-price customers, and quantify the pull-forward effect. In most businesses that run regular sales, this single analysis is the most commercially valuable thing you will produce all year — and it usually leads to an offer change rather than an advertising change.

---

## ✅ Quiz Answers

1 — **b**. Averages cause adverse selection at both ends.
2 — **b**. Recency, Frequency, Monetary.
3 — **b**. Cohort analysis. Most of the value, a fraction of the effort.
4 — **a**. Lower first-order margin and a far lower repeat rate.
5 — **b**. Poor repeat behaviour plus demand pulled forward from full-price buyers.

---

**Next lesson:** 12.3 — Make Google Bid on Real Profit
