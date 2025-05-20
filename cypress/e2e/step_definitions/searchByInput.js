import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pages/homePage.js";
import ProductsPage from "../pages/productsPage.js";

// Background:
Given("I am on the products page", () => {
  cy.visit("/");
  HomePage.navigateToProductsPage();
});

// --- Scenario: Search for a product by category ---
When("I search for a product by the category {string}", (category) => {
  ProductsPage.searchProductByInput(category);
});

Then("I should see a list of products related to the {string} category", (category) => {
  ProductsPage.productResults.should('exist');
  ProductsPage.verifyFirstThreeProductsCategory(category);
});


// --- Scenario: Search for a product by brand ---
When("I search for a product by the brand {string}", (brand) => {
  ProductsPage.searchProductByInput(brand);
});

Then("I should see a list of products related to the {string} brand", (brand) => {
  ProductsPage.productResults.should('exist');
  ProductsPage.verifyFirstThreeProductsBrand(brand);
});