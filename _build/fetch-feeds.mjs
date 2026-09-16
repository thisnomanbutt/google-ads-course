/**
 * Pulls official announcement feeds and merges them with the hand-written
 * entries in news-curated.json, writing the result to news.json.
 *
 * Runs on GitHub Actions, NOT in the browser. That matters: browsers cannot
 * fetch these feeds directly because the publishers do not send CORS headers.
 * Fetching server-side sidesteps that entirely.
 *
 * Every feed URL below was checked live before being added here.
 */

import { readFile, writeFile } from 'node:fs/promises';

const FEEDS = [
  {
    id: 'google-ads',
    source: 'Google Ads',
    url: 'https://blog.google/products/ads-commerce/rss/',
    note: 'Google Ads & Commerce blog — where new features are announced first',
    max: 8
  },
  {
    id: 'ads-api',
    source: 'Ads API',
    url: 'https://feeds.feedburner.com/GoogleAdsDeveloperBlog',
    note: 'Google Ads Developer blog — shows changes and sunsets before the main blog',
    max: 6
  },
  {
    id: 'marketing-platform',
    source: 'Marketing Platform',
    url: 'https://blog.google/products/marketingplatform/rss/',
    note: 'Google Marketing Platform — Analytics, Tag Manager and Looker Studio changes',
    max: 6
  },
  {
    id: 'search',
    source: 'Google Search',
    url: 'https://developers.google.com/search/blog/feed.xml',
    note: 'Google Search Central — changes to how search results work',
    max: 5
  }
];

/* ---------- tiny RSS + Atom reader ---------- */

const strip = (s = '') =>
  s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();

const tag = (xml, name) => {
  const m = xml.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`, 'i'));
  return m ? strip(m[1]) : '';
};

const linkOf = (xml) => {
  // Atom: <link rel="alternate" href="...">
  const atom = xml.match(/<link[^>]*rel=["']alternate["'][^>]*href=["']([^"']+)["']/i)
            || xml.match(/<link[^>]*href=["']([^"']+)["'][^>]*\/?>/i);
  if (atom) return atom[1];
  // RSS: <link>...</link>
  const rss = xml.match(/<link>([\s\S]*?)<\/link>/i);
  return rss ? strip(rss[1]) : '';
};

const isoDate = (raw) => {
  if (!raw) return '';
  const d = new Date(raw);
  return isNaN(d) ? '' : d.toISOString().slice(0, 10);
};

function parseFeed(xml, feed) {
  const blocks = xml.match(/<(item|entry)[\s>][\s\S]*?<\/\1>/gi) || [];
  return blocks.slice(0, feed.max).map((block, i) => {
    const title = tag(block, 'title');
    const date =
      isoDate(tag(block, 'pubDate')) ||
      isoDate(tag(block, 'published')) ||
      isoDate(tag(block, 'updated'));
    let body = tag(block, 'description') || tag(block, 'summary') || tag(block, 'content');
    if (body.length > 300) body = body.slice(0, 297).replace(/\s\S*$/, '') + '…';
    return {
      id: `${feed.id}-${date || 'x'}-${i}`,
      date,
      type: 'news',
      source: feed.source,
      title,
      body,
      url: linkOf(block),
      live: true
    };
  }).filter((e) => e.title && e.url);
}

/* ---------- run ---------- */

const curated = JSON.parse(await readFile('news-curated.json', 'utf8'));

/* What did we already know about last time? Anything not in here is new,
   and new items are what trigger the email. */
let knownIds = new Set();
let hadPrevious = false;
try {
  const prev = JSON.parse(await readFile('news.json', 'utf8'));
  const prevLive = (prev.entries || []).filter((e) => e.live);
  hadPrevious = prevLive.length > 0;
  prevLive.forEach((e) => knownIds.add(e.title));
} catch {
  /* first ever run */
}

const live = [];
const status = [];

for (const feed of FEEDS) {
  try {
    const res = await fetch(feed.url, {
      headers: { 'User-Agent': 'google-ads-course-feed-reader' },
      redirect: 'follow'
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const items = parseFeed(await res.text(), feed);
    if (!items.length) throw new Error('no items parsed');
    live.push(...items);
    status.push(`✅ ${feed.source}: ${items.length} items`);
  } catch (err) {
    // A dead feed must never break the build — the page keeps its last good copy.
    status.push(`⚠️  ${feed.source}: ${err.message} (skipped)`);
  }
}

live.sort((a, b) => (b.date || '').localeCompare(a.date || ''));

const out = {
  ...curated,
  updated: new Date().toISOString(),
  feeds: FEEDS.map((f) => ({ source: f.source, url: f.url, note: f.note })),
  entries: [...live, ...curated.entries]
};

await writeFile('news.json', JSON.stringify(out, null, 2) + '\n');

console.log(status.join('\n'));
console.log(`\nwrote news.json — ${live.length} live + ${curated.entries.length} curated`);

/* ---------- write the email digest, if anything is genuinely new ---------- */

const fresh = live.filter((e) => !knownIds.has(e.title));

if (!hadPrevious) {
  // First run: everything looks new. Don't send a 25-item email.
  console.log('\nFirst run — skipping the notification.');
} else if (!fresh.length) {
  console.log('\nNothing new since last check. No notification.');
} else {
  const today = new Date().toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric'
  });

  let md = `Google published ${fresh.length} new `;
  md += fresh.length === 1 ? 'announcement' : 'announcements';
  md += ` since the last check.\n\n`;

  for (const e of fresh) {
    md += `### ${e.title}\n`;
    md += `**${e.source}** · ${e.date}\n\n`;
    if (e.body) md += `${e.body}\n\n`;
    md += `[Read the announcement](${e.url})\n\n---\n\n`;
  }

  md += `Open your course to read these in the notification panel:\n`;
  md += `https://thisnomanbutt.github.io/google-ads-course/\n\n`;
  md += `*You can close this issue once you have read them. `;
  md += `A new one appears only when Google publishes something new.*\n`;

  await writeFile('.new-items.md', md);
  await writeFile('.new-items-title.txt',
    `${fresh.length} new Google Ads update${fresh.length === 1 ? '' : 's'} — ${today}`);

  console.log(`\n${fresh.length} new item(s) — notification will be sent.`);
}
