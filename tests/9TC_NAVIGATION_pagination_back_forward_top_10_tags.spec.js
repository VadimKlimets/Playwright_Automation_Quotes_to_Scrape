
import { test, expect } from '@playwright/test'; // Import the "test" and "expect" functions from the Playwright test library.


test('9TC_NAVIGATION_pagination_back_forward_top_10_tags.spec.js', async ({ page }) => {

  await page.setViewportSize({ width: 1920, height: 1080 }); // set viewport to full screen size

  await page.goto('https://quotes.toscrape.com');

  await page.goto('https://quotes.toscrape.com/page/2/');
  await page.goto('https://quotes.toscrape.com/page/3/');
  await page.goto('https://quotes.toscrape.com/page/4/');
  await page.goto('https://quotes.toscrape.com/page/5/');
  await page.goto('https://quotes.toscrape.com/page/6/');
  await page.goto('https://quotes.toscrape.com/page/7/');
  await page.goto('https://quotes.toscrape.com/page/8/');
  await page.goto('https://quotes.toscrape.com/page/9/');
  await page.goto('https://quotes.toscrape.com/page/10/');

  await page.goBack();
  await page.goBack();
  await page.goBack();
  await page.goBack();
  await page.goBack();
  await page.goBack();
  await page.goBack();
  await page.goBack();
  await page.goBack();

  await page.goForward();
  await page.goForward();
  await page.goForward();
  await page.goForward();
  await page.goForward();
  await page.goForward();
  await page.goForward();
  await page.goForward();
  await page.goForward();

  await page.goBack();
  await page.goBack();
  await page.goBack();
  await page.goBack();
  await page.goBack();
  await page.goBack();
  await page.goBack();
  await page.goBack();
  await page.goBack();

  await page.goto('https://quotes.toscrape.com');

  await page.locator('//body/div[1]/div[2]/div[2]/span[1]/a[1]').click();
  await page.locator('//body/div[1]/div[2]/div[2]/span[2]/a[1]').click();
  await page.locator('//body/div[1]/div[2]/div[2]/span[3]/a[1]').click();
  await page.locator('div.container div.row:nth-child(3) div.col-md-4.tags-box span.tag-item:nth-child(5) > a.tag').click();
  await page.locator('div.container div.row:nth-child(3) div.col-md-4.tags-box span.tag-item:nth-child(6) > a.tag').click();
  await page.locator('div.container div.row:nth-child(3) div.col-md-4.tags-box span.tag-item:nth-child(7) > a.tag').click();
  await page.locator('//body/div[1]/div[2]/div[2]/span[7]/a[1]').click();
  await page.locator('//body/div[1]/div[2]/div[2]/span[8]/a[1]').click();
  await page.locator('div.container div.row:nth-child(3) div.col-md-4.tags-box span.tag-item:nth-child(10) > a.tag').click();
  await page.locator('div.container div.row:nth-child(3) div.col-md-4.tags-box span.tag-item:nth-child(11) > a.tag').click();
  
  await page.goto('https://quotes.toscrape.com');

  await page.close();
});



