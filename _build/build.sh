#!/usr/bin/env bash
# Assembles every lesson, template and script into one browsable page.
set -e
cd "$(dirname "$0")/.."

# Built to the repo root so GitHub Pages serves it as the home page.
# (A folder named _build would be ignored by Pages' Jekyll step.)
OUT="index.html"

emit () {                       # path  kind  title  raw
  printf '<script type="text/markdown" data-key="%s" data-kind="%s" data-title="%s" data-raw="%s">\n' \
    "$1" "$2" "$3" "$4" >> "$OUT"
  # guard: neutralise any literal closing script tag inside the source
  sed 's|</script|<\\/script|g' "$1" >> "$OUT"
  printf '\n</script>\n' >> "$OUT"
}

cat _build/head.html > "$OUT"

# --- platform changes feed (curated by hand; the page cannot call Google) ---
printf '<script type="application/json" id="news-data">\n' >> "$OUT"
sed 's|</script|<\\/script|g' news.json >> "$OUT"
printf '\n</script>\n' >> "$OUT"

# --- overview ---
emit "README.md" "readme" "Overview" "0"

# --- 81 lessons, in curriculum order ---
for f in [0-9][0-9]-[0-9][0-9]-*.md; do
  emit "$f" "lesson" "" "0"
done

# --- templates ---
emit "templates/100-point-account-audit.md"        "template" "The 100-Point Account Audit"   "0"
emit "templates/appeal-letter-template.md"         "template" "Suspension Appeal Letters"     "0"
emit "templates/funnel-math-calculator.csv"        "template" "Funnel Math Calculator"        "1"
emit "templates/universal-negative-keyword-list.txt" "template" "Universal Negative List"     "1"

# --- scripts ---
emit "scripts/01-ngram-analyser.js"        "script" "N-Gram Analyser"       "1"
emit "scripts/02-anomaly-detector.js"      "script" "Anomaly Detector"      "1"
emit "scripts/03-link-checker.js"          "script" "Broken Link Checker"   "1"
emit "scripts/04-budget-pacer.js"          "script" "Budget Pacer"          "1"
emit "scripts/05-quality-score-tracker.js" "script" "Quality Score Tracker" "1"

cat _build/tail.html >> "$OUT"

echo "built: $OUT"
ls -lh "$OUT" | awk '{print "size:", $5}'
grep -c 'type="text/markdown"' "$OUT" | awk '{print "embedded documents:", $1}'
