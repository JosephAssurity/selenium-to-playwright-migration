Feature: Checkout

  As a user
  I want to checkout
  So that I can complete my purchase

  Background:
    Given I am logged in to SauceDemo as "standard_user" with password "secret_sauce"
    And I have added the product "Sauce Labs Backpack" to the cart

  Scenario: Complete checkout
    When I complete checkout with first name "John" last name "Test" and postal code "1010"
    Then I should see the checkout complete page