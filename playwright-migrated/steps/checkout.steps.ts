import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from './support/world.js';

When(
  'I complete checkout with first name {string} last name {string} and postal code {string}',
  async function (this: CustomWorld, first: string, last: string, postal: string) {
    // Go to cart
    await this.page.locator('.shopping_cart_link').click();
    // Checkout
    await this.page.locator('[data-test="checkout"]').click();
    // Fill info
    await this.page.locator('[data-test="firstName"]').fill(first);
    await this.page.locator('[data-test="lastName"]').fill(last);
    await this.page.locator('[data-test="postalCode"]').fill(postal);
    await this.page.locator('[data-test="continue"]').click();
    // Finish
    await this.page.locator('[data-test="finish"]').click();
  }
);

Then('I should see the checkout complete page', async function (this: CustomWorld) {
  await expect(this.page.locator('[data-test="complete-header"]')).toHaveText(
    'Thank you for your order!'
  );
});