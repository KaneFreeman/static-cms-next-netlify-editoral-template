import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "zxn8wo",
  fixturesFolder: false,

  e2e: {
    baseUrl: "http://localhost:3000",
    supportFile: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
