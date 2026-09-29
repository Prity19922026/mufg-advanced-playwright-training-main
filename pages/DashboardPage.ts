import { Page, Locator, expect } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly heading: Locator;
  readonly balanceLabel: Locator;
   readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('h1');
    this.balanceLabel = page.getByTestId('account-balance');
  this.logoutButton = page.getByRole('link', { name: /Log Out/i });
  }

 async validateAvailableBalance() {
     await expect(this.balanceLabel).toHaveText(/₹1,25,000.50/i);
  }

  async logout() {
    await this.logoutButton.click();
  }

}