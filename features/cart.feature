Feature: Login

  As a user
  I want to log into SauceDemo
  So that I can access the products page

  Scenario: Successful login
    Given I am on the SauceDemo login page
    When I login with username "standard_user" and password "secret_sauce"
    Then I should see the products page

  Scenario: Invalid login shows an error
    Given I am on the SauceDemo login page
    When I login with username "locked_out_user" and password "secret_sauce"
    Then I should see a login error message