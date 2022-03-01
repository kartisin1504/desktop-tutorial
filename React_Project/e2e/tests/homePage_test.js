//https://codecept.io/webdriver/

Feature('PokeAPI App');
Scenario('Loading Homepage', ({homePage}) => {
  homePage.navigateToHome();
  homePage.isVisible();
});
