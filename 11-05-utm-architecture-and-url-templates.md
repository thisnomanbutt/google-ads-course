# Lesson 11.5 — Tag Your Links So You Can Track Everything

*Phase 6 · Automation and Working With Data — Module 11 · Save Time With Scripts and Automation*

---

## Quick Recap From Lesson 7.6

You built a BigQuery pipeline. This lesson is about the tagging layer that makes the data in it actually joinable — and it is where most data projects quietly fail.

---

## 🎯 What You Will Learn

- Why auto-tagging and UTMs are not the same thing
- The ValueTrack parameters worth knowing
- How to design a UTM structure that scales
- Tracking templates and custom parameters
- The mistakes that break tracking silently

---

## Auto-Tagging vs UTMs

These do different jobs. You need both, and people conflate them constantly.

| | Auto-tagging (GCLID) | UTM parameters |
|---|---|---|
| Added by | Google, automatically | You, manually or via template |
| What it carries | A single click identifier | Descriptive labels you choose |
| Read by | Google Ads, GA4, your CRM | GA4, other analytics, your CRM |
| Powers | Conversion tracking, offline uploads, Enhanced Conversions | Reporting, segmentation, cross-channel analysis |
| Needed for | Everything in Phase 4 | Clean cross-channel reporting |

### The rule

**Auto-tagging must always be ON** (Lesson 2.2). Without the GCLID, you lose conversion tracking, offline conversion uploads and Enhanced Conversions.

**UTMs are extra.** They give you readable labels for reporting, especially when comparing Google Ads against Meta, TikTok and email in one place.

⚠️ **Never turn auto-tagging off to "keep URLs clean".** This is the single most damaging piece of bad advice in this area. You would be trading your entire measurement stack for tidier URLs.

---

## ValueTrack Parameters

ValueTrack parameters are placeholders Google fills in at click time. You put `{keyword}` in your URL and Google replaces it with the actual keyword.

### The ones worth knowing

| Parameter | Returns | Use for |
|---|---|---|
| `{campaignid}` | Numeric campaign ID | Reliable joining |
| `{adgroupid}` | Numeric ad group ID | Reliable joining |
| `{creative}` | Numeric ad ID | Creative analysis |
| `{keyword}` | The keyword that matched | Keyword-level reporting |
| `{matchtype}` | `e`, `p`, or `b` | Match type analysis |
| `{network}` | `g` (search), `s` (partner), `d` (display) | Network performance |
| `{device}` | `m`, `t`, or `c` | Device analysis |
| `{placement}` | The site the ad appeared on | Display placement analysis |
| `{loc_physical_ms}` | Location ID where the user was | Geographic analysis |
| `{targetid}` | The targeting criterion ID | Advanced joining |
| `{gclid}` | The click identifier | Passing to your CRM |
| `{lpurl}` | The final URL | Needed in tracking templates |

### Names vs IDs — an important choice

**Use IDs, not names**, for anything you will join on later.

```
❌ utm_campaign={campaignname}   -- breaks when you rename the campaign
✅ utm_campaign={campaignid}     -- stable forever
```

⚠️ **Campaign names change.** Someone renames a campaign and every historical report using the name splits into two. IDs never change.

**The best of both:** use the ID for joining and keep a lookup table mapping IDs to names, updated from the API or a script.

---

## Designing a UTM Structure

The goal: consistent, readable, joinable labels across every channel.

### The five standard parameters

| Parameter | Purpose | Google Ads value |
|---|---|---|
| `utm_source` | Where the traffic came from | `google` |
| `utm_medium` | The type of traffic | `cpc` |
| `utm_campaign` | Which campaign | `{campaignid}` |
| `utm_content` | Which creative | `{creative}` |
| `utm_term` | Which keyword | `{keyword}` |

### The rules that make it work

**1. Lowercase everything, always.**
`Google` and `google` are two different sources in most analytics tools. This single mistake splits your reporting.

**2. One separator, forever.**
Choose hyphens or underscores. Never mix.

**3. Standardise medium across all channels.**

| Channel | utm_source | utm_medium |
|---|---|---|
| Google Ads Search | `google` | `cpc` |
| Google Ads Display | `google` | `display` |
| Google Ads Video | `google` | `video` |
| Meta Ads | `facebook` | `paid-social` |
| TikTok Ads | `tiktok` | `paid-social` |
| Email newsletter | `newsletter` | `email` |
| Organic social | `facebook` | `social` |

**Consistency across channels is the whole point.** If Google Ads uses `cpc` and Meta uses `paid_social` and TikTok uses `Paid-Social`, your cross-channel report is unusable.

**4. Document it.**
One page, shared with everyone who creates a link. Without documentation, someone will use `utm_medium=ppc` and break the pattern within a month.

**5. Never use UTMs on internal links.**
Tagging a link from your own homepage to your own product page starts a new session and destroys the original attribution.

---

## Tracking Templates

A **tracking template** applies a URL structure to many ads or keywords at once, without editing each one.

### The structure

```
{lpurl}?utm_source=google&utm_medium=cpc&utm_campaign={campaignid}&utm_content={creative}&utm_term={keyword}&matchtype={matchtype}&device={device}
```

**`{lpurl}`** is needed. It inserts the actual final URL.

### Where to set it

| Level | Applies to | When to use |
|---|---|---|
| **Account** | Everything | The standard approach — set once |
| Campaign | That campaign | When a campaign needs different tracking |
| Ad group | That ad group | Rarely needed |
| Ad / keyword | That item | Almost never |

**Set it at account level.** One template, applied everywhere, changed in one place.

### Testing a tracking template

⚠️ **A malformed tracking template breaks every ad it applies to.** Test it before saving.

**In Google Ads:** when editing the tracking template, use the **Test** button. It shows the resulting URL.

**Check for:**
- Does the URL load correctly?
- Are the parameters present and correctly formatted?
- Does an existing `?` in your final URL cause a double question mark?

⚠️ **The double question mark problem.** If your final URL already contains a query string (`site.pk/page?colour=blue`), then `{lpurl}?utm_source=...` produces two question marks and breaks.

**The fix:** use `{lpurl}` with the parameters correctly appended, and test with a URL that already has parameters. Google handles most of this automatically, but always check with a real example.

---

## Custom Parameters

Custom parameters let you define your own values, set at campaign, ad group, ad or keyword level.

### The format

Define: `{_margin}` = `high`
Use: `...&margin={_margin}`

### Really useful custom parameters

| Parameter | Values | Use |
|---|---|---|
| `{_tier}` | `high`, `mid`, `low` | Profit tier (Lesson 6.1) |
| `{_client}` | Client code | MCC-wide reporting |
| `{_test}` | Test identifier | Experiment tracking (Lesson 13.1) |
| `{_service}` | Service line | Business unit reporting |
| `{_region}` | Region code | Geographic rollup |

### Why they matter for BigQuery

From Lesson 7.6: your BigQuery analysis is only as good as the dimensions available to join on.

**A custom parameter carrying the profit tier means you can answer, in one query:** *"What is our true profit by margin tier, by month, across every campaign and channel?"*

Without it, you would need a lookup table mapping every campaign to a tier, maintained by hand.

⚠️ **Custom parameters have limits** on the number allowed per level and the total URL length. Use them for dimensions that really cannot be derived another way.

---

## The Complete Structure

Here is how it all fits together.

```
1. AUTO-TAGGING ON
   Google appends the GCLID automatically
        ↓
2. ACCOUNT-LEVEL TRACKING TEMPLATE
   {lpurl}?utm_source=google&utm_medium=cpc
   &utm_campaign={campaignid}&utm_content={creative}
   &utm_term={keyword}&tier={_tier}&device={device}
        ↓
3. CUSTOM PARAMETERS set per campaign
   {_tier} = high / mid / low
        ↓
4. LANDING PAGE
   GTM captures the GCLID into a first-party cookie (Lesson 2.6)
   UTMs are read by GA4 automatically
        ↓
5. FORM SUBMISSION
   Hidden fields carry GCLID + UTMs into the CRM (Lesson 7.2)
        ↓
6. CRM
   Stores GCLID, UTMs, and the eventual outcome
        ↓
7. BIGQUERY
   Joins Google Ads cost (by campaign ID) to CRM outcomes
   (by GCLID) to order data (by order ID)
        ↓
8. ANALYSIS
   True profit by campaign, by tier, by month, by cohort
```

**Every step depends on the tagging being right.** This is why an unglamorous lesson about URL parameters sits in the elite phase.

---

## The Mistakes That Break Everything

### Mistake 1: Auto-tagging turned off
Destroys conversion tracking, offline uploads and Enhanced Conversions. **Check this on every account you inherit** (Lesson 2.2).

### Mistake 2: Inconsistent capitalisation
`Google` and `google` become two sources. Split reporting, forever.

### Mistake 3: Using names instead of IDs
Someone renames a campaign; your historical data splits in two.

### Mistake 4: The site strips URL parameters
Some platforms remove unknown parameters on redirect. **Test by clicking a real ad and checking the URL** (Lesson 2.5).

### Mistake 5: UTMs on internal links
Restarts the session and overwrites the original source. Common with email-to-site links and internal banners.

### Mistake 6: Different UTM conventions per channel
Makes cross-channel reporting impossible. This is the most common failure in multi-channel businesses.

### Mistake 7: Untested tracking template changes
One malformed template can break every ad in the account. **Always test.**

### Mistake 8: No documentation
Six months later nobody knows why some campaigns use one format and others use another.

---

## 📖 Real-World Example: The Report That Could Not Be Built

Sana's business had grown to four channels: Google Ads, Meta, TikTok and email. Combined spend, roughly PKR 1,400,000 a month.

Her accountant asked a straightforward question: *"What is our true blended cost per customer, and which channel is actually best?"*

**Nobody could produce the answer.**

### Why it was impossible

Each channel had been set up by a different person at a different time. Bilal audited the tagging.

| Channel | utm_source | utm_medium | Problem |
|---|---|---|---|
| Google Ads | `google` | `cpc` | Campaign name used, and names had changed twice |
| Meta | `Facebook` | `Paid_Social` | Capitalisation, and underscore |
| Meta (a second setup) | `facebook` | `paid-social` | Two conventions within one channel |
| TikTok | `tiktok` | `cpc` | Same medium as Google — indistinguishable |
| Email | *(none)* | *(none)* | Untagged entirely; appeared as Direct |

**The result in GA4:** seven "sources" for four channels, email invisible, TikTok and Google merged, and Google Ads campaign data split across renamed campaigns.

**The question really could not be answered** without weeks of manual reconstruction.

### The rebuild

**Week 1: Design the standard.**

He wrote a one-page document. Every channel, every parameter, exact values, all lowercase, hyphens only.

| Channel | source | medium |
|---|---|---|
| Google Ads Search | `google` | `cpc` |
| Google Ads Shopping | `google` | `shopping` |
| Google Ads PMax | `google` | `pmax` |
| Google Ads Demand Gen | `google` | `demand-gen` |
| Meta | `facebook` | `paid-social` |
| TikTok | `tiktok` | `paid-social` |
| Email | `klaviyo` | `email` |
| Organic social | `facebook` | `social` |

**Week 1: Google Ads setup.**

One account-level tracking template:

```
{lpurl}?utm_source=google&utm_medium={_channel}&utm_campaign={campaignid}
&utm_content={creative}&utm_term={keyword}&tier={_tier}&device={device}
&matchtype={matchtype}
```

With custom parameters set per campaign:
- `{_channel}` = `cpc`, `shopping`, `pmax` or `demand-gen`
- `{_tier}` = `high`, `mid` or `low` (matching the Lesson 6.1 profit tiers)

**Note the use of `{campaignid}`, not the campaign name.** Names could change freely from then on without breaking anything.

**Week 2: Other channels.** Meta, TikTok and email all rebuilt to the standard. Email was tagged for the first time.

**Week 2: The lookup table.** A daily script exported campaign IDs and names to a Google Sheet, so reports could show readable names while joining on stable IDs.

**Week 3: BigQuery.** With consistent tagging, the join finally worked:

- Google Ads cost data, joined on campaign ID
- GA4 session data, joined on UTM parameters
- Order data, joined on the GCLID captured at checkout
- Margin data from her cost sheet, joined on product ID

### What the answer turned out to be

Three weeks after the question was asked, the report existed.

| Channel | Spend | Customers | CAC | 12-month margin/customer | **True LTV:CAC** |
|---|---|---|---|---|---|
| Google Search (high tier) | PKR 312,000 | 214 | 1,458 | 9,140 | **6.3** |
| Google Shopping | PKR 401,000 | 288 | 1,392 | 6,120 | **4.4** |
| Google PMax | PKR 244,000 | 152 | 1,605 | 5,880 | **3.7** |
| Meta | PKR 288,000 | 121 | 2,380 | 8,940 | **3.8** |
| TikTok | PKR 94,000 | 31 | 3,032 | 11,210 | **3.7** |
| Email | PKR 61,000 | 189 | 323 | 7,440 | **23.0** |

**Two findings changed the budget completely.**

**1. Email was by far the best channel and had been invisible.** Because it was untagged, every email-driven sale had been attributed to Direct. It had been generating 189 customers a month at PKR 323 each, and nobody had known.

**2. TikTok looked poor on CAC but produced the highest-value customers.** Same pattern as Demand Gen in Lesson 7.6 — discovery channels bring loyal customers, price-driven channels bring switchers.

### What she changed

- Email budget and effort increased a lot — the cheapest customers she had
- TikTok held rather than cut, and judged on 12-month margin
- Google Shopping budget increased, PMax held
- Meta creative rebuilt, because its CAC was high without the offsetting LTV that justified TikTok

### The point of this lesson

**None of that analysis needed clever thinking.** It needed consistent lowercase strings in URLs.

**The most valuable finding — that email was her best channel — existed for two years and was invisible because nobody had added five parameters to a link.**

---

## 📊 Mastery Score

**Level: Advanced**

Tagging structure is the least glamorous topic in this course and one of the most consequential. Every data project downstream depends on it.

---

## 📌 Key Takeaways

- Auto-tagging carries the GCLID and must always be on. UTMs are descriptive labels for reporting. You need both.
- Use IDs, not names, in anything you will join on later. Names change; IDs do not.
- Lowercase everything, one separator, one convention across every channel. Document it on one page.
- Set the tracking template at account level, and always test it before saving.
- Custom parameters carry business dimensions like profit tier into your data warehouse.

---

## ☑️ Self-Assessment

1. Is auto-tagging on in every account you manage?
2. Do all your channels use the same UTM conventions, in the same case?
3. Are you using campaign names or campaign IDs in your UTMs?
4. Is your email traffic tagged, or is it appearing as Direct?
5. Do you have a one-page tagging standard document?

---

## 🧠 Quiz

**1. What does auto-tagging provide that UTMs do not?**
a) Readable labels
b) The GCLID, which powers conversion tracking, offline uploads and Enhanced Conversions
c) Cross-channel reporting
d) Nothing

**2. Why use `{campaignid}` instead of `{campaignname}`?**
a) It is shorter
b) Names change when renamed, which splits historical data. IDs never change.
c) Google needs it
d) It loads faster

**3. What breaks when one channel uses `Paid_Social` and another uses `paid-social`?**
a) Nothing
b) Cross-channel reporting — they become separate mediums
c) The landing page
d) Conversion tracking

**4. Where should the tracking template be set?**
a) On every ad individually
b) At account level, so it is applied everywhere and changed in one place
c) On keywords only
d) Nowhere

**5. Why had Sana's best channel been invisible for two years?**
a) It was not running
b) Email was untagged, so its sales were attributed to Direct
c) The tracking was broken
d) Google hid the data

---

## 💪 Practical Exercise (35 minutes)

Audit and design your tagging.

1. Check auto-tagging in every account. Screenshot the setting.
2. In GA4, open the Traffic Acquisition report. List every source/medium combination. Look for duplicates caused by capitalisation.
3. Check what percentage of conversions are attributed to Direct. Anything above 20% suggests untagged channels.
4. Check whether your Google Ads UTMs use campaign names or IDs.
5. Write your one-page tagging standard, covering every channel the business uses.
6. Test a tracking template change using the Test button before saving anything.

---

## 🎯 Expert Challenge

Build a complete tagging and joining structure.

- Design the full standard across every channel the business uses, including offline sources such as print codes and QR codes, so everything can be measured together.
- Design the custom parameter scheme for the business dimensions that matter — profit tier, service line, region — and specify how new campaigns get them assigned before they can spend.
- Build the ID-to-name lookup pipeline so reports remain readable while joins remain stable.
- Design the BigQuery join model: every table, every join key, and what happens when a key is missing. Missing-key handling is where most warehouse projects produce silently wrong numbers.
- Build the tagging validation check: an automated test that flags any live URL missing expected parameters, any new source/medium combination outside the standard, and any campaign without a tier assigned.
- Then run the blended analysis Sana ran. Produce true CAC and 12-month cohort margin by channel. Be prepared for the answer to change your budget allocation a lot — and for at least one channel to be far better or worse than everyone believed.

---

## ✅ Quiz Answers

1 — **b**. The GCLID, which the entire Phase 4 stack depends on.
2 — **b**. IDs are stable; names split your history when changed.
3 — **b**. They become separate mediums and cross-channel reporting fails.
4 — **b**. Account level — set once, changed in one place.
5 — **b**. Untagged email traffic was recorded as Direct.

---

## 🏁 Module 11 Complete

You can now build the automation moat. Confirm you can:

1. Explain how Smart Bidding thinks, and name the five levers that steer it
2. Install, configure and safely run the five core scripts
3. Judge when the API is worth building and when it is not
4. Calculate an evidence-based conversion value rule
5. Design a tagging structure that makes cross-channel analysis possible

**Next:** Module 12 — Use Your Own Customer Data. Working out customer value and bidding on real profit.
