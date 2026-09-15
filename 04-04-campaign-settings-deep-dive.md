# Lesson 4.4 — The Settings That Quietly Waste Your Money

*Phase 2 · Building Your First Search Campaigns — Module 4 · Writing Ads and Building Campaigns*

---

## Quick Recap From Lesson 4.3

Your ads are written. Now we go through the settings screen — where three defaults quietly waste money on almost every new campaign.

---

## 🎯 What You Will Learn

- The three default settings you must change on every campaign
- Presence vs Interest: the location setting that wastes the most money
- How daily budgets really work (they can overspend, legally)
- Ad schedules, devices and IP exclusions
- The complete settings checklist

---

## The Three Dangerous Defaults

Change these on every single campaign. Every time.

### ❌ Default 1: Display Network is ON

When you create a Search campaign, Google may include the **Display Network** by default ("Include Google Display Network").

**What happens:** your text ads appear as banners on random websites and mobile apps. Cost per click looks cheap. Conversion rate is terrible. Much of the traffic is accidental clicks on mobile games.

**Turn it OFF.** Always. If you want Display, build a separate Display campaign where you can control it properly (Lesson 6.6).

### ⚠️ Default 2: Search Partners is ON

Search Partners means other search sites that show Google results.

**This one is really debatable.** Sometimes it performs well; sometimes it wastes money.

**How to decide properly:**
1. Leave it on for the first 30 days
2. Segment your reports by **Network** (Segment → Network)
3. Compare Google Search vs Search Partners on cost per conversion
4. If Search Partners is a lot worse, turn it off

**Do not guess. Segment and look.**

### ❌ Default 3: Location targeting is "Presence or Interest"

This is the biggest money-waster in the settings screen, and it is hidden.

---

## Presence vs Interest: The Setting Nobody Checks

Under Locations, there is a small "Location options" link. Open it. You will find two choices.

### "Presence or interest" (the default)

Your ads show to:
- People **in** your target location, **and**
- People **anywhere in the world** who show interest in your location

**What that means in practice:** a Karachi business advertising to "Karachi" will also show ads to someone in Dubai searching "water filter Karachi", someone in London reading about Karachi, and someone in Lahore who searched for Karachi last week.

### "Presence" (usually the right choice)

Your ads show only to people **physically in** your target location.

### Which to use

| Business type | Setting |
|---|---|
| Local service (clinic, plumber, restaurant) | **Presence** |
| Local shop with delivery in one city | **Presence** |
| National e-commerce shipping across the country | **Presence** |
| Tourism, hotels, travel | **Presence or interest** (people plan trips from elsewhere) |
| Businesses really serving expatriates or overseas buyers | **Presence or interest**, carefully |
| International B2B software | Usually **Presence**, targeting each market |

**For most businesses, "Presence" is correct.** The default is not.

### Also set your exclusions

Under the same section, add **excluded locations** for places you definitely do not serve. And use the same "Presence" logic — exclude by presence so you do not block genuine local customers who once searched about another city.

⚠️ **How to check what you are actually paying for:** go to Campaigns → Insights → **Locations** report → "User locations" (not "Matched locations"). This shows where people physically were. If you see countries you do not serve, your setting is wrong.

---

## Budget: How It Really Works

### Daily budget is not a hard limit

Google can spend **up to twice your daily budget** on any single day.

**Why:** Google balances across the month. If Tuesday has more good traffic than Sunday, it spends more on Tuesday.

**The protection:** Google will not charge you more than your **daily budget × 30.4** in a calendar month. So the monthly total is capped even though individual days vary.

### What this means practically

- Do not panic when you see a day at 180% of budget
- Do panic if the monthly total exceeds daily × 30.4
- If a client needs a hard daily ceiling, use **shared budgets** or manual payments (Lesson 2.1)

### Setting the daily budget

> **Daily budget = Monthly budget ÷ 30.4**

Not ÷ 30. The 30.4 matters over a year.

### The learning phase and budget

⚠️ **Do not change budgets during the learning phase** (roughly the first 1–2 weeks of a new campaign or bid strategy). Every significant change restarts learning.

**Rule for changes:** adjust budgets by no more than **20–30% at a time**, and wait a week between changes. Large jumps destabilise Smart Bidding.

---

## Bidding: The Short Version

Full coverage is Module 5. For now, the decision at launch:

| Situation | Launch bid strategy |
|---|---|
| New campaign, no conversion data at all | **Maximise Clicks** with a max CPC cap, for 2–3 weeks |
| New campaign, account already has conversion data | **Maximise Conversions** |
| Established campaign, 30+ conversions/month | **Maximise Conversions with tCPA** |
| E-commerce with values, 50+ conversions/month | **Maximise Conversion Value with tROAS** |

⚠️ **Never launch on tCPA or tROAS with no data.** You will set a target based on a guess, and the campaign will barely serve. Start looser, then tighten.

---

## Ad Rotation

Two options:

- **Optimise: prefer best performing ads** (default) — Google shows the ad it predicts will perform best
- **Do not optimise: rotate ads indefinitely** — even rotation

**Use "Optimise" in almost every case.** With RSAs, Google is already testing combinations internally. Even rotation just slows learning.

Use "Do not optimise" only when running a formal creative test where you need equal exposure — and even then, a Google Experiment (Lesson 13.1) is a better tool.

---

## Ad Schedule

By default, ads run 24/7. Whether that is right depends on the business.

### When to restrict hours

✅ **A service that only answers the phone 9am–6pm.** Showing a call-focused ad at 2am wastes money.
✅ **A business that closes on Fridays or Sundays.**
✅ **Proven poor performance in specific hours** — but you need real data first.

### When NOT to restrict hours

❌ **E-commerce.** People buy at midnight. Let them.
❌ **Before you have data.** Do not guess which hours are bad.
❌ **When Smart Bidding is running well.** It already adjusts by time of day, using signals you cannot see.

### The safer approach

Instead of blocking hours entirely, use **bid adjustments** on the schedule — reduce by 30% at 2am rather than going to zero. This keeps the data flowing and lets you learn.

⚠️ **Note:** with most Smart Bidding strategies, your manual schedule bid adjustments are ignored or overridden. If you are on tCPA, use the schedule to *exclude* hours only, not to fine-tune bids.

**Check your data first:** Campaigns → segment by Day and hour, or use the "Time" report. Look for real patterns over 90 days, not two weeks.

---

## Devices

You can adjust bids by device: mobile, desktop, tablet, TV screens.

### The modern position

With Smart Bidding, **device is already one of the 70+ signals** it uses (Lesson 11.1). Manual device adjustments are usually unnecessary and often harmful.

**When a device adjustment is still justified:**
- Your site really does not work on mobile (fix the site instead)
- Tablets convert terribly and you have 90 days of data proving it
- You have a phone-only offer

**Set device bid adjustment to −100% only when you are certain.** It removes that device entirely.

**Check your data:** segment by Device. Look at conversion rate and cost per conversion, not just CTR.

---

## IP Exclusions

You can block specific IP addresses from seeing your ads. Up to 500 per campaign.

### Genuine uses

1. **Your own office.** Stop staff clicking your own ads while checking things.
2. **The client's office.** Same reason. Ask for their IP.
3. **A known problem source** found through invalid click analysis (Lesson 8.5).

### The limits

⚠️ IP exclusion is a weak tool against click fraud. Most IPs are dynamic — they change. Mobile users change IP constantly. Do not rely on it as a fraud defence.

**Where to find it:** Campaign settings → Extra settings → IP exclusions.

**How to find your IP:** search "what is my IP" on Google.

---

## Other Settings Worth Knowing

### Languages
Set the language of the **person's browser and Google interface**, not the language of your ad. For Pakistan, selecting both English and Urdu usually makes sense, since many people use English interfaces.

**Do not** assume selecting "English" excludes people who speak Urdu. It is about their settings, not their speech.

### Campaign URL options / Tracking template
Where you add UTM parameters and tracking. Full structure in Lesson 11.5.

⚠️ **Test any tracking template immediately.** A malformed template breaks every ad in the campaign.

### Dynamic Search Ads setting
Leave off unless you are on purpose running DSA (Lesson 9.2).

### Broad match keyword setting
Some campaigns offer an option to convert keywords to broad match. **Leave this off** and control match types on purpose (Lesson 3.3).

### Automatically created assets
Turn off until you can review them weekly (Lesson 1.3).

### Start and end dates
Set an end date only for really time-limited campaigns. A forgotten end date is a common cause of "why did the account stop?"

---

## The Complete Settings Checklist

Run this on every campaign before it goes live.

**Networks**
- [ ] Display Network: **OFF**
- [ ] Search Partners: ON for 30 days, then decide from segmented data

**Locations**
- [ ] Target locations correct
- [ ] Location option set to **Presence** (unless tourism/travel)
- [ ] Excluded locations added
- [ ] Exclusion method also set to Presence

**Languages**
- [ ] Set to match your customers' browser settings

**Budget**
- [ ] Daily budget = monthly ÷ 30.4
- [ ] Client understands the 2× daily variation rule

**Bidding**
- [ ] Appropriate strategy for the account's data level
- [ ] No tCPA/tROAS target set without data to base it on

**Ad rotation**
- [ ] Set to Optimise

**Ad schedule**
- [ ] 24/7, unless there is a data-backed reason
- [ ] If restricted, based on 90 days of data

**Devices**
- [ ] No adjustments unless justified by data

**Other**
- [ ] Automatically created assets: OFF
- [ ] Auto-apply recommendations: OFF (account level, Lesson 1.3)
- [ ] IP exclusions added for your office and the client's
- [ ] Tracking template tested if used
- [ ] No accidental end date

---

## 📖 Real-World Example: One Checkbox, 34% of the Budget

Dr. Ayesha's clinic serves patients in Lahore. Her campaign targeted "Lahore, Pakistan". That looked correct.

Her cost per booking was PKR 2,050 after the restructure in Lesson 1.4 — good, but she wanted better. She was about to start testing new ad copy.

Before that, she checked the **User Locations** report. Here is what she found for the previous 60 days:

| Location where the person actually was | Spend | Bookings |
|---|---|---|
| Lahore | PKR 148,000 | 71 |
| Karachi | PKR 31,000 | 2 |
| Islamabad | PKR 22,000 | 1 |
| United Arab Emirates | PKR 19,000 | 0 |
| Saudi Arabia | PKR 11,000 | 0 |
| United Kingdom | PKR 8,000 | 0 |
| Other | PKR 6,000 | 0 |

**PKR 97,000 — 34% of her spend — went to people who were not in Lahore.**

Her location setting was "Presence or interest". Someone in Dubai searching "best dentist in Lahore" (perhaps for a relative, perhaps just curious) triggered her ads. She paid for those clicks.

The three bookings from outside Lahore were people who happened to be travelling. Not worth PKR 97,000.

**The fix took 15 seconds.** Locations → Location options → **Presence: people in your targeted locations**.

**Results in the following 60 days:**

| Metric | Before | After |
|---|---|---|
| Monthly spend | PKR 122,500 | PKR 122,500 |
| Spend reaching Lahore | 66% | 97% |
| Bookings | 74 | 108 |
| Cost per booking | PKR 2,050 | PKR 1,405 |

**Same budget. 46% more patients. From one checkbox.**

And here is the part worth remembering: she found it by **looking at where people actually were**, not by looking at her campaign settings. The settings looked correct. The behaviour was not.

**Always check the User Locations report on any account you inherit.** It takes two minutes and it finds this problem regularly.

---

## 📊 Mastery Score

**Level: Foundational**

No strategy here — just knowing where the traps are. But these traps cost real money on a large proportion of live accounts.

---

## 📌 Key Takeaways

- Turn the Display Network OFF on every Search campaign.
- Set location targeting to "Presence", not the default "Presence or interest". Then check with the User Locations report.
- Daily budgets can spend up to 2× on a given day, but the month is capped at daily × 30.4.
- Do not restrict ad schedules or device bids without 90 days of data. Smart Bidding already handles these signals.
- Run the full settings checklist on every campaign before launch.

---

## ☑️ Self-Assessment

1. Is the Display Network off on all your Search campaigns? Check now.
2. What is your location setting — Presence, or Presence or interest?
3. Have you looked at the User Locations report in the last month?
4. Have you segmented by Network to judge Search Partners?
5. Are your IP exclusions set for your own office?

---

## 🧠 Quiz

**1. Why turn off the Display Network on a Search campaign?**
a) It costs more per click
b) Your text ads become banners on random sites and apps, with poor conversion
c) Google charges a fee
d) It is against policy

**2. What does "Presence or interest" location targeting do?**
a) Shows ads only to people in your location
b) Shows ads to people in your location AND anyone worldwide showing interest in it
c) Shows ads only to people interested in your product
d) Nothing, it is the same as Presence

**3. Your daily budget is PKR 5,000 and Google spent PKR 8,900 on Tuesday. Is this allowed?**
a) No, report it
b) Yes — Google can spend up to 2× on a day, capped monthly at daily × 30.4
c) Only in some countries
d) Only with Smart Bidding

**4. Which report shows where people physically were when they saw your ad?**
a) Matched locations
b) User locations
c) Geographic report only
d) Search terms

**5. When should you restrict your ad schedule?**
a) Immediately at launch
b) When you have 90 days of data showing poor performance in specific hours, or the business really cannot serve then
c) Never
d) Only for e-commerce

---

## 💪 Practical Exercise (30 minutes)

Run the settings checklist on one live campaign.

1. Work through every item on the checklist. Mark pass or fail.
2. Open the User Locations report for the last 60 days. Calculate the percentage of spend outside your target area.
3. Segment by Network. Compare Google Search vs Search Partners on cost per conversion.
4. Segment by Device. Note any large differences.
5. Write your list of changes, in priority order, with the money each should save.

---

## 🎯 Expert Challenge

Build a settings governance standard for a portfolio of accounts.

- Create the master settings specification: the correct value for every setting, with the reasoning, and the exceptions that justify deviating.
- Build an audit script or checklist that can be run across all accounts monthly, flagging any campaign that deviates from the standard.
- Analyse the geographic data properly for one account: build a location performance report with spend, conversions and cost per conversion by city and region, then recommend a location bid adjustment strategy or a campaign split (Lesson 9.3).
- Design the schedule analysis: pull 12 months of hourly data, find genuine patterns versus noise, and work out whether restriction would help or simply reduce volume.
- Then quantify the portfolio-wide opportunity: across all your accounts, how much spend is currently going to the wrong locations, wrong networks or wrong devices? Present that as a single number.

---

## ✅ Quiz Answers

1 — **b**. Search ads on Display placements perform poorly and waste budget.
2 — **b**. It includes people anywhere in the world showing interest in your area.
3 — **b**. Allowed. The month is what is capped.
4 — **b**. User locations shows physical location; matched locations does not.
5 — **b**. Only with real data, or a genuine operational reason.

---

**Next lesson:** 4.5 — Raise Your Quality Score and Pay Less
