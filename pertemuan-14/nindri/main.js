// coba buat object product dan cart
const keranjang = new Cart();

// buat object wallet dengan saldo awal 100000
const goPay = new Wallet(100000);

// buat object producAt
const iPhone = new Product(
  "iPhone 15 Pro Max", 
  33000000, 
  "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg");
const samsung = new Product(
  "Samsung Galaxy A55", 
  6000000,  
  "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a55.jpg");

// tambahkan iphone ke keranjang
keranjang.addItem(iPhone);

// topup 5jt
goPay.topUp(5000000);

console.log(goPay.getCurrentBalanceIDR());