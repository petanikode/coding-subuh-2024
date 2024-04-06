import { resolve, join } from "path";
import { glob } from "glob";

export default {
  root: resolve(__dirname, "src"),
  resolve: {
    alias: {
      "~bootstrap": resolve(__dirname, "node_modules/bootstrap"),
    },
  },
  build: {
    rollupOptions: {
      input: glob.sync(resolve(__dirname, "src", "*.html")),
    },
    outDir: join(__dirname, "dist")
  },
  server: {
    port: 8011,
    hmr: true,
    host: "0.0.0.0"
  },
};
