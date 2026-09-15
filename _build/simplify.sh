#!/usr/bin/env bash
# Plain-English pass over all 81 lessons:
#   1. rewrite the Phase/Module line under each title
#   2. swap formal vocabulary for everyday words
# Only touches lesson .md files — never scripts/ or code templates.
set -e
cd "$(dirname "$0")/.."

phase_for () {
  case "$1" in
    00) echo "0|Know Your Numbers Before You Spend" ;;
    01|02) echo "1|How Google Ads Works, and Setting It Up" ;;
    03|04) echo "2|Building Your First Search Campaigns" ;;
    05|06) echo "3|Bidding and Other Ad Types" ;;
    07|08) echo "4|Tracking and Reading Your Results" ;;
    09|10) echo "5|Running Big Accounts and Clients" ;;
    11|12) echo "6|Automation and Working With Data" ;;
    13|14) echo "7|Proving What Works, and Growing" ;;
  esac
}
module_for () {
  case "$1" in
    00) echo "0|Know What a Customer Is Worth" ;;
    01) echo "1|How Google Ads Really Works" ;;
    02) echo "2|Set Up Your Account and Tracking" ;;
    03) echo "3|Choosing the Right Keywords" ;;
    04) echo "4|Writing Ads and Building Campaigns" ;;
    05) echo "5|How to Set Your Bids" ;;
    06) echo "6|Shopping, PMax, YouTube and Display" ;;
    07) echo "7|Advanced Tracking That Sees Everything" ;;
    08) echo "8|Reading Reports and Fixing Problems" ;;
    09) echo "9|Managing Large, Complex Accounts" ;;
    10) echo "10|Handling Big Budgets and Clients" ;;
    11) echo "11|Save Time With Scripts and Automation" ;;
    12) echo "12|Use Your Own Customer Data" ;;
    13) echo "13|Prove What Actually Works" ;;
    14) echo "14|Selling Abroad and Staying Current" ;;
  esac
}

for f in [0-9][0-9]-[0-9][0-9]-*.md; do
  mod="${f:0:2}"
  IFS='|' read -r pn pname <<< "$(phase_for "$mod")"
  IFS='|' read -r mn mname <<< "$(module_for "$mod")"

  # 1. replace the italic Phase/Module line wherever it sits near the top
  awk -v line="*Phase $pn · $pname — Module $mn · $mname*" '
    NR<=6 && /^\*Phase .*Module .*\*$/ { print line; next } { print }
  ' "$f" > "$f.t" && mv "$f.t" "$f"

  # 2. plain-English vocabulary — longest forms first so they win
  sed -i \
    -e 's/\bRequirements\b/What you need/g' \
    -e 's/\brequirements\b/what you need/g' \
    -e 's/\bRequirement\b/What you need/g' \
    -e 's/\brequirement\b/need/g' \
    -e 's/\bImplementation\b/Setup/g' \
    -e 's/\bimplementation\b/setup/g' \
    -e 's/\bimplementing\b/setting up/g' \
    -e 's/\bimplemented\b/set up/g' \
    -e 's/\bImplement\b/Set up/g' \
    -e 's/\bimplement\b/set up/g' \
    -e 's/\bidentifying\b/finding/g' \
    -e 's/\bidentified\b/found/g' \
    -e 's/\bidentifies\b/finds/g' \
    -e 's/\bIdentify\b/Find/g' \
    -e 's/\bidentify\b/find/g' \
    -e 's/\bsignificantly\b/a lot/g' \
    -e 's/\bSignificantly\b/A lot/g' \
    -e 's/\bsubstantially\b/a lot/g' \
    -e 's/\bsubstantial\b/large/g' \
    -e 's/\bconsiderably\b/much/g' \
    -e 's/\bConsiderably\b/Much/g' \
    -e 's/\bconsiderable\b/large/g' \
    -e 's/\bgenuinely\b/really/g' \
    -e 's/\bGenuinely\b/Really/g' \
    -e 's/\bsufficient\b/enough/g' \
    -e 's/\bSufficient\b/Enough/g' \
    -e 's/\badequate\b/enough/g' \
    -e 's/\bAdequate\b/Enough/g' \
    -e 's/\brequires\b/needs/g' \
    -e 's/\brequired\b/needed/g' \
    -e 's/\brequiring\b/needing/g' \
    -e 's/\bRequire\b/Need/g' \
    -e 's/\brequire\b/need/g' \
    -e 's/\bensures\b/makes sure/g' \
    -e 's/\bEnsure\b/Make sure/g' \
    -e 's/\bensure\b/make sure/g' \
    -e 's/\bVerify\b/Check/g' \
    -e 's/\bverify\b/check/g' \
    -e 's/\bverifies\b/checks/g' \
    -e 's/\bverified\b/checked/g' \
    -e 's/\bdetermines\b/works out/g' \
    -e 's/\bDetermine\b/Work out/g' \
    -e 's/\bdetermine\b/work out/g' \
    -e 's/\bestablished\b/set up/g' \
    -e 's/\bEstablish\b/Set up/g' \
    -e 's/\bestablish\b/set up/g' \
    -e 's/\bapproximately\b/about/g' \
    -e 's/\bApproximately\b/About/g' \
    -e 's/\bAdditional\b/Extra/g' \
    -e 's/\badditional\b/extra/g' \
    -e 's/\bmaintains\b/keeps/g' \
    -e 's/\bMaintain\b/Keep/g' \
    -e 's/\bmaintain\b/keep/g' \
    -e 's/\bnumerous\b/many/g' \
    -e 's/\bmajority\b/most/g' \
    -e 's/\boptimal\b/best/g' \
    -e 's/\bfacilitate\b/help/g' \
    -e 's/\bmitigate\b/reduce/g' \
    -e 's/\bdeliberately\b/on purpose/g' \
    -e 's/\bDeliberately\b/On purpose/g' \
    -e 's/\bprecisely\b/exactly/g' \
    -e 's/\bPrecisely\b/Exactly/g' \
    -e 's/\bessentially\b/basically/g' \
    -e 's/\bEssentially\b/Basically/g' \
    -e 's/\bdemonstrates\b/shows/g' \
    -e 's/\bDemonstrate\b/Show/g' \
    -e 's/\bdemonstrate\b/show/g' \
    -e 's/\bindicates\b/shows/g' \
    -e 's/\bindicate\b/show/g' \
    -e 's/\bobtain\b/get/g' \
    -e 's/\bobtained\b/got/g' \
    -e 's/\bcommence\b/start/g' \
    -e 's/\bterminate\b/stop/g' \
    -e 's/\bnotwithstanding\b/even so/g' \
    -e 's/\bPrior to\b/Before/g' \
    -e 's/\bprior to\b/before/g' \
    -e 's/\bsubsequently\b/later/g' \
    -e 's/\bInitially\b/At first/g' \
    -e 's/\binitially\b/at first/g' \
    -e 's/\bassessment\b/check/g' \
    -e 's/\bArchitecture\b/Structure/g' \
    -e 's/\barchitecture\b/structure/g' \
    -e 's/\bProtocol\b/Process/g' \
    -e 's/\bprotocols\b/processes/g' \
    -e 's/\bprotocol\b/process/g' \
    "$f"
done

echo "simplified $(ls -1 [0-9][0-9]-[0-9][0-9]-*.md | wc -l) lessons"
