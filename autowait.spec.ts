import { test, expect, chromium } from '@playwright/test';

test.setTimeout(60000); // 🔧 Set test timeout to 60s

test('auto wait checks', async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://classic.freecrm.com/register/");

  // ✅ Corrected checkbox name
  await page.locator("input[name='agreeTerms']").click();

  await browser.close();
});
