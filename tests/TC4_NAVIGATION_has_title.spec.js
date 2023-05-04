import { test, expect } from '@playwright/test'; // Import the "test" and "expect" functions from the Playwright test library.

test('TC4_NAVIGATION_has_title.spec.js', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 }); // set viewport to full screen size
  await page.goto('https://quotes.toscrape.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Quotes/);

  page.close();
  });