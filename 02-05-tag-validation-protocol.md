# Lesson 2.5 — Check That Your Tracking Really Works

*Phase 1 · How Google Ads Works, and Setting It Up — Module 2 · Set Up Your Account and Tracking*

---

## Quick Recap From Lesson 2.4

You built your tags in GTM. Now we prove they work. Building tracking is half the job. Proving it is the other half.

---

## 🎯 What You Will Learn

- The three tools every professional uses to validate tracking
- A repeatable 8-step validation process
- How to read the Network tab without being a developer
- The monthly tracking health check
- How to catch silent tracking failures before they cost you a month

---

## Why This Lesson Exists

Tracking breaks. Constantly.

- A developer updates the website theme
- A plugin updates and changes the thank-you page URL
- Someone edits the GTM container and publishes a broken version
- A consent banner update blocks tags
- A checkout provider changes their confirmation flow

**And here is the problem: nothing announces the failure.** No email. No warning. Your conversions just quietly drop, and by the time you notice, Smart Bidding has been learning from bad data for three weeks.

**Think of a smoke alarm with a dead battery.** The house looks completely normal. Everything seems fine. You only discover the problem at the worst possible moment. Testing is how you check the battery.

---

## The Three Tools

### 1. Google Tag Assistant (GTM Preview mode)

**What it shows:** which tags fired, which did not, and what data they carried.

**When to use:** during every build, and after every change.

**How to open:** in GTM, click **Preview**, enter your URL, and a debug window opens alongside your site.

### 2. GA4 DebugView

**What it shows:** events arriving in GA4 in real time, with all their parameters.

**When to use:** to confirm that data actually reached Google, not just that a tag fired.

**How to open:** GA4 → Admin → DebugView. It shows your session when GTM Preview is active.

### 3. Chrome DevTools — Network tab

**What it shows:** the actual requests your browser sends to Google. This is the final proof.

**When to use:** when the first two tools disagree, or when something works in preview but not in real life.

**How to open:** Right-click the page → Inspect → **Network** tab.

---

## Reading the Network Tab (No Coding Needed)

This looks scary. It is actually simple. Here is exactly what to do.

**Step 1.** Open DevTools → Network tab.

**Step 2.** In the filter box, type one of these:
- `google-analytics` or `/g/collect` → for GA4 events
- `googleads` or `/pagead/conversion` → for Google Ads conversions
- `doubleclick` → for remarketing tags

**Step 3.** Complete the action you want to test (make a purchase, submit a form).

**Step 4.** Look for new rows appearing. Each row is one request sent to Google.

**Step 5.** Click a row, then look at the **Payload** or **Query String Parameters** section.

**What you are looking for:**

| Parameter | What it means | What to check |
|---|---|---|
| `en` | Event name | Is it the event you expected? |
| `value` or `vl` | Conversion value | Is it the right number? Not zero, not `undefined` |
| `cu` | Currency | Correct currency code? |
| `tid` / `label` | Which conversion action | Matches the one you built? |
| `gclid` | The click ID | Present when arriving from an ad? |
| Status `200` | The request succeeded | Not `4xx` or `blocked` |

If you see the request, with the right values, and status 200 — **your tracking works.** That is proof, not hope.

---

## The 8-Step Validation Process

Run this after every tracking build, and after any website change.

### Step 1: Preview mode check
Open GTM Preview. Load the site. Confirm the **Conversion Linker** and **Google Tag** fire on page load.

### Step 2: Complete a real conversion
Make an actual test purchase or submit an actual form. Do not skip this by loading the thank-you page directly — that tests nothing, because it bypasses the real flow.

### Step 3: Confirm the tag fired
In Tag Assistant, find your conversion tag under the correct event. It must say **Fired**, not "Not fired".

### Step 4: Check the values
Click the tag. Inspect every field:
- Conversion value — correct number?
- Currency — correct code?
- Transaction ID — populated, not empty?
- No field showing `undefined`

### Step 5: Confirm in the Network tab
Filter for `/pagead/conversion`. Confirm the request exists with status 200, and the value matches.

### Step 6: Check GA4 DebugView
Confirm the same event arrived in GA4 with the same parameters.

### Step 7: Wait and check in Google Ads
Conversions take time to appear — usually a few hours, sometimes up to 24. Come back the next day and confirm the test conversion appears in **Goals → Conversions**, with the right value.

### Step 8: Test from a real ad click
This is the step almost everyone skips, and it matters most.

1. Search for your own ad on Google (or use a test campaign)
2. **Click the actual ad** — do not type the URL
3. Confirm the GCLID appears in the URL bar
4. Complete a conversion
5. Confirm it registers

Why this matters: some sites strip URL parameters on redirect, breaking the GCLID. That failure is invisible in every other test. Only a real ad click reveals it.

---

## Common Failures and What They Mean

| Symptom | Likely cause | Fix |
|---|---|---|
| Tag shows "Not fired" | Trigger condition never met | Check the event name spelling exactly |
| Value shows `undefined` | Data layer variable name wrong or event fires before data is available | Check the exact dataLayer key name |
| Value is 0 | Website is not passing the value | Developer needs to populate it |
| Works in preview, not live | Container not published | Publish, then check version history |
| Conversions counted twice | Hardcoded tag plus GTM tag, or missing Transaction ID | Remove the duplicate; add Transaction ID |
| GCLID missing after ad click | Site strips URL parameters, or auto-tagging is off | Check auto-tagging; check redirects |
| Conversions dropped suddenly | Consent banner change, or website update | Test the full flow again from step 1 |
| GA4 sees it, Ads does not | Ads conversion tag not firing, or wrong label | Check the Network tab for the Ads request specifically |
| Numbers differ from CRM | Missing Conversion Linker, or attribution window | Lesson 2.4, plus check windows |

---

## Consent Mode: The Modern Complication

If your site shows a cookie banner (needed in the EU/UK, and increasingly elsewhere), your tags may be blocked until the user agrees.

**What to test:**

1. Load the site in an incognito window
2. **Decline** the cookie banner. Check what fires.
3. Reload, **accept** the banner. Check what fires.
4. Compare. Understand exactly what you lose when someone declines.

If tags fire identically in both cases, your consent setup is probably not working — which is a compliance problem, not a tracking win.

Consent Mode v2 and behavioural modelling are covered fully in Lesson 7.5.

---

## The Monthly Tracking Health Check

Put this in your calendar. 20 minutes, once a month, per account.

**1. Compare Google Ads conversions to business reality.**
Ask the business: how many actual sales or customers last month? Compare to Google Ads. A gap over 20% needs investigating.

**2. Check for conversion volume anomalies.**
Look at daily conversions over 90 days. Any sudden step down usually means something broke on that date.

**3. Check the Conversion Linker is still present.**
Container edits happen. Confirm it is still there and still firing on All Pages.

**4. Complete one real test conversion.**
Every month. Yes, every month. It takes five minutes.

**5. Check for disapproved or missing tags.**
Google Ads → Goals → Conversions. Look for status warnings like "No recent conversions" or "Tag inactive".

**6. Confirm values are still correct.**
Prices change. Margins change. Currency changes. Check the values arriving are still the right ones.

---

## Setting Up an Early Warning

You can do better than monthly checks. Two options:

**Simple:** create a Google Ads automated rule that emails you if conversions in the last 3 days fall below a threshold you set. This takes ten minutes and catches most catastrophic failures.

**Advanced:** an anomaly detection script (Lesson 11.2) that checks daily conversion counts against a rolling average and alerts you when something is out of range.

Either is better than discovering the problem in a monthly report.

---

## 📖 Real-World Example: Three Weeks of Blindness

Sana's store ran well for months. Then her developer updated the website theme on a Tuesday.

The update changed the order confirmation flow. The old page pushed a `purchase` event to the data layer. The new theme pushed an event called `order_complete` instead.

**Nothing warned anybody.**

Here is what happened over the next three weeks:

**Week 1.** Conversions in Google Ads dropped from about 22 per day to 4 per day. The 4 came from a secondary tag that still worked. Sana noticed the drop but assumed it was seasonal — Ramadan had just ended and she expected a slowdown.

**Week 2.** Smart Bidding, seeing far fewer conversions, concluded the traffic had become much worse. It reduced bids sharply. Her impression share fell from 62% to 24%. Real sales — the ones in her own order system — began to really fall, because her ads were barely showing.

**Week 3.** She finally checked her own order database against Google Ads.

| | Her order system | Google Ads |
|---|---|---|
| Week 1 orders | 154 | 31 |
| Week 2 orders | 141 | 26 |
| Week 3 orders | 98 | 19 |

Week 3 was really lower — because Smart Bidding had throttled her account based on false information.

**The cost of three weeks:**
- Roughly 60 lost orders in week 3 alone
- About PKR 156,000 in lost margin
- Two weeks of relearning after the fix
- Smart Bidding had to rebuild its model from scratch

**The fix took nine minutes.** She updated the GTM trigger from `purchase` to `order_complete`, tested it properly using the 8-step process, and published.

**What she does now:**
1. A monthly test conversion, in her calendar, non-negotiable
2. An automated rule emailing her if daily conversions drop below 10
3. A standing agreement with her developer: *"Tell me before any theme or checkout change."*

That third one is free and it prevents most of these failures entirely.

---

## 📊 Mastery Score

**Level: Intermediate**

This lesson has no clever strategy. It is discipline. Discipline is what separates a professional from someone who is lucky.

---

## 📌 Key Takeaways

- Tracking breaks silently. Nothing tells you. Only testing reveals it.
- Use all three tools: Tag Assistant for firing, DebugView for arrival, Network tab for proof.
- Always test by clicking a real ad, not by typing the URL. This catches GCLID stripping.
- Run a monthly health check comparing Google Ads conversions to the business's real numbers.
- Set up an automated alert so a catastrophic failure reaches you in days, not weeks.

---

## ☑️ Self-Assessment

1. When did you last complete a real test conversion on your main account?
2. Can you open the Network tab and find a conversion request?
3. Do you have any automated alert for conversion drops?
4. Do you know what happens to your tags when someone declines the cookie banner?
5. Does your developer tell you before making website changes?

---

## 🧠 Quiz

**1. Why should you test by clicking a real ad rather than typing the URL?**
a) It is faster
b) It reveals whether the GCLID survives redirects and is captured
c) Google needs it
d) It does not matter

**2. Your conversion value shows `undefined` in Tag Assistant. What is the likely cause?**
a) Google Ads is down
b) The data layer variable name does not match, or the value is not available yet
c) The budget is too low
d) The conversion window expired

**3. Everything works in GTM Preview but nothing tracks on the live site. What should you check first?**
a) The bid strategy
b) Whether the container was published
c) The landing page speed
d) The keyword match types

**4. What does a status 200 in the Network tab tell you?**
a) 200 conversions were recorded
b) The request to Google succeeded
c) The page took 200ms to load
d) There are 200 tags firing

**5. How often should you run a tracking health check?**
a) Once, at setup
b) Monthly
c) Yearly
d) Only when something looks wrong

---

## 💪 Practical Exercise (30 minutes)

Run the full 8-step process on one live account.

1. Open GTM Preview and load the site.
2. Complete a real conversion, following the actual user flow.
3. Screenshot the Tag Assistant result showing the tag fired with correct values.
4. Open the Network tab and find the conversion request. Screenshot the payload.
5. Check GA4 DebugView for the same event.
6. Tomorrow, confirm the conversion appears in Google Ads with the right value.
7. Write up any failure you found, with the fix.

---

## 🎯 Expert Challenge

Build a tracking assurance system for a portfolio of accounts.

- Design a standard validation document that must be completed and signed off before any account goes live, with screenshots as evidence.
- Build a monthly reconciliation process comparing Google Ads conversions against the client's own system, with an agreed acceptable variance and an escalation step when it is exceeded.
- Create the alerting layer: automated rules for volume drops, plus a script-based anomaly detector for more small changes.
- Write the change-management agreement you will ask every client's developer to sign: what they must tell you about, and how much notice they give.
- Then run a deliberate failure drill. Break one tag on a test site, and time how long your system takes to detect it. If the answer is longer than 72 hours, your system is not good enough yet.

---

## ✅ Quiz Answers

1 — **b**. Only a real ad click proves the GCLID survives the journey.
2 — **b**. Variable name mismatch, or timing — the value is not there yet.
3 — **b**. Unpublished containers are the most common cause of this exact symptom.
4 — **b**. The request reached Google successfully.
5 — **b**. Monthly, at minimum, with automated alerts in between.

---

**Next lesson:** 2.6 — Save the Click ID So You Can Use It Later
