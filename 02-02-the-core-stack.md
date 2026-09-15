# Lesson 2.2 — Connect GA4, Search Console and Merchant Center

*Phase 1 · How Google Ads Works, and Setting It Up — Module 2 · Set Up Your Account and Tracking*

---

## Quick Recap From Lesson 2.1

Your account exists, with the right currency and timezone, in Expert Mode. Now we connect it to the other tools that make it powerful.

---

## 🎯 What You Will Learn

- What each Google tool actually does, in one line
- Why linking them multiplies what Google Ads can do
- The correct order to set them up
- The linking mistakes that quietly break reporting
- What to check after every link

---

## The Stack in One Picture

```
                    GOOGLE ADS
                    (buys traffic)
                          |
        ┌─────────────┬───┴────┬──────────────┐
        |             |        |              |
      GA4        SEARCH    MERCHANT      BUSINESS
  (behaviour)    CONSOLE    CENTER        PROFILE
                (organic)  (products)     (local)
```

Each tool answers a different question:

| Tool | The question it answers |
|---|---|
| **Google Ads** | What did I pay, and what did I get? |
| **GA4** | What did people do on my site? |
| **Search Console** | What am I ranking for organically, for free? |
| **Merchant Center** | What products do I sell, and at what price? |
| **Business Profile** | Where is my shop, and when is it open? |

**Think of a hospital.** Google Ads is the front door bringing patients in. GA4 is the record of what happened inside. Search Console shows who arrived without being invited. Merchant Center is the price list. Business Profile is the sign outside with the address and opening hours.

You can run a hospital with just a front door. But you will never know if anyone got better.

---

## GA4: What It Is Actually For

GA4 (Google Analytics 4) records what people do on your website: pages viewed, time spent, actions taken, and where they came from.

### What GA4 gives you that Google Ads cannot

- **Behaviour after the click** — did they read, or bounce in 3 seconds?
- **Cross-channel view** — how paid compares to organic, social and direct
- **Audiences for remarketing** — build lists based on real behaviour
- **Path analysis** — the journey across several visits

### The most important thing to understand about GA4

**GA4 and Google Ads will show different conversion numbers. This is normal.** Do not panic, and do not try to make them match exactly.

Why they differ:

| | Google Ads | GA4 |
|---|---|---|
| Credits conversion to | The date of the **click** | The date of the **conversion** |
| Attribution | Google Ads conversion model | GA4's own model, includes other channels |
| Counts | Conversions Google Ads can claim | All conversions from all sources |

A sale on Monday from a click on the previous Thursday shows in Ads on **Thursday** and in GA4 on **Monday**. Both are correct. They answer different questions.

**The professional rule: pick one source of truth for optimisation, and stick to it.** Usually that is Google Ads conversion tracking for bidding decisions, with GA4 for behaviour analysis.

### Should you import GA4 conversions into Google Ads?

**Usually no, for your primary conversion.** Use Google Ads' own conversion tracking as the primary, because:
- It is faster (GA4 imports have a delay)
- It supports Enhanced Conversions better (Lesson 7.1)
- It generally captures more conversions

**GA4 imports are useful for:** secondary and micro-conversions, and engagement signals you want to observe but not bid on.

⚠️ **The double counting trap:** if you have both a Google Ads tag and a GA4 imported conversion for the same action, and both are set as **Primary**, Smart Bidding counts it twice. Your reported conversions double, your reported cost per conversion halves, and your bidding goes wrong. Check this on every account you inherit.

---

## Search Console: The Free Intelligence Tool

Search Console shows what people search to find you **organically** — the free listings.

### Why a paid media buyer should care

1. **Free keyword research.** Search Console shows real queries your site already gets impressions for. This is honest data, not estimates.
2. **Find the gaps.** Keywords where you rank on page 3 organically but could win instantly with ads.
3. **Avoid the overlap.** Keywords where you already rank #1 organically may not need heavy ad spend — test it.
4. **Spot AI Overview impact.** Falling organic clicks with stable impressions often signals AI answers taking the traffic (Lesson 1.1).

### Linking it

Link Search Console to GA4, and to Google Ads where available. Then you can see paid and organic side by side for the same query. This is one of the most useful reports for a client conversation, and almost nobody builds it.

---

## Merchant Center Next: For Anyone Selling Products

Merchant Center holds your **product feed** — the file listing every product with title, description, price, image, availability and more.

### It powers

- Shopping ads
- Performance Max with products
- Free product listings in Google Search and Images
- Product data in some AI experiences

### The essentials

- **Feed accuracy is everything.** Price mismatch is the top suspension cause (Lesson 1.5).
- **Update frequency matters.** If prices change daily, your feed must update daily.
- **Titles are your keywords.** Shopping has no keywords. The product title does that job. `Brand + Product Type + Key Attribute + Size/Colour` is a strong pattern.
- **Custom labels** let you group products for bidding. This is where profit tiers live (Lesson 6.1).

**Link Merchant Center to Google Ads** before building any Shopping or PMax campaign. Without the link, the campaign cannot see your products.

---

## Google Business Profile: For Local Businesses

Business Profile is your free listing on Google Search and Maps: address, hours, photos, reviews.

### Why link it to Google Ads

- **Location assets** — your ads can show your address and a map pin
- **Call and direction tracking** — measure calls and route requests as conversions
- **Store visit conversions** — for larger businesses, measure people who visit after seeing an ad
- **Local campaigns and store goals** — covered in Lesson 9.3

### For Dr. Ayesha's clinic, this is not optional

A dental clinic ad without an address and a phone number is dramatically weaker than one with them. Local intent searches ("dentist near me") convert far better when the ad shows you are actually nearby.

**Also make sure:** the business name, address and phone number are **identical** across the website, Business Profile and Google Ads. Inconsistency hurts local performance and can trigger verification problems.

---

## The Correct Setup Order

Do it in this order. Each step depends on the one before.

**Step 1. Google Analytics 4**
Create the property. Install the tag. Confirm data is arriving in real time.

**Step 2. Google Tag Manager** (recommended)
Install GTM and move your tags into it. Full detail in Lesson 2.4.

**Step 3. Search Console**
Check the domain. Link to GA4.

**Step 4. Google Ads conversion tracking**
Set up your conversion actions properly (Lesson 2.3) and fire them via GTM.

**Step 5. Link Google Ads ↔ GA4**
In Google Ads: Tools → Data manager / Linked accounts → Google Analytics.
This enables GA4 audiences in Ads, and Ads cost data in GA4.

**Step 6. Link Google Ads ↔ Search Console**
Enables the paid and organic report.

**Step 7. Merchant Center** (products only)
Build the feed, fix errors, then link to Google Ads.

**Step 8. Business Profile** (local only)
Check the listing, then link to Google Ads for location assets.

**Step 9. Check everything**
Lesson 2.5 is the full validation process. Do not skip it.

---

## Linking Mistakes That Quietly Break Things

### 1. Auto-tagging turned off

Auto-tagging adds the **GCLID** to your landing page URLs. The GCLID is the unique click identifier that makes conversion tracking, Enhanced Conversions and offline uploads possible.

**It must be ON.** Check: Settings → Account settings → Auto-tagging.

If someone turned it off years ago because "it made URLs ugly", your entire measurement stack is weaker than it should be. Turn it on. Then check your site does not strip the parameter (Lesson 2.6).

### 2. Linking with the wrong permission level

You need admin-level access on both sides to create a link. A link made with limited access may partially fail, and the symptoms are confusing.

### 3. Not enabling the data sharing options

When linking Ads and GA4, there are checkboxes for enabling personalised advertising and auto-tagging. Missing these means audiences will not flow across.

### 4. Multiple GA4 properties linked to one Ads account

This creates duplicate audiences and confusing imports. One property, one link.

### 5. Forgetting to link after changing agency

When a new agency's MCC takes over, links sometimes break. Check every link during onboarding.

---

## 📖 Real-World Example: What Sana Discovered by Linking

Sana had Google Ads running well. She had GA4 installed but never looked at it, and she had never checked Search Console.

She spent one Saturday linking everything properly. Four discoveries came out of it.

**Discovery 1: 41% of her buyers visited more than once before purchasing.**
GA4 showed the real path. Most people clicked the ad, left, and came back days later through a direct visit or an organic search.

*What she did:* she built a remarketing campaign for people who viewed a product but did not buy. Cost per sale on that campaign: PKR 900 — her cheapest channel.

**Discovery 2: She was paying for a keyword she already ranked #1 for organically.**
Search Console showed "water filter karachi" bringing 340 free clicks a month at position 1. She was also spending PKR 22,000 a month on ads for the same query.

*What she did:* she did not simply pause it. She tested. She paused the ad for two weeks and measured **total** sales, not just Google Ads sales. Total sales fell by 12%, less than the ad campaign's share. So she kept a reduced budget on it. The test cost her nothing and saved PKR 9,000 a month.

This is the right way to handle overlap: **test, do not assume.**

**Discovery 3: Double counted conversions.**
She found the same purchase counted twice — once by the Google Ads tag, once by a GA4 import, both set to Primary. Her real cost per sale was **double** what her dashboard showed.

Her actual profitability was much worse than she believed. This is why Lesson 2.5 exists.

**Discovery 4: Her Merchant Center feed had 31 products with the wrong price.**
Her website ran a sale; her feed did not update. She was two weeks from a suspension.

**One Saturday of linking and checking. Four significant findings.** None of them needed skill — only the willingness to look.

---

## 📊 Mastery Score

**Level: Foundational**

Linking is simple work. Understanding what each tool is *for*, and what to check afterwards, is the professional part.

---

## 📌 Key Takeaways

- Each tool answers a different question. Google Ads alone shows only half the picture.
- GA4 and Google Ads conversion numbers will differ. This is normal, because they date conversions differently.
- Never set the same conversion as Primary in both Google Ads tracking and a GA4 import.
- Auto-tagging must be ON. It powers GCLID, Enhanced Conversions and offline uploads.
- Search Console reveals overlap between paid and organic. Test the overlap, do not assume it.

---

## ☑️ Self-Assessment

1. Is auto-tagging on in every account you manage? Have you checked this month?
2. Are any of your conversions counted twice?
3. Is Search Console linked, and have you ever used the paid and organic report?
4. Do your Merchant Center prices match your website right now?
5. Can you explain to a client why GA4 and Ads show different numbers?

---

## 🧠 Quiz

**1. Why do GA4 and Google Ads show different conversion counts?**
a) One of them is broken
b) They use different dates and different attribution models
c) GA4 only counts mobile
d) Google Ads counts twice

**2. What does auto-tagging enable?**
a) Automatic keyword creation
b) The GCLID, which powers conversion tracking and offline uploads
c) Automatic bidding
d) Automatic ad copy

**3. What is the risk of importing a GA4 conversion that is also tracked by the Google Ads tag?**
a) Nothing
b) Double counting, which corrupts Smart Bidding
c) Slower reporting
d) Higher CPCs

**4. Why should a paid media buyer use Search Console?**
a) To edit the website
b) To see real organic queries and find paid/organic overlap
c) To manage billing
d) To upload products

**5. You rank #1 organically for a keyword you also advertise on. What should you do?**
a) Pause the ad immediately
b) Double the bid
c) Run a controlled test and measure total sales, not just ad sales
d) Ignore it

---

## 💪 Practical Exercise (30 minutes)

Audit the stack on one account.

1. List which of the five tools are set up, and which are linked.
2. Check auto-tagging. Screenshot the setting.
3. Open your conversion actions. Check for any action tracked both by the Ads tag and a GA4 import.
4. Open Search Console. Find three keywords where you rank on page 2 or 3. These are ad opportunities.
5. Find one keyword where you rank #1 organically and also advertise. Write a two-week test plan for it.

---

## 🎯 Expert Challenge

Build a unified measurement map for one business.

- Draw every data source and where each one flows: website → GTM → GA4 → Ads → CRM → back to Ads.
- For each conversion action, document: which tool fires it, whether it is primary or secondary, its value, and its attribution window.
- Find every place where the same event could be counted twice, and write the control that prevents it.
- Build the paid and organic report in Search Console + Ads, and produce one page of findings: where paid supports organic, where it may be duplicating, and which three tests you would run.
- Finally, write the "source of truth" policy for this client: which number goes in the report, which number drives bidding, and how you will explain the difference when they inevitably ask.

---

## ✅ Quiz Answers

1 — **b**. Different dating and different models. Both can be correct.
2 — **b**. GCLID is the foundation of modern measurement.
3 — **b**. Double counting makes cost per conversion look half as expensive as it is.
4 — **b**. Real organic query data and overlap analysis.
5 — **c**. Test it. Assumptions in both directions are usually wrong.

---

**Next lesson:** 2.3 — Choose What Counts as a Conversion
