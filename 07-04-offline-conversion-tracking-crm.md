# Lesson 7.4 — Send Sales From Your CRM Back to Google

*Phase 4 · Tracking and Reading Your Results — Module 7 · Advanced Tracking That Sees Everything*

---

## Quick Recap From Lesson 7.2

You understand the click-to-customer structure. This lesson is the practical build, in the CRMs you will actually meet.

---

## 🎯 What You Will Learn

- The universal field mapping every integration needs
- HubSpot, Salesforce and GoHighLevel, each step by step
- The no-code route using Zapier or Make
- How to test an integration before trusting it
- Troubleshooting the errors you will definitely hit

---

## The Universal What you need

Whatever CRM you use, every offline conversion integration needs the same five things.

| What you need | Detail |
|---|---|
| **1. An identifier** | GCLID, or hashed email/phone (Lesson 7.2) |
| **2. A conversion action in Google Ads** | Created as an Import type action |
| **3. A trigger** | The CRM stage change that fires the upload |
| **4. A value** | Real money, or a stage value from close rates |
| **5. A timestamp** | The conversion time, with time zone |

**If any one of these is missing, the integration will not work.** Check all five before blaming the platform.

---

## Step 0: Create the Conversion Action (All Platforms)

Do this first, in Google Ads.

1. **Goals → Conversions → New conversion action**
2. Select **Import**
3. Choose the source that matches your method:
   - **CRM, files or other data sources** → for GCLID uploads
   - Or the user-provided data option → for hashed email/phone
4. Name it **exactly** what you will send later. Names must match character for character.
5. Set category (e.g. Qualified lead, Purchase), value settings and counting
6. Set attribution window — long enough to cover your sales cycle
7. Set as **Primary** when you are ready for Smart Bidding to use it

**Recommended naming convention:**

```
CRM - Qualified Lead
CRM - Customer Won
CRM - Demo Booked
```

Simple, consistent, and easy to match in an integration screen.

---

## HubSpot

HubSpot has a native Google Ads integration, which makes this relatively straightforward.

### Setup

**Step 1: Connect the accounts.**
HubSpot → Settings → Integrations → **Connected Apps** → Google Ads → connect and authorise. You need admin access on both sides.

**Step 2: Enable auto-tracking.**
In the Google Ads integration settings, enable tracking. HubSpot will capture the GCLID on form submissions automatically when the HubSpot tracking code is on your site.

⚠️ **Check this actually works.** Submit a test form from a real ad click, then open the contact record and look for the GCLID property. Do not assume.

**Step 3: Map lifecycle stages to conversion actions.**
In the integration settings, choose which HubSpot events send conversions to Google Ads.

Typical mapping:

| HubSpot stage | Google Ads action | Value |
|---|---|---|
| Marketing Qualified Lead | `CRM - Qualified Lead` | Stage value |
| Sales Qualified Lead | `CRM - SQL` | Stage value |
| Deal: Closed Won | `CRM - Customer Won` | Deal amount |

**Step 4: Set the values.**
For deals, use the deal amount. For earlier stages, use the calculated stage value (Lesson 5.5).

**Step 5: Test with one record.**
Move a single test contact through the stages and confirm the conversion appears in Google Ads within 24–48 hours.

### HubSpot gotchas

- The **HubSpot tracking code must be on every page**, including the landing pages you built in Lesson 0.5
- **Non-HubSpot forms** will not capture the GCLID automatically. Add a hidden field manually.
- Deal amounts must be **populated**. An empty deal amount sends a zero-value conversion, which teaches Smart Bidding that customer is worthless.
- Check the currency matches your Google Ads account currency.

---

## Salesforce

Salesforce also has a native integration, with more configuration.

### Setup

**Step 1: Capture the GCLID into Salesforce.**

Add a custom field on Lead and Opportunity objects, commonly called `GCLID__c`.

Your web forms must populate this field. If you use Web-to-Lead, add a hidden input matching the field's API name.

**Step 2: Link Salesforce to Google Ads.**
Google Ads → Tools → **Data manager / Linked accounts** → Salesforce → authorise.

**Step 3: Map the stages.**
In Google Ads, define which Salesforce statuses or opportunity stages map to which conversion actions.

Typical mapping:

| Salesforce stage | Google Ads action | Value |
|---|---|---|
| Lead status: Qualified | `CRM - Qualified Lead` | Stage value |
| Opportunity: Proposal | `CRM - Proposal` | Stage value |
| Opportunity: Closed Won | `CRM - Customer Won` | Opportunity amount |

**Step 4: Confirm field-level access.**
The connected user must have read access to the GCLID field and the stage fields. Permission issues cause silent failures — the integration appears connected but nothing arrives.

**Step 5: Test.**

### Salesforce gotchas

- **Lead conversion breaks the chain.** When a Lead converts to a Contact/Opportunity in Salesforce, the GCLID must be **mapped across**. Configure this in the lead conversion field mapping, or you will lose every identifier at exactly the moment the lead becomes valuable.
- Sandbox and production are separate. Test in sandbox, then reconfigure for production.
- Currency handling in multi-currency orgs needs care.

---

## GoHighLevel

GoHighLevel is common among agencies and local service businesses. Integration is usually done via workflows.

### Setup

**Step 1: Capture the GCLID.**

Add a **custom field** on the contact record: `gclid`.

On your forms and funnels, add a hidden field with that name. GoHighLevel funnels can capture URL parameters into hidden fields — enable this in the form settings.

⚠️ **If you use GoHighLevel funnels, check the GCLID survives any redirect between pages.** This is a common failure point.

**Step 2: Connect Google Ads.**
GoHighLevel → Settings → Integrations → Google Ads. Some accounts have a direct conversion action integration available; check what your account offers.

**Step 3: Build the workflow.**

Create a workflow triggered by the stage change:

```
Trigger: Opportunity Status changed to "Won"
   ↓
Action: Send conversion to Google Ads
   (or: Webhook → Zapier/Make → Google Ads API)
   ↓
Fields: gclid, conversion name, conversion time, value
```

**Step 4: Handle the timestamp.** Make sure the conversion time is sent in the correct format with time zone.

**Step 5: Test with one opportunity.**

### GoHighLevel gotchas

- Pipeline stage names must match exactly what your workflow expects
- Multi-location agency accounts need the integration configured per sub-account
- If using webhooks, build error handling — a silently failed webhook loses that conversion permanently

---

## The No-Code Route: Zapier or Make

Works with almost any CRM, including ones with no native integration.

### The flow

```
CRM stage change (trigger)
   ↓
Zapier / Make
   ↓
Filter: only continue if GCLID exists and stage = target
   ↓
Format: date/time formatting, value cleanup
   ↓
Google Ads: Upload offline conversion
```

### Setup steps

1. Create the Zap or Scenario with your CRM as the trigger
2. Add a **filter** step — only proceed when the identifier exists and the stage matches
3. Add a **formatter** step for the date, into the format Google expects with the time zone
4. Add the Google Ads action, mapping every field
5. Test with real data
6. Turn on error notifications

### The advantages and limits

✅ Works with any CRM, no developer needed, quick to build
❌ Costs per task at volume, adds a dependency, needs monitoring

**Good for:** small to medium volume, or as a bridge while you build a proper integration.

⚠️ **Set up failure alerts.** A silently failed automation loses conversions you will never recover, and you will not notice for weeks.

---

## The Universal Field Mapping

Whatever route you take, these fields must be correct.

| Google Ads field | Format | Common mistake |
|---|---|---|
| **Google Click ID** | The raw GCLID string | Truncated, or URL-encoded |
| **Email** | Lowercase, trimmed | Mixed case, trailing spaces |
| **Phone** | E.164: `+923001234567` | Local format, spaces, brackets |
| **Conversion Name** | Exact match to Google Ads | Capitalisation differences |
| **Conversion Time** | `YYYY-MM-DD HH:MM:SS+TZ` | Missing time zone |
| **Conversion Value** | Number only | Currency symbols, commas |
| **Currency Code** | ISO code: `PKR`, `USD` | Symbols instead of codes |

**Print this table.** It resolves the most of integration failures.

---

## Testing Before You Trust It

Never assume an integration works because it says "connected".

### The test process

**Step 1.** Click one of your own live ads. Confirm the GCLID appears in the URL.

**Step 2.** Submit the form as a genuine lead. Use a real email you control.

**Step 3.** Open the CRM record. **Is the identifier stored?** This is where most failures are.

**Step 4.** Manually move that record to the trigger stage.

**Step 5.** Check the integration log — Zapier history, HubSpot sync log, or Google Ads uploads.

**Step 6.** Wait 24–48 hours. Check Google Ads → Conversions → your action.

**Step 7.** Confirm the conversion is **attributed to a campaign**, not sitting unattributed.

**Only after step 7 passes should you consider the integration live.**

---

## Troubleshooting Table

| Symptom | Likely cause | Fix |
|---|---|---|
| No conversions appearing at all | Conversion name mismatch | Check exact spelling and capitalisation |
| "Click not found" errors | GCLID expired, or outside the window | Upload sooner; check the 90-day limit |
| Conversions appear but unattributed | Identifier missing or malformed | Check step 3 of the test process |
| Zero values recorded | Value field empty in the CRM | Populate deal amounts before triggering |
| Duplicate conversions | Multiple triggers, or no deduplication | One trigger per stage; add an order ID |
| Some records work, most do not | Identifier only captured on some forms | Audit every form for hidden fields |
| Worked, then stopped | Website change, or auth token expired | Re-authorise; re-test the form capture |
| Time zone errors on upload | Missing or wrong offset | Use `+05:00` format clearly |
| Salesforce loses GCLID after conversion | Lead conversion field mapping missing | Map GCLID to Contact and Opportunity |

---

## Ongoing Monitoring

Offline conversion integrations break silently. Build these checks.

### Weekly
- Check the integration log for errors
- Confirm conversions are still arriving

### Monthly
- **Identifier capture rate:** what share of new CRM leads have a GCLID or email? Target above 80%.
- **Upload acceptance rate:** what share of attempted uploads succeeded? Target above 90%.
- **Value reconciliation:** does the total value uploaded match the business's actual revenue from advertising leads?

### Quarterly
- Re-run the full test process from scratch
- Recalculate stage values from fresh close-rate data (Lesson 5.5)

---

## 📖 Real-World Example: The Integration That Was "Working" for Five Months

Bilal inherited an account from another agency. The client, a US professional services firm, used HubSpot. The previous agency's handover notes said: *"Offline conversion tracking is set up and working."*

The Google Ads account showed a conversion action called `HubSpot - Closed Won`. It had recorded **14 conversions in five months**.

The client's actual closed deals in that period: **203**.

### The diagnosis

Bilal ran the test process.

**Step 1–2 passed.** He clicked an ad, the GCLID appeared, and he submitted a form.

**Step 3 failed.** He opened the HubSpot contact record. **No GCLID.**

**The cause:** the client used two form systems. HubSpot forms on their main site, and a separate booking tool on their highest-value landing page — the one receiving 71% of the ad budget.

The HubSpot integration captured the GCLID only on HubSpot forms. The booking tool captured nothing.

**Those 14 conversions were the small minority of leads that happened to come through a HubSpot form.**

For five months, Smart Bidding had been learning from a sample that excluded the most valuable 71% of traffic. Worse, the pattern was not random — the excluded page was for their premium service, so the AI had learned that premium service traffic did not convert.

### The fix

**Week 1: Capture.** He added a hidden `gclid` field to the booking tool and mapped it into HubSpot via the tool's webhook. Also added `gbraid` and `wbraid` (Lesson 2.6).

**Week 1: Backfill attempt.** He tried to recover historical data. **He could not.** The GCLIDs had never been captured; they did not exist anywhere. Five months of data, permanently lost.

**Week 2: Values.** Deal amounts were populated in HubSpot but were not flowing to Google. He corrected the field mapping so the conversion carried the real deal value.

**Week 2: Testing.** Full process, all seven steps. Passed.

**Week 3: Monitoring.** He built a weekly check: percentage of new leads with a GCLID.

### Results

| Metric | Month 0 | Month 4 |
|---|---|---|
| Leads with GCLID captured | 22% | **94%** |
| Conversions uploaded/month | 3 | **41** |
| Conversions attributed | 3 | 38 |
| Cost per closed customer | $1,840 | **$1,105** |
| Monthly spend | $31,000 | $31,400 |
| Closed customers/month | 17 | **28** |

**Same spend. 65% more customers.**

Once Smart Bidding could see the premium-service leads, it began bidding properly on that traffic — which it had spent five months learning to avoid.

### The lesson worth remembering

**"The integration is set up" is not the same as "the integration is working".**

The previous agency had really connected HubSpot to Google Ads. The connection existed. It simply did not cover the traffic that mattered.

**Never accept an integration as working without running the full seven-step test yourself.** And run it again every quarter, because website changes break these quietly.

---

## 📊 Mastery Score

**Level: Elite**

CRM integration work is unglamorous, fiddly and enormously valuable. It is also where most agencies quietly fail.

---

## 📌 Key Takeaways

- Every integration needs five things: identifier, conversion action, trigger, value, timestamp.
- The most common failure is the CRM not storing the identifier. Check the actual record, not the settings screen.
- Audit every form. One uncaptured form can exclude most of your budget from measurement.
- Field formatting causes most upload errors: time zone, phone format, and exact conversion name matching.
- "Connected" does not mean "working". Run the seven-step test process, and repeat it quarterly.

---

## ☑️ Self-Assessment

1. How many separate form or booking systems does the business use? Do all of them capture the identifier?
2. Open five recent CRM records. How many have a GCLID or email captured?
3. Are deal values populated before the conversion triggers?
4. Have you run the full seven-step test yourself, or trusted someone's word?
5. Do you have a weekly check on identifier capture rate?

---

## 🧠 Quiz

**1. What are the five universal what you need for offline conversion tracking?**
a) Budget, bids, keywords, ads, assets
b) Identifier, conversion action, trigger, value, timestamp
c) CRM, website, Google Ads, GTM, GA4
d) Email, phone, name, address, postcode

**2. Where do most offline conversion integrations fail?**
a) Google's matching
b) The CRM not storing the identifier
c) The bid strategy
d) The conversion window

**3. In Salesforce, what breaks the chain most often?**
a) Slow uploads
b) Lead conversion not mapping the GCLID across to Contact and Opportunity
c) Currency settings
d) API limits

**4. Your conversion name is "CRM - Customer Won" and you upload "CRM - customer won". What happens?**
a) It works fine
b) It fails — names must match exactly, including capitalisation
c) Google creates a new action
d) It uploads with zero value

**5. An agency says the integration is "set up and working". What should you do?**
a) Trust it
b) Run the full seven-step test yourself
c) Check the settings screen
d) Ask Google support

---

## 💪 Practical Exercise (45 minutes)

Audit one offline conversion integration.

1. List every form, booking tool and lead entry point on the site.
2. For each one, check whether it captures the identifier. Test at least two directly.
3. Open ten recent CRM records. Count how many have a usable identifier.
4. Check that values are populated at the trigger stage.
5. Run the seven-step test process end to end.
6. Write your findings, including the percentage of budget currently flowing to unmeasured entry points.

---

## 🎯 Expert Challenge

Build a complete offline measurement operations system.

- Map every lead entry point across every channel — web forms, phone, WhatsApp, chat, in-person, partner referrals — and design identifier capture for each. Some will need creative solutions, such as asking on the phone how they found you.
- Design the stage-to-value model with real close rates, and the quarterly recalculation process.
- Build the integration with proper error handling: what happens to a failed upload, how it is queued and retried, and who is alerted.
- Design the data quality dashboard tracking identifier capture rate, upload acceptance rate, match rate and value reconciliation, with thresholds and owners.
- Build the quarterly re-test process as a formal checklist, because website changes will break this silently at least once a year.
- Then calculate the cost of failure: estimate what one month of broken offline tracking costs this business in mis-optimised bidding. That number is the business case for the monitoring you just designed, and it is usually far larger than people expect.

---

## ✅ Quiz Answers

1 — **b**. Identifier, conversion action, trigger, value, timestamp.
2 — **b**. The CRM not storing the identifier.
3 — **b**. Lead conversion losing the GCLID at the critical moment.
4 — **b**. Exact match needed, capitalisation included.
5 — **b**. Test it yourself, end to end.

---

**Next lesson:** 7.5 — Consent Mode: Respect Privacy, Keep Measuring
