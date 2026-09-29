import { test, expect } from '@playwright/test';
import { LoginPageAssignments } from '../pages/LoginPageAssignments';
import { DashboardPage } from '../pages/DashboardPage';


test.describe('Login flow', () => {
  test.only('Retail Banking	Normal case - successful login lands on dashboard area', async ({ page }) => {
    const loginPage = new LoginPageAssignments(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.goto();
    await loginPage.login('demo', 'demo1234');
    
    await expect(page).toHaveURL('/dashboard');
   
    await dashboardPage.validateAvailableBalance();
   
  });
  
  test('Corporate Banking - successful login lands on dashboard area', async ({ page }) => {
    const loginPage = new LoginPageAssignments(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.goto();
    await loginPage.login('demo2', 'demo1234');
    
    await expect(page).toHaveURL('/dashboard');
   
    await dashboardPage.validateAvailableBalance();
    
  });

  test('NRI Services	Boundary case', async ({ page }) => {
    const loginPage = new LoginPageAssignments(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.goto();
    await loginPage.login('demo3', 'demo1234');
    
    await expect(page).toHaveURL('/dashboard');
   
    await dashboardPage.validateAvailableBalance();
   
  });
});
