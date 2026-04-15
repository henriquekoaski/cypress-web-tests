import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pages/homePage.js";
import ProductsPage from "../pages/productsPage.js";

// Background
Given("I am on the products page", () => {
  cy.visit("/");
  HomePage.navigateToProductsPage();
});


When(/^I search for a product by the (category|brand) "([^"]+)"$/, (_, value) => {
  ProductsPage.searchProductBySearchBar(value);
});


Then(/^I should see a list of products related to the "([^"]+)" (category|brand)$/, (value) => {
  ProductsPage.productResults.should("exist");
  ProductsPage.verifyFirstThreeProducts(value);
});
