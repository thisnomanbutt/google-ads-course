# Lesson 5.3 — Setting Target CPA and Target ROAS

*Phase 3 · Bidding and Other Ad Types — Module 5 · How to Set Your Bids*

---

## Quick Recap From Lesson 5.2

Your campaign has finished learning and is producing conversions at a stable cost. Now we add a target and take control.

---

## 🎯 What You Will Learn

- What a target actually does to Google's behaviour
- How to set your first target correctly (not from a wish)
- The trade-off between target and volume that everyone forgets
- Portfolio bid strategies and when they help
- Bid limits, and why they are usually a trap

---

## What a Target Does

**Maximise Conversions** says: *"Spend the whole budget, get as many conversions as possible."*

**Maximise Conversions with tCPA** says: *"Get as many conversions as possible **at an average cost of PKR 2,000 each**. If you cannot find them at that price, spend less."*

That final sentence is the important one. **A target gives Google permission to under-spend.**

- **No target:** budget is the ceiling, Google spends it all
- **With a target:** the target becomes the primary control; budget becomes a secondary ceiling

**Think of hiring a buyer for your shop.** Without a target: "Here is PKR 100,000, buy as much stock as you can." With a target: "Here is PKR 100,000, but do not pay more than PKR 500 per unit on average." The second buyer may come back with money left over — and that is correct behaviour, not failure.

---

## The Trade-Off Nobody Warns You About

**Tighter target = lower cost per conversion = fewer conversions.**

This is not a flaw. It is arithmetic. Cheaper auctions are rarer.

| tCPA target | Cost per conversion | Conversions/month | Total profit* |
|---|---|---|---|
| PKR 3,000 | PKR 2,850 | 62 | PKR 9,300 |
| PKR 2,500 | PKR 2,400 | 51 | PKR 10,200 |
| PKR 2,000 | PKR 1,950 | 38 | PKR 24,700 |
| PKR 1,500 | PKR 1,480 | 21 | PKR 23,520 |
| PKR 1,000 | PKR 980 | 8 | PKR 16,160 |

*\*Profit = (PKR 3,000 lead value − cost per conversion) × conversions*

**Look at the profit column.** The most profitable target is PKR 2,000 — neither the loosest nor the tightest.

- At PKR 3,000, she gets volume but almost no margin per lead
- At PKR 1,000, each lead is very profitable but there are too few
- At PKR 2,000, the two forces balance

⚠️ **The most common mistake in Google Ads:** setting the target as low as possible because low cost feels like good management. Low cost per conversion with almost no conversions is a failing campaign that looks like a successful one.

**Your goal is maximum total profit, not minimum cost per conversion.**

---

## Setting Your First Target

### The wrong way

"We would like leads at PKR 800." Where did PKR 800 come from? A wish.

Set a target far below what the market allows and the campaign will barely serve. You will conclude tCPA does not work.

### The right way

**Step 1.** Run Maximise Conversions for at least 30 days and 30 conversions.

**Step 2.** Find your actual average cost per conversion over that period. Say it is PKR 2,300.

**Step 3.** Set your first tCPA at **10–15% below that actual**. So PKR 2,000.

**Step 4.** Wait 2 weeks.

**Step 5.** If volume held and cost fell, tighten by another 10–15%. If volume collapsed, loosen back.

**Step 6.** Repeat until you find the profit peak from the table above.

### Sanity checks before you set anything

- Is the target **above your breakeven**? (Lesson 0.3) Never target above your maximum cost per customer.
- Is the target **reachable**? If actual cost is PKR 2,300, a target of PKR 700 is fantasy.
- Do you have **enough conversions** for the AI to hit a target? Below 30/month, targets become unreliable.

---

## tCPA vs tROAS: Which One?

| Use tCPA when | Use tROAS when |
|---|---|
| Every conversion is worth roughly the same | Conversion values vary |
| Lead generation with one main service | E-commerce with different order values |
| You do not have reliable values yet | Values are accurate and stable |
| Simpler is better for this account | You want profit control |

### Setting a tROAS target

From Lesson 0.3:

> **Breakeven ROAS = AOV ÷ Contribution margin**
> **Target ROAS = Breakeven × 1.3 to 1.5**

Sana: AOV PKR 5,000, margin PKR 2,600.
- Breakeven ROAS = 5,000 ÷ 2,600 = **1.92x**
- Target ROAS = **2.5x to 2.9x**

**But** — same rule as tCPA. **Start from your actual, not your ideal.**

If she is currently achieving 3.4x, do not set 2.5x. That would loosen the target and buy worse traffic. Set 3.6x and tighten from there.

**The rule:** the first target you set should be slightly *harder* than what you are already achieving. Not easier, and not fantasy.

⚠️ **If you send profit as conversion value instead of revenue** (Lesson 0.4), your tROAS numbers change completely. A POAS-based target of 1.4 is very different from a revenue ROAS of 4.0. Never mix the two, and always label which one you are reporting.

---

## Portfolio Bid Strategies

A **portfolio bid strategy** is one bid strategy shared across several campaigns. They pool their conversion data and share one target.

### When portfolio strategies really help

**1. Low-volume campaigns.** Three campaigns with 12 conversions each cannot hit a target individually. Pooled, they have 36 and can.

**2. Campaigns that should be treated as one goal.** Different regions selling the same product at the same margin.

**3. You want budget to flow to whichever campaign performs best**, rather than being locked per campaign.

### When they hurt

❌ **Campaigns with really different economics.** High-margin and low-margin products should never share a target — that was the whole point of separating them (Lesson 1.4).

❌ **Brand and non-brand together.** Brand converts at 30%, non-brand at 2%. Pooled, the target is meaningless for both.

❌ **When you need per-campaign reporting clarity.** Shared strategies make attribution of your own decisions harder.

### How to set one up

Tools → Shared library → **Bid strategies** → Create → choose type → set target → apply to campaigns.

**Rule of thumb:** start with campaign-level strategies. Move to portfolio only when you have a specific reason from the list above.

---

## Bid Limits: Usually a Trap

Portfolio strategies let you set a **maximum bid limit** and a **minimum bid limit**.

### Why this is tempting

"I do not want to pay more than PKR 100 per click." Reasonable-sounding.

### Why it usually backfires

Smart Bidding works by paying *more* for the auctions most likely to convert, and *less* for the rest. That is the entire mechanism.

A max CPC limit blocks the high-value auctions — exactly the ones you most wanted.

**Think of a football manager who says "no player may run faster than 20 km/h".** You have just banned your best striker from doing the thing that scores goals.

### When a max bid limit is really justified

1. A contractual or regulatory cost cap
2. A brand campaign where you know the maximum sensible price
3. Recovering from a specific incident where costs ran away

**Minimum bid limits** are even rarer. They stop Google bidding low on poor auctions — which is usually the correct behaviour you are now preventing.

**Default position: no bid limits.** Use the target to control cost, not the limit.

---

## Changing Targets Safely

### The rules

1. **Change by 10–20% at a time.** Never more.
2. **Wait 2 weeks between changes.** Every change is a mini learning phase.
3. **Change one campaign at a time** if you want to learn anything.
4. **Log every change** with the reason and the expected result (Lesson 1.3).
5. **Never change during an anomaly** — Ramadan, Eid, Black Friday (Lesson 10.3).

### The tightening ladder

```
Actual cost PKR 2,300
   ↓ set tCPA PKR 2,000, wait 14 days
Result: PKR 1,980, volume held
   ↓ set tCPA PKR 1,750, wait 14 days
Result: PKR 1,760, volume down 8% — acceptable
   ↓ set tCPA PKR 1,550, wait 14 days
Result: PKR 1,590, volume down 34% — too far
   ↓ return to PKR 1,750
Settled.
```

That process took 8 weeks and found the real profit peak. There is no faster honest way to do it.

---

## Seasonality Adjustments

If you know a short period will convert unusually well — a two-day sale, Eid weekend — you can apply a **seasonality adjustment** telling Google to expect a higher conversion rate.

**Use it for:** short, predictable, unusual periods of 1–7 days.

**Do not use it for:** normal weekly patterns (Smart Bidding already knows those), long periods, or events you are guessing about.

Full treatment in Lesson 10.3.

---

## 📖 Real-World Example: Finding the Profit Peak

TaskFlow had reached stability. Maximise Conversions was producing paying customers at an average of **$164**. Their LTV-based maximum was $432, and their comfortable ceiling was around $200.

The founder's instinct: *"Set the target to $100. Half the cost, same customers."*

Instead, they ran the tightening ladder properly, over 12 weeks.

| Target | Actual cost | Customers/month | Profit/month* |
|---|---|---|---|
| No target | $164 | 47 | $12,596 |
| $150 | $148 | 44 | $12,496 |
| $130 | $127 | 39 | $11,895 |
| $110 | $112 | 28 | $8,960 |
| $90 | $94 | 14 | $4,732 |

*\*Profit = ($432 LTV − cost) × customers, ignoring other costs for comparison*

**Look at what happened at $90.** Cost per customer fell 43% from the no-target baseline. It looked like a triumph on the dashboard.

But customers fell from 47 to 14. **Monthly profit fell by 62%.**

If the founder had judged on cost per customer alone, he would have declared $90 the best target and quietly destroyed most of the company's growth.

### What they actually chose

They set the target at **$150**.

Why not "no target", which showed marginally higher profit? Two reasons:

1. **Predictability.** With a target, monthly cost per customer varied by ±8%. Without one, it varied by ±31%. A young company with tight cash needs predictability more than the last 1% of profit.
2. **Headroom for scaling.** A target gave them a stable base from which to raise the budget. Without a target, raising the budget would have pushed cost per customer up unpredictably.

**Then they did the more interesting thing.** Instead of tightening the target further, they went back to Lesson 0.5 and improved the trial-to-paid conversion rate from 26% to 34%.

That single change did what no target could: it moved the entire curve. At the same $150 target, cost per customer fell to **$118** and volume rose to **58/month**.

**The bid target optimises within your business. Improving the business moves the whole curve.**

That is the difference between a media buyer and a CMO, and it is the point of Module 0.

---

## 📊 Mastery Score

**Level: Advanced**

Target setting looks like a simple number. Understanding the volume trade-off, and resisting the urge to tighten, is really advanced work.

---

## 📌 Key Takeaways

- A target lets Google under-spend. That is correct behaviour, not failure.
- Tighter targets always mean fewer conversions. Optimise for total profit, not lowest cost per conversion.
- Set your first target 10–15% below your *actual* achieved cost, never from a wish.
- Portfolio strategies help low-volume campaigns pool data, but never mix different economics.
- Bid limits usually block the high-value auctions you most wanted. Default to none.

---

## ☑️ Self-Assessment

1. What is your current tCPA or tROAS target, and where did the number come from?
2. Have you ever mapped the profit curve across different targets?
3. Do you have any bid limits set? Can you justify them?
4. When did you last change a target, and by what percentage?
5. Is your target above or below your breakeven from Lesson 0.3?

---

## 🧠 Quiz

**1. What happens when you set a tCPA target?**
a) Google spends more
b) Google may under-spend rather than exceed the target
c) The budget becomes irrelevant
d) Learning stops

**2. Tightening your target always causes what?**
a) More conversions
b) Fewer conversions
c) The same conversions, cheaper
d) Nothing

**3. Your actual cost per conversion is PKR 2,300. What should your first tCPA be?**
a) PKR 700
b) About PKR 2,000
c) PKR 5,000
d) PKR 100

**4. When is a portfolio bid strategy appropriate?**
a) Always
b) When low-volume campaigns with similar economics need to pool data
c) For brand and non-brand together
d) When campaigns have different margins

**5. Why are max CPC bid limits usually harmful?**
a) They cost extra
b) They block the high-value auctions Smart Bidding wanted to win
c) Google ignores them
d) They restart learning

---

## 💪 Practical Exercise (30 minutes)

Build a target-setting plan for one campaign.

1. Find the actual average cost per conversion over the last 30 days.
2. Calculate your maximum acceptable cost per conversion from Lesson 0.3.
3. Confirm your target sits between those two numbers.
4. Write the tightening ladder: four steps, each 10–15% tighter, with a 14-day gap.
5. Write the rollback rule: the volume drop percentage at which you loosen back.

---

## 🎯 Expert Challenge

Map the full profit curve for a real campaign.

- Design a target testing sequence that produces enough data at each level to be meaningful. Decide how many conversions constitute a valid reading, and how long that takes at each target.
- Build the profit model, including not just conversions and cost but the second-order effects: does volume loss reduce brand awareness, affect the sales team's pipeline, or change fixed cost recovery?
- Find the limit that actually limits this account: is it the target, the budget, the impression share, the conversion rate, or the offer? Only one of these is the binding limit at any time, and optimising the others is wasted effort.
- Then attack that limit directly, and re-map the curve afterwards. Document how much the curve moved.
- Finally, write the target review policy: how often targets are reviewed, what evidence triggers a change, and who signs off. Ad-hoc target fiddling is one of the most common causes of unstable accounts.

---

## ✅ Quiz Answers

1 — **b**. Under-spending to hold the target is the intended behaviour.
2 — **b**. Cheaper auctions are rarer, so volume falls.
3 — **b**. 10–15% below the actual achieved cost.
4 — **b**. Pooling data across similar low-volume campaigns.
5 — **b**. They prevent Smart Bidding from paying up for the best auctions.

---

**Next lesson:** 5.4 — Moving Safely to Value-Based Bidding
