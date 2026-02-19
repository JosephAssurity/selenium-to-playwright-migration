Feature: Cart

  As a user
  I want to add and remove products from the cart
  So that I can manage my shopping

  Scenario: Add product to cart
    Given I am logged in to SauceDemo as "standard_user" with password "secret_sauce"
    When I add the product "Sauce Labs Backpack" to the cart
    Then the cart badge should show "1"

  Scenario: Remove product from cart
    Given I have added the product "Sauce Labs Backpack" to the cart
    When I remove the product "Sauce Labs Backpack" from the cart
    Then the cart badge should not be visible