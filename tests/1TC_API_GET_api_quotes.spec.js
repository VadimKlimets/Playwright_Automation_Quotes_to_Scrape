// Import the "test" and "expect" functions from the Playwright test library.
import { test, expect } from '@playwright/test';

// Define a test case with a name "1TC_API_GET_api_quotes.spec.js" using the "test" function.
// The test is an asynchronous function that takes an object with a "request" property.
// Send a GET request to the API endpoint "https://quotes.toscrape.com/api/quotes".
// Store the response object in a variable named "response".

test("1TC_API_GET_api_quotes.spec.js", async ({ request }) => {
  const response = await request.get(
    'https://quotes.toscrape.com/api/quotes'
  );

  expect(response.status()).toBe(200);                      // Assert that the response status code is 200 using the "expect" function.
  const body = await response.json();                       // Extract the response body as a JSON object and store it in a variable named "body".
  expect(Array.isArray(body.quotes)).toBe(true);            // Use "expect" functions to assert various properties of the response body.

  // The code then uses a series of "expect" statements to assert various properties of the response body.
  // These assertions include checking

  expect(body.quotes.length).toBeGreaterThan(0);            // that "body.quotes" is an array with at least one element, 
  expect(typeof body).toBe('object');                       // that "body" is an object,
  expect(typeof body.quotes[0].author).toBe('object');      // and that the "author" property of the first element in the "quotes" array is an object. 
  expect(Array.isArray(body.quotes[0].tags)).toBe(true);    // Additionally, the code asserts that the "tags" property of the first element in the "quotes" array is an array.
  
  // Finally, the code logs the JSON representation of the response body to the console using "console.log(JSON.stringify(body))".
  console.log(JSON.stringify(body));
});