// coba buat object product dan cart
const keranjang = new Cart()

// buat object wallet
const goPay = new Wallet(10000)

const iphone = new Product("iphone 15 Pro Max", 3300000, "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15.jpg");
const Vivo = new Product("vivo V23E", 6000000, "https://fdn2.gsmarena.com/vv/bigpic/vivo-v23e.jpg");

// tambahkan iphone ke keranjang
keranjang.addItem(iphone);