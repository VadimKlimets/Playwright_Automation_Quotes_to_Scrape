import { test, expect } from '@playwright/test'; // Import the "test" and "expect" functions from the Playwright test library.

test('TC2_MEASURE_LOAD_TIME_js_delayed.spec.js', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 }); // set viewport to full screen size
  await page.goto('https://quotes.toscrape.com/js-delayed/');
  const startTime = Date.now();
  await page.waitForSelector('text=Tags:');
  const endTime = Date.now();

  const elapsedTime = endTime - startTime;
  console.log(`Text element appeared in ${elapsedTime} ms`);

  page.close();
});
