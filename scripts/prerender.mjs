
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const rootDir = process.cwd();
const distDir = path.join(rootDir, 'dist');
const serverEntry = path.join(rootDir, 'dist-server', 'entry-server.js');

const siteUrl = 'https://katrinarozenbaha.lv';

const { render, BLOG_POSTS } = await import(
  pathToFileURL(serverEntry).href
);

const template = fs.readFileSync(
  path.join(distDir, 'index.html'),
  'utf-8'
);

const pages = [
  {
    url: '/',
    title: 'Katrīna Rozenbaha | Klīniskā psiholoģe | Rīgā un tiešsaistē',
    description:
      'Klīniskā psiholoģe Katrīna Rozenbaha. Psiholoģiskās konsultācijas Rīgā un tiešsaistē. EMDR un shēmu terapija.',
  },
  {
    url: '/blogs/',
    title: 'Psiholoģijas blogs | Katrīna Rozenbaha',
    description:
      'Raksti par psiholoģiju, emocionālo veselību, stresu, izdegšanu, EMDR un shēmu terapiju.',
  },
  ...BLOG_POSTS.map((post) => ({
    url: `/blogs/${post.slug}/`,
    title: `${post.title} | Katrīna Rozenbaha`,
    description: post.excerpt,
    post,
  })),
];

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function createMetadata(page) {
  const canonical = `${siteUrl}${page.url}`;

  const tags = [
    `<title>${escapeHtml(page.title)}</title>`,
    `<meta name="description" content="${escapeHtml(page.description)}">`,
    `<link rel="canonical" href="${canonical}">`,
    `<meta property="og:type" content="${page.post ? 'article' : 'website'}">`,
    `<meta property="og:title" content="${escapeHtml(page.title)}">`,
    `<meta property="og:description" content="${escapeHtml(page.description)}">`,
    `<meta property="og:url" content="${canonical}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${escapeHtml(page.title)}">`,
    `<meta name="twitter:description" content="${escapeHtml(page.description)}">`,
  ];

  if (page.post?.featuredImage) {
    const imageUrl = new URL(page.post.featuredImage, siteUrl).href;
    tags.push(
      `<meta property="og:image" content="${escapeHtml(imageUrl)}">`,
      `<meta name="twitter:image" content="${escapeHtml(imageUrl)}">`
    );
  }

  const structuredData = page.post
    ? {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: page.post.title,
        description: page.post.excerpt,
        image: new URL(page.post.featuredImage, siteUrl).href,
        author: {
          '@type': 'Person',
          name: page.post.author,
        },
        mainEntityOfPage: canonical,
        publisher: {
          '@type': 'Person',
          name: 'Katrīna Rozenbaha',
          url: siteUrl,
        },
      }
    : {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: page.title,
        description: page.description,
        url: canonical,
      };

  tags.push(
    `<script type="application/ld+json">${JSON.stringify(structuredData).replace(/</g, '\\u003c')}</script>`
  );

  return tags.join('\n    ');
}

for (const page of pages) {
  const { html } = render(page.url);

  let output = template.replace(
    '<div id="root"></div>',
    `<div id="root">${html}</div>`
  );

  output = output.replace('</head>', `    ${createMetadata(page)}\n  </head>`);

  const relativePath =
    page.url === '/'
      ? 'index.html'
      : path.join(page.url.replace(/^\/|\/$/g, ''), 'index.html');

  const outputPath = path.join(distDir, relativePath);

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, output, 'utf-8');

  console.log(`Prerendered: ${page.url}`);
}

console.log(`Finished prerendering ${pages.length} pages.`);
