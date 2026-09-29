import { Page, Locator, expect } from '@playwright/test';

export class SecureAreaPage {
  readonly page: Page;
  readonly heading: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('h2');
    this.logoutButton = page.getByRole('link', { name: /logout/i });
  }

  async expectLoaded() {
    await expect(this.heading).toHaveText(/Secure Area/i);
  }

  async logout() {
    await this.logoutButton.click();
  }
}