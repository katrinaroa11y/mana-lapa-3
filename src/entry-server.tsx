import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

export function render(url: string) {
  const html = renderToString(
    <App initialPath={url} />
  );

  return { html };
}
