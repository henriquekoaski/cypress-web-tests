# These scenarios test the product search functionality using the search bar only.
Feature: Search bar

  Background:
    Given I am on the products page


  Scenario Outline: Search for a product by category
    When I search for a product by the category "<category>"
    Then I should see a list of products related to the "<category>" category

  Examples:
    | category      |
    | Dress         |
    | Tops          |
    | Saree         |
    | T-Shirt       |
    | Jeans         |
    | Tops & Shirts |


  Scenario Outline: Search for a product by brand
    When I search for a product by the brand "<brand>"
    Then I should see a list of products related to the "<brand>" brand

  Examples:
      | brand              |
      | Polo               |
      | H&M                |
      | Madame             |
      | Mast & Harbour     |
      | Babyhug            |
      | Allen Solly Junior |
      | Kookie Kids        |
      | Biba               |