# Lesson 14.1 — Selling in Other Countries

*Phase 7 · Proving What Works, and Growing — Module 14 · Selling Abroad and Staying Current*

---

## Quick Recap From Lesson 2.1

Currency and timezone are permanent choices. At global scale, that single fact drives your entire account structure.

---

## 🎯 What You Will Learn

- The account structure decision for multi-country operations
- How to handle currency without corrupting your profit maths
- Language targeting, and what it actually means
- Localisation versus translation, and why the difference costs money
- The operational model for running many markets

---

## The Structure Decision

The first question in any global build: **one account or several?**

### The rule

> **One currency, one account.** Currency cannot be changed (Lesson 2.1), so each currency needs its own account.

### The decision table

| Situation | Structure |
|---|---|
| Multiple countries, one currency (e.g. Eurozone) | **One account**, campaigns split by country |
| Multiple currencies | **One account per currency**, all under one MCC |
| Separate legal entities | Separate accounts, one MCC |
| Really separate brands | Separate accounts |
| Franchise, separately owned | Separate accounts, separately owned |

### What this means practically

A business selling in the UK, US, UAE and Pakistan needs **four accounts**: GBP, USD, AED and PKR.

**Consequences:**
- Four sets of conversion actions, or MCC-level shared actions (Lesson 9.5)
- Four sets of budgets and targets
- No cross-account portfolio bidding between them
- Reporting must be consolidated outside Google Ads
- Four learning phases when you make a global change

⚠️ **Plan this before launch.** Discovering in month eight that you need a separate account for a new market means starting that market from zero.

---

## Currency and Your Profit Maths

This is where global operations quietly break.

### The problem

Your costs are in one currency. Your revenue is in several. Your targets are set per account.

**Example:** a Pakistani business selling to the UK.

- Product cost: PKR 2,400
- UK selling price: £24
- At PKR 355 to the pound: PKR 8,520 revenue, PKR 6,120 margin
- At PKR 310 to the pound: PKR 7,440 revenue, PKR 5,040 margin

**The same sale is 18% less profitable, and nothing about the advertising changed.**

### What breaks

| What | How |
|---|---|
| Breakeven ROAS | Changes as the rate moves (Lesson 0.3) |
| tROAS targets | Become wrong without you noticing |
| Profit-based conversion values | Drift from reality (Lesson 12.3) |
| Cross-market comparison | Meaningless without conversion at a consistent rate |

### The handling

**1. Set targets in the account's own currency**, calculated from margin in that currency.

**2. Review targets quarterly**, or whenever the exchange rate moves more than about 7% (Lesson 0.7).

**3. For consolidated reporting, convert at a fixed rate for the period.** Using a floating rate makes month-to-month comparison impossible.

**4. Document the rate used** in every consolidated report.

⚠️ **A margin figure calculated at last year's exchange rate is one of the most common hidden errors in global accounts.** Diarise the review.

---

## Language Targeting: What It Actually Does

This confuses almost everyone.

**Language targeting in Google Ads targets the language of the user's Google interface and browser settings.** It does not detect the language of the search, and it does not restrict who sees your ad based on what they speak.

### The practical implications

**1. Many people use an English interface while searching in another language.**

In Pakistan, India, UAE and much of Europe, a large share of users have English-language browsers regardless of their first language.

**Selecting only "English" does not exclude Urdu speakers. Selecting only "Urdu" may exclude most of them.**

**2. Your ad language and your targeting language are separate decisions.**

You can write ads in Urdu and target English-language users. Google will show them.

**3. The safe default in multilingual markets:** target both the local language and English.

### What actually controls relevance

- **Your keywords.** A keyword in Urdu will match Urdu searches.
- **Your ad copy.** Written in whichever language you choose.
- **Your landing page.** Must match the ad's language.

**Language targeting is a coarse filter. Keywords do the real work.**

---

## Localisation vs Translation

**Translation** converts words. **Localisation** adapts the offer to the market.

**Translation alone consistently underperforms**, and the reasons are commercial rather than linguistic.

### What must be localised

| Element | Why |
|---|---|
| **Keywords** | People do not search translated phrases. They search their own phrases. |
| **Currency and price display** | Showing GBP to a UAE customer creates friction |
| **Payment methods** | Cash on delivery matters in Pakistan; it is irrelevant in Germany |
| **Delivery expectations** | "2–3 days" means different things in different markets |
| **Trust signals** | Local address, local phone number, local reviews (Lesson 0.5) |
| **The objection being answered** | Different markets have different fears |
| **Legal and compliance text** | Varies by jurisdiction |
| **Images** | Local people, local settings |

### The keyword problem specifically

⚠️ **Never translate your keyword list.** It will be wrong.

**Why:** people search using their own idiom, not a dictionary equivalent. Regional variations, borrowed English words and colloquialisms make direct translation unreliable.

**Do this instead:**
1. Run keyword research natively in the target market (Lesson 3.2)
2. Use Google Keyword Planner with the correct location and language
3. Check autocomplete in the target market
4. Ideally, have a native speaker review the list

**A translated keyword list will miss the terms people actually use, and include terms nobody searches.**

### The objection difference

From Lesson 0.2, your offer answers a fear. **The fear differs by market.**

Sana's water filter:
- **Pakistan:** "Will it work during load-shedding?"
- **UK:** "Will it fit my kitchen and is it certified?"
- **UAE:** "Does it handle desalinated water?"

**Same product. Three completely different lead messages.** Translating the Pakistani ad into English for the UK market would answer a question nobody there is asking.

---

## Structuring Global Campaigns

Within each currency account, structure by market.

### The naming standard

Extend Lesson 1.4's format with a market code:

```
Search | UK | Brand | Exact | Sales
Search | UK | Water Filters | Phrase | Sales
Search | IE | Water Filters | Phrase | Sales
PMax   | UK | High Margin | Feed | ROAS
```

**Use consistent ISO country codes.** UK, IE, AE, PK, US. Never mix "UK" and "United Kingdom" and "GB".

### Separate campaigns per market, always

Even within one currency account, separate campaigns per country. You need:
- Different budgets
- Different targets (costs vary enormously by market)
- Different ad schedules (different timezones)
- Different messaging
- Clean reporting

⚠️ **Never target multiple countries in one campaign** unless they really share language, currency, competition and customer behaviour.

---

## The Operational Model

Running many markets needs process, not heroics.

### The market launch checklist

For every new market:

- [ ] Currency confirmed; account created if needed (Lesson 2.1)
- [ ] Timezone set to the market's business hours
- [ ] Native keyword research completed (Lesson 3.2)
- [ ] Competitor teardown in that market (Lesson 0.2)
- [ ] Margin recalculated in that currency, including any import duty or local tax
- [ ] Landing pages localised, not translated
- [ ] Local trust signals present: address, phone, reviews
- [ ] Payment methods appropriate to the market
- [ ] Delivery expectations stated realistically
- [ ] Legal and compliance text reviewed for that jurisdiction
- [ ] Conversion tracking tested in that market (Lesson 2.5)
- [ ] Consent handling appropriate to that jurisdiction (Lesson 7.5)
- [ ] Local negative keywords added
- [ ] Someone accountable for that market's performance

### The consolidated reporting problem

You cannot see across currency accounts in the Google Ads interface.

**Options:**

| Method | Effort | Quality |
|---|---|---|
| MCC-level reports | Low | Limited; currency handling is awkward |
| Manual spreadsheet | Medium | Works, but breaks |
| Looker Studio with blended sources | Medium | Good (Lesson 8.2) |
| BigQuery warehouse | High | **Best** (Lesson 7.6) |

**For more than three markets, build the warehouse.** Manual consolidation across five currencies is a permanent tax on your time and a permanent source of errors.

### Market prioritisation

Do not launch five markets at once. Sequence them.

**Rank candidate markets by:**
1. Search volume for your core terms
2. Competition level (from Keyword Planner and manual SERP review)
3. Estimated margin after local costs and duties
4. Operational readiness — can you actually deliver there?
5. Language and localisation effort needed

**Launch one, prove it, then the next.** Five simultaneous launches means five simultaneous learning phases and no capacity to fix any of them.

---

## 📖 Real-World Example: The Expansion That Went Backwards

A Pakistani home textiles manufacturer decided to sell direct to consumers internationally. They had a strong product and good margins domestically.

**Their plan:** launch UK, US, UAE and Australia simultaneously.

### What they did

One Google Ads account, in PKR, targeting all four countries in three campaigns.

**Landing pages:** their existing Pakistani site, with a currency converter widget.

**Keywords:** their Pakistani keyword list, translated to English.

**Ads:** their Pakistani ads, translated.

### What happened in four months

| Market | Spend (PKR) | Orders | Cost per order |
|---|---|---|---|
| UK | 1,840,000 | 41 | 44,878 |
| US | 2,110,000 | 29 | 72,759 |
| UAE | 890,000 | 88 | 10,114 |
| Australia | 640,000 | 8 | 80,000 |
| **Total** | **5,480,000** | **166** | **33,012** |

**Their margin per order was roughly PKR 4,200.**

**They lost about PKR 4,783,000 in four months.**

### The diagnosis

Bilal was brought in to work out what happened. He found seven problems, and they compounded.

**1. Wrong currency.** The account was in PKR. Their UK customers paid in GBP. Every conversion value was converted at Google's rate, so their ROAS drifted with the exchange rate and no target was ever correct.

**2. One campaign per region group, not per country.** UK and Ireland shared a campaign; US and Canada shared another. Different costs, different competition, one budget and one target.

**3. Translated keywords.** Their Pakistani term for a product category translated to a phrase almost nobody in the UK searches. Their actual search volume in the UK was a fraction of what they had estimated.

**4. No localisation.** The site showed a Karachi address, a Pakistani phone number, and prices in a converter widget that many browsers blocked. **UK conversion rate was 0.4%.**

**5. Delivery expectations.** The site said "fast delivery" without stating that international orders took 12–18 days. A meaningful share of orders were cancelled after purchase.

**6. Wrong objection.** Their Pakistani messaging led on price. UK customers' actual concern was fabric certification and returns — neither of which the site addressed.

**7. Australia was hopeless.** Nobody had checked shipping cost. It was PKR 3,800 per order against a PKR 4,200 margin.

### The rebuild

They paused everything and restarted with one market.

**Market selection.** They ranked all four properly:

| Market | Search volume | Competition | Margin after shipping | Operational readiness | Rank |
|---|---|---|---|---|---|
| UAE | Medium | Low | **High** — cheap shipping, no duty | Ready | **1** |
| UK | High | High | Medium | Needs a returns solution | 2 |
| US | Very high | Very high | Medium | Not ready | 3 |
| Australia | Low | Medium | **Negative** | Not workable | ❌ |

**Australia was abandoned entirely.** The shipping cost made it structurally unprofitable, which no advertising could fix.

**They launched UAE only.**

- New account in **AED**
- Timezone: Gulf Standard Time
- Native keyword research, including Arabic terms
- A localised landing page: Dubai address, UAE phone number, prices in AED, delivery in 3–5 days stated clearly, cash on delivery offered
- Ads leading on the actual UAE objection: quality certification and fast local delivery
- Margin recalculated in AED, including local costs

### UAE results after four months

| Metric | Old approach | New approach |
|---|---|---|
| Spend (AED equivalent) | 890,000 PKR | 1,240,000 PKR |
| Orders | 88 | **412** |
| Conversion rate | 1.1% | **4.3%** |
| Cost per order (PKR) | 10,114 | **3,010** |
| **Profit** | −PKR 519,000 | **+PKR 490,000** |

**They then launched the UK properly**, six months later, after building a European returns solution.

**The US remains unlaunched.** They decided the competition level needed a scale of investment they were not ready for — which was the correct decision, and one nobody had been willing to make at the start.

### The lesson

**They lost PKR 4.8 million learning that international expansion is a business operation, not an advertising campaign.**

Every one of the seven problems was operational or strategic. Not one was a bidding, keyword or ad copy problem.

**Bilal's summary:** *"You cannot advertise your way into a market you are not ready to serve. The account was never the problem."*

---

## 📊 Mastery Score

**Level: Expert**

Global operations combine everything in this course with genuine business complexity. The most valuable skill is knowing which markets not to enter.

---

## 📌 Key Takeaways

- One currency, one account. Currency is permanent, so plan the structure before launching.
- Exchange rate movement silently corrupts your margin maths. Review targets quarterly.
- Language targeting selects browser settings, not spoken language. Keywords do the real work.
- Never translate a keyword list. Run native research in each market.
- Localisation means adapting the offer, the objection and the trust signals — not just the words.

---

## ☑️ Self-Assessment

1. Does each currency you sell in have its own account?
2. When did you last recalculate margins at current exchange rates?
3. Were your international keywords researched natively or translated?
4. Does each market's landing page carry local trust signals?
5. Have you ever declined to enter a market after checking the economics?

---

## 🧠 Quiz

**1. Why does each currency need its own account?**
a) Google needs it
b) Currency cannot be changed after account creation
c) It is cheaper
d) It improves Quality Score

**2. What does language targeting actually select?**
a) The language of the search query
b) The language of the user's browser and Google interface settings
c) The language of your ads
d) The country

**3. Why should you never translate a keyword list?**
a) Translation is expensive
b) People search using their own idiom, not dictionary equivalents
c) Google blocks translated keywords
d) It takes too long

**4. What is the difference between translation and localisation?**
a) Nothing
b) Translation converts words; localisation adapts the offer, objection and trust signals
c) Localisation is cheaper
d) Translation is more accurate

**5. Why was the Australian market abandoned?**
a) Poor ad copy
b) Shipping cost of PKR 3,800 against a PKR 4,200 margin made it structurally unprofitable
c) Wrong keywords
d) Language issues

---

## 💪 Practical Exercise (40 minutes)

Assess one international market properly.

1. Calculate the margin for that market, including shipping, duty, local taxes and payment fees at current exchange rates.
2. Run native keyword research using the correct location and language settings. Compare volume to your assumption.
3. Open your landing page as a customer in that market would see it. List every missing local trust signal.
4. Find the single biggest objection a buyer in that market would have. Is it the same as your home market?
5. Score the market on the five prioritisation rules.
6. Make a decision: launch, prepare first, or decline.

---

## 🎯 Expert Challenge

Design a global expansion programme.

- Build the market scoring model with all five rules, weighted, and score every candidate market. Be prepared for the result to eliminate markets the business was excited about.
- Design the account structure for the full target set, including the currency decision and the MCC structure.
- Build the localisation specification per market: keywords, objection, trust signals, payment, delivery, legal text, and images. Assign an owner and a cost to each.
- Design the consolidated reporting solution across currencies, with a documented and fixed conversion rate policy.
- Build the sequential launch plan with the specific conditions each market must meet before launch, and the performance threshold it must hit before the next market opens.
- Then write the market exit rules. Decide in advance the performance level below which a market is closed. Businesses find it far harder to exit a market than to enter one, and deciding the exit rule while everyone is still optimistic is the only time it can be done honestly.

---

## ✅ Quiz Answers

1 — **b**. Currency is a permanent, unchangeable setting.
2 — **b**. Browser and interface language settings, not the query.
3 — **b**. Real searches use local idiom, not dictionary equivalents.
4 — **b**. Localisation adapts the whole offer, not only the words.
5 — **b**. The unit economics were negative before any advertising.

---

**Next lesson:** 14.2 — What Is Changing, and How to Stay Ready
