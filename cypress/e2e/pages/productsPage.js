class ProductsPage {
  
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

  searchProductBySearchBar(productName) {
    this.searchInput.clear().type(productName);
    this.searchButton.click();
  }

  openProductDetailsByIndex(index) {
    this.viewProductLinks.eq(index).should('be.visible').click();
  }

  
  verifyInfoContains(expectedText) {
    cy.get('.product-information p')
      .invoke('text')
      .then((text) => {
        expect(text.toLowerCase()).to.include(expectedText.toLowerCase());
      });
  }

 
  verifyFirstThreeProducts(expectedText, verifyFn = this.verifyInfoContains.bind(this)) {
    for (let i = 0; i < 3; i++) {
      this.viewProductLinks.eq(i).should('be.visible').click();
      verifyFn(expectedText);
      cy.go('back');
    }
  }
}

export default new ProductsPage();
