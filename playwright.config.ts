import { defineConfig } from '@playwright/test';
import { baseConfig } from './e2e/playwright.base';

process.env.API_BASE ??= 'http://localhost:3000/api';

export default defineConfig({
  ...baseConfig,
  use: { ...baseConfig.use, baseURL: 'http://localhost:3000' },
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
    // React.StrictMode's development-mode double-invoke behavior can cause
    // a single real click to fire its handler twice, which is
    // indistinguishable from a genuine double-request bug to Playwright's
    // network mocking - disable it only for e2e runs, not local `npm run dev`.
    env: { VITE_E2E: 'true' },
  },
});
