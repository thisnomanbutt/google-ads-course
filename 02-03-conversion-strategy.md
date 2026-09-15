# Lesson 2.3 — Choose What Counts as a Conversion

*Phase 1 · How Google Ads Works, and Setting It Up — Module 2 · Set Up Your Account and Tracking*

---

## Quick Recap From Lesson 2.2

Your tools are linked. Now we decide the single most important thing in the whole account: **what counts as success.**

Remember the rule from Lesson 0.6: *Google optimises for whatever you count.* This lesson is where you choose.

---

## 🎯 What You Will Learn

- The difference between Primary, Secondary and Micro-conversions
- Why you should have only one or two Primary actions
- How to set conversion values, even for lead generation
- Counting settings and attribution windows, explained simply
- Conversion Value Rules: adjusting worth by location, device and audience

---

## What a Conversion Action Actually Is

A conversion action is a rule you create that says: *"When this happens, count it and give it this value."*

Examples:
- Someone reaches the thank-you page → count a Purchase, value = order total
- Someone submits the contact form → count a Lead, value = PKR 2,000
- Someone clicks the phone number → count a Call, value = PKR 1,500

Simple enough. The mistakes come from what you choose to count, and how you weight it.

---

## Primary vs Secondary: The Most Important Setting

Every conversion action has a setting for how it is used.

### Primary
- **Counted in the "Conversions" column**
- **Used by Smart Bidding to make decisions**
- This is what the AI actively hunts for

### Secondary
- Recorded and visible in reports (as "All conversions")
- **Not used for bidding**
- For observation only

**Think of a hunting dog.** You point at one bird and the dog chases it. If you point at seven birds at once, the dog runs in circles and catches nothing.

Primary actions are what you point at. **Point at one. Two at most.**

### The rule

> **Primary = the action that makes the business money.**
> **Secondary = everything else you want to watch.**

### What belongs where

| Action | Setting | Why |
|---|---|---|
| Purchase | **Primary** | It is the money |
| Qualified lead / booked appointment | **Primary** | It is the closest thing to money |
| Form submission (unqualified) | Secondary | Interest, not value |
| Phone call over 60 seconds | Primary *or* Secondary, depending on business | A long call often means a real customer |
| Newsletter signup | Secondary | Almost never worth bidding for |
| Add to cart | Secondary | Useful signal, poor bidding target |
| Page view of pricing page | Secondary | Interest only |
| PDF download | Secondary | Almost always junk as a primary |

### The classic mistake

An account has six Primary conversion actions: purchase, add to cart, newsletter, contact form, PDF download and phone click.

The "Conversions" column shows 400 per month. It looks fantastic. In reality there were 22 purchases.

Smart Bidding, told that all 400 are equally good, spends most of its effort finding people who download PDFs. Those are the cheapest and easiest to find.

**The account is optimised for the wrong thing, and the dashboard hides it.**

---

## Micro-Conversions: When They Help and When They Hurt

A micro-conversion is a small step on the way to the real goal: add to cart, video watched, pricing page viewed.

### When micro-conversions as Primary are really useful

**Only in one situation: very low conversion volume.**

If a business gets 5 sales a month, Smart Bidding has nothing to learn from. Five data points per month is not enough. In that case you can temporarily use a strong micro-conversion — like "reached checkout" — as the primary, to give the AI enough signal to work with.

**Rules if you do this:**
1. Choose the micro-conversion **closest to the money**. Checkout started, not newsletter signup.
2. Give it a **value based on its real conversion rate**. If 30% of checkouts complete and average margin is PKR 2,600, value the checkout at PKR 780.
3. **Set a date to remove it.** When real conversions pass 30 per month, switch back.
4. Write this decision in your change log (Lesson 1.3), so you remember why.

### When they hurt

Everywhere else. A micro-conversion as Primary in a healthy account is a slow leak. The AI drifts toward easy actions and away from money.

---

## Conversion Values: Even for Lead Generation

Many people set up lead conversions with no value. This throws away most of Smart Bidding's power.

### For e-commerce
Send the **actual order value**, dynamically. And from Lesson 0.4, send **profit** rather than revenue where you can.

### For lead generation — three levels

**Level 1: One flat value**
Every lead = your average lead value. Better than nothing.

*Dr. Ayesha:* average patient margin PKR 12,000 × 25% close rate = **PKR 3,000 per lead.**

**Level 2: Different values per form**
Different services are worth different amounts.

| Form | Value |
|---|---|
| Implant consultation request | PKR 9,000 |
| Braces enquiry | PKR 6,000 |
| General checkup booking | PKR 1,500 |
| Contact form (unspecified) | PKR 800 |

Now Smart Bidding actively hunts for implant patients. It will happily pay more for those clicks, because you told it they are worth more.

**Level 3: Real values from the CRM**
The actual money each lead produced, sent back to Google after the sale. This is Enhanced Conversions for Leads and offline conversion imports — Lessons 7.2 and 7.4.

This is the elite level, and it is the single biggest lever in lead generation.

---

## Counting: "One" vs "Every"

Each conversion action has a counting setting.

**Count: Every**
Every conversion counts. Two purchases from one click = 2 conversions.
→ Use for **sales and purchases**.

**Count: One**
Only one conversion per click, no matter how many times it happens.
→ Use for **leads**. If someone submits the form three times because they were impatient, that is one lead, not three.

**Getting this wrong** means your lead numbers inflate and your cost per lead looks artificially low.

---

## Attribution Windows

The attribution window is how long after a click a conversion still counts.

**Click-through conversion window**
Default is often 30 days. Options range from 1 to 90 days.

- **Short window (7 days):** faster data, but you miss slow buyers
- **Long window (60–90 days):** captures long sales cycles, but slower feedback

**How to choose:** look at your "days to conversion" report (in the conversion action details). If 90% of your conversions happen within 14 days, a 30-day window is fine. If you sell something people consider for two months, use a longer window.

**Engaged-view and view-through windows** apply to video and display. Be careful with these — a view-through conversion means someone saw an ad and later converted without clicking. It can be real influence, or it can be coincidence. Keep view-through conversions **Secondary** while you learn.

---

## Conversion Value Rules

Value rules let you adjust the value of a conversion **at the moment it happens**, based on conditions.

**How they work:** you set a rule like "conversions from Karachi are worth 1.3× the normal value" and Google applies it automatically.

### Conditions you can use

- **Location** — some regions have better customers
- **Device** — desktop leads may close better than mobile
- **Audience** — returning visitors, or a customer match list

### Real examples

**Dr. Ayesha:**
- Leads from within 10 km of the clinic: **× 1.5** (they actually show up)
- Leads from outside Lahore: **× 0.4** (they rarely attend)

**Sana:**
- New customers: **× 1.2** (worth more long term)
- Existing customers on her customer match list: **× 0.8** (she would likely get these sales anyway)

**TaskFlow:**
- Leads from companies on their target account list: **× 2.0**
- Leads from free email domains (gmail, hotmail): **× 0.5**

### The warnings

⚠️ **Use real data, not opinions.** If you cannot prove that Karachi leads are 1.5× better, do not set 1.5.

⚠️ **Value rules change your reported conversion values.** Your ROAS numbers will shift. Tell your client before you turn them on.

⚠️ **Start with one rule.** Multiple overlapping rules become impossible to reason about.

---

## The "Include in Conversions" Legacy Setting

Older accounts have a checkbox called "Include in Conversions". Newer accounts use the Primary/Secondary goal system instead.

They do the same job: deciding what Smart Bidding optimises for. If you see the older setting, treat "included" as Primary and "not included" as Secondary.

When you inherit an account, **always audit this first**. It is the most commonly misconfigured setting in Google Ads.

---

## 📖 Real-World Example: Dr. Ayesha's Conversion Rebuild

Here is what her account looked like before, and after.

### Before

| Conversion action | Setting | Value | Monthly count |
|---|---|---|---|
| Contact form submitted | Primary | none | 84 |
| Phone number clicked | Primary | none | 61 |
| WhatsApp button clicked | Primary | none | 122 |
| Directions clicked | Primary | none | 38 |
| Pricing page viewed | Primary | none | 210 |

**Reported conversions: 515/month. Reported cost per conversion: PKR 260.**

The client was thrilled. The clinic had 31 new patients that month.

**Real cost per patient: PKR 4,320.**

Smart Bidding had been told that a pricing page view was exactly as valuable as a booked appointment. So it found the cheapest one — pricing page views — and chased those.

### After

| Conversion action | Setting | Value | Notes |
|---|---|---|---|
| Appointment booked (calendar confirmation) | **Primary** | PKR 3,000 | Base lead value |
| Phone call over 90 seconds | **Primary** | PKR 3,000 | Short calls excluded |
| Contact form submitted | Secondary | — | Watch only |
| WhatsApp clicked | Secondary | — | Watch only |
| Directions clicked | Secondary | — | Watch only |
| Pricing page viewed | Secondary | — | Watch only |

Plus value rules:
- Within 10 km of clinic: × 1.5
- Outside Lahore: × 0.4

And per-service values added later:
- Implant enquiry: PKR 9,000
- Braces enquiry: PKR 6,000
- General: PKR 1,500

### Results after 10 weeks

| Metric | Before | After |
|---|---|---|
| Reported conversions | 515 | 68 |
| Reported cost per conversion | PKR 260 | PKR 1,970 |
| **Actual new patients** | 31 | 54 |
| **Actual cost per patient** | PKR 4,320 | PKR 2,480 |
| Share of high-value treatments | 18% | 34% |

**The dashboard looks 7× worse. The clinic earns far more.**

Note that last row. Because implant enquiries were valued at PKR 9,000, Smart Bidding started actively hunting for implant patients. That was not luck. She told the machine what she wanted, and it delivered.

⚠️ **The client conversation matters here.** Before making this change, she was told: "Your conversion number will drop by about 85%. Your patient number will go up. Judge me on patients." Without that warning, this change looks like a disaster in week one.

---

## 📊 Mastery Score

**Level: Advanced**

Conversion strategy is the highest-use setup work in Google Ads. Everything downstream depends on it being right.

---

## 📌 Key Takeaways

- Only the action that makes money should be Primary. One or two, never six.
- Secondary actions are for watching. They do not steer Smart Bidding.
- Always assign values, even for leads. Different forms should have different values.
- Use "Count: Every" for sales and "Count: One" for leads.
- Value rules adjust worth by location, device or audience — but only use them with real data.

---

## ☑️ Self-Assessment

1. How many Primary conversion actions does your account have right now?
2. Do your lead conversions have values? Are those values based on real close rates?
3. Is your lead form set to "Count: One"?
4. What is your account's click-through conversion window, and why that number?
5. Could you explain to a client why their conversion count is about to drop 80%?

---

## 🧠 Quiz

**1. What does setting a conversion as "Primary" do?**
a) Nothing, it is just a label
b) It makes Smart Bidding optimise toward that action
c) It doubles the value
d) It sends the data to GA4

**2. How many Primary conversion actions should a typical account have?**
a) As many as possible
b) One or two
c) At least five
d) Zero

**3. When is it acceptable to use a micro-conversion as Primary?**
a) Always, it gets more data
b) When real conversion volume is too low for Smart Bidding to learn, and only temporarily
c) Never
d) Only for e-commerce

**4. Which counting setting should a lead form use?**
a) Count: Every
b) Count: One
c) It does not matter
d) Count: Zero

**5. A clinic's leads from outside its city rarely attend. What is the correct tool?**
a) Pause the campaign
b) A conversion value rule reducing the value of those locations
c) Raise the bid
d) Add more keywords

---

## 💪 Practical Exercise (30 minutes)

Audit one account's conversion setup.

1. List every conversion action, with its Primary/Secondary setting, value and monthly count.
2. Circle every Primary action that is not directly tied to money.
3. Calculate the real cost per *customer* — not per conversion — using business data.
4. Write the corrected setup: what becomes Primary, what becomes Secondary, and what value each gets.
5. Write the two-sentence warning you would send the client before making the change.

---

## 🎯 Expert Challenge

Design a complete conversion value model for a lead generation business.

- Work with real historical data to calculate the close rate for each lead type and each source.
- Build the value table: every form, every call type, every service, with a justified value.
- Design the value rule set, and for each rule write the evidence that supports the multiplier. Anything you cannot evidence gets left out.
- Model the transition: predict what happens to reported conversions, cost per conversion and actual customers in weeks 1, 4 and 12. Write those predictions down before you make the change.
- After 12 weeks, compare your prediction against reality. This exercise, repeated a few times, is how you develop real forecasting judgement.

---

## ✅ Quiz Answers

1 — **b**. Primary actions are what Smart Bidding hunts for.
2 — **b**. One, or two at most. More splits the AI's attention.
3 — **b**. Low volume, temporarily, with a planned exit.
4 — **b**. One lead is one lead, however many times they submit.
5 — **b**. Value rules let you tell the AI those conversions are worth less.

---

**Next lesson:** 2.4 — Track Conversions With Google Tag Manager
