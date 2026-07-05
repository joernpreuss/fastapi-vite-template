import { defineConfig } from "vite";

// Relative base so the build works both at the domain root and under a
// subpath (e.g. GitHub Pages project sites).
export default defineConfig({
  base: "./",
});
