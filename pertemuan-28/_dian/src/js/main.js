import { API, BASE_URL } from "./API";
import { formatRP } from "./utils/formatRP";

import Swal from 'sweetalert2';

// Import our custom CSS
import "../scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

// DOM Elements
const cartCountElement = document.querySelector("#cart-count");
const cartLink = document.querySelector("#cart-link");
const loginRegisterButtons = document.querySelector("#loginRegisterButtons");
var productListElement = document.querySelector("#product-list");

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
    const response = await API.getProducts();
    if (!response.ok) {
      throw new Error("Gagal mengambil produk");
    }

    const products = await response.json();

    // NOTE: jangan lupa import BASE_URL, karena kita pakai BASE_URL di sini

    productListElement.innerHTML = "";
    products.forEach((product) => {
      const productTemplate = `
        <div class="card col-md-3 p-3 rounded-0">
          <img src="${BASE_URL}/images/uploads/${product.image}" class="card-img-top object-fit-cover rounded-2"/>
          <div class="card-body">
            <h3 class="card-title">${product.name}</h3>
            <p class="card-text">
              ${formatRP(product.price)}
            </p>

            
          </div>

          <div class="card-footer px-0">
            <button class="btn btn-outline-primary w-100" onclick="handleAddToCart(${product.id})">Add to Cart</button>
          </div>
        </div>
      `;

      productListElement.innerHTML += productTemplate;
    });
  } catch {}
}

window.handleAddToCart = async function(productId){
  console.log(productId);

  try {
    const response = await API.addToCart(productId);
    if(!response.ok){
      if(response.status === 403){
        window.location.href = "/login.html";
      }
      throw new Error("Gagal menambahkan produk ke keranjang");
    }

    // berhasil ditambhakn ke keranjang
    showCartCount();

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Produk berhasil ditambahkan ke keranjang",
      showConfirmButton: false,
      timer: 1500
    });
    
  } catch (err) {
    
  }
  
};

document.addEventListener("DOMContentLoaded", () => {
  showCurrentUser();
  showCartCount();
  showProducts();
});
