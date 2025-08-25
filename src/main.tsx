import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// This optional code is used to register a service worker.
// Note this is not required for Create React App.
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note that this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.register();
