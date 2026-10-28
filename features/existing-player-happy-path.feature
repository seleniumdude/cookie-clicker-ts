@test @wip
Feature: Existing player - Happy path scenarios - buy and sell cookies and factories

  Background:
    Given I am an existing player
    And existing game data has been loaded

  Scenario Outline: Existing player can buy cookies
    When I select "<playerName>"
    Then the previous game session is restored with valid information
    When the cookie clicker button receives "<NumberOfClicks>"
    Then the Cookies counter is updated accordingly
    Examples:
      | playerName     | NumberOfClicks |
      | Cookie Monster | 1              |
      | Mr Maryland    | 2              |


  Scenario Outline: Existing player can sell previously collected cookies
    When I select "<playerName>"
    Then the previous game session is restored with valid information
    When the "<NumberOfCookies>" are sold
    Then the Money balance is updated accordingly
    Examples:
      | playerName     | NumberOfCookies |
      | Cookie Monster | 1               |
      | Mr Maryland    | 2               |

  Scenario Outline: Existing player can sell newly collected cookies
    When I select "<playerName>"
    Then the previous game session is restored with valid information
    When the cookie clicker button receives "<NumberOfClicks>"
    And the "<NumberOfCookies>" are sold
    Then the Money balance is updated accordingly
    Examples:
      | playerName             | NumberOfClicks | NumberOfCookies |
      | Started but no cookies | 1              | 1               |
      | Started but no cookies | 2              | 2               |
      | Cookie factory owner   | 1              | 1               |
      | Cookie factory owner   | 1              | 2               |


  Scenario Outline: Existing player can buy factories
    When I select "<playerName>"
    Then the previous game session is restored with valid information
    When the cookie clicker button receives "<NumberOfClicks>"
    And a user purchases "<numberOfFactories>"
    Then the Money balance for factory purchase is updated accordingly
    Examples:
      | playerName             | NumberOfClicks | numberOfFactories |
      | Started but no cookies | 160000         | 1                 |
      | Started but no cookies | 260000         | 2                 |
      | Cookie factory owner   | 160000         | 1                 |
      | Cookie factory owner   | 260000         | 2                 |
