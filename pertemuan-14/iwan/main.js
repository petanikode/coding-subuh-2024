// coba buat object product dan cart
const keranjang = new Cart();

const iPhone = new Product(
  "iPhone 15 Pro Max",
  33000000,
  "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg",
);

const samsung = new Product(
  "Samsung Galaxy A55",
  6000000,
  "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a55.jpg",
);

// tambahkan iPhone ke keranjang
keranjang.addItem(iPhone);
