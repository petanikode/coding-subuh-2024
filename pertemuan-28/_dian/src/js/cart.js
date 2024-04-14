import { API, BASE_URL } from "./API";
import { formatRP } from "./utils/formatRP";

import Swal from "sweetalert2";

// Import our custom CSS
import "../scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

// DOM Elements
const cartCountElement = document.querySelector("#cart-count");
const cartLink = document.querySelector("#cart-link");
const loginRegisterButtons = document.querySelector("#loginRegisterButtons");
const cartTotalPrice = document.querySelector("#cart-total-price");
var productListElement = document.querySelector("#product-list");

async function showCartTotalPrice() {
  try {
    // ambil total harga dari backend
    const response = await API.getCartTotalPrice();

    if (!response.ok) {
      throw new Error("Invalid token");
    }

    cartTotalPrice.textContent = formatRP(await response.json());
  } catch (err) {
    console.log(err.message);
  }
}

async function showCartCount() {
  try {
    const response = await API.getCartCount();

    if (!response.ok) {
      throw new Error("Invalid token");
    }

    cartCountElement.textContent = await response.json();
    cartLink.href = "cart.html";
  } catch (err) {
    cartLink.href = "login.html";
  }
}

async function showCurrentUser() {
  try {
    const response = await API.getCurrentUser();

    if (response.ok) {
      const user = await response.json();

      loginRegisterButtons.innerHTML = `
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <button class="btn btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expended="false">
              ${user.name}
            </button>
            <ul class="dropdown-menu dropdown-menu-light">
              <li>
                <a class="dropdown-item" href="logout.html">Logout</a>
              </li>
            </ul>
          </li>
        </ul>
      `;
    }
  } catch (err) {}
}

async function showProducts() {
  try {
    const response = await API.getProductsFromCart();
    if (!response.ok) {
      throw new Error("Gagal mengambil produk");
    }

    const itemsInCart = await response.json();

    // NOTE: jangan lupa import BASE_URL, karena kita pakai BASE_URL di sini

    productListElement.innerHTML = "";
    itemsInCart.forEach((item) => {
      const productTemplate = `
        <div class="card col-md-3 p-3 rounded-0">
          <img src="${BASE_URL}/images/uploads/${item.product.image}" class="card-img-top object-fit-cover rounded-2"/>
          <div class="card-body">
            <h3 class="card-title">${item.product.name}</h3>
            <p class="card-text">
              ${formatRP(item.product.price)}
            </p>

            <p>Qty: ${item.quantity}</p>

          </div>

          <div class="card-footer px-0">
            <button class="btn btn-outline-danger w-100" onclick="hendleRemoveFromCart(${item.id})">Remove</button>
          </div>
        </div>
      `;

      productListElement.innerHTML += productTemplate;
    });
  } catch {}
}

window.hendleRemoveFromCart = function (itemId) {
  console.log(itemId);

  // konfirmasi sebelum mengahpus
  Swal.fire({
    title: "Apa anda yakin?",
    text: "Produk akan dihapus dari keranjang!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Ya, hapus dah!",
  }).then(async (result) => {
    if (result.isConfirmed) {
      // request delete ke API
      const response = await API.removeFromCart(itemId);
      
      if (response.ok) {
        showCartCount();
        showProducts();
        showCartTotalPrice();
        Swal.fire({
          title: "Berhasil dihapus!",
          text: "Produk sudah dihapus dari keranjang.",
          icon: "success",
        });
      }
    }
  });
  
};

document.addEventListener("DOMContentLoaded", () => {
  showCurrentUser();
  showCartCount();
  showProducts();
  showCartTotalPrice();
});
