@tag
Feature: Add Tariff Plan
  I want to use this template for my feature file

  @tag1
  Scenario: Getting successfully add message
    Given user should launch the browser
    And user should clik add tariff plan
    When user provide valid input and sumbit1
      | 500 | 10000 |  5000 | 300 | 1 | 10 | 1 |
      | 399 |  1000 |  1000 | 100 | 2 | 15 | 2 |
      | 599 |  5000 | 10000 | 250 | 2 |  9 | 3 |
    Then to verify success message is displayed
