
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import { BLOG_POSTS } from './data/blogData';

export { BLOG_POSTS };

export function render(url: string) {
  const html = renderToString(
    <App initialPath={url} />
  );

  return { html };
}
