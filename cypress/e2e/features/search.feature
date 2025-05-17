Feature: Search

  @valid
  Scenario Outline: Search for a product by category
    Given I am on the products page
    When I search for a product by the category "<category>"
    Then I should see a list of products related to the "<category>" category

  Examples:
    | category   |
    | Top        |
    | Dress      |
    | T-Shirt    |
    | Jeans      |