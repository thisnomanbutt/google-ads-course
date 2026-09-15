# Lesson 9.5 — Keep Tracking When the Checkout Is Elsewhere

*Phase 5 · Running Big Accounts and Clients — Module 9 · Managing Large, Complex Accounts*

---

## Quick Recap From Module 2

Your tracking works on one domain. This lesson covers what happens when the customer journey crosses domains — which breaks measurement silently and completely.

---

## 🎯 What You Will Learn

- Why crossing a domain destroys attribution
- How to configure cross-domain tracking correctly
- Multi-store and multi-country account structure
- How to handle third-party booking and checkout systems
- Testing cross-domain journeys properly

---

## The Problem

A cookie belongs to one domain. When a visitor moves from `yourshop.pk` to `checkout-provider.com`, the second site cannot read the first site's cookies.

**What breaks:**

```
Ad click → yourshop.pk (GCLID stored in cookie) → checkout-provider.com
                                                          ↓
                                            Cookie invisible. Session lost.
                                            Conversion appears as "Direct".
```

**Your conversion is recorded, but attributed to nobody.** Google Ads shows fewer conversions. Smart Bidding learns from a fraction of reality. Cost per conversion looks far worse than it is.

**Think of a relay race where the runners forget to pass the baton.** Both runners ran well. The race is still lost, because the connection between them failed.

---

## When This Happens

More often than people realise:

| Scenario | Example |
|---|---|
| Third-party checkout | Shopify Plus with a separate checkout domain, or a payment gateway |
| Booking systems | Clinics using Zocdoc, Calendly, or a practice management system |
| Separate country domains | `site.co.uk` → `site.com` |
| Subdomains with separate configuration | `shop.site.pk` and `www.site.pk` |
| Marketplace handoff | Your site → Daraz or Amazon listing |
| Lead forms on a separate platform | HubSpot or Typeform landing pages |
| Franchise sites | Corporate site → individual franchise site |

⚠️ **Check whether your checkout is on a different domain.** Many people do not know. Complete a purchase and watch the URL bar.

---

## The Fix: Cross-Domain Configuration

### How it works

Google's tags can pass the session identifier in the **URL** rather than relying on a cookie.

When someone clicks from Domain A to Domain B, the tag appends a linker parameter:

```
https://checkout-provider.com/pay?_gl=1*abc123*...
```

Domain B's tag reads that parameter and continues the same session.

**The baton is passed in the open, rather than left behind in a cookie.**

---

## Setup via GTM

### Prerequisites

- GTM installed on **both** domains
- The Google tag configured on both
- **Conversion Linker tag on both** (Lesson 2.4)

⚠️ **If GTM is not on the second domain, cross-domain tracking cannot work.** With a third-party checkout, check whether the provider allows you to install GTM or a custom tag. Some do not — see the workarounds below.

### Step 1: Configure the Google tag

In your **Google tag** settings, add the cross-domain configuration:

- **Configure domain linking**
- Add every domain in the journey:
  ```
  yourshop.pk
  checkout-provider.com
  ```

Do this on **both** domains, listing both.

### Step 2: Configure the Conversion Linker

The Conversion Linker tag has a setting for cross-domain linking. Enable it and list your domains.

### Step 3: Configure GA4

In GA4: Admin → Data streams → your stream → Configure tag settings → **Configure your domains**. Add every domain.

### Step 4: Check referral exclusions

⚠️ **This step is missed constantly.**

Without a referral exclusion, when a visitor returns from your checkout domain, GA4 treats it as a **new session from a referral source**. Your one purchase becomes two sessions, and the conversion is attributed to `checkout-provider.com` rather than to Google Ads.

In GA4: Admin → Data streams → Configure tag settings → **List unwanted referrals** → add your checkout domain.

### Step 5: Confirm the URL parameter survives

Some platforms strip URL parameters on redirect. If `_gl=` is removed, cross-domain tracking fails silently.

**Test this specifically.** It is the most common failure point.

---

## When You Cannot Install GTM on the Second Domain

This is common with third-party booking and payment systems.

### Option 1: The provider supports it natively

Many platforms have built-in Google Ads or GA4 integration. Check the provider's documentation first — this is the easiest route.

### Option 2: Pass the identifier in the URL yourself

Append the GCLID to the link when sending the user to the third-party system:

```
https://booking-provider.com/book?ref=GCLID_VALUE
```

Then retrieve it from the booking record and upload the conversion offline (Lesson 7.4).

**This is the most reliable workaround** and it works with almost any system that lets you pass a parameter and see it later.

### Option 3: Track the handoff as the conversion

Count "clicked through to booking" as your conversion, and use it as a proxy (Lesson 8.3), valued by its completion rate.

⚠️ **Less accurate, but far better than nothing.** Calculate the value properly: if 62% of handoffs complete the booking, value the handoff at 62% of a booking.

### Option 4: Server-side tracking

Lesson 7.3. Both domains send events to your own server container, which handles the session continuity.

**Best solution technically. Highest effort.**

---

## Multi-Store and Multi-Country Structure

Businesses operating several stores or countries face structural decisions.

### The account structure question

| Situation | Recommended structure |
|---|---|
| One business, multiple countries, same currency | **One account**, campaigns split by country |
| Multiple countries, different currencies | **Separate accounts per currency** (Lesson 2.1 — currency is permanent) |
| Separate legal entities | Separate accounts, one MCC |
| Franchise, separately owned | Separate accounts, each owned by the franchisee |
| Same business, multiple brand domains | Separate accounts if the brands are really separate |

⚠️ **Currency is the decider.** You cannot change it (Lesson 2.1). If a market operates in a different currency, that market needs its own account.

### The conversion tracking question

**With separate accounts, you need conversion tracking in each.**

Two approaches:

**A. Separate conversion actions per account.** Simple, isolated, each account manages itself.

**B. Cross-account conversion tracking.** Conversion actions defined at MCC level and shared across accounts.

**Cross-account tracking is better when:**
- The same website serves multiple accounts
- You want consistent conversion definitions
- You report at the group level

⚠️ **Do not run both.** Defining a conversion at both MCC and account level double counts it. Choose one approach and apply it consistently.

### The audience sharing question

Audiences (Lesson 6.7) can be shared across accounts under one MCC.

**Useful for:** excluding existing customers group-wide, and seeding lookalikes from the combined customer base.

**Set up:** MCC → Shared library → Audience manager.

---

## Multi-Store Feed Considerations

For retailers with several stores and shared inventory:

**Local inventory ads** need store-level stock data — a feed telling Google what is in stock at each physical location.

**The what you need:**
- A primary product feed (Lesson 6.1)
- A local inventory feed with store IDs and stock levels
- Verified business locations in Google Business Profile
- Frequent updates — daily at minimum, more often for fast-moving stock

⚠️ **Stock accuracy is critical.** Advertising a product as available at a store where it is not creates a poor customer experience and can trigger Merchant Center problems (Lesson 1.5).

---

## Testing Cross-Domain Tracking

This must be tested properly. It fails silently and invisibly.

### The test process

**Step 1.** Click a real ad. Confirm the GCLID is in the URL.

**Step 2.** Navigate to the point where you cross domains.

**Step 3.** **Check the URL bar immediately after crossing.** Is the `_gl=` parameter present?

- ✅ Present → linker is working
- ❌ Absent → linker is not configured, or the parameter was stripped

**Step 4.** Complete the conversion on the second domain.

**Step 5.** In GTM Preview on the second domain, confirm the conversion tag fires with correct values.

**Step 6.** In GA4 Realtime, confirm the session shows the original source, not "direct" or a referral from your own checkout domain.

**Step 7.** Wait 24–48 hours. Confirm the conversion appears in Google Ads, **attributed to the campaign.**

⚠️ **Step 3 and Step 6 are the ones that catch failures.** A conversion that fires correctly but is attributed to "Direct" looks fine in isolation and is completely useless for optimisation.

---

## 📖 Real-World Example: The 47% That Went Missing

A Lahore fashion retailer ran a Shopify store with a separate checkout domain. Monthly spend: PKR 620,000.

**Their reported figures:**
- Google Ads conversions: 412/month
- ROAS: 2.8x

**Their actual figures from Shopify:**
- Orders: 778/month
- Orders attributed to "Direct" in GA4: **367/month**

**47% of their orders were attributed to nobody.**

### The diagnosis

Bilal ran the cross-domain test process.

**Step 1:** ✅ GCLID present on the landing page.
**Step 3:** ❌ **After clicking "Checkout", the URL had no `_gl=` parameter.**

Cross-domain linking had never been configured. GTM was on the main store but not on the checkout domain, and the referral exclusion list was empty.

**What was happening:**

1. Customer clicks ad → lands on store → GCLID stored in a cookie on `store.pk`
2. Customer clicks checkout → moves to `checkout.pk` → **cookie invisible**
3. Purchase completes → conversion fires → **no GCLID available**
4. GA4 records a new session, source: referral from `store.pk`
5. Google Ads never learns the sale happened

The 412 conversions Google did see were the minority of customers who happened to complete on the same domain, or whose journey was matched some other way.

### The fix

**Week 1: Configuration.**
- GTM installed on the checkout domain (Shopify permitted this)
- Google tag domain linking configured on both, listing both domains
- Conversion Linker with cross-domain enabled on both
- GA4 domains configured
- **Referral exclusion added** for the checkout domain

**Week 1: Testing.** Full seven-step process. Passed.

**Week 2: Enhanced Conversions** added as a safety net (Lesson 7.1), to catch anything the linker still missed.

### Results at 8 weeks

| Metric | Before | After |
|---|---|---|
| Shopify orders | 778/month | 812/month |
| Google Ads conversions | 412 | **741** |
| Orders attributed to Direct | 367 | **44** |
| Reported ROAS | 2.8x | **5.1x** |
| Monthly spend | PKR 620,000 | PKR 620,000 |

**Reported ROAS nearly doubled in a week, with no change to the advertising whatsoever.**

### The second-order effect

As in Lesson 7.1, the measurement fix was only half the story.

Smart Bidding had been learning from 53% of the truth — and, crucially, from a **non-random** 53%. The missing conversions were far more than expected mobile users, whose journeys were more likely to break across domains.

The AI had concluded that mobile traffic converted poorly and had always reduced mobile bids.

Once it could see mobile conversions properly:

| | Week 0 | Week 16 |
|---|---|---|
| Mobile share of spend | 31% | 58% |
| Total orders | 778 | **1,104** |
| Monthly spend | PKR 620,000 | PKR 631,000 |
| **Real ROAS** | 5.3x | **7.4x** |

**Orders rose 42% on a flat budget**, because the bidding finally reflected reality.

### The uncomfortable question

The client asked how long this had been broken.

Bilal checked the GA4 historical data. **The Direct attribution spike began 19 months earlier** — when they had migrated to the separate checkout domain.

**Nineteen months of mis-optimised bidding.** Nobody had run a cross-domain test, because nobody had realised the checkout was on a different domain.

**The lesson:** on every account you inherit, complete a real purchase yourself and watch the URL bar. It takes five minutes and it finds problems that have been costing money for years.

---

## 📊 Mastery Score

**Level: Expert**

Cross-domain tracking failures are invisible, common, and enormously expensive. Finding one is often the single highest-value thing you can do on an inherited account.

---

## 📌 Key Takeaways

- Cookies belong to one domain. Crossing domains breaks attribution unless the session is passed in the URL.
- Configure domain linking on the Google tag, the Conversion Linker and GA4 — on both domains.
- Add the second domain to GA4's unwanted referrals list, or your own checkout becomes a traffic source.
- If you cannot install GTM on the second domain, pass the GCLID in the URL and upload the conversion offline.
- Test by completing a real purchase and watching for the `_gl=` parameter after the domain change.

---

## ☑️ Self-Assessment

1. Does the checkout or booking process cross a domain? Have you actually checked?
2. What share of conversions are attributed to "Direct" in GA4? Is it above 20%?
3. Is your checkout domain in the unwanted referrals list?
4. Have you completed a real purchase and watched the URL bar?
5. For multi-country operations, does each currency have its own account?

---

## 🧠 Quiz

**1. Why does crossing a domain break attribution?**
a) Google blocks it
b) Cookies belong to one domain and cannot be read by another
c) The ad stops working
d) It does not break anything

**2. What parameter shows cross-domain linking is working?**
a) gclid
b) _gl
c) utm_source
d) sessionid

**3. What happens if you do not add your checkout domain to unwanted referrals?**
a) Nothing
b) Your own checkout appears as a traffic source and steals the attribution
c) The conversion does not fire
d) The page will not load

**4. You cannot install GTM on a third-party booking system. What is the most reliable workaround?**
a) Give up
b) Pass the GCLID in the URL and upload the conversion offline
c) Use view-through conversions
d) Estimate the conversions

**5. Why did mobile spend rise from 31% to 58% after the fix?**
a) Mobile became cheaper
b) Mobile journeys were most affected by the broken tracking, so Smart Bidding had wrongly written them off
c) A seasonal change
d) The client requested it

---

## 💪 Practical Exercise (35 minutes)

Test cross-domain tracking on one account.

1. Complete a real purchase or booking. Watch the URL bar at every step.
2. Note every domain change in the journey.
3. Check whether the `_gl=` parameter appears after each domain change.
4. In GA4, check what share of conversions are attributed to Direct.
5. Check the unwanted referrals list. Is your own checkout domain in it?
6. Write your findings and the configuration changes needed.

---

## 🎯 Expert Challenge

Design a complete multi-domain, multi-market measurement structure.

- Map every domain in every customer journey, including payment providers, booking systems and marketplace handoffs. Most organisations have never drawn this and discover domains they had forgotten about.
- Design the linking configuration for each crossing, plus the fallback method where GTM cannot be installed.
- Build the account structure for multiple currencies and legal entities, with the conversion tracking approach — account-level or MCC-level — decided and documented.
- Design the audience sharing strategy across the MCC, including group-wide customer exclusions.
- Build the verification process: a quarterly test of every cross-domain journey, because platform migrations and provider changes break these silently.
- Then quantify the historical damage on one account: estimate how long any broken journey has existed, and the total cost in mis-optimised bidding. This number is usually large enough to fund the entire measurement programme on its own.

---

## ✅ Quiz Answers

1 — **b**. Cookies are domain-specific and cannot cross.
2 — **b**. The `_gl` linker parameter.
3 — **b**. Your own checkout becomes the attributed source.
4 — **b**. Pass the GCLID and upload offline.
5 — **b**. Mobile journeys broke most, so the AI had wrongly deprioritised them.

---

**Next lesson:** 9.6 — Bidding on Competitor Names: Is It Worth It?
