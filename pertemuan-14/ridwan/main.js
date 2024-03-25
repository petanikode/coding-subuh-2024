
const keranjang = new Cart();

const goPay = new Wallet(10000);

const iphone = new Produk(
  "iphone 15 Pro Max",
  33000000,
  "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg",
);
const samsung = new Produk(
  "Samsung Galaxy A55",
  6000000,
  "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a55.jpg"
);

keranjang.addItem(iphone);

goPay.topUp(5000000);

console.log(goPay.getCurrentBalanceIDR());
