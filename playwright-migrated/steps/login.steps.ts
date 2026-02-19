import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from './support/world.js';

Given('I am on the SauceDemo login page', async function (this: CustomWorld) {
  await this.page.goto('https://www.saucedemo.com');
});

When(
  'I login with username {string} and password {string}',
  async function (this: CustomWorld, username: string, password: string) {
    await this.page.locator('#user-name').fill(username);
    await this.page.locator('#password').fill(password);
    await this.page.locator('#login-button').click();
  }
);

Then('I should see the products page', async function (this: CustomWorld) {
  await expect(this.page).toHaveURL(/inventory\.html/);
  await expect(this.page.locator('[data-test="title"]')).toHaveText('Products');
});

Then('I should see a login error message', async function (this: CustomWorld) {
  await expect(this.page.locator('[data-test="error"]')).toBeVisible();
});