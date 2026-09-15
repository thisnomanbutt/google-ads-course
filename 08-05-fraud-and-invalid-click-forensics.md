# Lesson 8.5 — Fake Clicks: How to Spot and Stop Them

*Phase 4 · Tracking and Reading Your Results — Module 8 · Reading Reports and Fixing Problems*

---

## Quick Recap From Lesson 8.4

You can diagnose why an account declined. This lesson covers a specific cause worth its own treatment: **spend that never reached a real, interested person.**

---

## 🎯 What You Will Learn

- What invalid traffic actually is, and the different types
- How Google's own protection works, and where it falls short
- How to find suspicious patterns in your own data
- The practical defences that work
- How to file a credible invalid click claim

---

## Setting Expectations Honestly

Two things are true at once, and a lot of content on this topic gets one of them wrong.

**1. Invalid traffic is real.** Bots, click farms, accidental app clicks and competitor clicking all exist and all cost money.

**2. Google already filters a large amount of it automatically**, and refunds it as **invalid click credits** before you are ever charged.

⚠️ **Be sceptical of "click fraud protection" tools that claim 30–40% of your traffic is fraudulent.** Many exaggerate to justify their subscription. Their definition of "fraud" is often just "a visitor who did not convert".

**The realistic position:** most accounts have a small amount of invalid traffic that Google catches. Some accounts — particularly on Display, YouTube and in competitive local service markets — have a genuine problem worth investigating.

**Your job is to find out which you have, using evidence.**

---

## The Types of Invalid Traffic

### 1. Accidental clicks

Someone playing a mobile game taps an ad by mistake. They bounce in under two seconds.

**Where:** mobile apps, Display, in-app YouTube.
**Scale:** this is by far the biggest category for most advertisers.
**Fix:** exclude mobile app placements (Lesson 6.6).

### 2. Bots and automated traffic

Scripts and crawlers that click ads.

**Where:** anywhere, but concentrated on low-quality Display inventory.
**Fix:** mostly handled by Google's filtering. Placement exclusions help.

### 3. Click farms

Organised groups of people paid to click ads.

**Where:** typically concentrated in specific geographies, often outside your target market.
**Fix:** location targeting set to **Presence** (Lesson 4.4), and location exclusions.

### 4. Competitor clicking

A competitor clicks your ads to exhaust your budget.

**The honest position:** this is less common than people assume, and less effective than people fear. Google's systems detect repeated clicking from the same source reasonably well.

**Where it does happen:** small local markets with few advertisers and a personal rivalry.

### 5. Publisher fraud

A website owner in the Display network artificially inflating clicks on their own placement.

**Where:** Display and video partner inventory.
**Fix:** placement exclusions and monitoring.

---

## What Google Already Does

Google runs automated filtering on every click:

- **Filtered before you are charged** — most invalid clicks never appear on your bill
- **Invalid click credits** — anything charged and later found as invalid is refunded

### Where to see it

Add these columns in Google Ads:
- **Invalid clicks**
- **Invalid click rate**

**What is normal:** typically a small percentage of total clicks. The exact figure varies by network and market.

⚠️ **A high invalid click rate is not necessarily bad news.** It means Google's filtering is working and you were not charged. **A suspiciously low rate on Display traffic that clearly looks poor is more concerning**, because it suggests problem traffic is not being caught.

---

## Finding Suspicious Patterns Yourself

Google's filtering is good, not perfect. Here is how to investigate.

### Signal 1: Impossible engagement metrics

Pull GA4 data by source and look for:

| Metric | Suspicious value |
|---|---|
| Bounce rate | Above 95% |
| Average session duration | Under 3 seconds |
| Pages per session | Exactly 1.00 |
| Conversion rate | 0% over hundreds of clicks |

**One of these alone means little. Three together, on a specific placement or location, is a strong signal.**

### Signal 2: Placement concentration

From Lesson 6.6, open the placements report and sort by cost.

**Red flags:**
- One placement consuming a large share of budget with no conversions
- Extremely high click volume relative to impressions (unusually high CTR on Display)
- Placement names that look auto-generated or nonsensical
- Mobile game and app placements

### Signal 3: Geographic anomalies

Campaigns → Insights → Locations → **User locations**.

**Red flags:**
- Significant clicks from countries you do not target
- Clicks concentrated in a single small area you do not serve
- A location with high clicks and zero conversions over a long period

⚠️ **Check your location setting first** (Lesson 4.4). "Presence or interest" explains most unexpected geography, and that is a settings problem, not fraud.

### Signal 4: Time patterns

Segment by hour of day.

**Red flags:**
- Sustained click volume at 3–5am with no conversions
- Perfectly even click distribution across all 24 hours (real human behaviour is never even)
- Sharp spikes at exactly the same minute each day

### Signal 5: Device and browser patterns

**Red flags:**
- A large share of clicks from very old browser versions
- Unusual operating system distribution compared to your normal audience
- Traffic from data centre IP ranges — visible in some analytics tools

---

## The Practical Defences

In order of effectiveness.

### Defence 1: Exclude mobile app placements (biggest win)

From Lesson 6.6. This removes the largest source of accidental clicks for most advertisers.

Campaign settings → Content exclusions, plus a placement exclusion list.

### Defence 2: Set location targeting to Presence

Lesson 4.4. This removes an entire category of out-of-market clicks and is a 15-second fix.

### Defence 3: Build a placement exclusion list

Lesson 6.6. Review weekly for the first month, monthly afterwards. Apply the shared list across all accounts.

### Defence 4: IP exclusions (limited value)

Lesson 4.4. Up to 500 IPs per campaign.

⚠️ **Manage expectations.** Most IPs are dynamic and change frequently. Mobile users change IP constantly. IP exclusion is useful for blocking your own office and a known persistent source. It is **not** an effective general fraud defence, whatever a tool's marketing says.

### Defence 5: Frequency capping

Lesson 6.6. Limits how many times one source can be served your ad, which caps the damage from any single bad actor.

### Defence 6: Tighter targeting

Narrower locations, specific placements rather than automatic, and avoiding the broadest Display targeting.

### Defence 7: Third-party detection tools

These exist and some are legitimate. They monitor click patterns and automatically add IPs to your exclusion list.

**Assess them honestly:**

| Consider one if | Do not bother if |
|---|---|
| Large Display or video spend | Search-only account |
| Competitive local services market | Small budget |
| You have evidence of a real problem | You have not yet excluded mobile apps |
| Budget above roughly $10,000/month | You are relying on it instead of doing the basics |

⚠️ **Do the free defences first.** A tool that blocks 200 IPs while your budget flows into mobile games is solving the wrong problem.

---

## Filing an Invalid Click Claim

If you have genuine evidence Google's filtering missed something, you can raise it.

### Before you file

**Gather actual evidence.** A claim without data will be dismissed.

You need:
1. The specific date range
2. The specific campaign, ad group or placement
3. The click volume involved
4. The engagement evidence — bounce rate, session duration, conversion rate
5. Any pattern evidence — timing, geography, device
6. An estimate of the affected spend

### How to file

Contact Google Ads support and request an invalid activity review. Provide the evidence in a clear, factual summary.

**Use the same structure as the appeal letter from Lesson 1.5:**

> **Account ID:** 123-456-7890
> **Period:** 1–14 September 2026
> **Campaign:** Display - Remarketing
>
> We have found 3,940 clicks from placement "Bubble Shooter Puzzle" (app) over this period, costing PKR 4,800. Analytics shows an average session duration of 1.2 seconds, a 99.4% bounce rate, and zero conversions across all 3,940 clicks. Normal placements in this campaign show an average session duration of 74 seconds and a 3.1% conversion rate.
>
> We request a review of this activity for invalid clicks.

**Calm, specific, evidenced.** Exactly as in Lesson 1.5.

### Realistic expectations

- Reviews take time
- Credits are not guaranteed
- Google may confirm the clicks were valid, and that answer is sometimes correct
- **Prevention is far more effective than reclaiming**

⚠️ **Do not build a business process around expecting refunds.** Spend your effort on the defences instead.

---

## 📖 Real-World Example: Separating Real Fraud From a Sales Pitch

Dr. Ayesha received a cold email from a click fraud protection company. Their free audit claimed:

> *"37% of your Google Ads traffic is fraudulent. You are losing PKR 45,000 per month. Our service costs PKR 12,000 per month and will recover this."*

She sent it to Bilal before signing.

### The investigation

**Step 1: Check Google's own invalid click data.**

He added the Invalid clicks column. Over the previous 90 days, Google had filtered a small percentage of clicks — a normal figure for a Search-only account — and she had not been charged for them.

**Step 2: Check what the tool was counting as fraud.**

He asked the company for their method. Their definition included:
- Any visitor with a session under 10 seconds
- Any visitor who did not convert
- Any repeat visitor within 24 hours

**That last one is particularly revealing.** A person who visits a dental clinic's site twice in a day while deciding is a good sign, not fraud.

**Their 37% was basically "people who did not convert immediately".** By that definition, every advertiser in the world has 95% fraud.

**Step 3: Look for actual evidence.**

He ran the five signals properly.

| Signal | Finding |
|---|---|
| Engagement metrics | Bounce rate 41%, average session 68s. Normal. |
| Placement concentration | Search only — no Display placements to check |
| **Geographic** | ⚠️ **PKR 31,000 from Karachi, 2 bookings** |
| Time patterns | Normal daily curve, low overnight |
| Device patterns | Normal distribution |

**One real finding.** But it was not fraud.

It was the "Presence or interest" location setting from Lesson 4.4 — people in Karachi searching "best dentist in Lahore" for relatives. Real people, really searching, just not customers.

**Step 4: Check the one really suspicious thing.**

He did find something. A small but consistent cluster: 84 clicks over 90 days, all from a single area of Lahore, all between 11pm and 1am, all bouncing in under 3 seconds, zero conversions. Cost: PKR 3,900.

The pattern was too regular to be accidental.

### What he did

**Free fixes, 20 minutes:**
1. Location option changed to **Presence** — this alone recovered PKR 31,000 a month
2. The suspicious IP range added to IP exclusions
3. Clinic and agency office IPs excluded

**He did not buy the tool.**

### Results

| | Before | After |
|---|---|---|
| Monthly spend | PKR 122,500 | PKR 122,500 |
| Spend reaching Lahore | 66% | 97% |
| Bookings | 74 | 108 |
| Cost per booking | PKR 2,050 | PKR 1,405 |
| Suspicious late-night clicks | ~28/month | 0 |

**The company's claim of PKR 45,000 monthly waste was, coincidentally, not far from the real figure of PKR 31,000 + PKR 1,300.**

**But their diagnosis was wrong, and so their solution would not have fixed it.** Their tool would have blocked IPs. The actual problem was a location setting, which no IP-blocking tool addresses.

**She would have paid PKR 144,000 a year for a tool that solved almost none of her problem.**

### The genuine fraud

The late-night cluster was real, and it was probably a competitor or a disgruntled person. Cost: about PKR 1,300 a month.

**Real, but small.** Worth blocking, not worth a subscription.

### What Bilal told her

> *"You had one real fraud problem costing PKR 1,300 a month, and one settings problem costing PKR 31,000 a month. The tool would have addressed the small one. Fix the settings first, always."*

**This is the pattern in most fraud investigations.** The genuine fraud is real but modest. The large numbers usually turn out to be a settings problem, a placement problem, or a definition problem.

---

## 📊 Mastery Score

**Level: Advanced**

Fraud forensics needs scepticism in two directions: toward the traffic, and toward the people selling you protection from it.

---

## 📌 Key Takeaways

- Google already filters most invalid traffic and refunds it before you are charged.
- Accidental mobile app clicks are the largest real category. Excluding app placements is the biggest single win.
- Investigate with evidence: engagement metrics, placement concentration, geography, timing and device patterns.
- Do the free defences first — app exclusions, Presence targeting, placement lists — before considering a paid tool.
- Most large "fraud" figures turn out to be a settings problem or a vendor's generous definition. Check before you pay.

---

## ☑️ Self-Assessment

1. Have you added the Invalid clicks column? What is your rate?
2. Are mobile app placements excluded on your Display campaigns?
3. Is your location targeting set to Presence?
4. Have you checked the User Locations report for clicks outside your market?
5. If a vendor claimed 37% of your traffic was fraud, could you check it yourself?

---

## 🧠 Quiz

**1. What is the largest category of invalid traffic for most advertisers?**
a) Competitor clicking
b) Accidental clicks in mobile apps and games
c) Bots
d) Click farms

**2. What does a high invalid click rate in Google Ads usually mean?**
a) You have a serious fraud problem
b) Google's filtering is working and you were not charged
c) Your tracking is broken
d) You should pause the account

**3. What is the biggest limitation of IP exclusion?**
a) It costs money
b) Most IPs are dynamic and change, so blocking has limited durability
c) Google does not support it
d) It only works on Search

**4. A vendor says 37% of your traffic is fraud. What should you do first?**
a) Buy the tool
b) Ask for their method and check with your own data
c) Pause all campaigns
d) File a claim with Google

**5. What should you do before buying any fraud protection tool?**
a) Nothing
b) Exclude mobile app placements, set location to Presence, and build a placement exclusion list
c) Increase your budget
d) Switch to manual bidding

---

## 💪 Practical Exercise (35 minutes)

Run a fraud audit on one account.

1. Add the Invalid clicks and Invalid click rate columns. Record the figures.
2. Open the placements report. Find any placement with high spend and no conversions.
3. Open User Locations. Calculate the spend outside your target area.
4. Segment by hour of day. Look for unusual overnight patterns.
5. Check engagement metrics by source in GA4. Flag anything with under 3-second sessions.
6. Write your findings, separating genuine invalid traffic from settings problems.

---

## 🎯 Expert Challenge

Build a traffic quality monitoring system.

- Design the quality baseline for each traffic source: normal bounce rate, session duration, pages per session and conversion rate. Anomalies are only detectable against a known normal.
- Build the automated monitor that flags placements, locations or time periods deviating a lot from baseline, using a script (Lesson 11.2).
- Design the investigation process: what evidence you gather, in what order, and the threshold at which a pattern becomes actionable rather than noise.
- Build the evidence pack template for invalid click claims, so a claim can be filed in 20 minutes with proper data.
- Then run the vendor evaluation properly: if you are considering a paid tool, request their method in writing, run their free audit, and independently check three of their specific claims against your own data. Publish the result internally. This exercise, done once, will make you permanently harder to sell to.

---

## ✅ Quiz Answers

1 — **b**. Accidental app and game clicks.
2 — **b**. Filtering is working; those clicks were not charged.
3 — **b**. Dynamic IPs make blocking short-lived.
4 — **b**. Demand the method and check independently.
5 — **b**. The free defences address the largest real problems.

---

## 🏁 Module 8 and Phase 4 Complete

You can now measure, report and diagnose at an expert level. Confirm you can:

1. Read impression share and make correct scaling decisions
2. Build a report a client actually reads and acts on
3. Choose and value a bidding proxy for a low-volume business
4. Diagnose all eight causes of decay and tell them apart
5. Investigate invalid traffic with evidence rather than assumption

**Next:** Phase 5, Module 9 — Managing Large, Complex Accounts. Everything so far, at a bigger size.
