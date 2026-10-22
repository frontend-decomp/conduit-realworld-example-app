import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "frontend/src/setupTests.js",
    css: true,
    coverage: {
      include: ["frontend/src/**/*.{js,jsx}"],
      exclude: ["**/*.test.*", "**/*.spec.*", "frontend/src/setupTests.js"],
    },
  },
});
