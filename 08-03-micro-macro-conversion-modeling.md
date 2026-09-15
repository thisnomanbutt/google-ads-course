# Lesson 8.3 — What to Do When You Have Too Few Sales

*Phase 4 · Tracking and Reading Your Results — Module 8 · Reading Reports and Fixing Problems*

---

## Quick Recap From Lesson 2.3

You learned that only money-generating actions should be Primary. That rule holds. But what do you do when the money-generating action is too rare for Smart Bidding to learn from?

---

## 🎯 What You Will Learn

- The difference between micro and macro conversions
- When using a micro-conversion for bidding is correct, and when it is dangerous
- How to find which micro-conversions actually predict sales
- How to calculate a proxy value that keeps bidding honest
- How to exit the proxy safely once volume grows

---

## The Definitions

**Macro conversion** — the action that makes money. A purchase, a signed contract, a paying customer.

**Micro conversion** — a step on the way. Add to cart, pricing page view, video watched, brochure downloaded.

**The rule from Lesson 2.3 still applies:** the macro conversion should be Primary.

**But there is a real problem.** Smart Bidding needs roughly 15–30 conversions a month per campaign to learn (Lesson 5.1). Many good businesses do not produce that many sales.

- A dental implant clinic: 8 implant cases a month
- A B2B software company: 12 enterprise deals a quarter
- A property developer: 4 apartment sales a month

**These businesses are profitable. Smart Bidding still cannot learn from four data points.**

---

## The Proxy Solution

When macro conversions are too rare, use a **micro-conversion as a proxy** — a stand-in that happens often enough to learn from, and that really predicts the macro conversion.

**Think of a doctor monitoring a patient.** The outcome that matters is whether the patient stays healthy over five years. You cannot wait five years to decide on treatment. So you monitor blood pressure — a frequent, measurable signal that correlates with the outcome you care about.

Blood pressure is not the goal. It is the proxy that lets you act now.

⚠️ **The danger:** if you choose a proxy that does not actually predict the outcome, you will optimise hard toward something worthless. This is exactly the failure in Lesson 0.6, where cheap form fills replaced real customers.

**The whole skill is choosing the right proxy and valuing it correctly.**

---

## Choosing the Right Proxy

A good proxy needs three properties.

### 1. Frequency
It must happen at least 30 times a month per campaign. Otherwise it solves nothing.

### 2. Correlation
It must really predict the macro conversion. **You must prove this with data, not assume it.**

### 3. Resistance to gaming
It should not be easy to trigger accidentally or by people with no intent. A "viewed 3 pages" event can be triggered by a confused visitor. A "downloaded the price list" event cannot.

---

## Finding the Correlation: The Analysis

This is the part people skip, and it is what separates a good proxy from a disaster.

### The method

**Step 1.** Export all users from the last 90 days who completed the macro conversion.

**Step 2.** Export all users who did NOT complete it.

**Step 3.** For each candidate micro-conversion, calculate two numbers:

| Metric | Meaning |
|---|---|
| **Conversion rate given the micro** | Of users who did X, what % bought? |
| **Coverage** | Of users who bought, what % did X first? |

**Step 4.** Compare.

### A worked example — Dr. Ayesha's implant funnel

| Micro-conversion | Monthly volume | % who then booked an implant | % of implant patients who did this |
|---|---|---|---|
| Viewed implant page | 1,840 | 1.1% | 94% |
| Viewed implant **pricing** page | 412 | 4.9% | 87% |
| Watched the implant video | 218 | 6.4% | 61% |
| **Downloaded the price guide** | **96** | **19.8%** | **71%** |
| Used the cost calculator | 74 | 22.9% | 58% |
| Clicked the phone number | 143 | 12.6% | 44% |

### How to read this table

**"Viewed implant page"** has huge volume but almost no predictive power. 1.1% conversion means 99% of the people triggering it are not buyers. **Bad proxy** — optimising for it means optimising for browsers.

**"Used the cost calculator"** has the highest conversion rate at 22.9%, but only 74 per month and only 58% coverage. **Too narrow** — you would ignore 42% of your real buyers.

**"Downloaded the price guide"** is the winner. 96 per month is enough volume, 19.8% convert, and it captures 71% of actual implant patients.

**That combination — enough volume, strong prediction, good coverage — is what you are looking for.**

⚠️ **Correlation is not causation.** People who download the price guide are already more likely to buy. Downloading it does not *cause* them to buy. That is fine — you are using it as a signal, not as a treatment.

---

## Calculating the Proxy Value

Once you have chosen the proxy, you must value it correctly. Getting this wrong breaks your entire bidding economics.

> **Proxy value = Macro conversion value × Probability of macro given the proxy**

Dr. Ayesha's implant case:

- Implant margin: PKR 45,000
- Probability of booking given a price guide download: 19.8%
- **Proxy value = 45,000 × 0.198 = PKR 8,910**

**Round it to PKR 8,900.**

### Why this matters so much

If she valued the download at PKR 45,000 (the full implant value), her tROAS calculations would be wildly wrong. Google would think each download was worth five times what it is, and she would massively overbid.

If she valued it at PKR 0, Smart Bidding would ignore it entirely.

**The correct value keeps the economics honest**, so a tROAS target set against the proxy produces the same real-world outcome as one set against the macro conversion.

### Sanity check

Work backwards. If her max cost per implant patient is PKR 45,000 × 0.5 = PKR 22,500, then her max cost per download should be:

```
22,500 × 0.198 = PKR 4,455
```

Set the tCPA around PKR 3,500–4,000 to leave margin. **If the actual cost per download comes out at PKR 9,000, the proxy strategy is not working** and you need to investigate rather than continue.

---

## The Configuration

### Set it up correctly

| Conversion action | Setting | Value |
|---|---|---|
| Implant booked (macro) | Secondary — observed | Real margin |
| **Price guide download (proxy)** | **Primary** | PKR 8,900 |
| Other micro-conversions | Secondary | — |

⚠️ **Keep the macro conversion tracked as Secondary.** You need to keep watching it, because it is the number that actually matters. You simply are not bidding directly on it.

### The monthly check

Every month, check the relationship still holds:

1. How many proxy conversions did we get?
2. How many macro conversions followed?
3. What is the actual ratio this month?
4. Does it still match the value we assigned?

⚠️ **If the ratio drifts, update the value.** A proxy whose correlation has decayed is worse than no proxy, because you are optimising confidently toward something that has stopped meaning anything.

**This drift is the main risk of proxy bidding.** Diarise the check.

---

## The Exit Plan

The proxy is temporary. Define the exit before you start.

### The exit condition

> **When macro conversions reach 30+ per month per campaign, switch back.**

### The transition

1. Change the macro conversion from Secondary to Primary
2. Change the proxy from Primary to Secondary
3. Expect a 14-day learning phase (Lesson 5.2)
4. Set the new target from your actual macro cost per conversion (Lesson 5.3)
5. Watch for two weeks before making further changes

**Write the exit condition in your change log** on the day you set up the proxy (Lesson 1.3). Otherwise proxies become permanent by accident, and accounts end up optimising for downloads forever.

---

## Integrating Lead Scoring

From Lesson 0.6, you built a lead scoring model. It can be combined with proxy bidding for a more advanced setup.

### The layered approach

| Signal | Sent when | Value |
|---|---|---|
| Price guide download | Immediately | PKR 8,900 (proxy) |
| Lead scored 8+ | Day 2, from CRM | PKR 22,000 |
| Consultation attended | Day 9, offline upload | PKR 32,000 |
| Implant booked | Day 21, offline upload | PKR 45,000 (real) |

**How this works together:** the proxy gives Smart Bidding immediate volume to learn from. The later uploads (Lesson 7.4) refine that learning with real outcomes.

⚠️ **Deduplicate carefully.** These must be **adjustments to the same conversion**, not four separate conversions. Otherwise your reported value is four times reality (Lesson 7.2).

**The simpler alternative** if that is too complex: use the proxy as Primary and upload only the final macro conversion as a separate Secondary action, watching the ratio. Less elegant, much harder to break.

---

## 📖 Real-World Example: The Property Developer With Four Sales a Month

Bilal took on a Lahore property developer selling apartments. Average unit price: PKR 14 million. Average margin: PKR 2.1 million.

**Their problem:** four sales a month. Smart Bidding had nothing to learn from.

Their previous agency had set "contact form submitted" as the Primary conversion. That produced 340 form fills a month at PKR 890 each — and almost none of them were buyers. Students, curious neighbours, brokers, and people who could never afford PKR 14 million.

**Real cost per sale: PKR 75,650.** Profitable against a PKR 2.1 million margin, but wildly inefficient.

### The analysis

Bilal exported 12 months of data and analysed every micro-conversion against actual sales.

| Micro-conversion | Monthly volume | % who then bought | % of buyers who did this |
|---|---|---|---|
| Contact form submitted | 340 | 1.2% | 100% |
| Viewed floor plans | 890 | 0.4% | 89% |
| **Downloaded the payment plan PDF** | **62** | **9.7%** | **83%** |
| Booked a site visit | 31 | 22.6% | 74% |
| Used the instalment calculator | 128 | 3.1% | 68% |
| Called and spoke over 3 minutes | 44 | 18.2% | 66% |

**The contact form — the thing they were optimising for — converted at 1.2%.** It captured every buyer, but so did breathing. It had no discriminating power whatsoever.

**Site visits converted best at 22.6%**, but only 31 a month. Not enough for Smart Bidding.

**The payment plan PDF download** was the answer: 62 a month, 9.7% conversion, 83% coverage.

### The configuration

**Proxy value:**
```
PKR 2,100,000 × 0.097 = PKR 203,700
```

He rounded to PKR 200,000.

**Sanity check on the target:**
- Max acceptable cost per sale: PKR 2,100,000 × 0.4 = PKR 840,000
- Max cost per download: 840,000 × 0.097 = PKR 81,480
- Set tCPA at PKR 45,000 at first, to leave room

**Setup:**

| Action | Setting | Value |
|---|---|---|
| Payment plan download | **Primary** | PKR 200,000 |
| Site visit booked | Secondary | PKR 475,000 |
| Sale completed (offline upload) | Secondary | Real margin |
| Contact form | Secondary | — |

He also gated the PDF behind a short form asking budget range — which further improved the quality of who downloaded it (Lesson 0.6).

### What Smart Bidding did with this

Once told that a PDF download was worth PKR 200,000, Google's behaviour changed completely.

**It bid up:**
- Searches with specific project names and locations
- "Apartment for sale DHA phase 6" — precise, high-intent
- Desktop traffic during working hours
- Postcodes with high average income

**It bid down:**
- "Apartment for rent" (wrong intent entirely)
- Mobile traffic late at night
- Generic "property in lahore"
- Searches with "cheap" or "low budget"

### Results at 20 weeks

| Metric | Before | After |
|---|---|---|
| Monthly spend | PKR 302,000 | PKR 311,000 |
| Contact forms | 340 | 89 |
| **PDF downloads** | 62 | **97** |
| Site visits | 31 | **58** |
| **Sales** | **4** | **9** |
| **Cost per sale** | **PKR 75,500** | **PKR 34,600** |

**Form fills fell 74%. Sales more than doubled.**

The sales team's reaction was the most telling part. Previously they made 340 calls a month to reach 4 buyers. Now they made 89 calls and reached 9.

**Their workload fell by 74% while their results doubled.** The account improvement was not just a media efficiency gain — it changed how the business operated.

### The exit that has not happened yet

Nine sales a month is still below the 30-conversion threshold. They remain on the proxy, and correctly so.

Bilal checks the correlation monthly. Over 20 weeks it has moved between 9.1% and 11.4% — stable enough to keep the PKR 200,000 value, which he reviews quarterly.

**The exit condition is written in the change log:** *"Switch to sale-as-primary when monthly sales exceed 30 for three consecutive months."*

At current growth, that is roughly two years away. The proxy is a long-term arrangement here, and that is the correct answer for this business.

---

## 📊 Mastery Score

**Level: Expert**

Proxy modelling is the technique that makes Smart Bidding work for low-volume, high-value businesses — which are often the most profitable clients available.

---

## 📌 Key Takeaways

- Use a micro-conversion as a bidding proxy only when macro conversions are too rare to learn from.
- A good proxy needs three things: enough volume, proven correlation, and resistance to accidental triggering.
- Prove the correlation with data. Calculate both conversion rate given the micro and coverage of real buyers.
- Proxy value = macro value × probability of macro given the proxy. Getting this wrong breaks your economics.
- Write the exit condition on day one, and check the correlation monthly for drift.

---

## ☑️ Self-Assessment

1. How many macro conversions does each of your campaigns get per month?
2. If below 30, have you analysed which micro-conversions predict sales?
3. Have you calculated a proxy value, or guessed one?
4. Is your macro conversion still tracked as Secondary so you can watch it?
5. Have you written the exit condition anywhere?

---

## 🧠 Quiz

**1. When should you use a micro-conversion as the Primary action?**
a) Always, for more data
b) Only when macro conversions are too rare for Smart Bidding to learn from
c) Never
d) For e-commerce only

**2. Which is the better proxy: A) 1,840 events/month at 1.1% conversion, or B) 96 events/month at 19.8% conversion with 71% coverage?**
a) A, because of volume
b) B, because it has enough volume plus real predictive power
c) Neither
d) Both equally

**3. How do you calculate the proxy value?**
a) The same as the macro value
b) Macro value × probability of macro given the proxy
c) Cost per conversion × 2
d) Guess it

**4. Why keep the macro conversion tracked as Secondary?**
a) Google needs it
b) You must keep watching the number that actually matters
c) It improves Quality Score
d) It is not necessary

**5. What is the main risk of proxy bidding over time?**
a) Cost increases
b) The correlation drifts and you optimise toward something that stopped meaning anything
c) Google disallows it
d) It restarts learning

---

## 💪 Practical Exercise (45 minutes)

Run a proxy analysis on one low-volume account.

1. Count monthly macro conversions per campaign. Mark anything under 30.
2. List every micro-conversion currently tracked, with its monthly volume.
3. For the top four candidates, calculate the conversion rate given the micro and the coverage of real buyers.
4. Choose the best proxy and justify it against all three rules.
5. Calculate the proxy value and the target CPA sanity check.
6. Write the configuration table and the exit condition.

---

## 🎯 Expert Challenge

Build a complete proxy and feedback structure for a high-value, low-volume business.

- Run the full correlation analysis across every trackable micro-event, and produce the ranked table with volume, conversion rate and coverage.
- Design the value ladder combining the immediate proxy with later CRM-based adjustments (Lesson 7.4), and design the deduplication so the same conversion is adjusted rather than duplicated.
- Build the drift monitor: a monthly automated check on the proxy-to-macro ratio, with an alert threshold that triggers a value recalculation.
- Design the gating strategy: what qualifying question or friction you add to the proxy event to improve its predictive power without destroying its volume. This is a genuine trade-off and it needs testing.
- Write the exit plan with the specific numeric trigger, the transition steps, and the expected learning phase impact.
- Finally, model the operational effect on the sales team, as in the property example. A change that halves their workload while doubling results is a far stronger argument to the business than any media metric.

---

## ✅ Quiz Answers

1 — **b**. Only when macro volume is really too low.
2 — **b**. B has enough volume and real predictive power; A has volume and none.
3 — **b**. Macro value multiplied by the conditional probability.
4 — **b**. It remains the number that matters, even when not bidding on it.
5 — **b**. Correlation drift, silently optimising toward a meaningless signal.

---

**Next lesson:** 8.4 — Why Results Drop, and How to Find the Cause
