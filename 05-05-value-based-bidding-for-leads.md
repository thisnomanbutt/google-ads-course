# Lesson 5.5 — Tell Google Which Leads Are Worth More

*Phase 3 · Bidding and Other Ad Types — Module 5 · How to Set Your Bids*

---

## Quick Recap From Lesson 5.4

You know how to transition safely to value bidding. But e-commerce has obvious values — an order is worth what it costs. **Lead generation does not.** This lesson solves that.

---

## 🎯 What You Will Learn

- Why lead generation businesses gain the most from value bidding
- The three levels of lead valuation, from simple to elite
- How to calculate lead values from real close rates
- How to build a lead scoring model that feeds Google
- How to prevent value inflation from corrupting the system

---

## Why Lead Gen Gains the Most

E-commerce already has values. A PKR 5,000 order is worth PKR 5,000. Value bidding is a refinement.

**Lead generation usually has nothing.** Every lead counts as "1 conversion". A PKR 200,000 implant enquiry and a PKR 1,500 cleaning enquiry are treated as identical.

Google, told they are identical, will find you the cheap one. **Every time.** Because it is easier.

**Think of a fishing net with equal-sized holes.** Everything the same size gets caught, so you fill your boat with the most common fish — which is the smallest and least valuable. Value bidding is changing the net so you catch fewer, bigger fish.

**This is why lead gen businesses often see the largest gains from this lesson in the entire course.**

---

## The Three Levels of Lead Valuation

### Level 1: Flat value (start here today)

Every lead gets the same value: your average lead value.

> **Lead value = Average customer margin × Lead-to-customer rate**

Dr. Ayesha: PKR 12,000 × 25% = **PKR 3,000**.

**Better than nothing?** Yes — it lets you use tROAS and value rules. But it does not distinguish between lead types, so the AI still cannot hunt selectively.

**Time to set up:** 15 minutes.

### Level 2: Static values by lead type (the sweet spot)

Different forms, services or pages get different values, based on their real close rates and margins.

| Lead type | Avg margin | Close rate | Assigned value |
|---|---|---|---|
| Implant enquiry | PKR 45,000 | 20% | **PKR 9,000** |
| Braces enquiry | PKR 30,000 | 20% | **PKR 6,000** |
| Whitening enquiry | PKR 8,000 | 35% | **PKR 2,800** |
| General checkup | PKR 5,000 | 30% | **PKR 1,500** |
| Unspecified contact form | PKR 12,000 | 7% | **PKR 840** |

**Now Google can hunt selectively.** It will happily pay six times more for an implant click than a checkup click — because you told it that click is worth six times more.

**Time to set up:** a few hours, plus a conversation with the sales team.

**This is where most businesses should aim.** Level 2 captures the most of the benefit.

### Level 3: Dynamic values from the CRM (elite)

The real money each lead produced, sent back to Google after the sale closes.

This needs the GCLID pipeline from Lesson 2.6 and offline conversion imports from Lesson 7.4.

**Time to set up:** weeks, and it needs developer or CRM support.

**When it is worth it:** high-value sales, long consideration, wide variation in deal size. B2B, property, education, healthcare, professional services.

---

## Calculating Level 2 Values Properly

This is the part people get wrong. Follow the process.

### Step 1: Get real close rates from the business

Do not estimate. Ask for the data.

**The question to ask:** *"Of the last 100 enquiries for [service], how many became paying customers?"*

If they cannot answer, that is your first project. A business that does not track this cannot be optimised.

### Step 2: Get real margins, not prices

From Lesson 0.3, use **contribution margin**, not revenue. An implant priced at PKR 85,000 with PKR 40,000 of materials and lab costs has a margin of PKR 45,000.

### Step 3: Multiply

> **Lead value = Margin × Close rate**

### Step 4: Sanity check the ratios

Look at the relative values, not the absolute ones. **Google cares about the ratios.**

If implants are 6× the value of checkups, Google will bid roughly 6× more for implant traffic. Ask the business: *"Is an implant enquiry really worth six times a checkup enquiry to you?"*

If the answer is "no, more like three times", your close rate or margin data is wrong. Investigate.

### Step 5: Decide on absolute scale

You can multiply everything by the same number without changing behaviour — the ratios drive the bidding.

**But** the absolute scale matters for your tROAS target. Use real money values so that a tROAS of 3.0x means something you can reason about.

⚠️ **Never inflate values to make reports look good.** Inflated values corrupt your tROAS target, mislead the client, and make it impossible to compare against real business results.

---

## Lead Scoring: Feeding Quality Back

Level 2 values are set at the *moment of enquiry*, based on what they asked for. Lead **scoring** goes further: it adjusts value based on what you learn afterwards.

### The scoring model from Lesson 0.6, now with values

Dr. Ayesha's model:

| Signal | Points |
|---|---|
| Within 10 km of clinic | +3 |
| Needs treatment within 30 days | +3 |
| Answered the phone first try | +2 |
| Asked about a specific treatment | +2 |
| Asked only about price | −2 |
| Outside Lahore | −3 |

**Mapping scores to values:**

| Score | Value multiplier | Implant enquiry becomes |
|---|---|---|
| 8–10 | 1.5× | PKR 13,500 |
| 5–7 | 1.0× | PKR 9,000 |
| 2–4 | 0.4× | PKR 3,600 |
| Below 2 | 0.1× | PKR 900 |

This information arrives **after** the enquiry, so it must be sent back via offline conversion adjustment (Lesson 7.4) — not at the moment of the form fill.

### The simpler alternative: conversion value rules

If you cannot build a CRM feedback loop yet, **conversion value rules** (Lesson 2.3) approximate this using signals Google already has:

- Location within 10 km: × 1.5
- Location outside Lahore: × 0.4
- Audience "previous website visitor": × 1.3
- Device: desktop × 1.2 (if desktop leads close better)

**This captures perhaps 40% of the benefit for 5% of the effort.** Start here.

---

## The Value Ladder for Long Sales Cycles

Businesses with long sales cycles have a problem: the real value is not known for months, and the offline upload window is limited (Lesson 2.6).

**The solution: value each stage by its historical close rate.**

TaskFlow's ladder:

| Stage | Days from click | Historical → customer | Value sent |
|---|---|---|---|
| Trial signup | 0 | 8% | $35 |
| PQL (invited 2+ team members) | 5 | 34% | $147 |
| Demo booked | 12 | 61% | $264 |
| Proposal sent | 22 | 78% | $337 |
| Closed won | 45 | 100% | Actual deal value |

**How to use it:** upload the highest stage reached within your upload window, and update as the lead progresses. Google can handle conversion adjustments that revise a value upward.

**Why this works:** the AI gets a strong early signal (day 5 PQL) instead of waiting 45 days. Fast feedback beats perfect feedback.

⚠️ **Do not double count.** If you upload the trial signup at $35 and later the closed deal at $2,400, you must adjust the original conversion, not add a second one. Otherwise your reported value is inflated and your tROAS target becomes meaningless.

---

## Preventing Value Inflation

Value systems decay. Here is how they break, and how to stop it.

### Decay 1: Optimistic close rates
Sales says "we close about half of these". The real number is 22%.
**Prevention:** use data from the CRM, not opinions. Recalculate quarterly.

### Decay 2: Revenue creeping in place of margin
Someone updates the value from margin to price because it is easier to find.
**Prevention:** document which number is used and why, in writing, next to the conversion action.

### Decay 3: Stale margins
Costs rise, prices stay the same, margins shrink — but the values in Google never change.
**Prevention:** quarterly review, in your calendar (Lesson 1.3).

### Decay 4: Gaming
If a team's bonus depends on reported conversion value, values will drift upward.
**Prevention:** reconcile Google's reported value against the business's actual books monthly. A widening gap is the warning sign.

### The reconciliation habit

Once a month, one comparison:

| | Google Ads reports | Business actual | Gap |
|---|---|---|---|
| Conversion value | PKR 1,402,000 | PKR 1,455,000 | 3.6% ✅ |

**Under 10% gap: healthy. Over 20%: investigate immediately.**

---

## 📖 Real-World Example: Dr. Ayesha's Value Ladder

Her account had been running on tCPA PKR 1,600 with a flat lead value. Performance was good: 108 bookings a month at PKR 1,405 each.

But she had a business problem the account could not see. **Her chair time was full, but her revenue was not growing.** She was booked solid with cleanings and checkups, and she had space for perhaps four implant cases a month that she was not filling.

The account was optimising for *bookings*. The business needed *high-value bookings*.

### What she built

**Step 1: real close rates from her practice software.** Not estimates — actual data from 18 months.

| Enquiry type | Enquiries | Became patients | Close rate | Avg margin |
|---|---|---|---|---|
| Implant | 94 | 19 | 20% | PKR 45,000 |
| Braces | 156 | 31 | 20% | PKR 30,000 |
| Whitening | 203 | 71 | 35% | PKR 8,000 |
| Checkup | 612 | 184 | 30% | PKR 5,000 |
| Unspecified | 388 | 27 | 7% | PKR 12,000 |

**Step 2: calculated values.**

| Type | Value | Ratio vs checkup |
|---|---|---|
| Implant | PKR 9,000 | 6.0× |
| Braces | PKR 6,000 | 4.0× |
| Whitening | PKR 2,800 | 1.9× |
| Checkup | PKR 1,500 | 1.0× |
| Unspecified | PKR 840 | 0.6× |

**Step 3: the sanity check.** She asked herself the ratio question: *"Is an implant enquiry really worth six checkup enquiries to me?"*

Her answer: *"It is worth more than that, because implant patients also come back for maintenance."* The ratios were, if anything, conservative. Good.

**Step 4: separate forms per service**, so each enquiry could carry its own value. This was the only technical work — four hours with her web developer.

**Step 5: the warm-up ladder from Lesson 5.4.** Twelve weeks, properly.

**Step 6: value rules added** — within 10 km × 1.5, outside Lahore × 0.4.

### Results at week 16

| Metric | Before (tCPA) | After (tROAS 3.2x) |
|---|---|---|
| Total enquiries/month | 108 | 71 |
| Cost per enquiry | PKR 1,405 | PKR 2,190 |
| **Implant enquiries** | **6** | **21** |
| **Braces enquiries** | **11** | **26** |
| Checkup enquiries | 64 | 12 |
| Monthly ad spend | PKR 151,700 | PKR 155,500 |
| **Monthly practice profit from ads** | **PKR 312,000** | **PKR 704,000** |

**Read the dashboard metrics first.** Enquiries fell 34%. Cost per enquiry rose 56%. On every standard report, this looks like a serious failure.

**Now read the business metrics.** Implant enquiries went from 6 to 21. Practice profit from advertising more than doubled.

### Why this worked

Google had always been able to find implant patients. It simply had no reason to — they cost more per click and were harder to find, and every enquiry counted the same.

Once she told the machine that an implant enquiry was worth six checkups, it went and found them.

**She did not change her ads, her keywords, her budget or her landing pages.** She changed what she was asking for.

### The part that nearly went wrong

In week 3, her practice manager panicked: *"Enquiries are down a third, the phone is quiet, something is broken."*

Because Dr. Ayesha had written down the expected transition curve beforehand (Lesson 5.4, Step 0), she could show that week 3 was exactly where the plan predicted. They held.

**Without that written prediction, this transition would have been reversed in week 3** — and she would have concluded that value bidding does not work for clinics.

---

## 📊 Mastery Score

**Level: Expert**

Very few lead generation accounts run properly valued conversions. This single capability justifies premium fees.

---

## 📌 Key Takeaways

- Lead gen businesses gain the most from value bidding, because most have no values at all.
- Level 1 is one flat value. Level 2 is values by lead type. Level 3 is real CRM values. Most should aim for Level 2.
- Lead value = margin × close rate. Use real data from the CRM, never opinions.
- Google cares about the *ratios* between values. Sanity-check them with the business.
- Reconcile Google's reported value against the business's books monthly. Over 20% gap means investigate.

---

## ☑️ Self-Assessment

1. Do your lead conversions carry values? Are they the same value for every lead?
2. Do you know the close rate for each lead type, from real data?
3. Are you using margin or revenue in your value calculation?
4. When did you last reconcile Google's conversion value against the business's books?
5. Which service is the business under-selling that the account could go and find?

---

## 🧠 Quiz

**1. Why do lead gen businesses gain the most from value bidding?**
a) Their clicks are cheaper
b) Most have no values at all, so Google hunts for the cheapest lead
c) Google prefers lead campaigns
d) They have more conversions

**2. What is the formula for a lead value?**
a) Revenue × conversion rate
b) Margin × lead-to-customer close rate
c) Price ÷ number of leads
d) Cost per lead × 2

**3. What does Google actually use from your values?**
a) The absolute amounts only
b) The ratios between them
c) Nothing, it ignores them
d) The currency

**4. A business with a long sales cycle cannot wait for the closed deal. What should they do?**
a) Give up on value bidding
b) Value an earlier stage by its historical close rate and upload that
c) Guess the final value
d) Use tCPA forever

**5. Your enquiries fell 34% but practice profit doubled. What happened?**
a) Something is broken
b) The account shifted from cheap enquiries to high-value ones
c) The tracking failed
d) Google made an error

---

## 💪 Practical Exercise (45 minutes)

Build a Level 2 value model for one lead gen business.

1. List every separate lead type or service.
2. Get the real close rate for each from the CRM. If unavailable, note that as your first project.
3. Get the real contribution margin for each, not the price.
4. Calculate the value for each: margin × close rate.
5. Write the ratios relative to the cheapest lead type.
6. Ask the business owner the sanity-check question about the ratios.
7. Write the setup plan: which forms need separating, and who does the work.

---

## 🎯 Expert Challenge

Design a complete lead value structure with feedback.

- Build the full value model with every lead type, stage and score band, documented with the data source and date for each number.
- Design the CRM feedback loop: which stage transitions trigger an upload or adjustment, on what schedule, and how you prevent double counting.
- Build the scoring model with the sales team, and get written agreement on the rules. A model sales does not believe in will not be maintained.
- Design the monthly reconciliation, with the acceptable variance and the escalation process when it is exceeded.
- Model the expected shift in lead mix, and check it against operational capacity. This is the step most people miss: if the account starts delivering three times as many implant enquiries, **can the clinic actually treat them?** Optimising for a mix the business cannot deliver creates a worse problem than the one you solved.
- Finally, build the quarterly review that recalculates every close rate and margin, and write the rule for when values must be updated in the account.

---

## ✅ Quiz Answers

1 — **b**. Without values, the AI rationally finds the cheapest lead.
2 — **b**. Margin × close rate. Margin, not revenue.
3 — **b**. Ratios drive bidding. Absolute scale matters for your target.
4 — **b**. Value an earlier stage by its historical close rate.
5 — **b**. The mix shifted toward valuable enquiries. This is success.

---

## 🏁 Module 5 Complete

You now control how the machine spends money. Confirm you can:

1. Choose the right bid strategy for any data level
2. Run a 14-day learning phase process without interfering
3. Set a target from actual performance and find the profit peak
4. Transition safely to value bidding using the four-step ladder
5. Build a lead value model from real close rates and margins

**Next:** Module 6 — Shopping, PMax, YouTube and Display. Search works. Now we add the other ad types.
