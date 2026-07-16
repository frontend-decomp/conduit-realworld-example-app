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
  },
});
