#!/usr/bin/env bash
# Replace every lesson H1 with the plain-English title, and fix the
# "Next lesson" pointer at the foot of each file to match.
set -e
cd "$(dirname "$0")/.."

MAP="_build/titles.tsv"

# 1. rewrite each H1
while IFS=$'\t' read -r file num title; do
  [ -z "$file" ] && continue
  [ -f "$file" ] || { echo "missing: $file"; continue; }
  awk -v n="$num" -v t="$title" 'NR==1{print "# Lesson " n " — " t; next} {print}' \
    "$file" > "$file.tmp" && mv "$file.tmp" "$file"
done < "$MAP"

# 2. rebuild the "Next lesson:" line at the foot of each file
prev_file=""
while IFS=$'\t' read -r file num title; do
  [ -z "$file" ] && continue
  if [ -n "$prev_file" ]; then
    # point the PREVIOUS file at this one
    sed -i "s|^\*\*Next lesson:\*\*.*|**Next lesson:** $num — $title|" "$prev_file"
  fi
  prev_file="$file"
done < "$MAP"

echo "retitled $(wc -l < "$MAP") lessons"
