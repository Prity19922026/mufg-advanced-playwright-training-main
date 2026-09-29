import { Page, Locator, expect } from '@playwright/test';

export class ForgotPasswordPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly retrieveButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.getByLabel('E-mail');
    this.retrieveButton = page.getByRole('button', { name: /retrieve password/i });
  }

  async goto() {
    await this.page.goto('/forgot_password');
  }

  async submitEmail(email: string) {
    await this.emailInput.fill(email);
    await this.retrieveButton.click();
  }
}

