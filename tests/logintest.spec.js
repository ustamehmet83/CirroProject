import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { DashBoardPage } from '../pages/dashboardPage';



test.describe('Login Tests', () => {
  test.beforeEach(async ({ page }) => {
  
    await page.goto('https://cirro.io/users/sign_in');
  });

  test('Successful Login Test', async ({ page }) => {
    
    const loginPage = new LoginPage(page)
    const dashBoardPage = new DashBoardPage(page)

    
    await loginPage.emailField.fill('mehmet_usta@epam.com'); 
    await loginPage.passwordField.fill('Ferahevler83$$'); 
    await loginPage.loginField.click();

   
    await expect(dashBoardPage.visibleText).toBeVisible();
  });

  test.afterEach(async ({ page }) => {
    
    await page.close();
  });
});