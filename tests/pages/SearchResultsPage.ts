import { expect, Locator, Page } from '@playwright/test';

export class SearchResultsPage {
  readonly page: Page;
  readonly productLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productLocator = page.locator('text=Womens high heel point toe');
  }

  async expectProductVisible(): Promise<void> {
    await expect(this.productLocator).toBeVisible({ timeout: 10000 });
  }
}
