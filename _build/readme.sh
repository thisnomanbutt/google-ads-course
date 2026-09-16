#!/usr/bin/env bash
# Rebuild README.md from titles.tsv so the index can never drift from the lessons.
set -e
cd "$(dirname "$0")/.."
OUT="README.md"

phase_name () {
  case "$1" in
    0) echo "Know Your Numbers Before You Spend" ;;
    1) echo "How Google Ads Works, and Setting It Up" ;;
    2) echo "Building Your First Search Campaigns" ;;
    3) echo "Bidding and Other Ad Types" ;;
    4) echo "Tracking and Reading Your Results" ;;
    5) echo "Running Big Accounts and Clients" ;;
    6) echo "Automation and Working With Data" ;;
    7) echo "Proving What Works, and Growing" ;;
  esac
}
phase_of () { case "$1" in 00) echo 0;; 01|02) echo 1;; 03|04) echo 2;; 05|06) echo 3;;
  07|08) echo 4;; 09|10) echo 5;; 11|12) echo 6;; 13|14) echo 7;; esac; }
module_name () {
  case "$1" in
    00) echo "Know What a Customer Is Worth" ;;      01) echo "How Google Ads Really Works" ;;
    02) echo "Set Up Your Account and Tracking" ;;   03) echo "Choosing the Right Keywords" ;;
    04) echo "Writing Ads and Building Campaigns" ;; 05) echo "How to Set Your Bids" ;;
    06) echo "Shopping, PMax, YouTube and Display" ;; 07) echo "Advanced Tracking That Sees Everything" ;;
    08) echo "Reading Reports and Fixing Problems" ;; 09) echo "Managing Large, Complex Accounts" ;;
    10) echo "Handling Big Budgets and Clients" ;;   11) echo "Save Time With Scripts and Automation" ;;
    12) echo "Use Your Own Customer Data" ;;         13) echo "Prove What Actually Works" ;;
    14) echo "Selling Abroad and Staying Current" ;;
  esac
}

cat > "$OUT" <<'HEAD'
# Google Ads Mastery — Complete Course

**90 lessons · 8 phases · 15 modules**

*Learn to think like a business owner, not just a button-pusher.*

---

## How each lesson is built

Every lesson follows the same shape, so learners always know where they are:

- **Quick recap** — one or two lines linking back to the last lesson
- **What you will learn** — 3 to 5 plain points
- **Main content** — short sections, simple tables, step-by-step for anything technical
- **Real-world example** — one story with real numbers
- **📊 Mastery score** — how hard this lesson is
- **📌 Key takeaways** — 5 points
- **☑️ Self-assessment** — 5 honest questions
- **🧠 Quiz** — 5 questions, answers at the end
- **💪 Practical exercise** — under 30 to 45 minutes
- **🎯 Expert challenge** — a harder task for advanced learners

**Written in simple English.** Short sentences, active voice, and every technical
word explained the first time it appears.

---

## The people in the examples

The same five businesses run through all 90 lessons, so learners follow one story
instead of meeting a new company every time:

| Who | Business | What they teach |
|---|---|---|
| **Sana** | Water filter shop, Karachi | Selling products online |
| **Dr. Ayesha** | Dental clinic, Lahore | Getting local customers |
| **TaskFlow** | Software company, Islamabad | Selling to other businesses |
| **Bilal** | Freelancer, then consultant | Working with clients |
| **Ali** | The one who gets it wrong | What happens if you skip Module 0 |

---

HEAD

last_phase=""
last_mod=""
while IFS=$'\t' read -r file num title; do
  [ -z "$file" ] && continue
  mod="${file:0:2}"
  ph="$(phase_of "$mod")"
  if [ "$ph" != "$last_phase" ]; then
    [ -n "$last_phase" ] && echo "" >> "$OUT"
    echo "## Phase $ph — $(phase_name "$ph")" >> "$OUT"
    last_phase="$ph"; last_mod=""
  fi
  if [ "$mod" != "$last_mod" ]; then
    echo "" >> "$OUT"
    echo "**Module ${mod#0} · $(module_name "$mod")**" >> "$OUT"
    echo "" >> "$OUT"
    echo "| # | Lesson |" >> "$OUT"
    echo "|---|---|" >> "$OUT"
    last_mod="$mod"
  fi
  echo "| $num | [$title]($file) |" >> "$OUT"
done < _build/titles.tsv

cat >> "$OUT" <<'FOOT'

---

## Templates and tools included

| File | Used in | What it is |
|---|---|---|
| [funnel-math-calculator.csv](templates/funnel-math-calculator.csv) | 0.3 | A spreadsheet that works out your margin, breakeven ROAS and max cost per customer |
| [appeal-letter-template.md](templates/appeal-letter-template.md) | 1.5 | Four ready-to-use letters for when your account is suspended |
| [universal-negative-keyword-list.txt](templates/universal-negative-keyword-list.txt) | 3.4 | A long list of words to block, sorted into groups |
| [100-point-account-audit.md](templates/100-point-account-audit.md) | 13.4 | The full account check, with scoring |

**Five free Google Ads scripts.** Each one has a simple settings block at the top:

| File | Used in | Risk |
|---|---|---|
| [01-ngram-analyser.js](scripts/01-ngram-analyser.js) | 3.4, 11.2 | 🟢 Read only |
| [02-anomaly-detector.js](scripts/02-anomaly-detector.js) | 8.4, 11.2 | 🟢 Read only |
| [03-link-checker.js](scripts/03-link-checker.js) | 2.5, 11.2 | 🟢 Read only |
| [04-budget-pacer.js](scripts/04-budget-pacer.js) | 10.2, 11.2 | 🟡 Can change budgets — start with `MAKE_CHANGES: false` |
| [05-quality-score-tracker.js](scripts/05-quality-score-tracker.js) | 4.5, 11.2 | 🟢 Read only |

---

## Teach it in order

The lessons build on each other. **Phase 0 must come first.**

The whole idea of the course is that you learn what a customer is worth *before*
you open Google Ads. Learners who jump straight to building campaigns end up with
exactly the problem the course exists to fix.

---

## Notes for the course owner

**Ideas that repeat — keep these if you edit anything:**

1. **Google Ads is a loudspeaker** (0.1) — used again and again
2. **The five things you control** — offer, numbers, data, message, decisions (0.1, 11.1)
3. **"Google finds whatever you ask it to find"** (0.6, 2.3, 11.1)
4. **The dashboard gets worse while the business gets better** — happens nine times, listed in 14.5
5. **"Check with a professional"** on money, tax, legal and privacy points (0.7, 6.7, 7.1, 7.5, 12.1)

**Lessons to review most often** — these change fastest:

- 0.7 (banking, company setup, tax)
- 1.1 (AI answers in search results)
- 7.5 (Consent Mode, privacy law)
- 11.2 (Google Ads Scripts)
- 14.2 (built on ideas, not features — but check the product names)

**Rebuilding the web version:** edit any lesson, then run `bash _build/build.sh`
then publish `index.html` again (or run `bash publish.sh`).

**About the examples:** Sana, Dr. Ayesha, TaskFlow, Bilal and Ali are made-up
businesses used to teach. The numbers are realistic and match across all 90
lessons, but they are teaching examples, not real companies. This is said plainly
at the end of Lesson 14.5.
FOOT

echo "README rebuilt: $(grep -c '^| [0-9]' "$OUT") lessons listed"
