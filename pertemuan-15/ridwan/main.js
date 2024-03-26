
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
  "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a55.jpg"
);

// list product
var produks = [iphone, samsung];

// --- fungsi-fungsi untuk heandle envent --


function showAllProduk() {
  const produkListElement = document.querySelector("#product-list");
  let index = 0;
  for (produk of produks) {
    productListElement.innerHTML = `<div class="produk">
    <img src="${produk.image}"/> 
    <div>
    <h3>${produk.name}</h3>
    <p>${produk.getPriceIDR()}</p>
    <button onclick="handleRemovefromCart(${index})">Hapus</button>
    <button onclick="handleCheckout()">Buayar</button>
    </div>
    </div>
    `;
    index++;
  }
  
}

//
function showProdukInCart() {
  const cartProdukList = document.querySelector("#list-produk-di-dalam-keranjang");
  const totalPriceInChart = document.querySelector("#total-produk-di-dalam-keranjang");

  cartProdukList.innerHTML = '';

  let index = 0;
  cart.items.forEach(produk => {
    cartProdukList.innerHTML += `
    <div class="produk">
    <img src="${produk.image}" />
    <div>
    <h3>${produk.nama}</h3>
    <p>${produk.getPriceIDR()}</p>
    <button onclick="handleRemoveFromCart(${index})">Hapus</button>
    </div>
    </div>
    `;
    index++;
  });

  totalPriceInChart.textContent = cart.getTotalPriceIDR();
}

