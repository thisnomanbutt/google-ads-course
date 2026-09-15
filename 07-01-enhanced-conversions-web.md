# Lesson 7.1 — Enhanced Conversions: Find the Sales You Are Missing

*Phase 4 · Tracking and Reading Your Results — Module 7 · Advanced Tracking That Sees Everything*

---

## Quick Recap From Module 2

You built conversion tracking and validated it. It works. But it is losing conversions you cannot see — and this module recovers them.

---

## 🎯 What You Will Learn

- Why standard conversion tracking loses 10–30% of conversions
- What Enhanced Conversions actually does, in plain words
- Step-by-step setup through GTM
- How hashing protects privacy
- Deduplication, and why it matters

---

## The Problem Enhanced Conversions Solves

Standard conversion tracking relies on **cookies**. When someone clicks your ad, a cookie stores the click. When they convert, the cookie connects the two.

**Cookies are disappearing.**

- Safari restricts them heavily
- Firefox blocks third-party cookies
- Chrome has tightened controls
- People decline cookie banners
- People clear cookies
- People switch devices — click on a phone, buy on a laptop

**The result: you are converting more customers than Google can see.**

Typical invisible loss: **10–30% of conversions.** In some markets and industries, more.

### Why this matters more than it sounds

Smart Bidding learns from conversions (Lesson 5.1). If 25% of your conversions are invisible:

- Your reported cost per conversion is 33% higher than reality
- Smart Bidding has 25% less data to learn from
- It always under-bids on traffic that actually converts
- You look less profitable than you are, so you scale back

**The damage compounds.** You are not just misreporting — you are bidding wrongly.

---

## What Enhanced Conversions Does

When someone converts, your website sends Google **hashed customer data** alongside the conversion:

- Email address
- Phone number
- Name and address

Google compares this hashed data against its own hashed data for signed-in users. Where it matches, Google can attribute the conversion to the ad click — **even when the cookie was lost.**

**Think of a lost luggage tag.** Normally the tag on your suitcase finds it. If the tag falls off, the airline can still find your bag from a description you provided at check-in. Enhanced Conversions is that description.

---

## Hashing: How Privacy Is Protected

This is the part that worries people. Here is what actually happens.

**Hashing** turns data into a fixed-length code that cannot be reversed.

```
customer@example.com  →  SHA-256  →  a1b2c3d4e5f6...(64 characters)
```

**Key properties:**
- The same input always produces the same output
- You cannot work backwards from the hash to the email
- Google never receives the actual email address

**Where hashing happens:** in the browser, before the data is sent. Google receives only the hash.

**Google's process:** it hashes its own user data the same way, then compares hashes. Matching hashes mean matching people, without either side revealing the underlying data.

### Your obligations

⚠️ This is not a technicality. Handle it properly.

1. **Your privacy policy must disclose** that you share hashed customer data with Google for conversion measurement.
2. **You must have a lawful basis** for the processing under whichever laws apply to your customers.
3. **Consent Mode must be respected** — do not send data for users who declined (Lesson 7.5).
4. **You must have collected the data legitimately.** Never use purchased or scraped data.

**As with Lesson 0.7 and 6.7: if you serve EU, UK or California customers, get professional advice before setting up.**

---

## Setup: The Three Methods

### Method 1: Google Tag / gtag.js
For sites with the Google tag installed directly. Simplest if you already use gtag.

### Method 2: Google Tag Manager
**The recommended method for most people.** More control, easier to debug, no developer needed for most steps.

### Method 3: Google Ads API
For advanced setups sending data server-side. Covered in Lesson 7.3.

We will build Method 2.

---

## Step-by-Step: Enhanced Conversions via GTM

### Prerequisites

- Conversion tracking already working and validated (Lesson 2.5)
- Access to Google Ads and GTM
- Customer data available on the confirmation page, ideally in the data layer

---

### Part 1: Turn it on in Google Ads

1. Go to **Goals → Conversions → Settings**
2. Find **Enhanced conversions**
3. Tick to turn it on
4. Agree to the terms — read them; they describe your data obligations
5. Choose **Google Tag Manager** as the setup method
6. Confirm the URL where the conversion happens

---

### Part 2: Get the customer data available

This is the part that needs planning.

**Best method — the data layer.** Ask your developer for this:

```javascript
dataLayer.push({
  event: 'purchase',
  transaction_id: 'ORD-4821',
  value: 5000,
  currency: 'PKR',
  enhanced_conversion_data: {
    email: 'customer@example.com',
    phone_number: '+923001234567',
    address: {
      first_name: 'Sana',
      last_name: 'Ahmed',
      street: '12 Main Road',
      city: 'Karachi',
      region: 'Sindh',
      postal_code: '75500',
      country: 'PK'
    }
  }
});
```

⚠️ **Send unhashed data to the data layer.** GTM hashes it before sending to Google. Do not hash it yourself unless you know exactly what you are doing — the format must match Google's specification exactly, and mismatched hashing simply fails silently.

**Alternative method — CSS selectors.** GTM can read values directly from form fields on the page. Easier to set up, but fragile: it breaks whenever the developer changes the page structure.

**Use the data layer where possible.** Use selectors only as a temporary measure.

---

### Part 3: Build the variables in GTM

Create Data Layer Variables for each field:

| Variable name | Data Layer Variable Name |
|---|---|
| `DLV - EC email` | `enhanced_conversion_data.email` |
| `DLV - EC phone` | `enhanced_conversion_data.phone_number` |
| `DLV - EC first name` | `enhanced_conversion_data.address.first_name` |
| `DLV - EC last name` | `enhanced_conversion_data.address.last_name` |
| `DLV - EC street` | `enhanced_conversion_data.address.street` |
| `DLV - EC city` | `enhanced_conversion_data.address.city` |
| `DLV - EC postcode` | `enhanced_conversion_data.address.postal_code` |
| `DLV - EC country` | `enhanced_conversion_data.address.country` |

---

### Part 4: Configure the conversion tag

1. Open your existing **Google Ads Conversion Tracking** tag
2. Tick **Include user-provided data from your website**
3. Choose **New Variable** → **User-Provided Data**
4. Select **Manual configuration**
5. Map each field to the variable you created
6. Save

**Minimum workable setup:** email alone works and is the highest match rate field. Add the rest for better coverage.

---

### Part 5: Test it

Following Lesson 2.5:

1. GTM **Preview** mode
2. Complete a real test conversion
3. Click the conversion tag in Tag Assistant
4. Check the **User-Provided Data** section — the fields should show as present
5. In the Network tab, confirm the conversion request includes user data parameters
6. Wait 24–48 hours, then check Google Ads → Conversions → your action → **Diagnostics**

**What you want to see in Diagnostics:** a status showing enhanced conversions are being received, with a match rate.

⚠️ **Do not expect to see the actual email in the request.** It should appear as a hash. If you see a plain email address, something is misconfigured — stop and fix it.

---

## Deduplication: The Critical Detail

Enhanced Conversions can cause **double counting** if the same conversion arrives twice — for example, once from the browser tag and once from a server-side or offline source.

### The solution: Transaction ID

From Lesson 2.4, always populate the **Transaction ID** field with a unique order identifier.

Google uses this to recognise duplicates:
- Conversion arrives with `ORD-4821` from the browser → counted
- Same conversion arrives with `ORD-4821` from the server → recognised as the same, not double counted

### The rules

1. **The Transaction ID must be identical** across every source that reports the same conversion.
2. **It must be really unique** per order. Do not use a timestamp; two orders can share a second.
3. **Set it up before** adding server-side or offline conversion sources.

⚠️ **Without a Transaction ID, adding server-side tracking to an existing browser setup will roughly double your reported conversions.** Your cost per conversion appears to halve, your bidding goes wrong, and it can take weeks to notice.

---

## Reading the Results

### What to check after 30 days

**1. Conversion volume.** Enhanced Conversions typically recovers extra conversions. A rise of 5–20% is common; more in markets with heavy cookie restriction.

**2. The Diagnostics tab.** Google Ads → Goals → Conversions → your action → Diagnostics. This shows:
- Whether enhanced conversions are being received
- Your match rate
- Any setup warnings

**3. Match rate.** This is the share of conversions where Google found a match.

| Match rate | Assessment |
|---|---|
| Above 60% | Good |
| 40–60% | Normal |
| 20–40% | Investigate data quality |
| Below 20% | Something is likely wrong |

**Low match rate causes:** poor data formatting, sending only rarely-matched fields, or a customer base with few signed-in Google users.

⚠️ **Do not expect 100%.** Not every customer is signed in to a Google account.

---

## 📖 Real-World Example: The 23% That Was Always There

Bilal's US e-commerce client had a persistent, frustrating discrepancy.

| | Their order system | Google Ads |
|---|---|---|
| Monthly orders | 1,204 | 927 |
| Gap | — | **277 orders (23%)** |

They had checked everything from Lesson 2.5. The Conversion Linker was present. The tags fired correctly. Test conversions worked every time.

**The tracking was not broken. It was doing everything it could with the cookies available.**

The gap was structural:
- Safari users on iPhone, where cookie lifetimes are short
- People who clicked on mobile and purchased on desktop days later
- People who declined the cookie banner
- People with long consideration periods whose cookies expired

### The setup

**Week 1.** Enabled Enhanced Conversions in Google Ads. Asked the developer for the data layer push with customer data. This took four days.

**Week 2.** Built the GTM variables and configured the tag. Tested thoroughly. Confirmed hashing was working — the Network tab showed hashes, not emails.

**Week 2 also:** checked the Transaction ID was populated on every order. It was, from the original Lesson 2.4 build.

**Week 3–6.** Waited and monitored.

### Results at 60 days

| | Before | After |
|---|---|---|
| Orders in their system | 1,204 | 1,231 |
| Conversions in Google Ads | 927 | **1,148** |
| Gap | 23% | **6.7%** |
| Match rate | — | 68% |
| Reported cost per conversion | $47.20 | **$38.10** |

**Google could now see 221 more conversions per month.** Those orders had always existed — they were simply invisible.

### The second-order effect, which mattered more

The reported cost per conversion dropped 19% on day one, purely from better measurement. But then something better happened over the following six weeks.

Smart Bidding now had 24% more conversion data to learn from. And critically, the newly visible conversions were **not random** — they were far more than expected Safari and iPhone users, and cross-device buyers.

Previously, Smart Bidding had learned that iPhone Safari traffic "did not convert" and had always reduced bids on it. That conclusion was wrong; the conversions were simply invisible.

Once it could see them, it began bidding properly on that traffic.

| | Day 0 | Day 120 |
|---|---|---|
| Conversions/month | 927 | 1,389 |
| Actual orders/month | 1,204 | 1,452 |
| Monthly spend | $43,700 | $44,100 |
| **Real cost per order** | **$36.30** | **$30.37** |

**Real orders rose 21% on a flat budget.**

Note the distinction carefully: the first jump (927 → 1,148) was **measurement** — those orders already existed. The second (1,204 → 1,452 real orders) was **genuine business growth**, caused by Smart Bidding finally bidding correctly on traffic it had wrongly written off.

**One recovered 23% of what was already happening. The other created 21% more.**

---

## 📊 Mastery Score

**Level: Advanced**

Enhanced Conversions is one of the highest-value technical setups available, and one of the least commonly done properly.

---

## 📌 Key Takeaways

- Standard cookie-based tracking loses 10–30% of conversions. This distorts both reporting and bidding.
- Enhanced Conversions sends hashed customer data so Google can match conversions when cookies fail.
- Hashing is one-way. Google never receives the actual email — but you still have privacy policy and consent obligations.
- Send unhashed data to the data layer and let GTM hash it. Manual hashing usually fails silently.
- Always populate the Transaction ID. Without it, adding a second data source double counts everything.

---

## ☑️ Self-Assessment

1. What is the gap between your business's actual orders and Google Ads conversions?
2. Is Enhanced Conversions enabled on your main conversion action?
3. Does your privacy policy disclose data sharing with Google for measurement?
4. Is the Transaction ID populated on every conversion?
5. What is your match rate in the Diagnostics tab?

---

## 🧠 Quiz

**1. Why does standard conversion tracking lose conversions?**
a) Google charges for them
b) Cookies are blocked, cleared, expire, or fail across devices
c) The tags are badly built
d) Conversions are delayed

**2. What does hashing do?**
a) Encrypts data so Google can decrypt it
b) Turns data into an irreversible code that can be compared but not read
c) Compresses the data
d) Deletes personal information

**3. Should you hash the data yourself before pushing to the data layer?**
a) Yes, always
b) No — send unhashed to the data layer and let GTM hash it
c) It makes no difference
d) Only for email

**4. What prevents double counting when you add a second conversion source?**
a) Frequency capping
b) A consistent, unique Transaction ID
c) The conversion window
d) Nothing

**5. Your match rate is 68%. What does this mean?**
a) Something is broken
b) A normal to good result — not every customer is signed in to Google
c) You should disable it
d) 32% of conversions are fake

---

## 💪 Practical Exercise (40 minutes)

Assess and plan an Enhanced Conversions setup.

1. Compare last month's Google Ads conversions to the business's actual order count. Calculate the gap percentage.
2. Check whether Enhanced Conversions is already enabled.
3. Check that the Transaction ID is populated on your main conversion action.
4. Check whether customer data is available in the data layer on the confirmation page.
5. Write the developer request for the enhanced conversion data layer push.
6. Check your privacy policy. Does it disclose data sharing for advertising measurement?

---

## 🎯 Expert Challenge

Design a full measurement recovery programme.

- Quantify the current measurement gap exactly, segmented by browser and device, so you can predict which segments Enhanced Conversions will recover most from.
- Build the setup across every conversion action, not just the main one, including edge cases: guest checkout, phone orders, and multi-step forms.
- Design the deduplication structure in advance, covering browser tag, server-side, and offline uploads — before you add the second and third sources.
- Build the privacy compliance documentation: the lawful basis, the privacy policy wording, the consent integration, and the deletion request process.
- Then model the second-order effect: find traffic segments where Smart Bidding may currently be under-bidding due to invisible conversions, and predict the volume recovery. Compare your prediction against reality at 120 days.
- Finally, build the ongoing match rate monitor, with an alert if it drops. A falling match rate usually means a website change broke the data layer, and it is otherwise invisible.

---

## ✅ Quiz Answers

1 — **b**. Cookie loss across browsers, devices and consent choices.
2 — **b**. A one-way code that allows comparison without revealing the data.
3 — **b**. Let GTM hash it. Manual hashing usually fails silently.
4 — **b**. A consistent unique Transaction ID across all sources.
5 — **b**. 68% is a good match rate.

---

**Next lesson:** 7.2 — Connect Your Leads to Real Sales
