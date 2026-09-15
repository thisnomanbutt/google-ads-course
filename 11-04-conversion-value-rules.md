# Lesson 11.4 — Tell Google Some Conversions Are Worth More

*Phase 6 · Automation and Working With Data — Module 11 · Save Time With Scripts and Automation*

---

## Quick Recap From Lesson 2.3

You met conversion value rules briefly. This lesson goes deep, because they are the most precise tool you have for telling Smart Bidding what a conversion is really worth.

---

## 🎯 What You Will Learn

- How value rules differ from bid adjustments, and why that matters
- The three conditions available, and how to combine them
- How to calculate a multiplier from real data
- The reporting change that catches people out
- Where value rules end and other tools begin

---

## Value Rules vs Bid Adjustments

These are often confused. They work completely differently.

| | Bid adjustment | Conversion value rule |
|---|---|---|
| What it changes | Your bid | The **recorded value** of the conversion |
| When it applies | At auction time | At conversion time |
| Works with Smart Bidding | Mostly ignored or overridden | ✅ Fully respected |
| Affects reporting | No | ✅ Yes — your reported values change |
| Precision | Blunt | Precise |

### Why this distinction matters enormously

From Lesson 5.1, Smart Bidding largely ignores your manual bid adjustments. It has better information than you do about which auctions deserve a higher bid.

**But it does not know your business.** It does not know that a lead from outside your service area is nearly worthless, or that a returning customer is worth less to acquire because you would have got them anyway.

**Value rules are how you tell it.** They do not override the machine's judgement about the auction. They correct the machine's understanding of the *outcome*.

**Think of the difference between telling a buyer "pay 20% more at this market" and telling them "these particular goods are worth 20% more than you think".** The first is a crude instruction. The second gives them information they can use intelligently everywhere.

---

## The Three Conditions

Value rules can be based on three things, used alone or combined.

### 1. Location

Adjust value based on where the person is.

**Examples:**
- Dr. Ayesha: within 10 km × 1.5, outside Lahore × 0.4
- A retailer: cities with a physical store × 1.3 (they also visit)
- A service business: areas with high travel time × 0.7

### 2. Device

Adjust value based on desktop, mobile or tablet.

**Examples:**
- B2B software: desktop × 1.3 (business users research at work and close better)
- Emergency services: mobile × 1.4 (urgency, higher close rate)

⚠️ **Be careful here.** Device differences often reflect measurement gaps rather than real value differences (Lesson 7.1). Check with real close-rate data before applying a device rule.

### 3. Audience

Adjust value based on which audience list the person belongs to (Lesson 6.7).

**Examples:**
- Existing customers × 0.7 (you would likely have got this sale anyway)
- Customer Match top-value segment × 1.6
- Cart abandoners × 1.2
- Free-email-domain visitors × 0.6 (for B2B)

**This is usually the most powerful of the three**, because audience membership reflects real behaviour rather than a proxy.

### Combining conditions

You can combine them: "mobile users in Karachi on the returning visitor list".

⚠️ **Start with one condition.** Combined rules interact in ways that are difficult to reason about, and you will not be able to tell which part is working.

---

## Calculating the Multiplier

This is where value rules succeed or fail. **Do not guess the number.**

### The method

> **Multiplier = (Value of this segment) ÷ (Average value of all conversions)**

### A worked example — Dr. Ayesha

She pulled 18 months of patient records and calculated the real value of a lead by distance.

| Distance | Leads | Became patients | Close rate | Avg margin | **Value per lead** |
|---|---|---|---|---|---|
| Within 10 km | 612 | 214 | 35.0% | PKR 13,200 | **PKR 4,620** |
| 10–20 km | 341 | 79 | 23.2% | PKR 12,400 | **PKR 2,877** |
| 20–35 km | 188 | 24 | 12.8% | PKR 14,100 | **PKR 1,805** |
| Outside Lahore | 224 | 9 | 4.0% | PKR 16,800 | **PKR 672** |
| **All leads** | 1,365 | 326 | 23.9% | PKR 13,400 | **PKR 3,203** |

**Now the multipliers:**

| Segment | Value per lead | ÷ average | **Multiplier** |
|---|---|---|---|
| Within 10 km | 4,620 | ÷ 3,203 | **1.44** |
| 10–20 km | 2,877 | ÷ 3,203 | **0.90** |
| 20–35 km | 1,805 | ÷ 3,203 | **0.56** |
| Outside Lahore | 672 | ÷ 3,203 | **0.21** |

**These are evidence-based numbers, not intuition.**

⚠️ **Note the "Outside Lahore" row carefully.** Those few patients had the *highest* average margin — they travelled for complex implant work. But the close rate was so low that the lead value was still lowest. **Value per lead is what matters, not value per customer.**

This is exactly the kind of detail that guessing gets wrong.

---

## Setting Them Up

**Where:** Tools → Conversions → **Value rules**.

### The steps

1. Choose the scope: account level, or specific campaigns
2. Choose the condition: location, device or audience
3. Set the adjustment: a multiplier, or a fixed value
4. Set the date range if it is temporary
5. Save and apply

### Multiplier vs fixed value

**Multiplier** (× 1.44) — scales the existing value. Use this when order values vary.

**Fixed value** (set to PKR 4,620) — replaces the value entirely. Use this for lead generation where every lead has the same base value.

**For lead generation, fixed values are often clearer** because you can read the number and immediately understand what it means.

---

## The Reporting Change Nobody Warns You About

⚠️ **This is the most important warning in this lesson.**

**When you turn on value rules, your reported conversion values change immediately.**

- Your reported ROAS will shift
- Historical comparisons become inconsistent
- Your tROAS target may no longer mean what it meant before

### What to do

**1. Tell the client before you turn it on.** In writing.

> "From Monday, our conversion values will reflect the real worth of each lead by location. Reported conversion value will fall by roughly 12% because we are correctly de-valuing out-of-area leads. Actual patient numbers will rise. Judge us on patients, not on reported value."

**2. Recalculate your tROAS target.** If your average conversion value changes, your target must change with it (Lesson 5.3).

**3. Mark the date in your reporting.** Annotate the change so future comparisons make sense.

**4. Expect a learning phase.** Changing conversion values triggers relearning (Lesson 5.2).

**5. Do not apply value rules mid-month if you report monthly.** Start them on the 1st, so a month's data is consistent.

---

## When to Use Value Rules, and When Not To

### ✅ Use them when

- You have **real data** proving a segment is worth more or less
- The difference is meaningful — a 1.05 multiplier is not worth the complexity
- The condition is available (location, device, audience)
- You cannot get the real value another way

### ❌ Do not use them when

- You are guessing the multiplier
- The difference is small
- **You could send the real value instead** — see below
- You are trying to fix a measurement problem rather than describe a value difference

### The important limitation

⚠️ **Value rules are a proxy. Real values are better.**

If you can send the actual value of each conversion — through offline conversion imports (Lesson 7.4) or dynamic values on the site (Lesson 2.3) — **do that instead.**

Value rules estimate based on a segment average. Real values are exact.

**Use value rules when:**
- You cannot yet send real values
- Real values arrive too late to be useful
- You want a contextual adjustment *on top of* real values

**The best setup combines both:** real conversion values from your CRM, with value rules applying a contextual adjustment for factors the CRM does not capture.

---

## Dynamic Bid Adjustments: The Honest Position

The other half of this lesson's title deserves a clear answer.

### What still works

**With manual bidding or Maximise Clicks:**
- Device bid adjustments ✅
- Location bid adjustments ✅
- Ad schedule bid adjustments ✅
- Audience bid adjustments ✅

**With Smart Bidding (Maximise Conversions, tCPA, Max Conversion Value, tROAS):**
- Device adjustments — **ignored**
- Location adjustments — **ignored**
- Ad schedule adjustments — **ignored**
- Audience adjustments — **ignored**
- **Exception:** a −100% adjustment still excludes entirely

### What this means

**If you are on Smart Bidding, your bid adjustments are doing nothing.** Many accounts carry bid adjustments set years ago that have had no effect since the account moved to Smart Bidding.

**Check yours.** They create confusion and false confidence.

### What to use instead

| You want to | Old way | Modern way |
|---|---|---|
| Bid less for a location | Location bid adjustment −40% | **Value rule × 0.6**, or exclude |
| Bid more for an audience | Audience bid adjustment +30% | **Value rule × 1.3**, or an audience signal |
| Stop showing at certain hours | Schedule adjustment −100% | Ad schedule exclusion |
| Bid less on mobile | Device adjustment −30% | **Value rule × 0.7**, with real data |
| Exclude a device entirely | Device adjustment −100% | Still works ✅ |

**The pattern:** express your intent as a **value difference**, not as a bid instruction. The machine bids; you inform.

---

## 📖 Real-World Example: The Rule That Doubled Implant Cases

Dr. Ayesha set up value rules in month 14, after her offline conversion loop was running (Lesson 7.4).

### The situation

Her account was performing well: 141 bookings a month at PKR 1,076 each (Lesson 9.3).

**But her practice had a specific problem.** Her chair time was full, yet revenue was flat. She had capacity for high-value implant and orthodontic work that was not being filled, and too many low-value cleanings.

Her conversion values already differed by service type (Lesson 5.5). What they did not capture was **who actually attended**.

### The analysis

She pulled 18 months of records and found something her service-type values completely missed.

| Segment | Booked | Attended | Attendance rate |
|---|---|---|---|
| Within 10 km | 214 | 197 | **92%** |
| 10–20 km | 79 | 61 | **77%** |
| 20–35 km | 24 | 13 | **54%** |
| Outside Lahore | 9 | 2 | **22%** |
| Returning patient | 118 | 114 | **97%** |
| Mobile booking, after 10pm | 87 | 44 | **51%** |

**Two findings she had not expected:**

1. **Distance affected attendance far more than it affected booking.** People 30 km away would happily book and then not turn up. Her booking numbers looked fine; her chair sat empty.

2. **Late-night mobile bookings had a 51% attendance rate.** People booking at 11pm were often in pain, took a painkiller, felt better by morning, and did not come.

**Neither of these was visible in booking data.** Both were destroying her actual revenue.

### The rules she built

| Condition | Multiplier | Evidence |
|---|---|---|
| Within 10 km | **× 1.44** | 92% attendance, highest close rate |
| 10–20 km | **× 0.90** | 77% attendance |
| 20–35 km | **× 0.56** | 54% attendance |
| Outside Lahore | **× 0.21** | 22% attendance |
| Audience: returning patient | **× 1.35** | 97% attendance |

She did **not** build a device rule for the late-night mobile issue. Instead she used the ad schedule to reduce delivery after 11pm, because that was an availability problem rather than a value problem — and she added a "we will call you to confirm" step to late bookings, which lifted attendance from 51% to 74%.

**That second fix was an operational change, not an advertising one.** It was worth more than any bid setting.

### The client communication

Before turning the rules on, she wrote to herself — and would have written to a client — the following:

> "From 1 October, reported conversion value will fall by roughly 15%, because we are correctly valuing out-of-area bookings at a fraction of local ones. Booked appointments may fall slightly. **Attended appointments and revenue should rise.** Judge this on chair time filled, not on the dashboard."

### Results at 14 weeks

| Metric | Before | After |
|---|---|---|
| Monthly spend | PKR 122,500 | PKR 122,500 |
| **Bookings** | 141 | **118** |
| **Attended** | 103 | **109** |
| Attendance rate | 73% | **92%** |
| Implant enquiries | 21 | **34** |
| Braces enquiries | 26 | **31** |
| **Monthly practice revenue from ads** | PKR 1,284,000 | **PKR 2,116,000** |

**Bookings fell 16%. Revenue rose 65%.**

### Why it worked

Smart Bidding had been optimising for **bookings**. Value rules taught it to optimise for **bookings from people who actually attend**.

The moment it understood that a booking from 30 km away was worth 56% of a local one, it stopped chasing distant traffic and concentrated on the catchment that produced real patients.

**And because attended appointments were more valuable, the freed chair time filled with the higher-value work she had capacity for.**

### The observation that matters most

Her booking number — the metric on every dashboard, the one a client would look at first — **got worse by 16%.**

If she had judged on bookings, she would have reversed this change in week three.

**This is the fourth time in this course that the dashboard number moved the wrong way while the business improved** (Lessons 0.4, 2.3, 5.5, and now this). That pattern is not a coincidence. It is what happens every time you stop optimising for the easy metric and start optimising for the real one.

---

## 📊 Mastery Score

**Level: Expert**

Value rules are precise, powerful and underused. They need real data and honest client communication, which is why most accounts never use them.

---

## 📌 Key Takeaways

- Value rules change the recorded value of a conversion. Bid adjustments change bids and are largely ignored by Smart Bidding.
- Three conditions: location, device and audience. Audience is usually the most powerful.
- Calculate multipliers from real close-rate and attendance data. Never guess.
- Turning on value rules changes your reported values immediately. Warn the client in writing first.
- If you can send the real value instead, do that. Value rules are a proxy for when you cannot.

---

## ☑️ Self-Assessment

1. Do you have any bid adjustments set on Smart Bidding campaigns? They are doing nothing — check.
2. Which segment of your conversions is really worth more or less? Can you prove it?
3. Have you measured attendance, show-up or completion rates by segment?
4. Would your reported conversion value fall if you valued conversions honestly?
5. Could you explain that fall to a client before it happened?

---

## 🧠 Quiz

**1. What does a conversion value rule change?**
a) Your bid
b) The recorded value of the conversion
c) Your budget
d) Your Quality Score

**2. Why do bid adjustments largely stop working under Smart Bidding?**
a) They are deprecated
b) Smart Bidding sets bids per auction using better information, and ignores manual adjustments
c) Google removed them
d) They only work on Display

**3. How should you calculate a multiplier?**
a) Estimate from experience
b) Segment value ÷ overall average value, using real close-rate data
c) Use Google's suggestion
d) Always use 1.5

**4. What happens to reporting when you turn value rules on?**
a) Nothing
b) Reported conversion values change immediately, so historical comparisons break
c) Conversions stop
d) ROAS always rises

**5. Why did bookings fall 16% while revenue rose 65%?**
a) Prices increased
b) The account stopped chasing bookings that never attended, and filled the time with higher-value work
c) Tracking changed
d) A seasonal effect

---

## 💪 Practical Exercise (40 minutes)

Build an evidence-based value rule.

1. Pick one segment you suspect is worth more or less — a location, an audience, or a device.
2. Pull real data: how many conversions from that segment, and how many became customers?
3. Calculate the value per conversion for that segment and for the overall average.
4. Calculate the multiplier.
5. Check your Smart Bidding campaigns for any bid adjustments still set. Note them.
6. Write the client warning you would send before applying the rule.

---

## 🎯 Expert Challenge

Build a complete value model.

- Segment your conversions every way your data allows: location, device, audience, time, source, service type. For each, calculate the real value per conversion using close rate and margin.
- Find which segments show a difference large enough to justify a rule, and which are noise.
- Design the rule set, starting with one condition and documenting the evidence for each multiplier with its data source and date.
- Model the reporting impact before applying: what will happen to reported conversion value, ROAS, and your tROAS target. Recalculate the target accordingly.
- Design the review cycle: multipliers based on 18-month-old close rates decay. Set a quarterly recalculation.
- Then look for the operational finding. In the example, the most valuable discovery — late-night bookings not attending — was fixed with a phone call process, not a bid setting. **Your value analysis will usually surface at least one business problem that advertising cannot solve.** Finding those is often worth more to the client than the campaign work.

---

## ✅ Quiz Answers

1 — **b**. The recorded value of the conversion.
2 — **b**. Smart Bidding has better per-auction information and ignores them.
3 — **b**. Segment value divided by overall average, from real data.
4 — **b**. Reported values change, breaking historical comparison.
5 — **b**. It stopped buying bookings that never turned into patients.

---

**Next lesson:** 11.5 — Tag Your Links So You Can Track Everything
