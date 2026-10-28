@test @new-player

Feature: New player - Happy path scenarios - buy and sell cookies and factories
  Background:
    Given I access the cookie clicker start screen
    When I enter the name hamza
    Then the new cookie clicker game is started

  Scenario Outline: New player can buy cookies
    When the cookie clicker button receives "<NumberOfClicks>"
    Then the Cookies counter is updated accordingly
    Examples:
      | NumberOfClicks |
      | 1              |
      | 2              |

@wip
  Scenario Outline: New player can sell cookies
    When the cookie clicker button receives "<NumberOfClicks>"
    And the Cookies counter is updated accordingly
    When the "<NumberOfCookies>" are sold
    Then the Money balance is updated accordingly
    Examples:
      | NumberOfClicks |NumberOfCookies|
      | 1              | 1               |
      | 2              | 2               |

@wip
  Scenario Outline: New player can buy factories
    When the cookie clicker button receives "<NumberOfClicks>"
    And the Cookies counter is updated accordingly
    When a user purchases "<numberOfFactories>"
    Then the Money balance for factory purchase is updated accordingly
    Examples:
      | NumberOfClicks | numberOfFactories |
      | 130000         | 1                 |
      | 260000         | 2                 |
