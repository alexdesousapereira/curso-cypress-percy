# Testes _end-to-end_ com Cypress

Sample project to demonstrate end-to-end (e2e) tests written with Cypress running on a CI service.

## Pre-requirements

To run this project, you will need:

- [git](https://git-scm.com/downloads) (I've used version `2.25.1` while writing this doc)
- [nodejs](https://nodejs.org/en/) (I've used version `16.18.1` while writing this doc)
- NPM (I've used version `8.19.2` while writing this doc)

**Note:** When installing nodejs, NPM is automatically installed too.

## Installation

To install the dev dependencies, run `npm install` (or `npm i` for short.)

## Configuring the environment variables

Before running the tests, some environment variables need to be set up.

Make a copy of the [`cypress.env.example.json`](./cypress.env.example.json) file as `cypress.env.json`, and set the appropriate values for all the variables.

**Note:** `cypress.env.json` file is not tracked by git.

## Running the tests

In this project, you can run tests in interactive and headless modes, and on desktop in model viewports.

### Headless mode

Run `npm run test`  to run all tests in headless mode using a desktop viewport.

**Note:** To run a specific test of a module check the corresponding script in the `package.json` file and run `npm run` script.

### Interactive mode

Run `npx cypress open` to open the Cypress Test Runner to run tests in interactive mode using a desktop viewport.

___

Made with ❤️ by [Alex Pereira](https://github.com/alexdesousapereira).
