# Lesson 1.1 — How Google Decides Which Ad Shows First

*Phase 1 · How Google Ads Works, and Setting It Up — Module 1 · How Google Ads Really Works*

---

## Quick Recap From Module 0

You now think like a CMO. You know your margin, your breakeven ROAS and your real cost per customer. Now we open the machine and look inside.

---

## 🎯 What You Will Learn

- What actually happens in the milliseconds after someone hits "search"
- The Ad Rank formula, explained without maths pain
- Why a higher bid sometimes shows *no* ad at all
- Why every auction is different, even for the same keyword
- How AI Overviews changed the search page in 2026

---

## First: Google Ads Is Not a "Highest Bidder Wins" System

Beginners assume the person who pays most sits at the top. That is wrong, and believing it will cost you money.

**Think of a school admission.** The richest parent does not automatically get their child a place. The school looks at grades, behaviour and fit — *and* the fee. A brilliant student with a modest fee often beats a weak student with a big one.

Google works the same way. It wants two things at once:
1. Money from advertisers
2. Users who trust the results and keep coming back

If Google sold the top spot to the highest bidder only, the results would be terrible and people would leave. So Google mixes money with quality.

---

## What Happens When Someone Searches

Every single search runs a fresh auction. This happens billions of times a day.

Here is the sequence, in order:

**Step 1.** A person types "emergency plumber lahore" into Google.

**Step 2.** Google collects every ad that could match this search — from keywords, from broad match, from PMax.

**Step 3.** Google removes any ad that is not eligible right now:
- Wrong location
- Wrong device
- Disapproved by policy
- Budget already used for the day
- Below the minimum quality bar (more on this soon)

**Step 4.** For every remaining ad, Google calculates an **Ad Rank** score.

**Step 5.** Ads are sorted by Ad Rank. The page is built. Prices are calculated.

**Step 6.** The page appears.

All of this takes less time than a blink.

---

## The Ad Rank Formula

Here is the formula in plain words:

> **Ad Rank = Your bid × Your quality × Your asset impact + Auction context**

Let's take each part.

### 1. Your bid
The maximum you agreed to pay for a click. With Smart Bidding, the AI sets this for you in each auction. It is not a fixed number.

### 2. Your quality
Google's live prediction of three things:
- **Expected click-through rate** — will people click this ad?
- **Ad relevance** — does the ad match what they searched?
- **Landing page experience** — is the page useful, fast and honest?

You can see a rough version of this as Quality Score (1–10) in your account. The real number used in the auction is more detailed and updates constantly.

### 3. Asset impact
The expected effect of your sitelinks, callouts, images and other extras. Better assets can raise Ad Rank even without raising your bid. This is one of the cheapest wins available. We build these in Lesson 4.2.

### 4. Auction context
The parts that change every time:
- The exact words searched
- The person's location and device
- The time of day
- What else is on the page
- The other advertisers competing at that moment

---

## What You Actually Pay

This surprises people: **you almost never pay your maximum bid.**

The classic formula is:

> **Your cost per click = (Ad Rank of the advertiser below you ÷ Your quality) + a tiny amount**

Read that carefully. **Your quality is the divider.** Higher quality means a lower price for the same position.

### A worked example

Two advertisers want the same spot.

| | Advertiser A | Advertiser B |
|---|---|---|
| Max bid | PKR 100 | PKR 50 |
| Quality Score | 3 | 9 |
| Ad Rank (bid × quality) | 300 | 450 |

**Advertiser B wins**, with half the bid.

Now what does B pay?
- Ad Rank of A = 300
- B's quality = 9
- B pays: 300 ÷ 9 = **PKR 33.34**, plus a small amount

Advertiser B beat a double bid and paid about a third of it.

This is why Lesson 4.5, on Quality Score, is one of the highest value lessons in this course. Quality is a permanent discount.

---

## Ad Rank Thresholds: Why You Sometimes Do Not Show At All

This is the part most people never learn.

Google sets a **minimum Ad Rank** needed to appear at all — and a higher one to appear above the search results rather than below them.

If your Ad Rank is below the threshold, **your ad does not show, no matter how high you bid.**

Well — technically you can bid enough to cross it. But if your quality is very poor, the bid needed becomes absurd. You would be paying a huge price for a click that will not convert.

### Thresholds change depending on:

- **The topic.** Sensitive areas (health, finance, legal) have higher bars.
- **The person's likely intent.** A vague search sets a higher bar for ads.
- **The type of ad and its position.** Showing at the very top needs more than showing at the bottom.
- **Other ads present.** Google will show fewer ads, or none, rather than show bad ones.

### What this means in practice

If your impressions are near zero and raising the bid does nothing, **stop raising the bid.** You have a quality problem, not a bidding problem. Fix:
- Ad relevance (do your ads use the search words?)
- Landing page (is it fast, honest and matching?)
- Expected CTR (is your offer interesting?)

---

## Micro-Auctions: Why the Same Keyword Behaves Differently

Beginners think of "the auction for plumber lahore". There is no such single auction.

There are millions of tiny, separate auctions. Each one is unique:

- A man on an old Android phone in Johar Town at 11pm
- A woman on a laptop in Gulberg at 2pm
- Someone who visited your site last week
- Someone who has never heard of you

Same keyword. Completely different value. Completely different competition.

**Think of a taxi fare.** A ride from the airport at 3am in the rain costs more than the same distance at 11am on a clear Tuesday. Same route, different auction.

### Why this matters

This is the single best argument for Smart Bidding. A human cannot set a different bid for each of a million micro-auctions. The AI can, and it uses signals you cannot even see.

It also explains something confusing: your average cost per click is an *average of very different auctions*. When it rises, the cause is often a change in the mix of auctions you entered — not a competitor raising bids.

---

## The 2026 Search Page: Living With AI Overviews

The search results page has changed. You need to understand the new shape of it.

### What changed

- **AI Overviews** — an AI-written answer often appears at the top for informational questions.
- Many informational searches now get answered on the page. The user never clicks a website.
- Ads appear above, below and sometimes inside these AI experiences.
- Search behaviour is shifting: fewer short vague searches, more long, conversational ones.

### What this means for you — three real consequences

**1. Informational keywords lost value.**
Searches like "how does a water filter work" used to bring traffic. Now the AI answers it. Fewer people click anything.

*What to do:* move budget toward transactional intent. "Buy water filter Karachi", "water filter price", "book dentist near me". These still need a click, because the user must actually do something.

**2. Longer, more conversational searches grew.**
People type full sentences now. "Which water filter works without electricity in Karachi".

*What to do:* broad match plus Smart Bidding handles these better than exact match lists. This is a real change from older advice, and we cover it fully in Lesson 3.3.

**3. Search Impression Share can fall without you doing anything wrong.**
If Google shows an AI answer and fewer ads, everyone's impressions fall.

*What to do:* watch this trend over months, not days, and check whether *conversions* fell or only impressions. Falling impressions with steady conversions is often fine. We diagnose this properly in Lesson 8.4.

⚠️ **A caution:** Google's search page keeps changing. Do not build your strategy around one layout. Build it around intent, which changes far more slowly.

---

## 📖 Real-World Example: Why Ali's Higher Bid Failed

Ali (from Lesson 0.1) noticed Sana's water filter ads outranking his. His solution was simple: raise the bid.

He went from PKR 40 to PKR 80 max bid. He waited a week.

**Result: his impressions went up 12%, his cost went up 96%, and his sales did not move.**

Then he checked the two things he had ignored.

**His Quality Score was 4/10.** The breakdown said:
- Expected CTR: Below average
- Ad relevance: Average
- Landing page experience: Below average

**Sana's Quality Score was 9/10.**

Doing the maths on a shared auction:

| | Ali | Sana |
|---|---|---|
| Max bid | PKR 80 | PKR 45 |
| Quality | 4 | 9 |
| Ad Rank | 320 | 405 |

Sana still won, at almost half the bid. And her actual price was about 320 ÷ 9 = **PKR 35.5**, while Ali, when he did win a lower spot, was paying close to PKR 70.

**Sana was paying half as much for better positions.**

Ali finally fixed the real problem. He matched his ad headline to the search terms, built a dedicated landing page (Lesson 0.5), and added sitelinks and images.

Six weeks later his Quality Score reached 8. He dropped his bid back to PKR 45 — and his impressions were *higher* than when he was bidding PKR 80.

**He bought quality instead of buying clicks.**

---

## 📊 Mastery Score

**Level: Foundational**

Everyone in Google Ads should know this. Very few actually do. It is the base for bidding, Quality Score and diagnostics.

---

## 📌 Key Takeaways

- Ad Rank = bid × quality × asset impact + context. Money alone does not win.
- You usually pay less than your max bid, and high quality lowers your price directly.
- Ad Rank thresholds mean poor quality ads may not show at all, at any sensible bid.
- Every search is its own micro-auction. This is why Smart Bidding beats manual control.
- AI Overviews reduced value on informational searches. Move budget toward buying intent.

---

## ☑️ Self-Assessment

1. Can you write the Ad Rank formula from memory?
2. Why can a lower bid beat a higher one?
3. What should you check *before* raising a bid to fix low impressions?
4. Explain a micro-auction to a friend in one sentence.
5. Which of your keywords are informational, and should probably lose budget?

---

## 🧠 Quiz

**1. What is Ad Rank made of?**
a) Bid only
b) Bid, quality, asset impact and auction context
c) Budget and clicks
d) Keyword count

**2. Advertiser A bids 100 with quality 3. Advertiser B bids 50 with quality 9. Who wins?**
a) A, because of the higher bid
b) B, because Ad Rank is 450 vs 300
c) They tie
d) Neither shows

**3. Your ad gets almost no impressions. You double your bid and nothing changes. Why?**
a) Google is broken
b) You are probably below the Ad Rank threshold due to quality
c) Your budget is too high
d) You need more keywords

**4. What is a micro-auction?**
a) A small budget campaign
b) A separate auction run for each individual search
c) An auction for mobile only
d) A test feature

**5. How should you respond to AI Overviews reducing informational clicks?**
a) Stop using Google Ads
b) Bid higher on informational keywords
c) Shift budget toward transactional, high-intent searches
d) Only use Display

---

## 💪 Practical Exercise (20 minutes)

Look inside a real account, or a demo account if you do not have one yet.

1. Add the Quality Score column, plus its three parts: Expected CTR, Ad Relevance, Landing Page Experience.
2. Sort keywords by spend, highest first.
3. For your top 10 spending keywords, write down all three component ratings.
4. Count how many say "Below average". Each one is money you are giving away.
5. Write which single component appears worst most often. That is your first project.

---

## 🎯 Expert Challenge

Model your own auction economics.

- Take one high-spend keyword. Note your current Quality Score and average cost per click.
- Using the cost formula, estimate what your cost per click would be at quality 8 and at quality 10.
- Multiply the saving by your monthly click volume for that keyword. That is the annual value of fixing quality.
- Then check Auction Insights for that keyword. Find which competitor has both a higher impression share *and* likely lower costs than you.
- Write a one-page plan to close that gap, with the three specific changes you would make and the expected effect on Ad Rank.

---

## ✅ Quiz Answers

1 — **b**. Four parts, and three of them are not money.
2 — **b**. 50 × 9 = 450 beats 100 × 3 = 300.
3 — **b**. Below the threshold, bids cannot rescue you. Fix quality.
4 — **b**. Each individual search runs its own unique auction.
5 — **c**. Follow the intent that still needs a click.

---

**Next lesson:** 1.2 — Which Campaign Type Should You Use?
