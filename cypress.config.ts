import { defineConfig } from "cypress";

const fileReader = require('./cypress/support/helper')
module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  requestTimeout: 20000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  responseTimeout: 20000,
  chromeWebSecurity: false,
  waitForAnimations: true,
  trashAssetsBeforeRuns: true,
  downloadsFolder: 'cypress/downloads',
  animationDistanceThreshold: 50,
  video: false,
  watchForFileChanges: false,
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
          ...fileReader
      });
    },
  },
});
