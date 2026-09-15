# Lesson 12.5 — The Numbers to Show Your Boss or Client

*Phase 6 · Automation and Working With Data — Module 12 · Use Your Own Customer Data*

---

## Quick Recap From Module 12

You can predict customer value, bid on real profit, and model channel contribution. This lesson is the reporting layer that ties it all to the business's actual accounts.

---

## 🎯 What You Will Learn

- What MER is, and why CMOs prefer it to ROAS
- The difference between platform ROAS, blended ROAS and MER
- How to calculate contribution margin at business level
- Which metric to use for which decision
- How to report to a board rather than to a marketing manager

---

## The Problem With Platform Metrics

Your Google Ads account reports a ROAS of 4.2x. Meta reports 3.1x. TikTok reports 2.4x.

**Add up all the revenue those platforms claim, and it exceeds your actual revenue.**

This happens in almost every multi-channel business, and it is not a bug.

### Why

Each platform claims a conversion it touched. A customer who saw a TikTok ad, clicked a Meta ad, then searched your brand on Google is claimed by all three.

**Platform-reported ROAS is useful for optimising within a platform. It is useless for judging the business.**

**Think of three salespeople who each spoke to the same customer.** Each honestly reports "I closed that sale." Add their reported sales and you have three times the actual revenue. None of them lied.

---

## The Three Levels of ROAS

Understand which one you are looking at, always.

### 1. Platform ROAS

> **Revenue the platform claims ÷ Spend on that platform**

**Use for:** optimising inside that platform. Setting a tROAS target (Lesson 5.3).
**Never use for:** judging total business performance or comparing channels.

### 2. Blended ROAS

> **Total business revenue ÷ Total advertising spend**

**Use for:** a business-level view of advertising efficiency.
**Limitation:** includes revenue that would have happened without advertising.

### 3. MER — Marketing Efficiency Ratio

> **Total revenue ÷ Total marketing spend**

**Note:** MER includes *all* marketing cost, not just paid media — agency fees, tools, salaries, content production.

**Use for:** board reporting, and judging whether the marketing function is efficient.

### The relationship

```
Platform ROAS   — highest number, most optimistic, most useful for tuning
Blended ROAS    — lower, includes organic and direct revenue
MER             — lowest, includes all marketing cost
```

⚠️ **Always label which one you are reporting.** Presenting a platform ROAS of 4.2x to a board that then discovers actual blended performance is 2.1x is how marketing loses credibility.

---

## Why MER Wins for Business Reporting

MER has three properties that make it the right board-level metric.

**1. It cannot be gamed by attribution.** It uses total revenue and total spend. No attribution model is involved.

**2. It is directly comparable over time.** Attribution models change, platforms change, tracking changes. Total revenue and total spend do not.

**3. Everyone understands it.** "We spend PKR 1 on marketing and get PKR 4.20 back" needs no explanation.

### The limitation, stated fairly

⚠️ **MER includes revenue that would have happened anyway.**

A business with strong organic demand can have an excellent MER while its advertising contributes little. MER measures the whole marketing function's efficiency, not advertising's incremental contribution.

**This is why you need MMM (Lesson 12.4) alongside it.** MER tells you whether marketing overall is efficient. MMM tells you which parts are causing the result.

---

## Contribution Margin at Business Level

From Lesson 0.3 you calculated contribution margin per order. Now scale it.

### The full calculation

```
Revenue (excluding tax)
− Cost of goods sold
− Delivery and fulfilment
− Payment processing fees
− Refunds and returns
= GROSS PROFIT

− Advertising spend
− Agency fees
− Marketing tools and software
− Content and creative production
= CONTRIBUTION MARGIN

− Salaries
− Rent
− Overheads
= NET PROFIT
```

### Why contribution margin is the right line for marketing

**It is the last line marketing really controls.**

Rent and salaries continue whether you advertise or not. Contribution margin is what marketing adds, before fixed costs.

**If contribution margin is negative, marketing is destroying value regardless of what any dashboard says.**

### A worked example — Sana, monthly

| Line | Amount (PKR) |
|---|---|
| Revenue (ex tax) | 4,220,000 |
| Less cost of goods | −1,688,000 |
| Less delivery | −253,000 |
| Less payment fees | −106,000 |
| Less refunds | −338,000 |
| **Gross profit** | **1,835,000** |
| | |
| Less advertising spend | −1,460,000 |
| Less agency fees | −180,000 |
| Less tools | −34,000 |
| Less creative production | −45,000 |
| **Contribution margin** | **116,000** |
| | |
| Less salaries and overheads | −340,000 |
| **Net profit** | **−224,000** |

**Read that carefully.**

- Platform ROAS across her accounts: **4.6x** — looks excellent
- Blended ROAS: 4,220,000 ÷ 1,460,000 = **2.89x**
- MER: 4,220,000 ÷ 1,719,000 = **2.46x**
- **Contribution margin: PKR 116,000 — 2.7% of revenue**
- **Net profit: negative**

**Every advertising metric looked healthy. The business was losing money.**

⚠️ **This is not a hypothetical.** It is extremely common in growing e-commerce businesses, and it is the situation that ends agency relationships abruptly when the founder finally does this calculation.

---

## Which Metric for Which Decision

| Decision | Use | Why |
|---|---|---|
| Set a tROAS target | Platform ROAS or POAS | It is the platform's own lever |
| Judge a keyword or campaign | Platform metrics | Granularity |
| Compare Google to Meta | ⚠️ **Not platform ROAS** — use MMM or experiments | Attribution is not comparable across platforms |
| Decide the total marketing budget | MER and contribution margin | Business level |
| Report to a board | MER and contribution margin | Cannot be gamed |
| Decide whether to grow or hold | Contribution margin trend | The only one that reflects reality |
| Judge a discovery channel | MMM or geo experiment | Attribution understates them |

**The single most important rule:**

> **Optimise with platform metrics. Decide with business metrics.**

---

## Setting a Target MER

Most businesses do not have one, and they should.

### The calculation

Work backwards from the profit you need.

```
Target contribution margin  = Revenue × desired contribution %
Available for marketing     = Gross profit − target contribution margin
Target MER                  = Revenue ÷ available for marketing
```

### A worked example

Sana wants a 15% contribution margin instead of 2.7%.

- Revenue: PKR 4,220,000
- Gross margin rate: 43.5%
- Gross profit: PKR 1,835,000
- Target contribution margin (15%): PKR 633,000
- Available for all marketing: 1,835,000 − 633,000 = **PKR 1,202,000**
- Target MER: 4,220,000 ÷ 1,202,000 = **3.51x**

**Her current MER is 2.46x. She needs 3.51x.**

### The three routes to get there

She can reach 3.51x three ways, and the best answer usually combines them.

**Route 1: Spend less.** Cut marketing from PKR 1,719,000 to PKR 1,202,000 — a 30% reduction. Revenue would fall too, so this alone will not work as cleanly as the arithmetic suggests.

**Route 2: Earn more from the same spend.** Improve conversion rate, average order value, or channel allocation (Lesson 12.4).

**Route 3: Improve gross margin.** Reduce cost of goods, cut the refund rate, or shift the product mix toward higher margin (Lesson 12.3).

⚠️ **Route 3 is usually the most overlooked and often the most powerful.** Her refund allowance was 8% of revenue — PKR 338,000 a month. Reducing it to 5% would add PKR 127,000 to gross profit without touching advertising at all.

**This is Lesson 0.1 returning at the end of the course.** The biggest lever is frequently outside the ad account.

---

## The Board-Level Report

From Lesson 8.2, but for the highest audience.

### What a board wants

1. Are we making money?
2. Is it improving?
3. What is the plan?

### The one-page format

```
MARKETING PERFORMANCE — SEPTEMBER 2026

Revenue from all sources        PKR 4,983,000    ▲ 18%
Gross profit                    PKR 2,167,000    ▲ 18%
Total marketing investment      PKR 1,644,000    ▲  4%
CONTRIBUTION MARGIN             PKR   523,000    ▲ 351%
Contribution margin %                     10.5%   ▲ 7.8pts

MER                                       3.03x   ▲ from 2.46x
Target MER                                3.51x
New customers                             1,102   ▲ 12%
Blended cost per customer          PKR    1,492   ▼ 9%

WHAT CHANGED
Reallocated budget away from brand search following an
experiment showing most of those sales occurred anyway.
Moved that spend into non-brand search and TikTok.

NEXT
Reducing the refund rate from 8% to 5% would add roughly
PKR 127,000 monthly to gross profit — larger than any
remaining advertising optimisation available. This needs
an operations change, not a marketing one.

RISK
TikTok's contribution is estimated, not yet experimentally
validated. A geo test runs in October.
```

**Note what is absent:** impressions, clicks, CTR, cost per click, platform ROAS, Quality Score.

**Note what is present:** money, trend, a decision, and an honest risk.

⚠️ **That "Next" section is what earns you a seat at the table.** Finding that the biggest available gain is an operations change — and saying so, even though it reduces the apparent importance of your own work — is what distinguishes an advisor from a supplier.

---

## 📖 Real-World Example: The Report That Changed the Business

Sana's business had grown to PKR 4.2 million monthly revenue. She was proud of it. Her accountant was not.

At the year-end review, he showed her the contribution margin calculation above. **Net profit was negative PKR 224,000 a month.**

Her reaction: *"But our ROAS is 4.6."*

### What was actually happening

Bilal worked through it with her over two weeks.

**Finding 1: Platform ROAS was double-counting.**

Google claimed PKR 8,140,000 of revenue. Meta claimed PKR 2,190,000. TikTok claimed PKR 610,000. **Total claimed: PKR 10,940,000.**

**Actual revenue: PKR 4,220,000.**

The platforms were collectively claiming 2.6× the real revenue. Every one of them was reporting honestly by its own attribution rules.

**Finding 2: The costs outside the ad account were large.**

She had been measuring advertising spend of PKR 1,460,000. Total marketing cost, including her agency fee, tools and creative production, was PKR 1,719,000 — **18% higher than the number she had been optimising against.**

**Finding 3: Refunds were eating the margin.**

An 8% refund rate on PKR 4,220,000 is PKR 338,000 a month, and she was still paying delivery both ways on most of it. Her true refund cost was closer to PKR 412,000.

**Finding 4: Growth was making it worse.**

She had scaled spend 40% over six months. Revenue grew 31%. Contribution margin **fell**, because she had scaled past the efficient point on her response curve (Lesson 8.1) while her fixed marketing costs also rose.

### The plan

Not an advertising plan. A business plan with an advertising component.

| Action | Owner | Expected monthly impact |
|---|---|---|
| Reduce spend on the two channels past their efficient point | Bilal | +PKR 180,000 contribution |
| Reallocate following the MMM findings (Lesson 12.4) | Bilal | +PKR 96,000 |
| Reduce refund rate 8% → 5% via better sizing information and product photography | Sana / operations | **+PKR 127,000** |
| Renegotiate delivery contract at higher volume | Sana | +PKR 61,000 |
| Raise prices 4% on the three highest-demand products | Sana | +PKR 84,000 |
| Move two products from loss-making to excluded (Lesson 6.1) | Bilal | +PKR 38,000 |

**Note the split.** Three of the six actions were operational, not advertising. Together they contributed more than the advertising changes.

### Results at six months

| Metric | Before | After |
|---|---|---|
| Revenue | PKR 4,220,000 | PKR 4,983,000 |
| Gross margin rate | 43.5% | **48.1%** |
| Gross profit | PKR 1,835,000 | PKR 2,397,000 |
| Total marketing cost | PKR 1,719,000 | PKR 1,644,000 |
| **Contribution margin** | **PKR 116,000** | **PKR 753,000** |
| Contribution margin % | 2.7% | **15.1%** |
| MER | 2.46x | **3.03x** |
| **Net profit** | **−PKR 224,000** | **+PKR 351,000** |

**Revenue up 18%. Marketing spend down 4%. The business went from loss to profit.**

### What Bilal said afterwards

The client asked whether he was worried that half the improvement came from things outside his remit.

His answer:

> *"No. My job is to make the business more money. If the biggest lever is the refund rate, I should tell you that, even though I do not get paid to fix it. If I had only shown you the advertising changes, you would have made PKR 314,000 instead of PKR 637,000 — and eventually you would have found the rest yourself and wondered why I never mentioned it."*

**She doubled his retainer three months later.**

### The lesson

**This is Lesson 0.1, at the end of the course, with the evidence behind it.**

You were told at the beginning: think like a CMO, not a media buyer. Everything in the intervening 63 lessons — the tracking, the bidding, the scripts, the modelling — exists to let you do that well.

**But the mindset was always the point.** The technical skill is what makes you credible when you point at the refund rate.

---

## 📊 Mastery Score

**Level: Top 1%**

Reporting at business level, honestly, including the parts that are not your responsibility, is what turns a media buyer into an advisor.

---

## 📌 Key Takeaways

- Platform ROAS double-counts across channels. Added together it exceeds real revenue in almost every multi-channel business.
- MER = total revenue ÷ total marketing spend. It cannot be gamed by attribution, which is why boards prefer it.
- Contribution margin is the last line marketing controls. If it is negative, marketing is destroying value regardless of the dashboard.
- Optimise with platform metrics. Decide with business metrics.
- The biggest available lever is frequently outside the ad account. Say so anyway.

---

## ☑️ Self-Assessment

1. Do the revenues claimed by your platforms exceed your actual revenue? Add them up.
2. Do you know your business's contribution margin, including agency fees and tools?
3. Do you have a target MER? Where did the number come from?
4. What is your refund rate, and what does it cost per month?
5. When you last reported, did you include anything outside your own remit?

---

## 🧠 Quiz

**1. Why do platform ROAS figures add up to more than actual revenue?**
a) The platforms are dishonest
b) Each claims a conversion it touched, so the same sale is counted multiple times
c) Currency conversion
d) Reporting delays

**2. What is MER?**
a) Revenue ÷ Google Ads spend
b) Total revenue ÷ total marketing spend, including fees, tools and production
c) Profit ÷ ad spend
d) Conversions ÷ clicks

**3. Why do boards prefer MER to platform ROAS?**
a) It is a bigger number
b) It cannot be gamed by attribution and is comparable over time
c) It is easier to calculate
d) Google recommends it

**4. What does a negative contribution margin mean?**
a) Nothing important
b) Marketing is destroying value, whatever the dashboards say
c) The tracking is broken
d) Revenue is too low

**5. Half of Sana's improvement came from operations, not advertising. Why did Bilal report it anyway?**
a) He had to
b) His job is to make the business more money, and hiding the biggest lever would have damaged trust
c) The client asked
d) It made his work look better

---

## 💪 Practical Exercise (45 minutes)

Build the business-level view for one business.

1. Add up the revenue claimed by every advertising platform. Compare to actual revenue.
2. Build the full contribution margin calculation, including agency fees, tools and creative production.
3. Calculate platform ROAS, blended ROAS and MER. Note how different they are.
4. Calculate the target MER needed for a 15% contribution margin.
5. Find the three largest levers, including any outside the ad account.
6. Write the one-page board report using the format in this lesson.

---

## 🎯 Expert Challenge

Build a complete business-level marketing performance system.

- Build the full contribution margin model with every cost line, and agree the definitions with the business's finance function. Marketing and finance disagreeing about what counts as a marketing cost is a common and avoidable source of conflict.
- Derive the target MER from the business's actual profit what you need, and model the three routes to reaching it with the expected contribution of each.
- Build the reconciliation between platform-reported revenue and actual revenue, tracked monthly, so the double-counting factor is visible and understood rather than argued about.
- Design the board reporting pack: one page, updated monthly, with the four business metrics, the trend, the decision, and the honest risk.
- Find every lever outside the ad account — refund rate, delivery cost, pricing, product mix, conversion rate, operational capacity — and quantify each. Present them alongside the advertising levers, ranked by value.
- Then have the conversation. Take the biggest non-advertising lever to the business owner with the numbers attached. It will be uncomfortable, it will be outside your remit, and it is the single most valuable thing you can do for the relationship.

---

## ✅ Quiz Answers

1 — **b**. Each platform claims the same sale it touched.
2 — **b**. Total revenue over total marketing spend, all costs included.
3 — **b**. Attribution-proof and comparable over time.
4 — **b**. Value is being destroyed regardless of platform metrics.
5 — **b**. The job is the business's profit, not the account's metrics.

---

## 🏁 Module 12 and Phase 6 Complete

You now operate at the level of a marketing strategist. Confirm you can:

1. Build a first-party data programme with segmentation and exclusions
2. Predict customer value by cohort and turn it into bidding decisions
3. Build a live profit feed and bid on true margin
4. Run and validate a simplified marketing mix model
5. Report contribution margin and MER at board level

**Next:** Phase 7, Module 13 — Prove What Actually Works. Testing, and showing your ads caused the sales.
