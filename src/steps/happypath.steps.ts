import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world.js';

Given('I access the cookie clicker start screen', async function (this: CustomWorld) {
  await this.pages.getStartPage().open();
});

When('I enter the name {word}', async function (this: CustomWorld, name: string) {
  await this.pages.getStartPage().enterNameAndStart(name);
});

Then('the new cookie clicker game is started', async function (this: CustomWorld) {
  await this.pages.getGamePage().waitForGameToLoad();
});

When('the cookie clicker button receives {string}', async function (this: CustomWorld, clicks: string) {
  this.clicks = Number(clicks); // e.g. 2
  this.cookiesBefore = await this.pages.getGamePage().getCookies(); // reads the counter now
  await this.pages.getGamePage().clickCookie(this.clicks);
});

Then('the Cookies counter is updated accordingly', async function (this: CustomWorld) {
  const expected = this.cookiesBefore + this.clicks;
  await expect.poll(() => this.pages.getGamePage().getCookies()).toBe(expected);
});