# Lesson 2.6 — Save the Click ID So You Can Use It Later

*Phase 1 · How Google Ads Works, and Setting It Up — Module 2 · Set Up Your Account and Tracking*

---

## Quick Recap From Lesson 2.5

Your tracking is built and proven. Now we build the pipe that carries data *back* to Google — the foundation of every advanced technique in Phase 4.

---

## 🎯 What You Will Learn

- What GCLID, GBRAID and WBRAID actually are
- Why capturing them today unlocks everything in Modules 7 and 12
- Step-by-step: capture the click ID into your CRM
- How long the data stays valid, and why that deadline matters
- The consent and privacy rules you must respect

---

## The Big Picture: Why This Lesson Matters More Every Year

Here is the direction the whole industry is moving.

Third-party cookies — the old way of tracking people across websites — are disappearing. Privacy laws are getting stricter. Browsers block more every year.

**What survives is first-party data: information *you* collect, on *your* website, with *your* customer's knowledge.**

The click ID is the key that connects your first-party data back to Google's advertising system.

**Think of a cloakroom ticket.** You hand over your coat and receive a numbered ticket. Later you return with the ticket and get your exact coat back. The GCLID is that ticket. Google gave it to you when it sent you a visitor. Later, when that visitor becomes a customer, you hand the ticket back and say "this one worked".

Without the ticket, Google never learns which clicks became customers. With it, you can teach the machine exactly who to look for.

---

## The Three Click IDs

### GCLID — Google Click Identifier

The main one. A unique code Google adds to your landing page URL when someone clicks your ad.

```
https://sanawater.pk/filters?gclid=Cj0KCQjw1ZeYBhDyARIsAOzAqQK...
```

Created automatically when **auto-tagging is on** (Lesson 2.2).

### GBRAID — for iOS app-to-web journeys

When someone clicks an ad inside an iOS app and lands on your website, privacy rules on iOS mean a normal GCLID cannot always be used. Google sends **GBRAID** instead.

It works at an aggregated level rather than finding an individual, which is what makes it privacy-safe.

### WBRAID — for iOS web-to-web journeys

Similar purpose, for web-to-web journeys on iOS where privacy restrictions apply.

### What you need to remember

You do not need to understand the deep technical differences. You need to know this:

> **Capture all three. Whichever one arrives, store it. Send back whichever one you stored.**

If you only capture GCLID, you will silently lose a meaningful share of your iOS traffic — often your highest-value customers in Western markets.

---

## What Capturing Them Unlocks

This one small piece of plumbing enables everything below:

| Capability | Lesson | What it does |
|---|---|---|
| Offline Conversion Tracking | 7.4 | Tell Google which leads became customers |
| Enhanced Conversions for Leads | 7.2 | Match CRM outcomes back to clicks |
| Lead quality feedback | 0.6 | Teach the AI to find good leads, not cheap ones |
| Value-based bidding on real revenue | 5.5 | Bid on actual money earned |
| Margin-based bidding | 12.3 | Bid on profit per customer |
| True cross-channel attribution | 13.3 | Know what really drove the sale |

**Every one of these depends on capturing the click ID today.**

⚠️ **This is the "plant a tree" lesson.** The click ID is only valid for a limited time. If you start capturing in six months, you cannot recover the last six months. Set it up now, even if you will not use it until Module 7.

---

## How to Capture the Click ID: Step by Step

Here is the standard method. It works on almost any website.

### The concept in three moves

1. When someone lands on your site from an ad, **read** the click ID from the URL
2. **Store** it in a first-party cookie
3. When they submit a form, **copy** it into a hidden field, so it travels into your CRM

### Step 1: Add hidden fields to your forms

Ask your developer, or use your form builder's settings, to add three hidden fields to every lead form:

- `gclid`
- `gbraid`
- `wbraid`

Most form tools (HubSpot, Gravity Forms, WPForms, Typeform, Elementor) support hidden fields natively.

### Step 2: Capture and store

The GTM approach, which needs no developer:

**Create three URL Variables in GTM:**
- Variable type: **URL**
- Component type: **Query**
- Query key: `gclid` (repeat for `gbraid` and `wbraid`)

**Create a Custom HTML tag** that reads the value and writes it to a first-party cookie, then fills the hidden form field. Your developer can write this in about 15 minutes, or many form plugins have this built in.

**Trigger:** All Pages.

⚠️ **Important:** store it in a cookie, not just in the page. People often browse several pages before filling the form. Without the cookie, the ID is lost.

### Step 3: Pass it into the CRM

Make sure your CRM has fields for `gclid`, `gbraid` and `wbraid` on the contact or lead record. Map the hidden form fields to them.

**Also capture, on the same record:**
- Date and time of the form submission (you need this for the upload later)
- The landing page URL
- UTM parameters, if you use them (Lesson 11.5)

### Step 4: Test it properly

Using the Lesson 2.5 process:

1. Click a real ad
2. Confirm the GCLID is in the URL
3. Browse to two other pages
4. Submit the form
5. **Open the lead record in the CRM.** Is the GCLID there?

That last check is the one that matters. Most failures happen between the form and the CRM.

---

## The Deadline Nobody Tells You About

Click IDs do not last forever. Google has a time limit for uploading offline conversions tied to a click.

**Practical rule: upload within 30 days of the click, and never later than 90.**

This creates a real business need:

> **Your sales cycle must be shorter than your upload window, or you must upload at an intermediate stage.**

**Example.** If a B2B business takes 120 days to close a deal, you cannot wait for the closed deal to upload it. Instead:

- Upload the "qualified opportunity" stage at day 20, with an estimated value
- Or upload the "demo booked" stage, valued by its historical close rate

This is a strategic decision, not a technical one. Decide it now, before you build.

---

## Consent and Privacy: Non-Negotiable

You are storing an identifier connected to a person. Handle it correctly.

### The rules

1. **Respect consent.** If a user declines tracking cookies, do not store the click ID for them. Consent Mode handles this properly (Lesson 7.5).

2. **Say it in your privacy policy.** Your policy should explain that you collect advertising identifiers and use them to measure advertising performance.

3. **Do not send personal data to Google in the click ID field.** Never put names, emails or phone numbers where an ID belongs. Enhanced Conversions has a separate, hashed method for that (Lesson 7.1).

4. **Secure your CRM.** You now hold a database connecting people to their advertising journey. Treat it with the same care as any customer data.

5. **Honour deletion requests.** If someone asks to be deleted, the click ID record goes too.

⚠️ **A note for Pakistani and Middle Eastern businesses serving Western customers:** if you have any EU, UK or California customers, their privacy laws apply to you regardless of where you are based. Get advice before launching. This is the same principle as Lesson 0.7 — check with a professional, do not rely on a course.

---

## 📖 Real-World Example: The Six Months TaskFlow Could Not Get Back

TaskFlow reached the point in their growth where they needed offline conversion tracking. Their sales cycle was about 45 days: trial → demo → proposal → closed deal.

Their problem from Lesson 0.6 was that Google could see trial signups but had no idea which ones became customers. They wanted to fix it properly.

Their agency built the plan. Then came the question: *"Do you have the GCLID stored on your lead records?"*

They did not. Nobody had ever set it up.

**What that meant:**

They had 14 months of history. 4,100 trial signups. 380 paying customers. A perfect data set for teaching Smart Bidding exactly what a good customer looks like.

**None of it could be uploaded.** Without the click ID, there was no way to connect any of those customers back to the ads that produced them.

They set up capture immediately. Then they had to wait:

- **Month 1:** capture live, data accumulating
- **Month 2:** first uploads begin, but only 30 conversions — not enough to change anything
- **Month 4:** roughly 90 offline conversions uploaded, Smart Bidding begins responding
- **Month 6:** enough volume for value-based bidding on real revenue

**Six months of waiting, for a two-hour setup job.**

Their cost per paying customer eventually dropped from $198 to $121 once real customer data drove the bidding. That is roughly $77 saved per customer, at about 45 customers a month.

**The six-month delay cost them about $208,000 in profit they could have had.**

The founder's comment afterwards was blunt: *"Nobody told us this was urgent. It looked like a technical detail for later. It was the most expensive 'later' of my life."*

**This is why this lesson sits in Module 2 and not Module 7.** You will not use it for months. Set it up today anyway.

---

## 📊 Mastery Score

**Level: Advanced**

Very few advertisers do this. It is not difficult. It is simply invisible until you need it, and by then it is too late.

---

## 📌 Key Takeaways

- GCLID is Google's click ticket. GBRAID and WBRAID cover privacy-restricted iOS journeys. Capture all three.
- Store the click ID in a first-party cookie, then into a hidden form field, then into your CRM.
- This single setup unlocks offline conversions, lead quality feedback and value-based bidding.
- Upload within 30 days where possible; do not exceed 90. Design your process around this deadline.
- Respect consent, disclose it in your privacy policy, and never put personal data in the click ID field.

---

## ☑️ Self-Assessment

1. Is the GCLID stored on lead records in your CRM right now? Have you checked one?
2. Are you capturing GBRAID and WBRAID, or only GCLID?
3. How long is the sales cycle for your business? Is it inside the upload window?
4. Does your privacy policy mention advertising identifiers?
5. If you started capturing today, when could you begin uploading useful volume?

---

## 🧠 Quiz

**1. What is a GCLID?**
a) A Google Ads campaign type
b) A unique identifier Google adds to your URL when someone clicks your ad
c) A conversion action
d) A type of cookie banner

**2. Why capture GBRAID and WBRAID as well?**
a) They replace GCLID entirely
b) They cover privacy-restricted iOS journeys where GCLID is not available
c) They are needed by law
d) They improve Quality Score

**3. Where should the click ID be stored so it survives multiple page views?**
a) In the page HTML only
b) In a first-party cookie
c) In Google Ads
d) It does not need storing

**4. What is the practical upload deadline for offline conversions?**
a) 24 hours
b) 7 days
c) Within 30 days ideally, and no later than 90
d) There is no deadline

**5. Your sales cycle is 120 days, longer than the upload window. What should you do?**
a) Give up on offline conversions
b) Upload an intermediate stage, such as qualified opportunity, with an estimated value
c) Upload after 120 days anyway
d) Shorten the sales cycle

---

## 💪 Practical Exercise (30 minutes)

Check and build the capture on one real business.

1. Open your CRM and look at the last 10 leads. Is there a GCLID field? Is it populated?
2. If not, list every form on the site that generates leads.
3. Check whether your form tool supports hidden fields. Most do.
4. Write the exact request to your developer, naming the three fields and where they should end up.
5. Once built, run the full test: click a real ad, browse two pages, submit the form, and open the CRM record.

---

## 🎯 Expert Challenge

Design the complete first-party data structure for a business with a long sales cycle.

- Map every stage of the sales process, with the average number of days from click to each stage.
- Find which stage falls safely inside the upload window, and design the upload to happen there with a value based on historical close rates from that stage.
- Design the data schema: every field you will store on a lead record, why it exists, and which downstream system consumes it.
- Write the consent handling logic: what happens when a user declines, what you store instead, and how you will explain the resulting data gap in reporting.
- Build the data quality monitor: how you will know, weekly, what percentage of leads arrived with a click ID successfully attached. Anything below 80% needs investigating.
- Finally, calculate the business case. Estimate the improvement in cost per customer from value-based bidding, multiply by monthly volume, and present the number that justifies the developer time.

---

## ✅ Quiz Answers

1 — **b**. It is the ticket connecting a customer back to the click that produced them.
2 — **b**. iOS privacy restrictions mean GCLID is not always available.
3 — **b**. A first-party cookie, so it survives browsing before the form.
4 — **c**. Aim for 30 days, never exceed 90.
5 — **b**. Upload an earlier stage with a value based on its close rate.

---

## 🏁 Module 2 Complete — Phase 1 Complete

Your technical foundation is built. Before moving into Phase 2, confirm you can:

1. Create an account with the correct permanent settings
2. Link and validate the whole Google stack
3. Design a conversion strategy with one Primary action and real values
4. Build and test a conversion in GTM
5. Prove tracking works using all three validation tools
6. Capture click IDs into a CRM for future offline uploads

**Next:** Phase 2, Module 3 — Choosing the Right Keywords. The setup is done. Now we build campaigns.
