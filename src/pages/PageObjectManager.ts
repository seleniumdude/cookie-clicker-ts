import { Page } from '@playwright/test';
import { StartPage } from './StartPage';
import { GamePage } from './GamePage';

export class PageObjectManager {
  private startPage: StartPage;
  private gamePage: GamePage;

  constructor(page: Page) {
    this.startPage = new StartPage(page);
    this.gamePage = new GamePage(page);
  }

  getStartPage() { return this.startPage; }
  getGamePage() { return this.gamePage; }
}