import { BasePage } from './BasePage';

export class GamePage extends BasePage {

private get cookieButton() { return this.page.locator('xpath=//button[contains(text(),"Click Cookie!")]'); }    // TODO real selector
private get cookiesCounter() { return this.page.locator('#cookies'); } // TODO real selector


  async waitForGameToLoad() {
    await this.page.waitForURL(/game/);
  }

   async getCookies(): Promise<number> {
    const text = await this.cookiesCounter.innerText();
    return Number(text.replace(/[^\d.-]/g, ''));
  }

  async clickCookie(NumberOfClicks: number) {
    for (let i = 0; i < NumberOfClicks; i++) {
      await this.cookieButton.click();
    }
  }
}