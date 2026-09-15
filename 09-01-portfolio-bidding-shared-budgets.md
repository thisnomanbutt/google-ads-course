# Lesson 9.1 — Shared Budgets and Bidding Across Campaigns

*Phase 5 · Running Big Accounts and Clients — Module 9 · Managing Large, Complex Accounts*

---

## Quick Recap From Lesson 5.3

You met portfolio bid strategies briefly. At enterprise scale they become essential rather than optional. This lesson goes deep.

---

## 🎯 What You Will Learn

- What changes when an account gets large
- When portfolio bidding really helps, and when it destroys performance
- How shared budgets work, and their hidden risks
- How to group campaigns correctly for pooling
- The governance that stops large accounts becoming unmanageable

---

## What Changes at Scale

A small account has 4 campaigns. A large account has 60, or 300 across an MCC.

**The problems that appear:**

| Problem | Why it appears |
|---|---|
| Data fragmentation | 60 campaigns split conversions 60 ways |
| Budget rigidity | Money locked in campaigns that cannot use it |
| Management time | Individual optimisation becomes impossible |
| Inconsistency | Different people set different targets |
| Reporting chaos | No single view of what is happening |

**Portfolio strategies and shared budgets solve the first two.** Governance solves the rest.

---

## Portfolio Bid Strategies: The Full Picture

A **portfolio bid strategy** is one bid strategy shared across multiple campaigns. They pool their conversion data and share one target.

### What actually happens

Instead of Campaign A learning from its 14 conversions and Campaign B learning from its 11, both learn from the combined 25.

**Think of three small shops sharing a buyer.** Each shop alone is too small to justify a full-time expert buyer. Together, they can employ one who knows the market properly and buys for all three.

That works if the three shops sell similar things at similar margins. It fails badly if one sells jewellery and one sells vegetables.

---

## When Portfolio Bidding Helps

### ✅ Case 1: Low-volume campaigns with similar economics

Five regional campaigns, each with 12 conversions a month, all selling the same product at the same margin.

Individually: none can hit a target reliably.
Pooled: 60 conversions, enough for Smart Bidding to work.

### ✅ Case 2: You want budget to flow to performance

With a portfolio strategy and shared budget, money moves toward whichever campaign is currently performing best, rather than sitting unused.

### ✅ Case 3: Consistent targets across a group

Twelve campaigns that should all run at the same tROAS. One portfolio strategy means one number to change, not twelve.

### ✅ Case 4: Seasonal groups

All your Ramadan campaigns share one strategy and one budget pool, adjusted together (Lesson 10.3).

---

## When Portfolio Bidding Hurts

### ❌ Case 1: Different margins

High-margin products (60%) and low-margin products (18%) share a tROAS of 4.0x.

**What happens:** the target is too loose for the low-margin group (they lose money) and too tight for the high-margin group (they under-spend). Both suffer.

**This defeats the entire purpose of profit tiers** (Lesson 6.1).

### ❌ Case 2: Brand and non-brand together

Brand converts at 30%, non-brand at 2%. Pooled, the strategy sees an average that describes neither.

**In practice:** the strategy over-invests in non-brand because the pooled data makes it look better than it is, subsidised by brand's easy conversions.

**Never pool brand with non-brand.** Ever.

### ❌ Case 3: Different geographies with different economics

A campaign in Karachi and one in Dubai. Different costs, different competition, different customer values.

### ❌ Case 4: When you need clear attribution of your own decisions

Pooled strategies make it harder to tell which campaign responded to which change.

---

## How to Group Campaigns Correctly

**The rule: campaigns in a portfolio must be economically interchangeable.**

Ask: *"Would I be equally happy with a conversion from any of these campaigns?"*

If yes → pool them.
If no → keep them separate.

### A worked grouping

A national retailer with 24 campaigns:

| Portfolio | Campaigns | Why they group |
|---|---|---|
| `Brand` | Brand exact, brand phrase, brand misspellings | Same economics, all brand |
| `High Margin Products` | 6 product campaigns, all above 50% margin | Interchangeable value |
| `Mid Margin Products` | 8 product campaigns, 30–50% margin | Interchangeable value |
| `Low Margin Clearance` | 4 campaigns, under 25% margin | Different, tighter target |
| `Regional Test - New Cities` | 5 city campaigns, all low volume | Pooling for learning |
| *(standalone)* | PMax | Cannot join a portfolio in the same way |

**Six groups instead of 24 individual strategies.** Each group has enough data to learn, and none mixes incompatible economics.

---

## Shared Budgets

A **shared budget** is one budget pool used by several campaigns. Whichever campaign has demand takes the money.

### The benefit

**Without a shared budget:**
- Campaign A: budget PKR 5,000, spends PKR 5,000, limited by budget, missing conversions
- Campaign B: budget PKR 5,000, spends PKR 2,100, no more demand available
- **PKR 2,900 wasted every day**

**With a shared budget of PKR 10,000:**
- Campaign A takes PKR 7,900
- Campaign B takes PKR 2,100
- Nothing wasted

Over a month, that recovers roughly PKR 87,000 of spend that was doing nothing.

### The hidden risks

⚠️ **Risk 1: One campaign eats everything.**

If Campaign A has enormous demand, it can consume the whole pool, starving Campaigns B and C — even if they were more profitable.

**Shared budgets have no per-campaign guarantee.**

⚠️ **Risk 2: You lose budget as a control lever.**

From Lesson 5.2, budget is how you control a campaign on Maximise Conversions. Share it, and you lose that lever for the individual campaign.

⚠️ **Risk 3: Reporting confusion.**

"Why did Campaign C only spend PKR 400 yesterday?" Because A took the money. This is harder to explain to a client than a simple budget cap.

### When to use shared budgets

✅ Campaigns with really interchangeable value, where you do not mind which one spends
✅ Testing groups where you want money flowing to whatever works
✅ Seasonal groups managed as a unit
✅ Campaigns with volatile, unpredictable demand

❌ When a specific campaign must be guaranteed a minimum spend
❌ When campaigns have different profitability
❌ When a client has allocated budget to specific product lines
❌ When you are still learning what each campaign can do

---

## Combining Both

The powerful combination at scale is a **portfolio bid strategy plus a shared budget across the same campaign group.**

```
Portfolio: "High Margin - tROAS 4.2x"
Shared budget: PKR 15,000/day
   ├── Campaign: Filters
   ├── Campaign: Cartridges
   ├── Campaign: Commercial Units
   └── Campaign: Accessories (high margin only)
```

**What this produces:** one target, one budget pool, pooled learning, and money automatically flowing to whichever product is converting best today.

**This is how large accounts are actually run.**

---

## Bid Limits in Portfolio Strategies

From Lesson 5.3: portfolio strategies allow maximum and minimum CPC limits.

**The position remains the same: usually a trap.** They block the high-value auctions Smart Bidding wanted to win.

**The exception at enterprise scale:** when a client has a contractual or governance need capping cost per click. Then set the limit, document why, and monitor the impression share lost as a result.

---

## Governance for Large Accounts

Structure alone is not enough. At 60+ campaigns you need rules.

### 1. The naming standard

From Lesson 1.4, enforced absolutely. At scale, a single inconsistent name makes bulk filtering unreliable.

### 2. The label taxonomy

Every campaign labelled with:
- Profit tier
- Region
- Product line
- Lifecycle stage (test, scaling, mature, winding down)

This lets you report across dimensions that campaign names cannot express.

### 3. The change log

From Lesson 1.3, but formalised. At scale, with multiple people touching the account, an informal log fails.

**Minimum fields:** date, person, campaign, change, reason, expected result, review date.

### 4. Target review cadence

All portfolio targets reviewed on the same schedule — monthly or quarterly — rather than ad hoc. Ad hoc target changes are the main cause of instability in large accounts.

### 5. Access control

From Lesson 1.4. At scale, who can change a portfolio target should be a named, limited group. A single target change affects a dozen campaigns.

---

## 📖 Real-World Example: Restructuring 47 Campaigns

Bilal took over a UK retailer's account: 47 campaigns, £84,000 monthly spend, managed previously by an in-house team of two.

### What he found

- **47 individual bid strategies.** Every campaign had its own tCPA or tROAS, set at different times by different people, ranging from 2.1x to 8.0x with no documented reasoning.
- **31 campaigns had under 20 conversions a month.** Most were permanently in learning.
- **£11,400 of monthly budget was unspent** — campaigns hitting their limit while others sat unused.
- **No naming standard.** Names included "Copy of Campaign 3 FINAL" and "Test - do not pause".
- **Brand and non-brand shared a strategy** in two places.

### The restructure

**Week 1: Audit and grouping.**

He built a spreadsheet of all 47 campaigns with monthly conversions, current target, actual performance, product margin and region.

Then he grouped them by the interchangeability test.

**Result: 7 portfolio groups.**

| Portfolio | Campaigns | Conv/month pooled | Target set |
|---|---|---|---|
| Brand | 3 | 412 | tROAS 12.0x |
| High Margin - National | 9 | 288 | tROAS 4.8x |
| Mid Margin - National | 12 | 341 | tROAS 3.6x |
| Low Margin - Clearance | 5 | 197 | tROAS 2.4x |
| Regional - Scotland | 6 | 74 | tROAS 3.4x |
| Regional - Wales & NI | 5 | 51 | tROAS 3.4x |
| Seasonal - Winter | 7 | 118 | tROAS 3.9x |

**Before: 31 of 47 campaigns had insufficient data. After: every portfolio had 50+ conversions a month.**

**Week 2: Shared budgets.**

He applied shared budgets to five of the seven groups. He on purpose kept Brand and Clearance on individual budgets:

- **Brand** — he wanted a guaranteed cap; brand should never absorb general budget
- **Clearance** — the client had allocated a specific amount to clearance and needed it respected

**Week 3: Naming and labelling.**

Every campaign renamed to the standard. Every campaign labelled with tier, region, product line and lifecycle stage.

**Week 4: Governance.**

- A written target-setting document explaining every target and its justification
- Access restricted — only two people could change portfolio targets
- A monthly target review meeting
- A formal change log

**Then he made no further changes for 21 days** (Lesson 5.1).

### Results at 12 weeks

| Metric | Before | After |
|---|---|---|
| Campaigns in learning | 31 of 47 | **0 of 47** |
| Unspent budget | £11,400/month | **£800/month** |
| Monthly spend | £84,000 | £94,600 |
| Conversions | 1,481 | **2,204** |
| Cost per conversion | £56.72 | **£42.92** |
| Blended ROAS | 3.4x | **4.9x** |
| Management hours/week | 22 | **9** |

**The account spent 13% more and produced 49% more conversions.**

### Where the gains came from

**1. Escaping the learning phase — roughly half the improvement.**
31 campaigns had never completed learning. Pooling gave every group enough data. This alone was the largest single factor, and it needed no clever optimisation — only correct structure.

**2. Recovering unspent budget — roughly a quarter.**
£11,400 a month had been sitting in campaigns that could not use it. Shared budgets moved it to campaigns that could.

**3. Consistent, justified targets — roughly a quarter.**
Several campaigns had targets set years earlier by someone who had left. One had a tROAS of 8.0x on a product line with a 34% margin — mathematically impossible to hit, so the campaign had barely served for eighteen months.

### The finding that surprised everyone

The campaign with the 8.0x target had spent £340 in eighteen months. Nobody had noticed, because with 47 campaigns nobody looked at the small ones.

Once given a realistic 3.6x target inside the Mid Margin portfolio, **it produced 47 conversions in the first month.**

**Eighteen months of a workable product line, invisible because of one wrong number nobody reviewed.**

That is the real argument for governance at scale: not elegance, but the fact that things go wrong quietly and stay wrong for years.

---

## 📊 Mastery Score

**Level: Expert**

Managing large accounts is a different discipline from optimising small ones. Structure and governance matter more than cleverness.

---

## 📌 Key Takeaways

- Portfolio strategies pool conversion data so low-volume campaigns can escape the learning phase.
- Only pool campaigns that are economically interchangeable. Never mix margins, and never mix brand with non-brand.
- Shared budgets recover money sitting unused, but remove your per-campaign control and offer no minimum guarantee.
- Combining a portfolio strategy with a shared budget across a sensible group is how large accounts are actually run.
- At scale, governance — naming, labels, change logs, target review cadence, access control — matters more than optimisation.

---

## ☑️ Self-Assessment

1. How many of your campaigns have under 20 conversions a month?
2. How much of your monthly budget goes unspent?
3. Can you justify every bid target in the account, and who set it?
4. Are brand and non-brand pooled anywhere? Fix it today if so.
5. Could someone else understand your account structure without asking you?

---

## 🧠 Quiz

**1. What is the main benefit of a portfolio bid strategy?**
a) Lower cost per click
b) Pooling conversion data so low-volume campaigns can learn
c) More impressions
d) Simpler reporting

**2. Which campaigns should never share a portfolio strategy?**
a) Campaigns in the same region
b) Brand and non-brand
c) Campaigns with the same margin
d) Seasonal campaigns

**3. What is the main risk of a shared budget?**
a) It costs more
b) One campaign can consume the whole pool, starving the others
c) Google does not support it
d) It restarts learning

**4. What is the interchangeability test?**
a) Whether campaigns have the same name
b) Whether you would be equally happy with a conversion from any of them
c) Whether they run in the same region
d) Whether they use the same keywords

**5. A campaign had a tROAS target of 8.0x on a 34% margin product and spent £340 in 18 months. What was the problem?**
a) Bad keywords
b) A mathematically unachievable target that nobody reviewed
c) Poor ad copy
d) Tracking failure

---

## 💪 Practical Exercise (45 minutes)

Design a portfolio structure for an account with 15+ campaigns.

1. Export all campaigns with monthly conversions, current bid strategy, target and spend.
2. Mark every campaign with under 20 conversions a month.
3. Add the margin or economic value for each campaign's products or services.
4. Apply the interchangeability test and group them.
5. Design the portfolio structure with a justified target for each group.
6. Decide which groups get shared budgets, and which need individual budgets and why.

---

## 🎯 Expert Challenge

Build a complete enterprise account structure.

- Design the full structure for a business with multiple product lines, regions and margins, showing every campaign, its portfolio, its budget arrangement and its labels.
- Build the target-setting document: every target, its derivation from margin and breakeven (Lesson 0.3), the date set, and the review date. Anything without a justification gets recalculated.
- Design the migration plan, sequenced so that learning phases do not all restart simultaneously. Moving 47 campaigns in one day means 47 simultaneous learning phases and a very bad month.
- Build the governance framework: access levels, change approval, change log format, and the review cadence.
- Design the exception reporting: an automated view that flags campaigns with unachievable targets, campaigns spending nothing, campaigns permanently in learning, and unspent budget. These are the problems that hide at scale.
- Then calculate the cost of the current state: unspent budget, campaigns stuck in learning, and campaigns with impossible targets, annualised. That figure is the business case for the restructure.

---

## ✅ Quiz Answers

1 — **b**. Pooled data lets small campaigns escape learning.
2 — **b**. Brand and non-brand have incompatible economics.
3 — **b**. No per-campaign guarantee; one campaign can take it all.
4 — **b**. Equal happiness with a conversion from any of them.
5 — **b**. An impossible target, never reviewed, for eighteen months.

---

**Next lesson:** 9.2 — Advertise Thousands of Products Without Keywords
