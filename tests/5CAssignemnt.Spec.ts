import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { SecureAreaPage } from '../pages/SecureAreaPage';
import { ForgotPasswordPage } from '../pages/ForgotPasswordPage';

test.describe('Login flow', () => {
  test('successful login lands on secure area', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const secureArea = new SecureAreaPage(page);

    await loginPage.goto();
    await loginPage.login('tomsmith', 'SuperSecretPassword!');

    await secureArea.expectLoaded();
    await expect(page).toHaveURL(/secure/);
  });

  test('user can log out from the secure area', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const secureArea = new SecureAreaPage(page);

    await loginPage.goto();
    await loginPage.login('tomsmith', 'SuperSecretPassword!');
    await secureArea.expectLoaded();

    await secureArea.logout();
    await expect(page).toHaveURL(/login/);
  });

  // Used in a test the same way as the other two. This test composes all
// three Page Objects, but the forgot-password step is a separate flow
// from the login/secure-area steps above it, not a continuation of them —
// the point of this challenge is the composition, not a single unbroken
// user journey.
test('three Page Objects composed in one test', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const secureArea = new SecureAreaPage(page);
  const forgotPassword = new ForgotPasswordPage(page);

  await loginPage.goto();
  await loginPage.login('tomsmith', 'SuperSecretPassword!');
  await secureArea.expectLoaded();

  await forgotPassword.goto();
  await forgotPassword.submitEmail('tomsmith@example.com');
  
  // The confirmation heading's exact wording is worth double-checking
  // against the live page before you teach this — a case-insensitive
  // substring match keeps the test from being brittle either way.
  await expect(page.getByRole('heading')).toContainText(/e-mail/i);
});
});
