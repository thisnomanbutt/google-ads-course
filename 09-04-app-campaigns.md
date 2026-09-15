# Lesson 9.4 — App Campaigns: Getting Users Who Pay

*Phase 5 · Running Big Accounts and Clients — Module 9 · Managing Large, Complex Accounts*

---

## Why This Lesson Exists

App advertising is a different discipline inside the same platform. If you never work with apps, read this once for awareness and move on. If you do, this is your foundation.

---

## 🎯 What You Will Learn

- How App campaigns differ from every other campaign type
- The three campaign goals, and when to use each
- Why creative assets are the only real lever you have
- App measurement: SKAdNetwork, MMPs and what actually works
- The economics of app advertising, which are unlike anything else in this course

---

## App Campaigns Are Really Different

Everything you have learned assumes you control targeting, keywords, placements and bids.

**App campaigns remove almost all of that.**

| | Search campaign | App campaign |
|---|---|---|
| Keywords | You choose | **None** |
| Placements | You control | **Automatic** |
| Audiences | You choose | **Automatic** |
| Ad creation | You write ads | **Google assembles from assets** |
| Bid strategy | Several options | Target CPI or Target CPA/ROAS only |
| What you control | Almost everything | **Assets, budget, target, goal** |

**Think of hiring a chauffeur versus driving.** In Search, you drive. In App campaigns, you state the destination and the budget, then sit back. Your only real influence is which destination you choose and what you put in the car.

**This means your creative assets are effectively your entire strategy.**

---

## The Three Campaign Goals

Choose carefully. This decision shapes everything.

### 1. App Installs

Optimises for the maximum number of installs.

**Use when:** launching, or when you really need volume above quality.

⚠️ **The danger:** installs are cheap and easy to buy. Many of them will be worthless — people who install, open once and never return. Optimising for installs alone is the app equivalent of optimising for form fills (Lesson 0.6).

### 2. App Engagement

Targets people who **already have your app** and encourages them to return and take an action.

**Use when:** you have a meaningful installed base and a retention problem.

**Needs:** deep links, so the ad opens the right screen inside the app.

**Often the highest-return app campaign type**, and consistently underused.

### 3. In-App Actions / App Pre-registration

Optimises for a specific in-app event — a purchase, a signup, a subscription — rather than the install itself.

**Use when:** you know which in-app action predicts value.

**This is where App campaigns should end up.** It is the same principle as Lesson 2.3: optimise for money, not for the easiest action.

---

## The Install Trap

This deserves its own section, because it is the mistake that defines bad app advertising.

**The pattern:**

1. Launch on App Installs
2. Cost per install is low — perhaps $0.60. Everyone is pleased.
3. Volume grows. Budget increases.
4. Three months later, someone checks retention.
5. **Day-30 retention is 2%. Almost nobody is still using the app.**

**What happened:** Google was asked to find installs, so it found the people most likely to install. Those are often people who install many apps casually and abandon them all.

**The fix is exactly the same as in lead generation:** change what you count.

> **Optimise for the in-app action that shows real value, not for the install.**

### Choosing that action

Same analysis as Lesson 8.3. Find the in-app event that predicts long-term value:

- E-commerce app → first purchase
- Subscription app → trial started, or subscription confirmed
- Content app → completed onboarding and returned on day 2
- Game → completed level 5, or first in-app purchase

⚠️ **Volume need.** If your chosen action happens fewer than ~30 times a week, Google cannot optimise for it reliably. Use a more frequent proxy action and value it correctly (Lesson 8.3).

---

## Creative Assets: Your Only Real Lever

Since you control almost nothing else, assets are the whole job.

### What you provide

| Asset type | Quantity | Notes |
|---|---|---|
| **Headlines** | Up to 5 | 30 characters each |
| **Descriptions** | Up to 5 | 90 characters each |
| **Images** | Up to 20 | Multiple aspect ratios |
| **Videos** | Up to 20 | Multiple orientations and lengths |
| **HTML5 assets** | Optional | Interactive, for some placements |

**Plus:** Google automatically uses assets from your app store listing — the icon, screenshots and description.

### Asset guidance

**Videos matter most.** App campaigns run heavily on YouTube and in-app video placements.

Follow the framework from Lesson 6.5:
- Hook in 3 seconds
- Show the app **in use**, not a logo animation
- Works with sound off, with captions
- Portrait (9:16), square (1:1) and landscape (16:9) versions

**Show the actual app.** Screen recordings of real usage consistently outperform abstract branded video.

**Images:** multiple aspect ratios, showing the app interface and the benefit.

### Asset groups

Modern App campaigns support asset groups, letting you test separate creative concepts.

**Structure them by concept, not by format:**
- Asset group 1: the problem/solution angle
- Asset group 2: the social proof angle
- Asset group 3: the feature demonstration angle

Then read the performance data and produce more of what wins.

---

## Your App Store Listing Is Part of the Campaign

This surprises people. **Google pulls assets from your store listing, and the listing works out whether a click becomes an install.**

You can buy a click. You cannot buy the install decision. That happens on the store page.

### What to optimise

| Element | Why it matters |
|---|---|
| **App icon** | The first thing seen; strongly affects click-through |
| **Title and subtitle** | Must state what the app does, plainly |
| **First 2–3 screenshots** | Most people see only these before deciding |
| **Rating and review count** | A large trust factor |
| **Description first two lines** | The rest is usually collapsed |
| **Preview video** | Can lift conversion a lot |

⚠️ **A poor store listing wastes every rupee you spend on App campaigns.** Audit it before you increase budget. This is the app equivalent of Lesson 0.5 — the landing page decides whether the traffic converts.

---

## Measurement: The Hard Part

App measurement is really more difficult than web measurement, for privacy reasons.

### The iOS situation

Apple's App Tracking Transparency framework means apps must ask permission before tracking users across other apps and websites. Many users decline.

**SKAdNetwork** (and its successors) is Apple's privacy-preserving attribution framework. It provides:
- Aggregated, delayed attribution data
- Limited detail
- No user-level tracking

**Practical consequences:**
- iOS campaign data is less detailed and arrives later
- Some optimisation signals are weaker
- Reported numbers will not reconcile perfectly with your internal data

⚠️ **Set expectations accordingly.** An iOS App campaign will never give you the reporting clarity of a Search campaign, and no amount of configuration changes that.

### Mobile Measurement Partners (MMPs)

An MMP is a third-party attribution platform — AppsFlyer, Adjust, Branch and similar.

**What they do:**
- Attribute installs and in-app events across all your ad platforms
- Provide a single source of truth across Google, Meta, TikTok and others
- Handle fraud detection
- Manage the complexity of SKAdNetwork

**Are they necessary?**

| Situation | MMP needed? |
|---|---|
| Google Ads only, small spend | Probably not — Google's own SDK may suffice |
| Multiple ad platforms | **Yes** — you need one attribution truth |
| Meaningful spend, above roughly $10,000/month | **Yes** |
| Serious about app growth | Yes |

**Alternative for smaller advertisers:** Google's own Firebase or the Google Analytics for Firebase SDK, linked to Google Ads. Free, and enough for Google-only advertising.

---

## The Economics Are Different

App advertising economics differ from everything else in this course, and this is where most people get it wrong.

### The chain

```
Install → Open → Onboard → Retain → Monetise
```

**Each step loses a large share of users.** Typical (highly variable) figures:

| Step | Typical retention |
|---|---|
| Install → first open | 70–90% |
| First open → complete onboarding | 40–70% |
| Day 1 retention | 20–40% |
| Day 7 retention | 10–20% |
| Day 30 retention | 3–10% |
| Ever monetises | 1–5% |

**So a $0.60 cost per install can easily mean a $60+ cost per paying user.**

### The calculation you must do

> **Real CAC = Cost per install ÷ (Install-to-paying-user rate)**

If cost per install is $0.60 and 1.5% ever pay:

```
Real CAC = 0.60 ÷ 0.015 = $40
```

**Now compare against LTV** (Lesson 0.3). If a paying user is worth $28, the app is losing money at every install — regardless of how cheap the installs look.

⚠️ **This calculation is the single most important thing in app advertising**, and it is skipped constantly.

---

## 📖 Real-World Example: The App With Wonderful Numbers and No Business

A Karachi fintech startup had built a savings app. They raised funding and hired an agency to drive installs.

**Six months of reporting:**

| Metric | Value |
|---|---|
| Installs | 340,000 |
| Cost per install | PKR 42 |
| Total spend | PKR 14,280,000 |

The agency's reports celebrated a low cost per install, well below the industry benchmark they cited.

**Then the finance director asked how many users had deposited money.**

### The real numbers

| Stage | Users | % of installs |
|---|---|---|
| Installed | 340,000 | 100% |
| Opened the app | 251,000 | 74% |
| Completed registration | 88,000 | 26% |
| Completed identity verification | 31,000 | 9.1% |
| **Made a first deposit** | **4,080** | **1.2%** |
| Still active at day 30 | 2,210 | 0.65% |

**Real cost per depositing customer: PKR 14,280,000 ÷ 4,080 = PKR 3,500.**

Their internal estimate of customer lifetime margin: **PKR 2,900.**

**They were losing PKR 600 on every genuine customer, having spent PKR 14.3 million to learn it.**

### What had gone wrong

The campaign optimised for **App Installs**. Google did exactly as instructed and found the cheapest possible installs.

Those came far more than expected from:
- Older, low-spec devices
- Users who install many apps and abandon them
- In-app placements in casual games, where the install is often semi-accidental

**None of these people were ever going to deposit money into a savings app.**

### The rebuild

**Step 1: Change the goal.**

They switched to **In-App Actions**, optimising for **completed identity verification** rather than install.

Why verification rather than deposit? Volume. Deposits happened about 680 times a month — too few for reliable optimisation. Verifications happened about 5,200 times a month.

**Proxy value calculation** (Lesson 8.3):
- Depositing customer margin: PKR 2,900
- Verification → deposit rate: 13.2%
- **Proxy value = 2,900 × 0.132 = PKR 383**

**Step 2: Fix the store listing.**

Their screenshots showed abstract graphics. They replaced them with actual app screens showing a savings balance growing, and added a 20-second preview video.

**Step 3: Rebuild creative.**

Out went the branded animation. In came three concepts:
- A screen recording of setting up an automatic savings rule in 40 seconds
- A real customer explaining how much they had saved in six months
- The problem angle: money disappearing before the end of the month

All in portrait, square and landscape, all captioned.

**Step 4: Add App Engagement.**

They created a second campaign targeting the 88,000 registered users who had never checked their identity, with deep links straight to the verification screen.

### Results at 20 weeks

| Metric | Before | After |
|---|---|---|
| Monthly spend | PKR 2,380,000 | PKR 2,410,000 |
| **Installs** | 56,700 | **11,200** |
| Cost per install | PKR 42 | **PKR 215** |
| Verifications | 5,200 | **7,940** |
| **First deposits** | **680** | **1,610** |
| **Cost per depositing customer** | **PKR 3,500** | **PKR 1,497** |

**Installs fell 80%. Cost per install rose five times. Depositing customers rose 137%.**

Every headline app metric got dramatically worse. The business became profitable.

### The App Engagement finding

The re-engagement campaign, on 12% of the budget, produced **31% of the deposits.**

Cost per deposit from re-engagement: **PKR 588** — a quarter of the acquisition cost.

**They had 88,000 registered users who had already shown interest and never been contacted.** Bringing them back was by far the cheapest growth available.

This mirrors the win-back finding in Lesson 6.7. **The people who already know you are almost always your cheapest customers, and almost nobody goes back for them.**

---

## 📊 Mastery Score

**Level: Advanced**

App advertising is a specialism. The strategic principles are identical to the rest of this course; the mechanics and measurement are really harder.

---

## 📌 Key Takeaways

- App campaigns remove nearly all targeting control. Your creative assets and your goal choice are the strategy.
- Never optimise for installs alone. Cheap installs are easy to buy and frequently worthless.
- Optimise for the in-app action that predicts value, using a proxy if volume is too low.
- Your app store listing decides whether a click becomes an install. Audit it before scaling budget.
- Real CAC = cost per install ÷ install-to-paying-user rate. Do this calculation before anything else.

---

## ☑️ Self-Assessment

1. What is the app's install-to-paying-user rate? Do you know it exactly?
2. What is the real cost per paying customer, not per install?
3. Which in-app action best predicts long-term value?
4. When did you last audit the app store listing?
5. Are you running any App Engagement campaigns for existing users?

---

## 🧠 Quiz

**1. What do you control in an App campaign?**
a) Keywords, placements and audiences
b) Creative assets, budget, goal and target
c) Everything
d) Nothing

**2. Why is optimising for installs dangerous?**
a) Installs cost too much
b) Google finds the cheapest installers, who are often people who abandon apps
c) Google does not support it
d) It is against policy

**3. Cost per install is $0.60 and 1.5% of installs ever pay. What is the real CAC?**
a) $0.60
b) $9
c) $40
d) $150

**4. Why does the app store listing matter to your campaign?**
a) It does not
b) It decides whether a click becomes an install — you cannot buy that decision
c) Google needs it
d) It affects your bid

**5. In the example, why did the App Engagement campaign perform so well?**
a) It had a bigger budget
b) It targeted 88,000 registered users who had shown interest and never been contacted
c) Engagement campaigns are always cheaper
d) It was a coincidence

---

## 💪 Practical Exercise (35 minutes)

Analyse the real economics of an app.

1. Build the funnel table: installs, opens, registrations, key action, first payment. Get real numbers.
2. Calculate the conversion rate at each step.
3. Calculate the real cost per paying customer.
4. Compare against the app's customer lifetime margin.
5. Find the in-app action that best predicts payment, and calculate its proxy value.
6. Audit the store listing against the six elements in this lesson.

---

## 🎯 Expert Challenge

Design a complete app growth measurement and optimisation system.

- Build the full funnel model with cohort retention curves at days 1, 7, 30 and 90, segmented by acquisition source.
- Calculate the real LTV by cohort and by source, and find which sources produce durable users rather than cheap installs.
- Design the optimisation event strategy: which in-app action, what proxy value, and the volume check that confirms it is optimisable.
- Design the measurement structure: MMP or Firebase, how SKAdNetwork limitations are handled, and how you will explain the reporting gap to stakeholders honestly.
- Build the store listing test programme: which elements to test, in what order, with what sample size. Listing conversion rate improvements multiply across all your paid traffic.
- Then build the re-engagement strategy for existing lapsed users, and compare its cost per outcome against new acquisition. In most apps this comparison changes the entire budget allocation.

---

## ✅ Quiz Answers

1 — **b**. Assets, budget, goal and target. Almost nothing else.
2 — **b**. Cheap installers are frequently people who abandon apps.
3 — **c**. 0.60 ÷ 0.015 = $40.
4 — **b**. The listing converts the click; you cannot buy that step.
5 — **b**. Warm, already-interested users are the cheapest growth available.

---

**Next lesson:** 9.5 — Keep Tracking When the Checkout Is Elsewhere
