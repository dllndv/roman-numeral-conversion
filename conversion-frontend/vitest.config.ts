import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./vitest-setup.ts"],
    pool: "vmThreads", // or 'vmForks'
    deps: {
      web: {
        transformCss: true,
      },
    },
  },
});
