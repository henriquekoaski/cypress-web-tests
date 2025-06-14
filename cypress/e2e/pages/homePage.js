class HomePage {
  
  get productsMenuButton() {
    return cy.xpath('//a[@href="/products"]');
  }

  navigateToProductsPage() {
    this.productsMenuButton.should('be.visible').click();
  }
}

export default new HomePage();
