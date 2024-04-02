const BASE_URL = "https://fakestoreapi.com";

const API = {
  getAllProducts: async () => {
    const response = await fetch(`${BASE_URL}/products/`);
    const products = await response.json();
    return products;
  },
  getProduct: async (productId) => {
    const response = await fetch(`${BASE_URL}/products/${productId}`);
    const product = await response.json();
    return product;
  },
};