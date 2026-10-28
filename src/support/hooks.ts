import { Before, After, BeforeAll, AfterAll } from '@cucumber/cucumber';
import { chromium, Browser } from 'playwright';
import { CustomWorld } from './world';
import { PageObjectManager } from '../pages/PageObjectManager';

let browser: Browser;

BeforeAll(async () => {
  browser = await chromium.launch({ 
    headless: process.env.HEADED !== 'true',
    slowMo: process.env.HEADED === 'true' ? 500 : 0,
  });
});

AfterAll(async () => {
  await browser.close();
});

Before(async function (this: CustomWorld) {
  this.context = await browser.newContext();
  this.page = await this.context.newPage();
  this.pages = new PageObjectManager(this.page);
});

After(async function (this: CustomWorld) {
  await this.context.close();
});