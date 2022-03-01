const I = actor();

module.exports = {
  homePageLogo: '[data-testid="homepage-logo"]',
  homePageHeader: 'header',

  isVisible() {
    I.waitForElement(this.homePageHeader);
    I.seeElement(this.homePageLogo);
  },
  navigateToHome() {
    I.amOnPage('/');
  },
};
