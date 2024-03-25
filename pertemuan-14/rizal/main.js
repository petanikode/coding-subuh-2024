const cart = new Cart();

const product1 = new Product(
  "Asus ROG Phone ZS600KL",
  15000000,
  "https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone.jpg",
);
const product2 = new Product(
  "Xiaomi Black Shark 4",
  18000000,
  "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-black-shark-4.jpg",
);

cart.addItem(product1);
cart.addItem(product2);

console.log("Cart Total Price:", cart.getTotalPrice());
console.log("Cart Total Price (IDR):", cart.getTotalPriceIDR());
console.log("Total items in cart:", cart.count());
