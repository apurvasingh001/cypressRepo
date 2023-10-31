const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
      // implement node event listeners here
    },
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    specPattern: 'cypress/e2e/*.js',
   
    watchForFileChanges: false,
  
    
    

  },
});