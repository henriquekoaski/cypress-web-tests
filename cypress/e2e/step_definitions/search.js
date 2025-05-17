import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pages/homePage.js";
import SearchPage from "../pages/searchPage.js";

Given("I am on the products page", () => {
  cy.visit("/");
  HomePage.navigateToProductsPage();
});

When("I search for a product by the category {string}", (category) => {
  SearchPage.searchForProduct(category);
});

Then("I should see a list of products related to the {string} category", (category) => {
  SearchPage.productResults.should('exist');
  SearchPage.openFirstProductDetails();
  SearchPage.verifyCategoryContains(category);
});
