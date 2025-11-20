const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "79ze1u",
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true
  },
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    }
  },
  env: {}
});
