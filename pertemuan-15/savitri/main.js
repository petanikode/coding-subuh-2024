const cart = new Cart();

const wallet = new Wallet(10000);

const totoroRiceBowl = new Product(
  "Totoro Rice Bowl",
  539000,
  "https://images.tokopedia.net/img/cache/100-square/VqbcmM/2024/3/21/2cab1f7f-55e8-40ab-adb1-f40f5cf242e1.jpg.webp?ect=4g",
);

const shinchanMug = new Product(
  "Shinchan Mug",
  499000,
  "https://images.tokopedia.net/img/cache/100-square/VqbcmM/2023/10/18/f4fe728e-1fba-4664-a1c8-02bd4625381b.jpg.webp?ect=4g",
);

const totoroTrinket = new Product(
  "Totoro Trinket",
  459000,
  "https://images.tokopedia.net/img/cache/100-square/VqbcmM/2023/9/20/dbe12d73-bf66-4f8a-ae57-f2713a1375c5.jpg.webp?ect=4g",
);

const calciferIncenseHolder = new Product(
  "Calcifer Incense Holder",
  529000,
  "https://images.tokopedia.net/img/cache/100-square/VqbcmM/2024/3/21/d4bc6abe-04ac-46be-9f77-e7451cfa1320.jpg.webp?ect=4g",
);

const ponyoSosukeMug = new Product(
  "Ponyo Sosuke Mug",
  599000,
  "https://images.tokopedia.net/img/cache/100-square/VqbcmM/2024/2/7/6e2ff931-5b26-4a5d-b837-2518bf311293.jpg.webp?ect=4g",
);

var products = [
  totoroRiceBowl,
  shinchanMug,
  totoroTrinket,
  calciferIncenseHolder,
  ponyoSosukeMug
]

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

function topUpWallet(){
  const topUpAmount = Number(prompt("Jumlah toptup"));
  if(isNaN(topUpAmount) || topUpAmount < 0) {
    alert("Jumlah topup salah");
    return;
  }

  wallet.topUp(topUpAmount);
  updateWalletBalanceDisplay();
}

// untuk menampilkan list produk di halaman

function showAllProducts() {
  const productListElement = document.querySelector("#product-list");

  let index = 0;
  for(product of products){
    productListElement.innerHTML = `
      <div class="product">
        <img src="${product.image}" />
        <h3>${product.name}</h3>
        <h3>${product.getPriceIDR()}</h3>
        <button onclick="handleAddToCart(${index})">Add to Cart</button>
      </div>
    `;
    index++;
  }
}

function showProductInCart(){
  const cartProductList = document.querySelector("#product-list-in-cart");
  const totalPriceInCart = document.querySelector("#total-product-price-in-cart");

  cartProductList.innerHTML = '';

  let index= 0;
  cart.items.forEach(product => {
    cartProductList.innerHTML += `
      <div class="product">
        <img src="${product.image}" />
        <div>
          <h3>${product.name}</h3>
          <h3>${product.getPriceIDR()}</h3>
          <button onclick="handleRemoveFromCart(${index})">Hapus</button>
        </div>
      </div>
    `;
    index++;
  });

  totalPriceInCart.textContent = cart.getTotalPriceIDR();
}

function updateCartCountDisplay(){
  document.querySelector("#cartCount").textContent = cart.items.length;
}

function updateWalletBalanceDisplay(){
  document.querySelector("wallet-balance").textContent = wallet.getCurrentBalanceIDR();
}

document.addEventListener("DOMContentLoaded", () => {
  showAllProducts();
  updateCartCountDisplay();
  updateWalletBalanceDisplay();
});