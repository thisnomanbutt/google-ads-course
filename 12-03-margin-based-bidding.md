# Lesson 12.3 — Make Google Bid on Real Profit

*Phase 6 · Automation and Working With Data — Module 12 · Use Your Own Customer Data*

---

## Quick Recap From Lesson 0.4

You learned POAS — profit on ad spend — and the three levels of profit tracking. This lesson builds Level 3: true profit per item, flowing live into Smart Bidding.

---

## 🎯 What You Will Learn

- Why margin-based bidding is the endpoint of everything in this course
- The structure: where profit data comes from and how it reaches Google
- How to build the profit feed, step by step
- How to set a POAS-based target
- The maintenance that keeps it accurate

---

## The Endpoint

Trace the progression through this course:

| Stage | What Google optimises for | Lesson |
|---|---|---|
| 1 | Clicks | Beginner default |
| 2 | Conversions | 2.3 |
| 3 | Conversion value (revenue) | 5.4 |
| 4 | Blended profit (revenue × average margin) | 0.4, Level 1 |
| 5 | Tiered profit (revenue × tier margin) | 0.4, Level 2 |
| 6 | **True profit per item** | **This lesson** |

**At stage 6, Google's AI is bidding on your actual profit.** Not a proxy, not an estimate — the real number, per product, per order.

**Think of the difference between a shop manager told "maximise sales" and one told "maximise profit, and here is the exact margin on every item".** The second manager makes completely different decisions, and they are the right ones.

---

## Prerequisites

Do not attempt this until all of these are true.

✅ **Value-based bidding running successfully** (Lesson 5.4)
✅ **A clean product feed with accurate data** (Lesson 6.1)
✅ **Cost of goods available per product**, and kept current
✅ **Conversion tracking checked** (Lesson 2.5)
✅ **50+ conversions per month minimum**
✅ **Developer or technical capability** to modify the tracking
✅ **A business that can keep cost data** — this is the one that fails

⚠️ **That last prerequisite is the real barrier.** A profit feed built on cost data nobody updates becomes wrong within months, and wrong profit data is worse than no profit data — it produces confident, incorrect bidding.

**Before building, ask: who owns cost accuracy, and how often will they update it?** If there is no clear answer, build Level 2 tiers instead.

---

## The Structure

```
1. COST DATABASE
   Product ID → cost of goods, per unit
   Owned by finance or operations, updated when supplier costs change
        ↓
2. WEBSITE / ORDER SYSTEM
   At the moment of purchase, calculates:
   profit = price − COGS − shipping − fees − tax
        ↓
3. DATA LAYER
   Pushes the PROFIT value, not the revenue value
        ↓
4. GTM
   Sends profit as the conversion value
        ↓
5. GOOGLE ADS
   Records profit as conversion value
        ↓
6. SMART BIDDING
   Maximise Conversion Value with tROAS, now bidding on profit
        ↓
7. MERCHANT CENTER (for Shopping/PMax)
   Custom labels carry margin tiers for campaign-level control
```

**Two separate paths, and you need both:**
- The **conversion value path** teaches Smart Bidding what each sale was worth
- The **feed label path** controls which products campaigns may advertise

---

## Step 1: The Profit Calculation

Define exactly what "profit" means. Be precise, because this number drives everything.

### The formula

```
Gross profit = Revenue (ex tax)
             − Cost of goods
             − Shipping cost
             − Payment processing fees
             − Marketplace or platform fees
             − Refund allowance
```

### What to include and exclude

| Item | Include? | Why |
|---|---|---|
| Product cost | ✅ Yes | Direct, per unit |
| Inbound shipping | ✅ Yes | Part of unit cost |
| Outbound delivery | ✅ Yes | Even if "free" to the customer |
| Packaging | ✅ Yes | Small but real |
| Payment fees | ✅ Yes | 2–3% matters on thin margins |
| Sales tax / VAT | ✅ Remove it | Not your money (Lesson 0.4) |
| Refund allowance | ✅ Yes | Spread the average across orders |
| Warehouse rent | ❌ No | Fixed cost, not per order |
| Salaries | ❌ No | Fixed cost |
| Software subscriptions | ❌ No | Fixed cost |
| **Ad spend** | ❌ **No** | This is what you are measuring against |

⚠️ **Never subtract ad spend from the conversion value.** You would be measuring profit after advertising and then asking Google to optimise it, which double-counts and produces nonsense.

**You are sending gross profit before advertising.** Google divides by ad spend to give you POAS.

---

## Step 2: The Cost Data Source

Where does cost of goods come from?

| Source | Accuracy | Maintenance |
|---|---|---|
| ERP or accounting system | 🥇 Best | Automatic if integrated |
| E-commerce platform cost field | 🥈 Good | Someone must populate it |
| A maintained spreadsheet | 🥉 Workable | Manual, and it will go stale |
| An estimated blended margin | Level 1 only | Not true margin bidding |

### If costs live in a spreadsheet

Make it as strong as you can:
- One owner, named
- A monthly review in their calendar
- A "last updated" date column per product
- An alert when any product's cost is older than 90 days
- New products cannot go live without a cost

⚠️ **A cost sheet with no owner is a cost sheet that will be wrong within six months.**

---

## Step 3: The Developer Specification

This is what you send to the developer. Be exact.

> **Request: send profit rather than revenue as the conversion value**
>
> On the order confirmation event, please calculate and push the following to the data layer:
>
> ```javascript
> dataLayer.push({
>   event: 'purchase',
>   transaction_id: 'ORD-4821',
>   value: 1842.50,          // GROSS PROFIT, not revenue
>   revenue: 5000.00,        // keep revenue too, for reporting
>   currency: 'PKR',
>   items: [{
>     item_id: 'SKU-1001',
>     item_name: 'Gravity Water Filter',
>     price: 5000.00,
>     cost: 2400.00,
>     profit: 1842.50,
>     quantity: 1
>   }]
> });
> ```
>
> **The `value` field must be:**
> `price (excluding tax) − cost of goods − delivery cost − packaging − payment fees − refund allowance`
>
> **Edge cases to handle:**
> - Multi-item orders: sum the profit of every line
> - Discount codes: apply the discount before calculating profit
> - Free shipping: still subtract the actual delivery cost
> - A product with no cost recorded: **use a conservative default and log it for review**. Do not send zero.
> - Refunds: send a conversion adjustment (see Step 6)

⚠️ **The missing-cost case is the one that breaks systems.** If a new product has no cost, sending zero profit tells Google that product is worthless and it will stop advertising it. A conservative default plus a log entry is the correct handling.

---

## Step 4: Merchant Center Profit Tiers

Alongside the conversion value path, build the feed control path (Lesson 6.1).

**Supplemental feed:**

| id | custom_label_0 | custom_label_1 |
|---|---|---|
| SKU-1001 | `margin_high` | `margin_52pct` |
| SKU-1002 | `margin_mid` | `margin_38pct` |
| SKU-1003 | `margin_loss` | `margin_08pct` |

**Generate it from the same cost database.** One source of truth, two destinations.

**Then in your campaigns** (Lesson 6.2), listing groups restrict each campaign to specific tiers.

**Why both paths?** The conversion value teaches the AI what each sale was worth. The feed labels prevent it from selling loss-makers at all. Neither replaces the other.

---

## Step 5: Setting the POAS Target

This is where the numbers change meaning, and it catches people out.

### What changes

**Before (revenue-based tROAS):**
- Conversion value = PKR 5,000 (revenue)
- Breakeven ROAS = 1.92x (Lesson 0.3)
- Target = 3.5x

**After (profit-based tROAS):**
- Conversion value = PKR 1,842 (profit)
- **Breakeven is now 1.0** — you spent PKR 1 to make PKR 1 of profit
- Target = 1.4x means keeping PKR 0.40 profit per PKR 1 spent

### The conversion

If your old revenue tROAS was 3.5x and your average margin is 36.8%:

```
Equivalent profit tROAS = 3.5 × 0.368 = 1.29
```

**Start there**, then follow the tightening ladder from Lesson 5.3.

### Why this is better

**POAS of 1.0 is the line.** No mental arithmetic, no comparing against a breakeven that changes with product mix.

Anyone in the business can read it: below 1.0 is losing money, above 1.0 is making it.

⚠️ **Label your reports clearly.** A "ROAS of 1.4" looks catastrophic to anyone expecting revenue-based numbers. **Call it POAS, always, and explain it once in writing.**

---

## Step 6: Handling Refunds

From Lesson 0.4: Google counts the conversion at purchase. It does not know about the refund three weeks later.

### The fix: conversion adjustments

When a refund happens, send an adjustment referencing the transaction ID:

- **Retraction** — cancels the conversion entirely
- **Restatement** — changes the value (for a partial refund)

**Setup:** through the API (Lesson 11.3), a CRM integration, or a scheduled upload.

⚠️ **Without refund adjustments, your profit data overstates reality by your refund rate.** In fashion or electronics, that can be 15–30% — enough to make a losing account look profitable.

**This is not optional if your refund rate is above about 5%.**

---

## Step 7: The Maintenance Programme

A profit feed decays. Build the maintenance before you build the feed.

### Weekly
- Check for products with no cost recorded
- Check the logged missing-cost defaults from Step 3

### Monthly
- **Reconcile:** does Google's total conversion value match your accounting profit for the period? Target within 10%.
- Review products whose costs have changed
- Check refund adjustments are flowing

### Quarterly
- Full cost review with finance
- Recalculate margin tiers
- Re-examine the POAS target against the profit curve (Lesson 5.3)

### The reconciliation that matters most

| | Google Ads reports | Business accounts | Gap |
|---|---|---|---|
| Gross profit from paid traffic | PKR 1,402,000 | PKR 1,455,000 | 3.6% ✅ |

**Under 10%: healthy. Over 20%: stop and investigate.** A drifting gap means the cost data has gone stale, and every bid is now based on it.

---

## 📖 Real-World Example: The Live Profit Feed Build

Sana set up margin-based bidding in month 29, after everything else in this course was in place.

### The situation before

She was running tROAS 3.7x on revenue, with Level 2 profit tiers in Merchant Center (Lesson 6.1). Performance was good: PKR 456,000 monthly gross profit on PKR 493,000 spend.

**But the tiers were coarse.** `margin_high` covered everything above 50%, which included a 51% product and a 68% product treated identically.

### The build

**Week 1: The cost database.**

Her supplier costs lived in invoices and her head. She built a proper sheet:

| SKU | Product | Supplier cost | Shipping in | Packaging | Total COGS | Last updated | Owner |
|---|---|---|---|---|---|---|---|
| SKU-1001 | Gravity filter | 2,180 | 140 | 80 | 2,400 | 2026-08-01 | Sana |
| SKU-1002 | RO filter | 3,900 | 210 | 80 | 4,190 | 2026-08-01 | Sana |

**84 products. Two days of work.** She added a `Last updated` column and a conditional format turning any row red after 90 days.

**Week 2: The calculation.**

Her developer built the profit calculation into the order confirmation:

```
profit = (price ÷ 1.18)          // remove 18% sales tax
       − COGS
       − delivery_cost
       − (price × 0.025)         // payment fees
       − (price × 0.08)          // refund allowance, from her 8% rate
```

**Week 2: The data layer.** Profit pushed as `value`, revenue kept separately for reporting.

**Week 3: Testing.** Full Lesson 2.5 process. She placed ten real test orders across different products and price points, and checked the profit arriving in Google matched her spreadsheet calculation for each.

**Two bugs found in testing:**
1. Multi-item orders were sending only the first item's profit
2. Orders with a discount code were calculating profit on the pre-discount price

**Both would have produced always wrong bidding.** Neither would have been visible without testing every case.

**Week 4: The supplemental feed.** Generated from the same cost sheet, updated daily.

**Week 5: The transition.** She followed the Lesson 5.4 warm-up ladder rather than switching directly.

- Step 1: profit values flowing, still on the old revenue tROAS (14 days)
- Step 2: Maximise Conversion Value, no target (18 days)
- Step 3: actual POAS settled at 1.52. She set the target at 1.38.
- Step 4: tightened to 1.55 over the following eight weeks

### Results at 16 weeks

| Metric | Revenue tROAS 3.7x | Profit tROAS 1.55 |
|---|---|---|
| Monthly spend | PKR 493,000 | PKR 508,000 |
| Orders | 291 | **246** |
| Revenue | PKR 1,824,000 | PKR 1,791,000 |
| **Gross profit** | **PKR 456,000** | **PKR 787,000** |
| **POAS** | 0.93 | **1.55** |
| Average order profit | PKR 1,567 | **PKR 3,199** |

**15% fewer orders. Revenue basically flat. Gross profit up 73%.**

### What the machine did differently

Once bidding on real profit, Smart Bidding's behaviour shifted noticeably.

**It bid up:**
- The gravity filter — 52% margin and, per Lesson 12.2, the highest-LTV first purchase
- Cartridge subscriptions — 68% margin
- Multi-item orders — better margin per delivery
- Commercial units — high absolute profit despite lower percentage

**It bid down:**
- Everything under 25% margin, sharply
- Single-item low-value orders where delivery ate the margin
- One product she had believed was profitable, which turned out to have a 9% margin after the delivery cost was properly allocated

**That last discovery was worth the whole project.** A product she had promoted for two years was barely breaking even once delivery was correctly attributed, and the profit feed exposed it within three weeks.

### The reconciliation

Her monthly check at week 16:

| | Google Ads | Her accounts | Gap |
|---|---|---|---|
| Gross profit from paid | PKR 787,000 | PKR 811,000 | 3.0% ✅ |

Within tolerance. The 3% gap was attribution timing, not a data error.

### The one thing that nearly went wrong

In month 3, she added six new products. Nobody added their costs to the sheet.

**The developer's missing-cost handling saved her.** Rather than sending zero profit, the system applied a conservative default of 20% margin and logged it. Her weekly check caught the log entries.

**Without that fallback, Google would have learned those six products were worthless and stopped advertising them entirely** — while she wondered why her new range was not selling.

---

## 📊 Mastery Score

**Level: Top 1%**

True margin-based bidding is where paid media becomes indistinguishable from financial management. Very few advertisers ever reach it.

---

## 📌 Key Takeaways

- Margin-based bidding means Google optimises for your actual profit, not a proxy for it.
- Two paths are needed: profit as the conversion value, and margin tiers in the feed for campaign control.
- Never subtract ad spend from the conversion value. Send gross profit before advertising.
- Handle the missing-cost case with a conservative default and a log — never zero.
- With POAS, 1.0 is the line. Label reports clearly, because a "ROAS of 1.4" alarms anyone expecting revenue figures.

---

## ☑️ Self-Assessment

1. Do you have accurate cost of goods for every product? Who owns it?
2. Are your conversion values revenue or profit?
3. Does your profit calculation exclude tax and include delivery?
4. Do you send refund adjustments? What is your refund rate?
5. When did you last reconcile Google's conversion value against your accounts?

---

## 🧠 Quiz

**1. What should NEVER be subtracted from the conversion value?**
a) Cost of goods
b) Ad spend
c) Delivery cost
d) Payment fees

**2. What does a POAS of 1.0 mean?**
a) You doubled your money
b) You broke even
c) You lost half
d) Nothing

**3. A new product has no cost recorded. What should the system send?**
a) Zero profit
b) A conservative default, plus a log entry for review
c) The full revenue
d) Nothing

**4. Your revenue tROAS was 3.5x and average margin is 36.8%. What is the equivalent profit tROAS?**
a) 3.5
b) About 1.29
c) 9.5
d) 0.37

**5. Why does the refund adjustment matter?**
a) It is needed by Google
b) Without it your profit data overstates reality by your refund rate
c) It improves Quality Score
d) It speeds up reporting

---

## 💪 Practical Exercise (45 minutes)

Assess readiness for margin-based bidding.

1. Check each prerequisite. Score honestly, especially the cost data ownership one.
2. Build the cost sheet for your top 20 products by spend: supplier cost, shipping, packaging, total COGS.
3. Calculate true profit for each, removing tax and adding a refund allowance.
4. Compare true margin to whatever margin you currently assume. Note the biggest surprises.
5. Calculate your equivalent profit tROAS from your current revenue tROAS.
6. Write the developer specification for the profit calculation, including every edge case.

---

## 🎯 Expert Challenge

Build the complete margin-based bidding system.

- Design the cost data structure: source of truth, update process, named owner, staleness alerting, and the rule preventing new products going live without a cost.
- Write the full developer specification covering every edge case: multi-item orders, discounts, free shipping, bundles, subscriptions, partial refunds and currency conversion.
- Build the testing process: at least ten scenarios covering each edge case, with the expected profit calculated by hand and compared to what arrives in Google.
- Design the refund adjustment pipeline, including how partial refunds are handled and the maximum delay before an adjustment is sent.
- Build the monthly reconciliation between Google's reported conversion value and the business's accounting profit, with a defined tolerance and an escalation process.
- Then run the profit curve analysis (Lesson 5.3) using real POAS. Find the target that maximises total profit rather than POAS itself — they are different points, and confusing them is the most common error at this level.

---

## ✅ Quiz Answers

1 — **b**. Ad spend is what you measure against, never subtracted from value.
2 — **b**. Exactly breakeven.
3 — **b**. A conservative default plus a log. Zero teaches Google it is worthless.
4 — **b**. 3.5 × 0.368 = 1.29.
5 — **b**. It corrects for revenue that came back.

---

**Next lesson:** 12.4 — Which Channel Really Drives Your Sales?
