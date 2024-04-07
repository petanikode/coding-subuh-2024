import { API } from "./API";

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
  } catch (err) {
    
  }
}

async function showProducts(){
  try {
    const response = await API.getProducts();
    if(!response.ok){
      throw new Error("Gagal mengambil produk");
    }

    const products = await response.json();
    
    console.log(products);
    
    //productListElement.innerHTML = "";
    products.forEach(product => {
      const productTemplate = `
        <div class="card col-md-3 p-3">
          <img src="${BASE_URL}/images/uploads/${product.image}" class="card-img-top object-fit-cover rounded-2"/>
          <div class="card-body">
            <h3 class="card-title">${product.name}</h3>
            <p class="card-text">
              ${product.price}
            </p>

            <button class="btn btn-sm btn-outline-primary" onclick="openEditModal(event)" data-product="${encodeURIComponent(JSON.stringify(product))}" >Edit</button>
            <button class="btn btn-sm btn-outline-danger" onclick="handleDelete(${product.id})">Hapus</button>
          </div>
        </div>
      `;

      productListElement.innerHTML += productTemplate;
    });

  } catch {

  }
}

document.addEventListener("DOMContentLoaded", () => {
  showCurrentUser();
  showCartCount();
  showProducts();
});
