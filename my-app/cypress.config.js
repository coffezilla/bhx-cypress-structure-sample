import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    // specPattern: "./src/components/*.cy.js",
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },

  e2e: {
    // specPattern: "./",
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
