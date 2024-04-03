import { resolve } from "path";

export default {
  root: resolve(__dirname, "src"),
  resolve: {
    alias: {
      "~bootstrap": resolve(__dirname, "node_modules/bootstrap"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/index.html"),
        register: resolve(__dirname, "src/register.html"),
      },
    },
  },
  server: {
    port: 8000,
    host: "0.0.0.0",
    hmr: true,
  },
};
