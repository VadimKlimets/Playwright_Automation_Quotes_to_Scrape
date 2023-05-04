import { test, expect } from '@playwright/test'; // Import the "test" and "expect" functions from the Playwright test library.

test('TC10_AUTHENTICATION_login_with_empty_username.spec.js', async ({ page }) => {

  await page.setViewportSize({ width: 1920, height: 1080 }); // set viewport to full screen size

  // Navigate to the page with the form
  await page.goto('https://quotes.toscrape.com/login');

  await page.fill('#username', ''); // Fill out the field 'Username' with INVALID data
  await page.fill('#password', 'admin'); // Fill out field 'Password' with VALID data
  await page.locator('//body/div[1]/form[1]/input[2]').click();

  const errorMessage = await page.locator('body:nth-child(2) div.container form:nth-child(2) > p.error:nth-child(5)').textContent()

  console.log('Error message is ' + errorMessage);

  expect (errorMessage.includes('please, provide your username.')).toBeTruthy() // Partially assert error validation message for the field 'Username'

  expect (errorMessage === 'Error while logging in: please, provide your username.').toBeTruthy() // Strictly assert error validation message for the field 'Username'

  page.close();
});