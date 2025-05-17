class HomePage {
  
  get productsMenuButton() {
    return cy.xpath('//a[@href="/products"]');
  }

  navigateToProductsPage() {
    this.productsMenuButton.click();
  }
}

export default new HomePage();
