@tag
Feature: Add customer
  I want to use this template for my feature file

  @tag1
  Scenario: Generate an customer ID
    Given user should launch browser
    And user should click add customer link
    When user provide valid input
      | fname   | anu           |
      | lname   | krithika      |
      | gmail   | anu@gamil.com |
      | address | chennai       |
      | phno    |    1234567890 |
    Then to verify the customer id is displayed
