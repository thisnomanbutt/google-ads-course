# Lesson 4.6 — Build a Complete Campaign, Step by Step

*Phase 2 · Building Your First Search Campaigns — Module 4 · Writing Ads and Building Campaigns*
**🎥 Recording included** — follow along, or use this document as the written version.

---

## What This Lesson Is

Everything from Modules 0 to 4, applied in one continuous build.

We build a real campaign for Dr. Ayesha's dental clinic in Lahore, from an empty account to a live campaign, in the correct order.

**Follow along with your own business.** Pause where you need to. The order matters more than the speed.

---

## 🎯 What You Will Learn

- The exact order to build a campaign, and why the order matters
- Every decision point, with the reasoning behind it
- The 20-point pre-launch checklist
- What to do in the first 48 hours after launch
- The mistakes that appear at each stage

---

## Before We Start: The Business

**Dr. Ayesha's Dental Clinic, Gulberg, Lahore**

From Module 0, we already know:

| Fact | Value | From lesson |
|---|---|---|
| Average patient margin | PKR 12,000 | 0.3 |
| Lead-to-patient rate | 25% | 0.3 |
| **Max cost per lead** | **PKR 3,000** | 0.3 |
| Target cost per lead | PKR 2,000 | 0.3 |
| Monthly budget | PKR 120,000 | — |
| Mechanism | Numbing gel before the needle | 0.2 |
| Main fear | Pain, and unknown cost | 0.2 |

**Everything below flows from that table.** If you skip the Module 0 work, you are building on sand.

---

## STEP 1: Confirm the Foundations (15 minutes)

Before touching the campaign, check these. In order.

- [ ] **Account currency** = PKR, **timezone** = Pakistan Standard Time *(Lesson 2.1)*
- [ ] **Expert Mode**, not Smart Mode *(Lesson 2.1)*
- [ ] **Auto-apply recommendations** = OFF *(Lesson 1.3)*
- [ ] **Automatically created assets** = OFF *(Lesson 1.3)*
- [ ] **Billing set up**, with a backup payment method *(Lesson 2.1)*
- [ ] **Conversion tracking live and tested** *(Lessons 2.4, 2.5)*
- [ ] **GCLID capture into the CRM** working *(Lesson 2.6)*
- [ ] **Custom columns built:** Gross Profit, POAS *(Lesson 1.3)*

⚠️ **If conversion tracking is not working, stop here.** Do not launch. A campaign without tracking is a campaign you cannot manage, and Smart Bidding will have nothing to learn from.

---

## STEP 2: Conversion Setup (10 minutes)

*From Lesson 2.3.*

**Primary conversions (only two):**

| Action | Value | Count |
|---|---|---|
| Appointment booked | PKR 3,000 | One |
| Phone call over 90 seconds | PKR 3,000 | One |

**Secondary conversions (observation only):**
- Contact form submitted
- WhatsApp clicked
- Directions clicked
- Pricing page viewed

**Value rules applied:**
- Within 10 km of the clinic: **× 1.5**
- Outside Lahore: **× 0.4**

**Why "Count: One"?** These are leads. One person submitting three times is one lead.

---

## STEP 3: Keyword Research and Clustering (60 minutes)

*From Lessons 3.1, 3.2, 3.5.*

### The 20 keywords written from her head, before opening any tool

dentist lahore, dental clinic lahore, tooth pain, dental implant lahore, braces lahore, teeth whitening, root canal, dentist near me, dental checkup, emergency dentist...

### After Keyword Planner, autocomplete and Search Console

Total found: 260. After intent grading and filtering: **48 keywords survive.**

**What was cut and why:**
- All Level 1 informational ("how to whiten teeth at home") — 92 keywords, cut per Lesson 3.1
- Job-related terms — 14 keywords
- Terms for treatments she does not offer — 21 keywords
- Terms with no realistic volume — 85 keywords

### The final cluster map

| Ad group | Keywords (examples) | Landing page |
|---|---|---|
| `Local - Near Me` | dentist near me, dental clinic near me, dentist gulberg, dentist lahore | `/lahore-dentist` |
| `Problem - Fear` | painless dentist, dentist for nervous patients, scared of dentist, pain free dental | `/pain-free-dentistry` |
| `High Value - Implants` | dental implant lahore, implant cost lahore, tooth replacement lahore | `/dental-implants` |
| `High Value - Braces` | braces lahore, braces price pakistan, invisalign lahore, teeth straightening | `/braces` |
| `Urgent - Emergency` | emergency dentist lahore, dentist open now, urgent tooth pain, dentist sunday | `/emergency-dentist` |

**Five clusters. Five landing pages.** Note that each page must exist before launch.

---

## STEP 4: Campaign Structure (10 minutes)

*From Lesson 1.4.*

She needs different budgets and different urgency levels. Apply the four splitting rules.

| Campaign | Reason for the split | Daily budget |
|---|---|---|
| `Search \| PK-LHE \| Brand \| Exact \| Leads` | Brand always separates from non-brand | PKR 300 |
| `Search \| PK-LHE \| High-Value \| Phrase \| Leads` | Different bid target — higher value patients | PKR 1,800 |
| `Search \| PK-LHE \| General+Local \| Phrase \| Leads` | Different budget control | PKR 1,400 |
| `Search \| PK-LHE \| Emergency \| Phrase \| Leads` | Different ad schedule — 24/7 | PKR 450 |

**Total daily: PKR 3,950** → × 30.4 = **PKR 120,080 per month.** ✅ Matches the budget.

We will build the **High-Value** campaign live. The others follow the same pattern.

---

## STEP 5: Campaign Settings (10 minutes)

*From Lesson 4.4. Every setting, with the reasoning.*

| Setting | Value | Why |
|---|---|---|
| Campaign type | Search | — |
| Goal | Leads | — |
| Networks — Search Partners | ON at first | Review after 30 days with segmented data |
| Networks — Display | **OFF** | Never on a Search campaign |
| Locations | Lahore + 25 km radius | Her actual service area |
| **Location options** | **Presence** | The default wastes 34% of budget *(Lesson 4.4)* |
| Excluded locations | Karachi, Islamabad, other provinces | She cannot serve them |
| Languages | English + Urdu | Matches browser settings in Pakistan |
| Budget | PKR 1,800/day | From Step 4 |
| Bid strategy | **Maximise Conversions** | No tCPA yet — no data to base a target on |
| Ad rotation | Optimise | Default is correct here |
| Ad schedule | Mon–Sat 08:00–21:00 | The clinic answers the phone in these hours |
| Devices | No adjustments | Let Smart Bidding handle it |
| IP exclusions | Clinic office IP + agency IP | Stop internal clicks |
| Auto-created assets | OFF | Review manually first |
| End date | None | Ongoing campaign |

⚠️ **Note the bid strategy choice.** She has zero conversion history in this campaign. Setting a tCPA of PKR 2,000 now would be a guess, and the campaign would barely serve. Start with Maximise Conversions, gather 30 conversions, *then* add a target (Lesson 5.2).

---

## STEP 6: Build the Ad Groups (15 minutes)

*From Lesson 3.5.*

Two ad groups in this campaign.

### Ad group 1: `Implants - Cost and Local`

Keywords (phrase match — Level 2 maturity, per Lesson 3.3):
```
"dental implant lahore"
"dental implant cost lahore"
"dental implant price pakistan"
"tooth implant lahore"
"tooth replacement lahore"
"implant dentist lahore"
"single tooth implant cost"
```

Landing page: `/dental-implants`

### Ad group 2: `Braces - Cost and Local`

```
"braces lahore"
"braces price lahore"
"braces cost pakistan"
"invisalign lahore"
"clear aligners lahore"
"teeth straightening lahore"
"orthodontist lahore"
```

Landing page: `/braces`

**Ad group level negatives** to prevent cannibalisation *(Lesson 3.4)*:
- In `Implants`: add `-braces`, `-invisalign`, `-aligners`
- In `Braces`: add `-implant`, `-implants`

---

## STEP 7: Write the Ads (30 minutes)

*From Lessons 4.1 and 4.3.*

Here is the full RSA for `Implants - Cost and Local`.

**15 headlines** (character count in brackets):

| # | Headline | Chars | Slot |
|---|---|---|---|
| 1 | Dental Implants in Lahore | 25 | Exact keyword |
| 2 | Tooth Implant Lahore Clinic | 27 | Keyword variation |
| 3 | Replace One Tooth in 2 Visits | 29 | Main benefit |
| 4 | We Numb Before the Needle | 25 | Mechanism |
| 5 | 2,400 Patients Treated | 22 | Proof |
| 6 | Free 15-Minute Consultation | 27 | Risk removal |
| 7 | Implants From PKR 85,000 | 24 | Price |
| 8 | Written Price Before We Start | 29 | Objection handler |
| 9 | Price Never Changes. Promise. | 29 | Objection handler |
| 10 | Gulberg Clinic, Easy Parking | 28 | Local trust |
| 11 | Book Online in 60 Seconds | 25 | Call to action |
| 12 | Evening and Saturday Slots | 26 | Effort removal |
| 13 | Monthly Payment Plan Available | 30 | Payment terms |
| 14 | Watch Patient Videos First | 26 | Proof |
| 15 | Nervous About Dental Work? | 26 | Question |

**4 descriptions:**

1. "Dental implants in Gulberg, Lahore. We numb before every injection, so you never feel it." (88)
2. "Free 15-minute consultation. Written price before we start, and it never changes." (80)
3. "2,400 patients treated. Watch their videos before you decide. Monthly plans available." (86)
4. "Book online in 60 seconds. Evening and Saturday appointments. No pressure, ever." (79)

**Pinning: none.** No legal need, no brand rule. Let Google test everything.

**Ad Strength check:** should reach Good. If it says Average, look for repetition across headlines, not for more headlines.

---

## STEP 8: Build the Assets (30 minutes)

*From Lesson 4.2. Campaign level.*

**8 sitelinks, all with descriptions:**

| Headline | Description 1 | Description 2 |
|---|---|---|
| Implant Prices | From PKR 85,000 all in | Written quote, never changes |
| Free Consultation | 15 minutes, no obligation | No treatment on first visit |
| Patient Videos | Watch real Lahore patients | See the clinic before coming |
| Payment Plans | Spread the cost monthly | No interest, no hidden fees |
| Meet Dr. Ayesha | 15 years, 2,400 patients | Dental anxiety specialist |
| Our Gulberg Clinic | Photos, map and parking | Open evenings and Saturdays |
| Pain-Free Method | Numbing gel before needle | Why our patients feel nothing |
| Book an Appointment | Online in 60 seconds | Or call us right now |

**10 callouts:**
Free First Consultation · Pain-Free Treatment · Written Price Upfront · 15 Years Experience · Open Saturdays · Evening Appointments · Easy Parking · Monthly Payment Plans · 2,400 Patients Treated · No Pressure Ever

**3 structured snippets:**
- Services: Implants, Braces, Whitening, Root Canal, Cleaning, Crowns
- Types: Single Implant, Multiple Implants, Full Arch, Same-Day Crown
- Neighbourhoods: Gulberg, Model Town, DHA, Johar Town, Cantt

**12 images:** the clinic exterior, the treatment room, Dr. Ayesha with a patient, the waiting area, before-and-after (with consent), the team. All real photos. Both 1:1 and 1.91:1 crops.

**Call asset:** Google forwarding number, schedule matching clinic hours, minimum duration 90 seconds.

**Location asset:** linked from Google Business Profile.

**Price asset:** consultation free, cleaning from PKR 4,000, implant from PKR 85,000, braces from PKR 120,000.

**Business name and logo:** added.

---

## STEP 9: Negatives (10 minutes)

*From Lesson 3.4.*

**Apply shared lists:**
- `Universal Junk` (from the template)
- `Wrong Locations` (Karachi, Islamabad, Peshawar, India, Dubai...)

**Add clinic-specific negatives:**
```
free
jobs
salary
course
training
college
how to
diy
at home
dentist salary in pakistan
dental assistant
BDS
admission
```

**Why these matter:** Lahore has dental colleges. Searches about dental education would otherwise consume budget rapidly.

---

## STEP 10: The 20-Point Pre-Launch Checklist

Do not click Publish until every box is ticked.

**Foundations**
- [ ] 1. Conversion tracking tested with a real conversion
- [ ] 2. Correct Primary conversions set, with values
- [ ] 3. GCLID captured into the CRM

**Structure**
- [ ] 4. Campaign named using the standard format
- [ ] 5. Ad groups are true intent clusters
- [ ] 6. Every ad group has its own landing page
- [ ] 7. Cross-cluster negatives added

**Settings**
- [ ] 8. Display Network OFF
- [ ] 9. Location option set to Presence
- [ ] 10. Excluded locations added
- [ ] 11. Budget = monthly ÷ 30.4
- [ ] 12. Bid strategy matches data availability
- [ ] 13. Ad schedule matches when the phone is answered

**Creative**
- [ ] 14. 15 headlines, 15 different angles, all within 30 characters
- [ ] 15. 4 descriptions, each with a different job
- [ ] 16. Ad Strength at least Good
- [ ] 17. Full asset set built

**Compliance and quality**
- [ ] 18. Every claim in the ad is provable *(Lesson 1.5)*
- [ ] 19. Landing pages have contact details, policies, and load under 2.5s on mobile
- [ ] 20. Ad headline matches landing page headline

**Only now: publish.**

---

## STEP 11: The First 48 Hours

What to do — and, more importantly, what not to do.

### Hour 1
- Confirm ads are showing. Search your keyword using the **Ad Preview and Diagnosis** tool (do not search normally and click your own ad).
- Check for disapprovals.

### Hour 6
- Check that clicks are arriving.
- Check the landing pages load correctly from the ad.

### Day 1, end of day
- Open the search terms report. Even a few hours of data reveals obvious problems.
- Add negatives for anything clearly wrong.
- Confirm the first conversion tracked, if any.

### Day 2
- Search terms again. Add negatives.
- Check spend pacing against budget.

### ⚠️ What NOT to do in the first 14 days

- ❌ Do not change bids or bid strategy
- ❌ Do not change budgets by more than 20%
- ❌ Do not pause keywords for "poor performance"
- ❌ Do not rewrite the ads
- ❌ Do not judge results

**Why:** the campaign is in the **learning phase**. Smart Bidding is gathering data. Every significant change restarts it.

**The only acceptable day-one changes:** adding negative keywords, and fixing genuine errors (a broken URL, a disapproved ad).

This is the hardest discipline in Google Ads. New campaigns look bad in week one. Almost all of them do.

---

## The Realistic Timeline

| Time | What to expect |
|---|---|
| Days 1–3 | Volatile. Cost per conversion often 2–3× the target. **Normal.** |
| Days 4–14 | Learning phase. Gradual stabilising. Still do not judge. |
| Days 15–30 | First honest read. Compare against target, not against day one. |
| Days 30–45 | Optimisation begins: bid targets, budget shifts, ad testing. |
| Days 45–90 | Scaling decisions using impression share *(Lesson 8.1)* |

**Tell the client this timeline before launch.** A client who expects results on day three will interfere, and interference is what actually kills new campaigns.

---

## 📖 What Actually Happened

Dr. Ayesha's `High-Value` campaign, real numbers.

| Period | Spend | Leads | Cost per lead |
|---|---|---|---|
| Days 1–7 | PKR 12,400 | 2 | PKR 6,200 😰 |
| Days 8–14 | PKR 12,600 | 5 | PKR 2,520 |
| Days 15–21 | PKR 12,600 | 7 | PKR 1,800 |
| Days 22–30 | PKR 16,200 | 11 | PKR 1,473 |
| Days 31–60 | PKR 54,000 | 44 | PKR 1,227 |

**Week one looked like a disaster.** PKR 6,200 per lead against a PKR 3,000 ceiling. She was losing money on every lead.

If she had panicked and rebuilt the campaign, she would have restarted the learning phase and repeated week one forever. Many people do exactly this, then conclude Google Ads does not work.

**She did four things in week one, and only these four:**
1. Added 23 negatives from the search terms report
2. Fixed one landing page that loaded slowly on mobile
3. Replaced one disapproved image
4. Waited

By day 30 she added a tCPA of PKR 1,600 (Lesson 5.3), and by day 60 the campaign was her most profitable.

**The build took four hours. The discipline took four weeks.** The discipline was the harder part.

---

## 📊 Mastery Score

**Level: Advanced**

If you can complete this build unaided, you can competently launch a Search campaign for any business. That is a really employable skill.

---

## 📌 Key Takeaways

- Build in order: foundations, conversions, keywords, structure, settings, ads, assets, negatives, checklist, launch.
- Never launch without tested conversion tracking. There is no exception to this.
- Start on Maximise Conversions when you have no data. Add a target only after ~30 conversions.
- The 20-point checklist prevents almost every expensive launch mistake.
- Week one always looks bad. Add negatives, fix errors, and otherwise do nothing for 14 days.

---

## ☑️ Self-Assessment

1. Could you complete this build without looking at the lesson?
2. Which step do you feel least confident about?
3. Do you have all five landing pages ready before launch, or would you launch without them?
4. Can you explain the learning phase to a client in two sentences?
5. What would you do if week one showed a cost per lead 3× your target?

---

## 🧠 Quiz

**1. What must be true before you launch any campaign?**
a) You have 100 keywords
b) Conversion tracking is live and tested with a real conversion
c) The budget is large
d) Ad Strength is Excellent

**2. Why start with Maximise Conversions instead of tCPA?**
a) It is cheaper
b) With no data, any tCPA target is a guess and the campaign will barely serve
c) tCPA is not available at launch
d) It gets more clicks

**3. What is the ONLY change you should make in the first 14 days?**
a) Bid adjustments
b) Adding negative keywords and fixing genuine errors
c) Rewriting the ads
d) Changing the budget

**4. Week one shows a cost per lead 3× the target. What should you do?**
a) Pause the campaign
b) Rebuild it
c) Add negatives, fix errors, and wait — this is the learning phase
d) Double the budget

**5. Why does the location option need changing at setup?**
a) The default shows ads to people merely interested in your area, not present in it
b) It affects budget
c) Google needs it
d) It changes the currency

---

## 💪 Practical Exercise (2 hours)

Build one complete campaign for a real business. Do not launch it — build it and leave it paused.

1. Fill in the business facts table (margin, close rate, max cost per lead).
2. Build the cluster map with landing pages.
3. Create the campaign with every setting from Step 5.
4. Build one ad group with keywords, negatives and a full 15-headline RSA.
5. Build the complete asset set.
6. Work through all 20 checklist points and screenshot your results.
7. Write down which checklist item you nearly missed.

---

## 🎯 Expert Challenge

Build the full account, not just one campaign, and produce the launch documentation.

- Build all four campaigns from Step 4, each with correct settings, clusters, ads and assets.
- Write the launch plan document you would give a client: the timeline, what happens each week, what they will see, and what you need from them.
- Build the measurement plan: which numbers you report weekly in month one versus month three, and why they differ.
- Create the risk register: the five most likely ways this launch goes wrong, the early warning sign for each, and your response.
- Write the "week one reassurance" email in advance — the one you send when the client panics about cost per lead. Having it ready means you send a calm, prepared message instead of a defensive one.
- Finally, forecast: using the Lesson 0.3 maths and realistic conversion rates, predict leads and cost per lead for months 1, 2 and 3. Write it down before launch. Compare at day 90. This single habit will improve your judgement faster than anything else in this course.

---

## ✅ Quiz Answers

1 — **b**. Tested conversion tracking. No exceptions.
2 — **b**. A target with no data is a guess that throttles the campaign.
3 — **b**. Negatives and genuine error fixes only.
4 — **c**. This is the learning phase. Hold your nerve.
5 — **a**. "Presence or interest" pays for people outside your service area.

---

## 🏁 Module 4 and Phase 2 Complete

You can now build a complete, professional Search campaign from nothing. Confirm you can:

1. Write a 15-headline RSA using the framework
2. Build a full asset set in under an hour
3. Prompt an AI properly and edit its output
4. Set every campaign setting correctly and explain why
5. Diagnose and improve Quality Score
6. Complete the 20-point launch checklist unaided

**Next lesson:** 4.7 — Call Campaigns and Call-Only Ads
