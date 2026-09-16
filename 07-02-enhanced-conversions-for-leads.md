# Lesson 7.2 — Connect Your Leads to Real Sales

*Phase 4 · Tracking and Reading Your Results — Module 7 · Advanced Tracking That Sees Everything*

---

## Quick Recap From Lesson 7.1

Enhanced Conversions for Web recovers lost online sales. **Enhanced Conversions for Leads** does something different and more powerful: it closes the loop between a click and a customer who paid you weeks later, offline.

---

## 🎯 What You Will Learn

- The difference between Enhanced Conversions for Web and for Leads
- The complete structure: click → form → CRM → sale → back to Google
- How to choose between the GCLID method and the hashed-data method
- Step-by-step setup
- How this transforms lead generation performance

---

## The Problem: The Gap Between a Lead and a Customer

Remember Lesson 0.6. Dr. Ayesha's account counted form submissions. Google found her the cheapest form submissions, which were often worthless.

She fixed it partly by counting booked appointments instead. But there was still a gap:

```
Click → Form → Phone call → Appointment → Attended → Treatment paid
  ↑                                                        ↑
Google sees this                            The money happens HERE
```

**Everything after the form happens offline.** Google cannot see it.

Even counting "appointment booked" only gets you two steps along. The patient who books and never attends looks identical to the one who pays PKR 85,000.

**Enhanced Conversions for Leads closes that gap.**

**Think of a shop with a sign-in book at the door.** You know who came in. You do not know who bought. Unless you connect the sign-in book to the till receipts, you cannot tell which advertising brought spenders and which brought browsers.

---

## What It Actually Does

When someone submits your lead form, you capture their details. Later, when they become a customer, you tell Google:

> *"That lead — the one found by this hashed email — became a customer worth PKR 45,000 on this date."*

Google matches it back to the original ad click and records the conversion with its real value.

**Smart Bidding now learns which clicks produce customers, not which clicks produce forms.**

---

## Two Methods: GCLID vs Hashed Data

There are two ways to connect a lead back to a click. Understand both.

### Method A: GCLID-based (traditional Offline Conversion Import)

You capture the **GCLID** at form submission (Lesson 2.6), store it in your CRM, and upload it later with the outcome.

| Pros | Cons |
|---|---|
| Very precise matching | Needs GCLID capture to be built |
| Well-set up, widely supported | Breaks if the GCLID is lost |
| Works with all CRMs | Misses iOS journeys without GBRAID/WBRAID |

### Method B: Enhanced Conversions for Leads (hashed data)

You capture the **customer's email or phone** at form submission and upload that later, hashed. Google matches on the identity, not the click ID.

| Pros | Cons |
|---|---|
| Works even when the GCLID was lost | Match rate below 100% |
| Simpler — most CRMs already store email | Needs privacy compliance work |
| Recovers cross-device journeys | Needs correctly formatted data |

### Which should you use?

**Use both.** They are complementary, not competing.

- GCLID matches exactly when available
- Hashed data catches the ones where the GCLID was lost
- Deduplication via a consistent order or lead ID prevents double counting

**If you can only build one:** start with Enhanced Conversions for Leads (hashed data), because most CRMs already store email addresses and no new capture is needed.

---

## The Complete Structure

```
1. AD CLICK
   Google adds GCLID to the URL
        ↓
2. LANDING PAGE
   GTM captures GCLID + GBRAID/WBRAID → first-party cookie   [Lesson 2.6]
        ↓
3. FORM SUBMISSION
   Hidden fields carry GCLID; form captures email and phone
   Google Ads conversion fires: "Lead submitted"
        ↓
4. CRM RECORD CREATED
   Stores: email, phone, GCLID, timestamp, form name, source
        ↓
5. SALES PROCESS (days or weeks)
   Lead is called, qualified, quoted, and either closes or does not
        ↓
6. STAGE CHANGE
   CRM status becomes "Qualified" / "Won" / "Closed"
        ↓
7. UPLOAD BACK TO GOOGLE
   Send: identifier + conversion action + date + value
        ↓
8. GOOGLE MATCHES AND ATTRIBUTES
   Conversion credited to the original click
        ↓
9. SMART BIDDING LEARNS
   Bids more for clicks that produce customers
```

**Every step must work.** The chain is only as strong as its weakest link, and the weakest link is almost always step 4 — the CRM not storing the identifier.

---

## Step-by-Step Setup

### Prerequisites

- Working conversion tracking (Lesson 2.5)
- Auto-tagging ON (Lesson 2.2)
- A CRM or spreadsheet where leads are tracked
- The ability to export or automate uploads
- Privacy policy updated (Lesson 7.1)

---

### Step 1: Enable it in Google Ads

1. **Goals → Conversions → New conversion action**
2. Choose **Import** → **CRM, files, or other data sources**
3. Choose **Track conversions from clicks** (GCLID method) or **Track conversions from user-provided data** (hashed method)
4. Name it clearly, e.g. `Qualified Lead - CRM` or `Customer Won - CRM`
5. Set the category, value and counting settings (Lesson 2.3)
6. Set as **Primary** — this is now what Smart Bidding optimises for

⚠️ **When you switch the Primary conversion from "form submitted" to "customer won", expect the same dramatic drop in reported conversions as in Lesson 2.3.** Warn the client first.

---

### Step 2: Capture the data at form submission

**For the hashed method**, you need at minimum the email address. Also capture phone where available.

**For the GCLID method**, follow Lesson 2.6 exactly.

**In your CRM, the lead record must have these fields:**

| Field | Why |
|---|---|
| Email | Primary matching identifier |
| Phone | Secondary matching identifier |
| GCLID | Precise click matching |
| GBRAID / WBRAID | iOS journeys |
| Conversion date/time | Needed for upload |
| Lead ID | For deduplication |
| Stage / status | Triggers the upload |
| Value | What the customer was worth |

⚠️ **Time zone matters.** The conversion time you upload must be in a format Google accepts, with the correct time zone offset. Getting this wrong is a very common cause of rejected uploads.

---

### Step 3: Define the trigger stages

Decide **which CRM stage triggers an upload**, and what value it carries.

Dr. Ayesha's ladder:

| CRM stage | Days from click | Uploads as | Value |
|---|---|---|---|
| Form submitted | 0 | (browser tag, already firing) | Secondary only |
| Contacted and qualified | 2 | `Qualified Lead` | PKR 3,000 |
| Appointment attended | 9 | `Attended` | PKR 9,000 |
| Treatment paid | 21 | `Customer Won` | Actual margin |

**Remember the upload window** from Lesson 2.6: aim to upload within 30 days, never beyond 90.

**For long sales cycles**, upload the intermediate stage rather than waiting (Lesson 5.5).

---

### Step 4: Build the upload mechanism

Three options, from simplest to best.

**Option A: Manual CSV upload**
Export from the CRM weekly, format, upload via Google Ads → Conversions → Uploads.

- ✅ No development needed, works immediately
- ❌ Manual, error-prone, easily forgotten
- **Good for:** getting started, low volume

**Option B: Google Sheets scheduled upload**
Connect a Google Sheet as a data source with a scheduled import.

- ✅ Semi-automated, no coding
- ❌ Still needs the sheet kept current
- **Good for:** small teams

**Option C: Native CRM integration or API**
HubSpot, Salesforce and others offer built-in Google Ads integrations. Or build it via the API.

- ✅ Fully automated, reliable
- ❌ Setup effort, sometimes cost
- **Good for:** anyone serious. This is covered in Lesson 7.4.

**Start with Option A this week.** Move to C within a quarter. Do not wait for the perfect solution — waiting costs you data you can never recover (Lesson 2.6).

---

### Step 5: Format the upload file

**For the GCLID method**, columns:

```
Google Click ID, Conversion Name, Conversion Time, Conversion Value, Conversion Currency
```

**For the hashed method**, columns:

```
Email, Phone Number, Conversion Name, Conversion Time, Conversion Value, Conversion Currency
```

**Formatting rules that catch people out:**

- **Email:** lowercase, trimmed of spaces. Google hashes it on upload if you use the interface.
- **Phone:** E.164 format — `+923001234567`. No spaces, no brackets, no leading zeros after the country code.
- **Conversion time:** must include the time zone, e.g. `2026-09-14 14:30:00+05:00`
- **Conversion name:** must match the conversion action name **exactly**, including capitalisation
- **Value:** numbers only, no currency symbols, no thousands separators

⚠️ **Most first uploads fail.** Read the error report carefully; it names the row and the problem. This is normal and fixable.

---

### Step 6: Test with a small batch

Do not upload 4,000 rows on your first attempt.

1. Upload **10 rows** you know are correct
2. Check the results — how many were accepted?
3. Read every error
4. Fix the format
5. Upload the full batch

---

### Step 7: Check and monitor

**After 24–48 hours:**
- Google Ads → Goals → Conversions → your imported action
- Confirm conversions appear
- Check they are attributed to campaigns, not sitting unattributed

**Ongoing monthly check:**
- What percentage of uploaded rows are accepted?
- What percentage of CRM leads have a usable identifier?
- Does the total uploaded value match the business's actual revenue?

**Target: above 80% of leads should carry a usable identifier.** Below that, investigate step 2.

---

## 📖 Real-World Example: TaskFlow Closes the Loop

TaskFlow had been capturing GCLIDs since month 6 (after the painful lesson in 2.6). By month 15 they had the data but were not using it.

**Their situation:**
- Primary conversion: PQL (trial user who invited 2+ team members)
- Cost per PQL: $58
- PQL → paying customer rate: 34%
- Real cost per customer: $171

The PQL was a good proxy. But it treated every PQL as identical — a 5-person contractor and a 400-person construction group counted the same.

### What they built

**Stage ladder with real values:**

| Stage | Upload timing | Value |
|---|---|---|
| PQL | Day 5 | $147 (from Lesson 5.5 model) |
| Demo booked | Day 12 | $264 |
| **Closed won** | Day 45 | **Actual annual contract value × margin** |

**Both methods set up:**
- GCLID from the hidden form field (already captured)
- Email hashed, as a fallback for lost GCLIDs

**Upload mechanism:** their CRM's native Google Ads integration, syncing daily.

**Deduplication:** each lead carried a unique `lead_id` used consistently across both methods.

### The first upload

They uploaded 90 days of historical closed deals — 187 customers with real contract values ranging from $580 to $14,200.

**Match results:**
- GCLID matched: 71%
- Hashed email matched an extra: 18%
- **Total matched: 89%**
- Unmatched: 11% (outside window, or no identifier captured)

That 18% recovered by the hashed method was mostly iOS users — exactly the gap Lesson 2.6 warned about.

### What Smart Bidding learned

Once they switched the Primary conversion to `Closed Won` with real values and moved to tROAS, the bidding changed in ways nobody predicted.

**What Google started bidding up:**
- Searches containing "multiple sites" or "multiple projects"
- Desktop traffic during working hours
- Searches from specific postcodes with industrial estates
- Longer, more specific queries

**What Google started bidding down:**
- Mobile evening traffic (lots of trials, almost no purchases)
- Searches containing "free" or "simple"
- One specific competitor comparison term that produced many trials and no customers

**None of this had been visible before**, because every trial looked the same.

### Results at 16 weeks

| Metric | Before | After |
|---|---|---|
| Monthly spend | $19,600 | $19,900 |
| Trials | 412 | 247 |
| PQLs | 338 | 231 |
| **Paying customers** | **115** | **178** |
| **Cost per customer** | **$171** | **$112** |
| Average contract value | $2,840 | $4,190 |
| **Monthly revenue from ads** | **$326,600** | **$745,820** |

**Trials fell 40%. Revenue from ads rose 128%.**

The average contract value rose 47% because Smart Bidding was now hunting for large construction firms, not for anyone who would start a free trial.

### The number that mattered most to the founder

*"We were paying the same money to Google. We just stopped asking it for the wrong thing."*

That sentence summarises Phase 4 entirely.

---

## 📊 Mastery Score

**Level: Expert**

Fewer than one in twenty lead generation accounts run offline conversion feedback properly. This capability alone can justify a premium retainer.

---

## 📌 Key Takeaways

- Enhanced Conversions for Leads closes the gap between a form fill and a paying customer.
- Use both methods: GCLID for precision, hashed data to recover journeys where the GCLID was lost.
- The weakest link is almost always the CRM not storing the identifier. Check this first.
- Upload the stage that falls inside the 30–90 day window, valued by its historical close rate.
- Start with manual CSV uploads this week. Automate within a quarter. Do not wait for perfect.

---

## ☑️ Self-Assessment

1. Does your CRM store an identifier — GCLID or email — on every lead record?
2. What percentage of your leads have a usable identifier? Have you measured it?
3. Which CRM stage would you upload, and what value would it carry?
4. How long is the gap between click and closed sale? Is it inside the upload window?
5. Could you produce a correctly formatted upload file today?

---

## 🧠 Quiz

**1. What does Enhanced Conversions for Leads do?**
a) Recovers lost online sales
b) Tells Google which leads became paying customers, so bidding can target them
c) Generates more leads
d) Reduces cost per click

**2. Why use both the GCLID and hashed data methods?**
a) Google needs both
b) GCLID is precise; hashed data recovers journeys where the GCLID was lost
c) They measure different things
d) It doubles conversions

**3. What is the usual weakest link in the chain?**
a) Google's matching
b) The CRM not storing the identifier
c) The upload file format
d) The conversion window

**4. Your sales cycle is 120 days. What should you upload?**
a) Wait 120 days and upload the closed deal
b) An intermediate stage inside the window, valued by its historical close rate
c) Nothing
d) The form submission only

**5. Trials fell 40% but revenue from ads rose 128%. What happened?**
a) Tracking error
b) Bidding shifted from anyone who would sign up to firms that actually buy
c) Prices increased
d) A seasonal effect

---

## 💪 Practical Exercise (45 minutes)

Plan a full offline conversion loop for one business.

1. Draw the journey from click to payment, with the average days at each stage.
2. Open the CRM and check the last 20 leads. How many have an email? A GCLID?
3. Calculate the percentage with a usable identifier.
4. Choose the stage you would upload, and calculate its value from the close rate.
5. Build a test CSV with 10 real closed leads, correctly formatted.
6. Upload it and read every error. Fix and re-upload.

---

## 🎯 Expert Challenge

Design the complete click-to-cash measurement structure.

- Map every stage from impression to payment, with the drop-off rate and average duration at each, using real historical data.
- Design the identifier capture strategy covering all entry points: web forms, phone calls, WhatsApp, live chat, and offline walk-ins referencing an ad.
- Build the deduplication logic across browser tag, hashed upload and GCLID upload, with a single consistent lead identifier.
- Design the upload automation, including error handling: what happens when a row is rejected, who is notified, and how it is retried.
- Build the data quality dashboard: identifier capture rate, upload acceptance rate, match rate, and value reconciliation against the business's accounts — all tracked weekly.
- Then model the expected bidding shift: which traffic segments you predict Google will bid up and down once it can see real customers. Write these predictions down, then compare at 16 weeks. This is the single best exercise for developing genuine intuition about how Smart Bidding thinks.

---

## ✅ Quiz Answers

1 — **b**. It teaches Google which clicks produce paying customers.
2 — **b**. They cover each other's gaps.
3 — **b**. The CRM not storing the identifier is the usual failure point.
4 — **b**. Upload an earlier stage valued by its close rate.
5 — **b**. The optimisation target changed from signups to buyers.

---

**Next lesson:** 7.3 — Server-Side Tracking: Is It Worth It?
