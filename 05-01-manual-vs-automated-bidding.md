# Lesson 5.1 — Manual or Automated Bidding: Which and When

*Phase 3 · Bidding and Other Ad Types — Module 5 · How to Set Your Bids*

---

## Quick Recap From Module 4

Your campaign is built and live. Now we teach the machine what to pay — and learn when not to let it.

---

## 🎯 What You Will Learn

- What Smart Bidding actually does in each auction
- The full list of bid strategies, and what each is for
- When manual bidding is still the right answer
- How the AI learns, and what confuses it
- The decision tree for choosing a strategy

---

## What Smart Bidding Actually Does

Remember micro-auctions from Lesson 1.1. Every single search is its own auction, with its own value.

**Manual bidding** sets one bid for a keyword. That same bid applies whether the searcher is:
- On a phone at 2am in a city you barely serve
- On a laptop at 11am, having visited your site twice this week

Same bid. Obviously wrong in one of those cases.

**Smart Bidding** sets a different bid for each auction, using signals available at that exact moment:

- Device and operating system
- Exact location, down to a small area
- Time of day and day of week
- Language and browser
- Whether they are on a remarketing list
- Their previous search behaviour
- The exact wording of the search
- Which ad and landing page will be shown
- Seasonality patterns
- Dozens more

Over 70 signals, weighed in milliseconds, for every auction. **No human can do this.**

**Think of a market trader pricing fish.** A manual bidder sets one price for the whole day. A smart bidder charges differently at 7am when the fish is fresh and the buyer is a restaurant, versus 6pm when the fish must sell and the buyer is a passing shopper. Same fish, correct price.

---

## The Bid Strategies

### Manual strategies

**Manual CPC**
You set the maximum bid for each keyword. Full control, no automation.

**Manual CPC with Enhanced CPC (eCPC)**
You set bids; Google adjusts them somewhat based on conversion likelihood. A halfway step, now largely obsolete.

### Automated non-conversion strategies

**Maximise Clicks**
Google gets as many clicks as possible for your budget. Add a **maximum CPC limit** or costs can run high.

**Target Impression Share**
Google bids to appear in a chosen position (top of page, absolute top) a chosen percentage of the time. Used for brand defence and awareness, not for profit.

### Smart Bidding (conversion-based)

**Maximise Conversions**
Get as many conversions as possible for your budget. No target — it spends the full budget.

**Maximise Conversions with Target CPA (tCPA)**
Same, but aiming for a specific average cost per conversion.

**Maximise Conversion Value**
Get as much conversion *value* as possible for your budget. For businesses where conversions are worth different amounts.

**Maximise Conversion Value with Target ROAS (tROAS)**
Same, but aiming for a specific return on ad spend.

---

## Which One, and When

Use the maturity levels from Lesson 1.2.

| Situation | Strategy | Why |
|---|---|---|
| Brand new campaign, no account data at all | **Maximise Clicks** with a CPC cap | Get traffic and data fast, cheaply |
| New campaign, account has conversion history | **Maximise Conversions** | The AI can use account-level learning |
| 15–30 conversions/month | **Maximise Conversions** | Enough to learn, not enough for a target |
| 30+ conversions/month, want cost control | **Maximise Conversions + tCPA** | Now you can set a realistic target |
| E-commerce, values vary, 30+ conversions | **Maximise Conversion Value** | Optimise for money, not conversion count |
| E-commerce, 50+ conversions, stable data | **Max Conversion Value + tROAS** | Full profit control |
| Brand campaign, want to own position 1 | **Target Impression Share** | Position is the goal, not cost efficiency |
| Really tiny budget in a tiny market | **Manual CPC** | Sometimes still the right answer |

---

## When Manual Bidding Is Still Correct

Automation is not always better. Manual CPC is really right in these cases:

**1. Extremely low volume.** A campaign getting 3 conversions a month gives Smart Bidding nothing to learn from. Manual control at least stays predictable.

**2. Very tight budget in an expensive market.** If your budget is PKR 500 a day and clicks cost PKR 300, you need hard control over what you pay.

**3. Testing a completely new market** where you have no idea of the correct cost, and want a hard ceiling while you learn.

**4. Broken or untrustworthy conversion tracking.** ⚠️ Smart Bidding is only as good as its conversion data. If tracking is wrong, automation will confidently pursue the wrong thing. **Fix the tracking; do not work around it with manual bids.**

**5. Regulatory or contractual cost caps** where exceeding a specific CPC is really not allowed.

**Everywhere else, Smart Bidding wins** — because no human can price a million different auctions.

---

## How the AI Learns

Understanding this changes how you manage accounts.

### The learning process

**Step 1: Observe.** The AI watches which auctions lead to conversions.

**Step 2: Find patterns.** It notices things like: *"People on mobile in Gulberg between 6pm and 9pm convert at 3× the average."*

**Step 3: Predict.** For each new auction, it predicts the conversion probability.

**Step 4: Bid.** Higher probability gets a higher bid; lower probability gets a lower bid or none.

**Step 5: Learn from the result.** Was the prediction right? Adjust the model.

### What the AI needs

| Need | Why | Minimum |
|---|---|---|
| **Conversion volume** | Patterns need examples | ~15–30/month per campaign |
| **Accurate data** | It learns from what you tell it | Tested tracking (Lesson 2.5) |
| **Consistency** | Constant changes reset learning | 2+ weeks of stability |
| **Time** | Patterns take time to appear | 1–2 weeks per change |
| **Signal variety** | It needs different auctions to compare | Do not over-restrict targeting |

### What confuses the AI

❌ **Too many Primary conversion actions** (Lesson 2.3). It cannot serve six masters.
❌ **Changing conversion values mid-flight.** The model becomes inconsistent.
❌ **Frequent budget changes.** Each large change is a new situation to learn.
❌ **Changing bid targets weekly.** It never settles.
❌ **Splitting into tiny campaigns** (Lesson 1.4). Each gets too little data.
❌ **Tracking that breaks silently** (Lesson 2.5). The worst case — it learns confidently from wrong data.
❌ **Over-restricting** with schedules, device exclusions and narrow locations. Fewer signals means worse predictions.

---

## The Rules of Changing Things

This is the discipline that separates professionals from fiddlers.

### Rule 1: One significant change at a time
If you change the budget, the bid strategy and the ads in the same week, you will never know what caused the result.

### Rule 2: Wait 2 weeks after any significant change
The learning phase takes roughly 7–14 days. Judging earlier means judging noise.

### Rule 3: Change targets by no more than 15–20% at a time
Moving a tCPA from PKR 3,000 to PKR 1,500 is not an adjustment; it is a new campaign. Move to PKR 2,500, wait, then PKR 2,100.

### Rule 4: Change budgets by no more than 20–30% at a time
Same reasoning.

### Rule 5: Never change during a genuine anomaly
Ramadan, Eid, Black Friday, a viral moment. Wait for normal conditions, or you will teach the AI a pattern that does not repeat (Lesson 10.3).

---

## 📖 Real-World Example: The Account That Was Never Allowed to Learn

Bilal was asked to review an account that "Smart Bidding does not work on". The client had tried everything.

He opened the Change History for the previous 60 days. Here is a sample:

| Date | Change |
|---|---|
| Day 1 | Switched to Maximise Conversions |
| Day 4 | "Not working" → switched to tCPA at $40 |
| Day 6 | "Too few impressions" → tCPA raised to $70 |
| Day 9 | "Too expensive" → tCPA lowered to $35 |
| Day 11 | Budget doubled |
| Day 13 | Switched to Manual CPC |
| Day 16 | Switched back to Maximise Conversions |
| Day 19 | Budget halved |
| Day 22 | Switched to tROAS |
| Day 24 | Paused 40 keywords |
| Day 27 | Switched to Maximise Clicks |
| Day 31 | Switched to tCPA at $50 |

**Thirty-one days. Eleven major changes.**

The campaign had never completed a single learning phase. Every time the AI began to build a model, the ground moved.

The client's conclusion was "Smart Bidding does not work". The real problem was that Smart Bidding had never been allowed to start.

### What Bilal did

He made **one change**, then did nothing else for 21 days.

- Set the strategy to **Maximise Conversions** (no target — the account had 41 conversions/month, enough to learn but the previous targets were guesses)
- Left the budget alone
- Added negatives only
- **Told the client in writing:** "I will make no bidding changes for 21 days. Cost per conversion will look bad in week one. Please do not ask me to change it."

That last sentence was the most important part of the engagement.

### Results

| Period | Cost per conversion |
|---|---|
| Days 1–7 | $94 😰 |
| Days 8–14 | $61 |
| Days 15–21 | $48 |
| Days 22–35 | $39 |
| Days 36–60 (after adding tCPA at $38) | $34 |

The 60-day average before he took over: **$67**.
The 60-day average after: **$41**.

**He did not use a clever strategy. He used patience.**

The hardest part was not technical. It was managing the client through week one, when everything looked worse than before. Without the written expectation-setting, he would have been pushed into another change on day five, and the cycle would have repeated.

---

## 📊 Mastery Score

**Level: Intermediate**

Understanding bidding is intellectual. Leaving it alone for three weeks is emotional. The second is harder.

---

## 📌 Key Takeaways

- Smart Bidding sets a different bid for every auction using 70+ signals. No human can match this.
- Manual bidding is still correct for very low volume, tiny budgets, or while tracking is broken — though the real fix is to repair tracking.
- The AI needs volume, accuracy, consistency and time. Removing any one of these breaks it.
- One significant change at a time, then wait 14 days. Move targets and budgets by no more than 15–30%.
- Most "Smart Bidding does not work" cases are accounts that were never allowed to finish learning.

---

## ☑️ Self-Assessment

1. What bid strategy is each of your campaigns using, and why that one?
2. How many changes did you make to your main campaign in the last 30 days?
3. How many conversions per month does each campaign get?
4. Do you have more than two Primary conversion actions?
5. Could you leave an account alone for 21 days? Really?

---

## 🧠 Quiz

**1. What is the main advantage of Smart Bidding over manual?**
a) It is free
b) It sets a different bid for each individual auction using 70+ signals
c) It never makes mistakes
d) It reduces your budget

**2. When is manual bidding still a reasonable choice?**
a) Always
b) Very low conversion volume, tiny budgets, or while tracking is broken
c) Only for e-commerce
d) Never

**3. How long does a learning phase typically take?**
a) 24 hours
b) 7–14 days
c) 3 months
d) It never ends

**4. How much should you change a tCPA target at once?**
a) As much as you like
b) No more than 15–20%
c) Only 1%
d) Double or halve it

**5. What is the most dangerous thing for Smart Bidding?**
a) A large budget
b) Conversion tracking that is broken or measures the wrong thing
c) Too many keywords
d) Broad match

---

## 💪 Practical Exercise (30 minutes)

Audit one account's bidding health.

1. Open Change History for the last 60 days. Count the significant changes.
2. List each campaign with its bid strategy and monthly conversion count.
3. Mark any campaign whose strategy does not match its data level.
4. Check the number of Primary conversion actions.
5. Write a 30-day stability plan: what you will change now, and what you will leave alone.

---

## 🎯 Expert Challenge

Build a bidding governance framework for a portfolio.

- Define the strategy selection rules as a decision tree, with the specific conversion volume thresholds at which a campaign graduates from one strategy to the next.
- Create the change control process: what changes need a waiting period, who approves them, and how they are logged with predicted outcomes.
- Build the learning-phase monitor: a way to see at a glance which campaigns are currently in learning, and how long they have been there. A campaign permanently in learning is a structural problem, not a bidding one.
- Design the client communication process for the learning phase, including the pre-agreed statement that no bidding changes happen for 21 days after a strategy switch.
- Then audit your own behaviour honestly: over the last quarter, how many of your changes were driven by data, and how many by anxiety? Most people find the answer uncomfortable, and finding it is how you improve.

---

## ✅ Quiz Answers

1 — **b**. Per-auction bidding on signals no human can access.
2 — **b**. Low volume, tiny budget, or broken tracking as a temporary measure.
3 — **b**. Roughly 7–14 days.
4 — **b**. 15–20% steps, with time between them.
5 — **b**. Wrong data makes the AI confidently pursue the wrong outcome.

---

**Next lesson:** 5.2 — The Learning Phase: Why You Must Wait
