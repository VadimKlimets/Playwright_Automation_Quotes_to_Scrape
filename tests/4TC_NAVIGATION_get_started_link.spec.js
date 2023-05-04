import { test, expect } from '@playwright/test'; // Import the "test" and "expect" functions from the Playwright test library.

test('4TC_NAVIGATION_get_started_link.spec.js', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 }); // set viewport to full screen size
  await page.goto('https://quotes.toscrape.com/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Quotes to Scrape' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*toscrape/);

  page.close();
});
