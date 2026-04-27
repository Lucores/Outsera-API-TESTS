const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com",

    specPattern: [
      "cypress/e2e/**/*.cy.js",
      "cypress/e2e/**/*.feature"
    ],

    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
    video: true,

    env: {
      stepDefinitions: "cypress/e2e/checkout/checkoutSteps.js"
    },

    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
  },
});
