// membuat objek product dan cart
const keranjang = new Cart();

// buat objek wallet dengan saldo awal
const goPay = new Wallet(10000);

// membuat objek produk
const iPhone = new Product(
    "iPhonr 15 pro max",
    33000000,
    "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg",
)

const samsung = new Product(
    "Samsung Galaxy A55",
    6000000,
    "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a55.jpg", 
);

// tambahkan iphone ke keranjang 
keranjang.addItem(iPhone);

// top up 5 jt
goPay.topUp(5000000);
console.log(goPay.getCurrencyBalanceIDR());