import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from './support/world.js';

const getProductSlug = (name: string) =>
  name.toLowerCase().replace(/\s+/g, '-');

When(
  'I add the product {string} to the cart',
  async function (this: CustomWorld, productName: string) {
    const slug = getProductSlug(productName);
    const locator = this.page.locator(`[data-test="add-to-cart-${slug}"]`);
    await expect(locator).toBeVisible();
    await locator.click();
  }
);

Given(
  'I have added the product {string} to the cart',
  async function (this: CustomWorld, productName: string) {
    // Login first
    await this.page.goto('https://www.saucedemo.com');
    await this.page.locator('#user-name').fill('standard_user');
    await this.page.locator('#password').fill('secret_sauce');
    await this.page.locator('#login-button').click();
    await this.page.waitForURL(/inventory\.html/);
    await expect(this.page.locator('[data-test="title"]')).toHaveText('Products');

    // Now add the product
    const slug = getProductSlug(productName);
    const locator = this.page.locator(`[data-test="add-to-cart-${slug}"]`);
    await expect(locator).toBeVisible();
    await locator.click();
  }
);

When(
  'I remove the product {string} from the cart',
  async function (this: CustomWorld, productName: string) {
    const slug = getProductSlug(productName);
    const locator = this.page.locator(`[data-test="remove-${slug}"]`);
    await expect(locator).toBeVisible();
    await locator.click();
  }
);

Then(
  'the cart badge should show {string}',
  async function (this: CustomWorld, count: string) {
    await expect(this.page.locator('.shopping_cart_badge')).toHaveText(count);
  }
);

Then('the cart badge should not be visible', async function (this: CustomWorld) {
  await expect(this.page.locator('.shopping_cart_badge')).toHaveCount(0);
});