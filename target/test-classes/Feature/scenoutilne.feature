@tag
Feature: Add customer
  I want to use this template for my feature file

  @tag2
  Scenario Outline: Generate an customer ID
    Given user should launch browser
    And user should click add customer link
    When user provide valid input"<fname>","<lname>","<gmail>","<address>","<phoneno>"
    Then to verify the customer id is displayed

    Examples: 
      | fname   | lname      | gmail             | address | phoneno  |
      | anu     | krithika   | anu22@gmail.com   | chennai | 12345678 |
      | shravan | Prasenjith | shravan@gamil.com | chennai | 34567890 |
      | ram     | prasath    | ram@gmail.com     | chennai | 23456789 |
