import { test, expect } from '@playwright/test';

test('Verify Womens high heel point toe shoes after search', async ({ page }) => {
  await page.goto('https://automationteststore.com/index.php');
  await page.locator('input[placeholder="Search Keywords"]').fill('Shoes');
  await page.locator('input[placeholder="Search Keywords"]').press('Enter');
  await expect(page).toHaveTitle('Womens high heel point toe stiletto sandals ankle strap court shoes');
});
