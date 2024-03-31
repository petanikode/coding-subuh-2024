const keranjang = new Cart();

const wallet = new Wallet(10000);

const iphone = new Produk(
  "iphone 15 Pro Max",
  33000000,
  "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg",
);
const samsung = new Produk(
  "Samsung Galaxy A55",
  6000000,
  "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a55.jpg",
);

// list product
var produks = [iphone, samsung];

// --- fungsi-fungsi untuk handle event --
function openCart() {
  document.querySelector("#cartDialog").showModal();
  showProdukInCart();
}

function closeCart() {
  document.querySelector("#cartDialog").close();
}

function handleAddToCart(index) {
  keranjang.addItem(produks[index]);
  updateCartCountDisplay();
}

function handleRemoveFromCart(index) {
  keranjang.removeItem(index);
  showProdukInCart();
  updateCartCountDisplay();
}

function handleCheckout() {
  const totalToPay = keranjang.getTotalPrice();
  // bayar dengan objek wallet
  wallet.pay(totalToPay, function () {
    keranjang.clear();
    updateCartCountDisplay();
    updateWalletbalanceDisplay();
    closeCart();
  });
}

function topUpWallet() {
  const topUpAmount = Number(prompt("jumlah topup"));
  if (isNaN(topUpAmount) || topUpAmount < 0) {
    alert("jumlah topup salah");
    return;
  }
  wallet.topUp(topUpAmount);
  updateWalletbalanceDisplay();
}

//fungsi-fungsi untuk menampilkan ke html

function showAllProduk() {
  const productListElement = document.querySelector("#product-list");
  let index = 0;

  for (let produk of produks) {
    const produkElement = document.createElement("div");
    produkElement.className = "produk";
    produkElement.innerHTML = `
      <img src="${produk.image}"/> 
      <div>
        <h3>${produk.name}</h3>
        <p>${produk.getPriceIDR()}</p>
        <button onclick="handleAddToCart(${index})">Tambah ke Keranjang</button>
      </div>
    `;
    productListElement.appendChild(produkElement);
    index++;
  }
}

// Fungsi showProdukInCart yang diperbaiki
function showProdukInCart() {
  const cartProdukList = document.querySelector("#list-produk-di-dalam-keranjang");
  const totalPriceInChart = document.querySelector("#total-produk-di-dalam-keranjang");

  cartProdukList.innerHTML = "";

  keranjang.items.forEach((produk, index) => {
    const produkElement = document.createElement("div");
    produkElement.className = "produk";
    produkElement.innerHTML = `
      <img src="${produk.image}" />
      <div>
        <h3>${produk.name}</h3>
        <p>${produk.getPriceIDR()}</p>
        <button onclick="handleRemoveFromCart(${index})">Hapus</button>
      </div>
    `;
    cartProdukList.appendChild(produkElement);
  });

  totalPriceInChart.textContent = keranjang.getTotalPriceIDR();
}


//menampilkan jumlah item pada cart/keranjang
function updateCartCountDisplay() {
  document.querySelector("#cartCount").textContent = keranjang.count();
}

function updateWalletbalanceDisplay() {
  document.querySelector("#wallet-balance").textContent =
    wallet.getCurrentBalanceIDR();
}

document.addEventListener("DOMContentLoaded", () => {
  showAllProduk();
  updateCartCountDisplay();
  updateWalletbalanceDisplay();
});
