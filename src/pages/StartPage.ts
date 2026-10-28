import { BasePage } from './BasePage';

const BASE_URL = 'https://hamza-khan-2026-10-26.cookieclickertechtest.airelogic.com';

export class StartPage extends BasePage {
  async open() {
    await this.page.goto(BASE_URL);
  }

  async enterNameAndStart(name: string) {
    await this.page.getByRole('textbox').fill(name);
    await this.page.getByRole('button', { name: 'Start!' }).click();
  }
}