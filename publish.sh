#!/usr/bin/env bash
# Rebuild the page and push it to GitHub.
#
#   bash publish.sh                 -> rebuild + commit + push
#   bash publish.sh "my message"    -> same, with your own commit message
#
# First time only, connect the repo:
#   git remote add origin https://github.com/YOUR-USERNAME/google-ads-course.git
set -e
cd "$(dirname "$0")"

echo "Rebuilding index.html from the lesson files..."
bash _build/build.sh

if [ -z "$(git status --porcelain)" ]; then
  echo "Nothing changed. Site is already up to date."
  exit 0
fi

MSG="${1:-Update course content}"
git add -A
git commit -q -m "$MSG"

if git remote get-url origin >/dev/null 2>&1; then
  git push -u origin main
  echo ""
  echo "Pushed. GitHub Pages usually updates within a minute."
else
  echo ""
  echo "Committed locally. No GitHub repo connected yet — run this once:"
  echo "  git remote add origin https://github.com/YOUR-USERNAME/google-ads-course.git"
  echo "  git push -u origin main"
fi
