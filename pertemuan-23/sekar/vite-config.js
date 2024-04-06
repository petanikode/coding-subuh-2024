import { resolve } from "path";

export default {
  root: resolve(__dirname, "src"),
  resolve: {
    alias: {
      "~bootstrap": resolve(__dirname, "node_modules/bootstrap"),
    },
  },
  build: {
    rollOptions: {
      input: {
        index: resolve(__dirname, "src/index.html"),
        register: resolve(__dirname, "src/register.html"),
      },
    },
  },
  server: {
    port: 8080,
    hot: true,
  },
};
