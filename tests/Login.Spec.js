// const {test, expect} = require('@playwright/test');


// test('Login', async ({ page }) => {
//   // Arrange — get to a known starting state
// await page.goto('https://www.saucedemo.com');

// // Act — the one thing this test is about
//   await page.getByLabel('Username').fill('standard_user');
//   await page.getByLabel('Password').fill('secret_sauce');
//   await page.getByRole('button', { name: /login/i }).click();

//   // Assert — confirm the outcome
//   await expect(page.locator('//div[@class="app_logo"]')).toHaveText("Swag Labs");
//   await page.locator("button[id='add-to-cart-sauce-labs-backpack']").click();
//  await page.pause();
//  await expect(page.locator("span[class='shopping_cart_badge']")).toHaveText("1");

// });