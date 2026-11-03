
import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

hydrateRoot(
  rootElement,
  <StrictMode>
    <App initialPath={window.location.pathname} />
  </StrictMode>
);
