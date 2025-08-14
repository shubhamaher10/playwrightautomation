import { test, expect, chromium } from '@playwright/test';

test('Two different users login using browser context', async () => {
  const browser = await chromium.launch({headless:false});

  
  const Context1 = await browser.newContext();
  const page1 = await Context1.newPage();

  const Context2 = await browser.newContext();
  const page2 = await Context2.newPage();

  // ----- USER 1 Login -----
  await page1.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
  await page1.waitForTimeout(5000);
  await page1.locator('#input-email').fill('mytest@opencart.com');
  await page1.locator('#input-password').fill('playwright123');
  await page1.locator('input[value="Login"]').click();

  // ----- USER 2 Login -----
  await page2.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
  await page2.waitForTimeout(5000);

  await page2.locator('#input-email').fill('userpw@pm.com');
  await page2.locator('#input-password').fill('Test@123');
  await page2.locator('input[value="Login"]').click();

  // Screenshots (optional)
  await page1.screenshot({ path: 'login-page1.png' });
await page2.screenshot({ path: 'login-page2.png' });

});