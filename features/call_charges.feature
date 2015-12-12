Feature: View call charges

Background:
  Given I am on the My Bill page

Scenario: View recent calls
  Then I should see the 5 most recent calls

Scenario: View all calls
  When I click on Show all call charges
  Then I should see more than 5 calls
