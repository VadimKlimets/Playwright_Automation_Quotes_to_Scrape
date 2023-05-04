import { test, expect } from '@playwright/test'; // Import the "test" and "expect" functions from the Playwright test library.
import { LoginPage } from '../pages/login'; // Import the "LoginPage" module from a local file named "login.js".

test('TC7_NAVIGATION_login_invalid_empty_credentials.spec.js', async ({ page }) => {

  await page.setViewportSize({ width: 1920, height: 1080 }); // set viewport to full screen size

  const Login = new LoginPage(page);
  await Login.gotoLoginPage();
  await Login.login(' ', ' ');
  await expect(page).toHaveURL('http://quotes.toscrape.com/login');

  page.close();
  browser.close();
});