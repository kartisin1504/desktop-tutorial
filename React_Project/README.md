# Viasat PokeApp

A fun way to discuss all things web dev.

# Some Pokemon names to help you
Pikachu, Alakazam, Eevee, Charizard, Piplup, Charmander, Bulbasaur 
https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_name

# Installation

- NodeJS >= 12.14.1

- `nvm install`

> Optional: Set the default version in nvm. nvm alias default is 12.14.1.
> For e2e testing you will also need the latest JAVA SDK installed.

## Steps Required To Run This Project In Development Mode

- `npm i` (to install npm packages)
- `npm run start` (to run the react app)

## Steps Required To Run The Project's Tests

### Run unit tests

- `npm run test`

> Unit tests are run using [Jest](https://jestjs.io/), [Enzyme](https://enzymejs.github.io/enzyme/) and [React Testing Library](https://testing-library.com/docs/react-testing-library).

### Run end-to-end tests locally

> - E2E tests are run using [CodeceptJS](https://codecept.io/)
> - Local tests are run using [WebDriver](https://webdriver.io/)
> - Visual regression tests are run using [Resemble](https://github.com/rsmbl/Resemble.js)
> - Before you can run E2E's locally you'll need to be sure to have ran the following two commands first.

> - E2E Commands

- `npm run start` - run the project locally (for local testing)
- `npm run e2e` - this will run all tests using Chromium

## Steps Required To Build This Project

- `npm i`
- `npm run build`

## Steps required to Run this Project locally

- `npm i`
- `npm run start` - The app will be running @ http://localhost:3000
