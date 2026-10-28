# Cookie Clicker UI Automation

BDD UI tests for the Cookie Clicker tech test, written in TypeScript with Playwright and Cucumber, using the Page Object Model.

## Scope

### New player

| Scenario | Status |
|---|---|
| New player can buy cookies | Implemented |
| New player can sell cookies | Written in Gherkin, tagged `@wip`, not automated |
| New player can buy factories | Written in Gherkin, tagged `@wip`, not automated |

### Existing player (`features/existing-player-happypath.feature`)

The whole feature is a placeholder, tagged `@wip` at feature level, with no step implementations yet.

| Scenario | Status |
|---|---|
| Existing player can buy cookies | Written in Gherkin, not automated |
| Existing player can sell previously collected cookies | Written in Gherkin, not automated |
| Existing player can sell newly collected cookies | Written in Gherkin, not automated |
| Existing player can buy factories | Written in Gherkin, not automated |

Scenarios tagged `@wip` are excluded from the default run (see `cucumber.js`). They document the intended coverage but have no step implementations yet.


## Tech stack

- [Playwright](https://playwright.dev/) for browser automation and assertions
- [Cucumber.js](https://github.com/cucumber/cucumber-js) for BDD (Gherkin feature files)
- TypeScript 5, run through `ts-node`
- Page Object Model with a `BasePage` and a `PageObjectManager`

## Prerequisites

- Node.js 18 or later (LTS recommended)
- npm (included with Node)

## Setup

```bash
npm install
npx playwright install chromium
```

## Running the tests

```bash
npm test
```

To watch the browser while the tests run:

```powershell
# PowerShell
$env:HEADED="true"; npm test
```

```bash
# macOS / Linux / Git Bash
HEADED=true npm test
```

An HTML report is written to `reports/cucumber.html`.

To run only the work-in-progress scenarios (they will report undefined steps):

```bash
npx cucumber-js --tags "@wip"
```

## Project structure

```
features/              Gherkin feature files
src/
  pages/               Page objects
    BasePage.ts          Shared base class holding the Playwright page
    StartPage.ts         Start screen: open the site, enter a name, start
    GamePage.ts          Game screen: click the cookie, read the counter
    PageObjectManager.ts Creates and returns the page objects
  steps/               Step definitions
  support/
    world.ts             Per-scenario state (browser page, page objects, shared values)
    hooks.ts             Browser launch and teardown, one fresh context per scenario
cucumber.js            Cucumber configuration
tsconfig.json          TypeScript configuration
```

## Design notes

- Each scenario runs in a fresh browser context, so every scenario starts as a new player with no shared session state.
- Step definitions contain no locators or direct browser interactions. They call page object methods through `this.pages`, and page objects own all locators and browser actions. Assertions are made in the step definitions using Playwright's `expect`.
- Scenario state that must pass between steps (for example the cookie count before clicking) lives on the Cucumber `World` object.
- Playwright auto-waits for elements, so there are no explicit sleeps. The counter assertion uses `expect.poll` to tolerate a short delay in the UI updating.

## Assumptions

- One click on the cookie button adds one cookie, so the expected counter value is the starting value plus the number of clicks.
- A new game starts after entering a player name on the start screen, and the game screen URL contains `/game`.

## Notes

- TypeScript is pinned to version 5 because `ts-node` is not compatible with the newest TypeScript major version.
- The target URL is set in `src/pages/StartPage.ts`.
