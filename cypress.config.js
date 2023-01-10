const { defineConfig } = require("cypress")

/* A plugin that is used to track the visual regression of the tests. */
const { addVisualRegressionTrackerPlugin } = require('@visual-regression-tracker/agent-cypress/dist/plugin')


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      /* A plugin that is used to track the visual regression of the tests. */
      addVisualRegressionTrackerPlugin(on, config)
    },
  },
});
