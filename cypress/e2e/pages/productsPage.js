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

  searchProductByInput(productName) {
    this.searchInput.clear().type(productName);
    this.searchButton.click();
  }

  openProductDetailsByIndex(index) {
    this.viewProductLinks.eq(index).should('be.visible').click();
  }

  verifyCategoryContains(categoryName) {
    cy.get('.product-information p')
      .invoke('text')
      .then((text) => {
        expect(text.toLowerCase()).to.include(categoryName.toLowerCase());
      });
  }

  verifyBrandContains(brandName) {
    cy.get('.product-information p')
      .invoke('text')
      .then((text) => {
        expect(text.toLowerCase()).to.include(brandName.toLowerCase());
      });
  }

  verifyFirstThreeProductsCategory(categoryName) {
    for (let i = 0; i < 3; i++) {
      this.viewProductLinks.eq(i).should('be.visible').click();
      this.verifyCategoryContains(categoryName);
      cy.go('back');
    }
  }

  verifyFirstThreeProductsBrand(brandName) {
    for (let i = 0; i < 3; i++) {
      this.viewProductLinks.eq(i).should('be.visible').click();
      this.verifyBrandContains(brandName);
      cy.go('back');
    }
  }
}

export default new ProductsPage();
