import { test, expect } from '@playwright/test'; // Import the "test" and "expect" functions from the Playwright test library.
import { LoginPage } from '../pages/1POM_login' // Import the "LoginPage" module from a local file named "1POM_login.js".

test('3TC_NAVIGATION_scroll.spec.js', async ({ page }) => {

  await page.setViewportSize({ width: 1920, height: 1080 }); // set viewport to full screen size

  await page.goto('https://quotes.toscrape.com/scroll');

  let footer = page.locator('text=Quotes by:');

  await footer.scrollIntoViewIfNeeded;
  await page.waitForTimeout(2000);

  await page.goto('https://quotes.toscrape.com/scroll');
  await page.getByRole('link', { name: 'GoodReads.com' }).click();

  page.close();
});
