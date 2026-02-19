import { Before, After, Given } from '@cucumber/cucumber';
import { CustomWorld } from './support/world.js';
import { expect } from '@playwright/test';

Before(async function (this: CustomWorld) {
  await this.init();
});

After(async function (this: CustomWorld) {
  await this.close();
});

Given(
  'I am logged in to SauceDemo as {string} with password {string}',
  async function (this: CustomWorld, username: string, password: string) {
    await this.page.goto('https://www.saucedemo.com');
    await this.page.locator('#user-name').fill(username);
    await this.page.locator('#password').fill(password);
    await this.page.locator('#login-button').click();

    // Prove we are logged in before proceeding
    await this.page.waitForURL(/inventory\.html/);
    await expect(this.page.locator('[data-test="title"]')).toHaveText('Products');
  }
);