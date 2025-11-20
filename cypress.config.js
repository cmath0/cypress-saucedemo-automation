const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "79ze1u",
  e2e: {
    baseUrl: 'https://www.saucedemo.com'
  },
  env: {}
});
