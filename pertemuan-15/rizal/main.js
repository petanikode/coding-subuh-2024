const keranjang = new Cart();

const goPay = new Wallet(10000);

const iPhone = new Product(
  "Asus ROG Phone ZS600KL",
  23000000,
  "https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone.jpg",
);
const samsung = new Product(
  "Xiaomi Black Shark 4",
  16000000,
  "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-black-shark-4.jpg",
);

keranjang.addItem(iPhone);

goPay.topUp(5000000);

console.log(goPay.getCurrentBalanceIDR());
