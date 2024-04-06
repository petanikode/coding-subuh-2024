// coba buat object product dan cart
const cart = new Cart();

// buat object Wallet dengan saldo awal 10000
const wallet = new Wallet(10000000);

// buat object product
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

// list products
var products = [iPhone, samsung];

// ----- Fungsi-fungsi untuk handle event -------------------

function openCart(){
  document.querySelector("#cart-dialog").showModal();
  showProductInCart();
}

function closeCart(){
  document.querySelector("#cart-dialog").close();
}

function handleAddToCart(index){
  cart.addItem(products[index]);
  updateCartCountDisplay();
}

function handleRemoveFromCart(index){
  cart.removeItem(index);
  showProductInCart();
  updateCartCountDisplay();
}

function handleCheckout(){
  const totalToPay = cart.getTotalPrice();

  // bayar dengan object wallet
  wallet.pay(totalToPay);
}

document.addEventListener("payment-success", function(){
  cart.clear();
  updateCartCountDisplay();
  updateWalletBalanceDisplay();
  closeCart();
});

function topUpWallet(){
  const topUpAmount = Number(prompt("Jumlah toptup"));
  if(isNaN(topUpAmount) || topUpAmount < 0) {
    alert("Jumlah topup salah");
    return;
  }

  wallet.topUp(topUpAmount);
  updateWalletBalanceDisplay();
}

// ----- Fungsi-fungsi untuk menampilkan ke HTML ------------

// tampilkan list produk di halaman
function showAllProduct() {
  const productListElement = document.querySelector("#product-list");

  let index = 0;
  for (product of products) {
    productListElement.innerHTML += `
      <div class="product">
        <img src="${product.image}" />
        <h3>${product.name}</h3>
        <p>${product.getPriceIDR()}</p>
        <button onclick="handleAddToCart(${index})">Add to Cart</button>
      </div>
    `;
    index++;
  }
}

// tampilkan list produk di dalam cart/keranjang
function showProductInCart(){
  const cartProductList = document.querySelector("#product-list-in-cart");
  const totalPriceInCart = document.querySelector("#total-product-price-in-cart");

  cartProductList.innerHTML = ''; //clear dulu isi product di keranjang

  let index = 0;
  cart.items.forEach(product => {
    cartProductList.innerHTML += `
      <div class="product">
        <img src="${product.image}" />
        <div>
          <h3>${product.name}</h3>
          <p>${product.getPriceIDR()}</p>
          <button onclick="handleRemoveFromCart(${index})">Hapus</button>
        </div>
      </div>
    `;
    index++;
  });

  totalPriceInCart.textContent = cart.getTotalPriceIDR();
}

// tampilkan jumlah item pada cart/keranjang
function updateCartCountDisplay(){
  document.querySelector("#cartCount").textContent = cart.count();
}

// tampilkan jumlah saldo saat ini
function updateWalletBalanceDisplay(){
  document.querySelector("#wallet-balance").textContent = wallet.getCurrentBalanceIDR();
}

document.addEventListener("DOMContentLoaded", () => {
  showAllProduct();
  updateCartCountDisplay();
  updateWalletBalanceDisplay();
});
