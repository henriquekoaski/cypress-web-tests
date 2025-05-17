class SearchPage {
  
  get searchInput() {
    return cy.get('#search_product');
  }

  get searchButton() {
    return cy.get('#submit_search');
  }

  get productResults() {
    return cy.get('.productinfo');
  }

  get viewProductLinks() {
    return cy.get('a[href^="/product_details"]');
  }

  searchForProduct(productName) {
    this.searchInput.clear().type(productName);
    this.searchButton.click();
  }

  openFirstProductDetails() {
    this.viewProductLinks.first().should('be.visible').click();
  }

  verifyCategoryContains(categoryName) {
    cy.get('.product-information p')
      .invoke('text')
      .then((text) => {
        expect(text.toLowerCase()).to.include(categoryName.toLowerCase());
      });
  }
}

export default new SearchPage();
