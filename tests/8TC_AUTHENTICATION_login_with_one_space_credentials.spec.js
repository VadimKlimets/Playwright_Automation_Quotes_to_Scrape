import { test, expect } from '@playwright/test'; // Import the "test" and "expect" functions from the Playwright test library.
import { LoginPage } from '../pages/1POM_login' // Import the "LoginPage" module from a local file named "1POM_login.js".

test('8TC_AUTHENTICATION_login_with_one_space_credentials.spec.js', async ({ page }) => {

  await page.setViewportSize({ width: 1920, height: 1080 }); // set viewport to full screen size

  const Login = new LoginPage(page);
  await Login.gotoLoginPage();
  await Login.login(' ', ' ');
  await expect(page).toHaveURL('http://quotes.toscrape.com/login');

  page.close();
  browser.close();
});