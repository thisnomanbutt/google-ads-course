# Lesson 7.5 — Consent Mode: Respect Privacy, Keep Measuring

*Phase 4 · Tracking and Reading Your Results — Module 7 · Advanced Tracking That Sees Everything*

---

## Quick Recap From Module 7 So Far

You have built powerful measurement. This lesson is about doing it **lawfully and honestly** — and, surprisingly, recovering data you would otherwise lose.

---

## ⚠️ Read This First

This lesson explains how Consent Mode works technically. It is **not legal advice.**

Privacy law varies by country and changes regularly. Before setting up:

- Consult a lawyer familiar with the jurisdictions your customers are in
- Confirm your legal basis for processing
- Do not rely on a course, a plugin's marketing claims, or a forum post

**As with Lesson 0.7: this is your map. A professional confirms the road.**

---

## 🎯 What You Will Learn

- What Consent Mode actually does
- The consent signals, and what each controls
- Basic vs Advanced mode, and which to choose
- How behavioural modelling recovers lost conversions
- Setup and testing

---

## The Problem

Privacy laws in the EU, UK and increasingly elsewhere need consent before setting certain cookies or processing personal data for advertising.

When someone declines, the traditional approach was: fire no tags at all.

**The result:** if 40% of your visitors decline, you lose 40% of your measurement. Your reported conversions collapse. Smart Bidding, learning from a fraction of reality, makes worse decisions.

**Two bad options, apparently:**
1. Respect consent and lose measurement
2. Ignore consent and break the law

**Consent Mode is the third option.** It respects the choice while preserving some measurement capability.

---

## What Consent Mode Does

Consent Mode lets your Google tags **adjust their behaviour based on the user's choice**, rather than simply not firing.

**When consent is granted:** tags work normally, with cookies.

**When consent is denied:** tags still send a **cookieless ping** — a signal containing no identifiers, no cookies, and no personal data. It tells Google that an event happened, without saying who it was.

Google then uses these anonymous signals, combined with the behaviour of consented users, to **model** the conversions it cannot directly observe.

**Think of a shop counting customers.** With consent, you know each person's name and history. Without consent, you still hear the door open. You do not know who came in, but you know someone did — and combined with what you know about your named customers, you can reasonably estimate how many of the anonymous visitors bought.

---

## The Consent Signals

Consent Mode v2 uses these parameters. Learn the first four — they matter most.

| Signal | Controls |
|---|---|
| **`ad_storage`** | Cookies used for advertising |
| **`analytics_storage`** | Cookies used for analytics |
| **`ad_user_data`** | ⭐ **v2** — sending user data to Google for advertising |
| **`ad_personalization`** | ⭐ **v2** — using data for personalised advertising and remarketing |
| `functionality_storage` | Cookies for site functionality |
| `personalization_storage` | Cookies for site personalisation |
| `security_storage` | Cookies for security and fraud prevention |

**The two starred ones are what "v2" means.** They were added because consent for *storing* a cookie and consent for *sending data to Google* are legally separate questions.

### What each state means

Each signal is either `granted` or `denied`.

- **`ad_storage: denied`** → no advertising cookies, cookieless pings only
- **`ad_user_data: denied`** → Enhanced Conversions data must not be sent for this user
- **`ad_personalization: denied`** → this user must not be added to remarketing lists

⚠️ **This is why Consent Mode is not optional if you use Enhanced Conversions (Lesson 7.1) or remarketing (Lesson 6.6).** Those features process user data, and you need the consent signal to know whether you are allowed to.

---

## Basic vs Advanced Consent Mode

There are two setup approaches, and the difference matters a great deal.

### Basic Consent Mode

Tags are **blocked entirely** until the user consents. No tag loads, no ping, nothing.

| | |
|---|---|
| Data when denied | **None at all** |
| Modelling available | **No** |
| Setup | Simpler |
| Measurement loss | Full loss for non-consenting users |

### Advanced Consent Mode

Tags **load immediately** in a restricted state. When consent is denied, they send cookieless pings.

| | |
|---|---|
| Data when denied | Anonymous, cookieless signals |
| Modelling available | **Yes** |
| Setup | More complex |
| Measurement loss | A lot reduced |

### Which to choose

**Advanced Consent Mode is generally recommended**, because it preserves modelling — but only if your legal advice confirms cookieless pings are acceptable in your jurisdiction and configuration.

⚠️ **This is exactly the point where you need a lawyer, not a course.** The technical capability exists; whether it is lawful in your specific situation is a legal question.

---

## Behavioural Modelling: The Recovery Mechanism

When Advanced Consent Mode is running, Google can **model** the conversions it cannot directly observe.

### How it works, simply

1. Google observes consented users: their journey, and how often they convert
2. It receives anonymous signals from non-consented users
3. It applies the observed patterns to estimate conversions among the non-consented group
4. Modelled conversions appear in your reports alongside observed ones

### What modelling can recover

Where it works well, modelling can recover a meaningful share of the conversions lost to consent refusal. The actual recovery varies enormously by market, industry and consent rate.

⚠️ **Do not promise a specific recovery percentage to a client.** It depends on factors outside your control.

### What you need for modelling to work

Modelling needs enough data to build a reliable model. In practice:

- **Advanced Consent Mode** must be set up (Basic does not qualify)
- Enough **daily traffic volume** — small sites often do not qualify
- Enough **consented conversions** to learn patterns from
- Consistent setup across the whole site

**If your site is small, modelling may not activate at all.** That is not a fault in your setup.

### How to see whether it is working

In Google Ads, look for indicators of modelled conversions in your conversion reporting. In GA4, the reporting identity settings show whether modelled data is being used.

---

## Setup

### What you need

1. A **Consent Management Platform (CMP)** — the cookie banner
2. **Google Tag Manager**
3. Google tags configured to respect consent

### Step 1: Choose a CMP

Google keeps a list of certified CMPs that integrate properly with Consent Mode. Common options include Cookiebot, CookieYes, Usercentrics, OneTrust and Termly.

⚠️ **Use a Google-certified CMP.** A basic cookie banner plugin that merely hides itself when clicked does nothing for Consent Mode, and many WordPress plugins do exactly that.

### Step 2: Set the default consent state

Before any tag fires, you must declare the default. For EU/UK users, the default is normally `denied`.

In GTM, this is handled either by a consent initialisation tag from your CMP template, or by a custom tag firing on **Consent Initialisation** — a special trigger that runs before everything else.

```javascript
gtag('consent', 'default', {
  'ad_storage': 'denied',
  'analytics_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied',
  'wait_for_update': 500
});
```

**Region-specific defaults** are possible — for example, denied by default in the EU and UK, granted elsewhere, where that matches your legal advice.

### Step 3: Send the update when the user chooses

When the user interacts with the banner, the CMP sends an update:

```javascript
gtag('consent', 'update', {
  'ad_storage': 'granted',
  'analytics_storage': 'granted',
  'ad_user_data': 'granted',
  'ad_personalization': 'granted'
});
```

Most certified CMPs handle this automatically through their GTM template.

### Step 4: Configure consent settings on your tags

In GTM, each tag has **Consent Settings** under Advanced Settings.

- Google tags usually have **built-in consent checks** — they adjust their own behaviour
- Non-Google tags need **Extra consent checks** set manually

⚠️ **Non-Google tags do not respect Consent Mode automatically.** Your Meta pixel, TikTok pixel and any custom tags must be configured with extra consent checks, or they will fire regardless of the user's choice. This is a compliance risk you have created.

### Step 5: Order matters

The consent default **must** fire before any measurement tag. Use the **Consent Initialisation - All Pages** trigger for it. Getting this order wrong means tags fire before knowing the consent state.

---

## Testing Consent Mode

From Lesson 2.5, but with consent-specific checks.

### The test process

**Test 1: Default state**
1. Open an incognito window
2. Load the site, do **not** touch the banner
3. In the Network tab, check requests
4. **Expected:** requests carry consent parameters showing denied, or no tags fire (depending on mode)

**Test 2: Consent granted**
1. Fresh incognito window
2. **Accept** the banner
3. Complete a conversion
4. **Expected:** full tracking, cookies set, conversion recorded normally

**Test 3: Consent denied**
1. Fresh incognito window
2. **Decline** the banner
3. Complete a conversion
4. **Expected:** cookieless pings sent (Advanced mode), no advertising cookies set, no Enhanced Conversions data sent

**Test 4: The non-Google tags**
1. Decline the banner
2. Check whether your Meta, TikTok or other pixels still fire
3. **If they do, you have a compliance problem.** Fix it.

**Test 5: Tag Assistant consent view**
GTM Preview mode shows the consent state for each tag. Confirm it matches expectations.

⚠️ **If tags behave identically whether you accept or decline, your Consent Mode is not working.** This is the single most common finding when auditing a "compliant" site.

---

## The Ethics, Stated Plainly

Server-side tagging (Lesson 7.3) and Consent Mode both touch a line worth naming.

**Consent Mode is designed to respect the user's choice while preserving aggregate, anonymous measurement.** Used as intended, it is a reasonable balance.

**It can also be misused** — as a technical workaround to keep tracking people who said no. Some setups do this on purpose.

**Where the line sits:**

✅ **Legitimate:** modelling aggregate conversions from anonymous signals, with no attempt to find individuals who declined.

❌ **Not legitimate:** using server-side tagging or fingerprinting to find and track users who clearly refused.

Beyond the legal risk, this is a matter of professional integrity. A user who declined made a choice. Respect it.

**Practical rule:** if your setup would embarrass you if explained plainly to the user, do not run it.

---

## 📖 Real-World Example: The Banner That Did Nothing

Bilal's UK client had a cookie banner. Their developer had installed a popular WordPress plugin two years earlier. Everyone assumed they were compliant.

Two problems surfaced at once.

**Problem 1:** their reported conversions had fallen 34% over eighteen months, with no corresponding fall in actual orders.

**Problem 2:** a customer had complained about being followed by ads after declining cookies.

### The audit

Bilal ran the five-test process.

**Test 1 (default):** ❌ All tags fired immediately on page load, before the banner appeared. No consent default was set at all.

**Test 3 (denied):** ❌ He declined the banner. Every tag fired anyway. Google Ads, GA4, Meta pixel, a chat widget and a heatmap tool — all fully active.

**Test 4 (non-Google):** ❌ The Meta pixel fired regardless.

**The banner was decoration.** It appeared, it could be clicked, and it changed nothing whatsoever.

Meanwhile the conversion decline had a separate cause: Safari's cookie restrictions had tightened over that period, and with no Consent Mode and no Enhanced Conversions, those conversions were simply vanishing.

### The rebuild

**Week 1: A certified CMP.** They replaced the plugin with a Google-certified CMP, configured for UK and EU visitors.

**Week 2: Consent defaults.** Custom tag on Consent Initialisation, all four v2 signals denied by default for UK/EU, with `wait_for_update` set.

**Week 2: Advanced Consent Mode.** Configured after taking legal advice confirming the approach was appropriate for their situation.

**Week 3: Non-Google tags.** Meta pixel, heatmap and chat widget all given extra consent checks. The heatmap tool was removed entirely — nobody had looked at it in a year, and it was slowing the site.

**Week 3: Enhanced Conversions** (Lesson 7.1), gated on `ad_user_data` being granted.

**Week 4: Testing.** All five tests. All passed.

### Results at 90 days

| Metric | Before | After |
|---|---|---|
| Consent rate (accepted) | Unknown — not measured | 61% |
| Conversions recorded | 412/month | **631/month** |
| Actual orders | 690/month | 704/month |
| Measurement coverage | 60% | **90%** |
| Meta pixel firing without consent | Yes ❌ | **No** ✅ |
| Page load (mobile) | 4.1s | 2.8s |

**Conversions recorded rose 53% while actual orders barely moved.** This was almost entirely measurement recovery: Enhanced Conversions plus behavioural modelling filling the gap.

The remaining 10% gap is expected. Perfect measurement is not achievable, and claiming otherwise is dishonest.

**Two secondary benefits:**
- Removing the unused heatmap tool cut 1.3 seconds from mobile load time
- The client was, for the first time, really compliant rather than decoratively compliant

### The client's reaction

They had assumed compliance was a cost — something that reduced their marketing effectiveness. In fact, doing it properly **improved** their measurement, because the alternative had been a slow leak nobody had diagnosed.

**Bilal's summary:** *"Their banner was protecting nobody and measuring nothing. Doing it properly fixed both problems at once."*

---

## 📊 Mastery Score

**Level: Elite**

Consent Mode sits at the intersection of law, technology and ethics. Handling all three well is rare.

---

## 📌 Key Takeaways

- Consent Mode lets tags adjust behaviour based on the user's choice, rather than simply not firing.
- v2 added `ad_user_data` and `ad_personalization` — consent to store a cookie is separate from consent to send data.
- Advanced Consent Mode enables behavioural modelling; Basic does not. Both need legal review.
- Non-Google tags do not respect Consent Mode automatically. Configure them manually or you have a compliance problem.
- Test by declining the banner. If tags behave identically, your Consent Mode is not working.

---

## ☑️ Self-Assessment

1. Do you know what happens on your site when someone declines the banner? Have you tested it?
2. Are you using a Google-certified CMP, or a basic plugin?
3. Do your non-Google pixels respect consent?
4. Is your consent default firing before any measurement tag?
5. Do you know your consent acceptance rate?

---

## 🧠 Quiz

**1. What does Consent Mode do when consent is denied in Advanced mode?**
a) Nothing fires
b) Tags send cookieless pings with no identifiers
c) Tags fire normally
d) The page does not load

**2. What did v2 add?**
a) Faster loading
b) `ad_user_data` and `ad_personalization` signals
c) Automatic legal compliance
d) Server-side support

**3. Why does Basic Consent Mode lose more data than Advanced?**
a) It is slower
b) Tags are blocked entirely, so there is no signal for modelling
c) It costs more
d) It is not supported

**4. Your Meta pixel fires even when consent is declined. What is this?**
a) Normal and fine
b) A compliance problem you must fix with extra consent checks
c) Google's responsibility
d) Expected behaviour

**5. How do you know if Consent Mode is actually working?**
a) The banner appears
b) Decline the banner and check whether tag behaviour changes
c) The plugin says it is active
d) Check the privacy policy

---

## 💪 Practical Exercise (40 minutes)

Audit consent handling on one site.

1. Run all five tests from the process. Record the result of each.
2. Check whether the CMP is Google-certified.
3. In GTM, list every tag and check whether it has consent settings configured.
4. Find every non-Google tag and check its behaviour when consent is declined.
5. Find your consent acceptance rate, if it is being measured.
6. Write the findings as a compliance summary, flagging anything that needs legal review.

---

## 🎯 Expert Challenge

Design a complete consent and measurement structure.

- Map every jurisdiction the business's customers are in, and the consent what you need for each. Design region-specific defaults accordingly, with legal sign-off.
- Build the full tag inventory: every tag, its purpose, the data it processes, the lawful basis, and its consent gating. Most organisations have never produced this document and find several tags nobody can account for.
- Design the modelling eligibility check: does this site have the volume for behavioural modelling? If not, what alternative recovery is available?
- Build the measurement gap analysis: with your consent rate and modelling status, what percentage of reality are you seeing? Report this honestly to the client rather than presenting reported conversions as complete.
- Design the ongoing compliance check: quarterly re-testing, plus a rule that any new tag needs consent configuration before deployment.
- Finally, write the plain-language explanation of what your setup does — the one you would be comfortable showing to a user who asked. If you cannot write it comfortably, the setup needs changing, not the explanation.

---

## ✅ Quiz Answers

1 — **b**. Cookieless pings with no identifiers.
2 — **b**. The two new user-data and personalisation signals.
3 — **b**. No signal at all means nothing to model from.
4 — **b**. A compliance problem needing extra consent checks.
5 — **b**. Decline and observe whether behaviour actually changes.

---

**Next lesson:** 7.6 — Keep Your Own Data With BigQuery
