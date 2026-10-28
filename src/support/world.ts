import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import { BrowserContext, Page } from 'playwright';
import { PageObjectManager } from '../pages/PageObjectManager';

export class CustomWorld extends World {
  context!: BrowserContext;
  page!: Page;
  pages!: PageObjectManager;

  clicks = 0;
  cookiesBefore = 0;

  constructor(options: IWorldOptions) {
    super(options);
  }
}

setWorldConstructor(CustomWorld);