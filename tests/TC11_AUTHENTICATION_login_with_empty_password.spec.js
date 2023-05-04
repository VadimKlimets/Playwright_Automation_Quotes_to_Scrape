import { test, expect } from '@playwright/test'; // Import the "test" and "expect" functions from the Playwright test library.
// import { LoginPage } from '../pages/login'; // Import the "LoginPage" module from a local file named "login.js".

test('TC11_AUTHENTICATION_login_with_empty_password.spec.js', async ({ page }) => {

  await page.setViewportSize({ width: 1920, height: 1080 }); // set viewport to full screen size

  // Navigate to the page with the form
  await page.goto('https://quotes.toscrape.com/login');

  await page.fill('#username', 'admin'); // Fill out the field 'Username' with VALID data
  await page.fill('#password', ''); // Fill out field 'Password' with INVALID data
  await page.locator('//body/div[1]/form[1]/input[2]').click();

  const errorMessage = await page.locator('body:nth-child(2) div.container form:nth-child(2) > p.error:nth-child(5)').textContent()

  console.log('Error message is ' + errorMessage);

  expect (errorMessage.includes('please, provide your password.')).toBeTruthy() // Partially assert error validation message for the field 'Password'

  expect (errorMessage === 'Error while logging in: please, provide your password.').toBeTruthy() // Strictly assert error validation message for the field 'Password'

  page.close();
});