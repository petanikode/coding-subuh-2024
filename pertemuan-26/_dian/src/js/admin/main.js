import { API, BASE_URL } from "../API";

// Import our custom CSS
import "../../scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

// DOM Elements
const loginRegisterButtons = document.querySelector("#loginRegisterButtons");
const formAddProduct = document.querySelector("#form-add-product");
const btnFormSaveProduct = document.querySelector("#btn-save-product");
const modalAddProduct = document.querySelector("#addProductModal");

// deteksi events
btnFormSaveProduct.addEventListener("click", handleSubmitNewProduct);

async function handleSubmitNewProduct(event) {
  //event.preventDefault();

  const productData = new FormData(formAddProduct);

  btnFormSaveProduct.disabled = true;
  btnFormSaveProduct.innerHTML = `
    <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
    <span role="status">Menyimpan...</span>
  `;

  try {
    const response = await API.admin.postProduct(productData);
    if (!response.ok) {
      throw new Error("Gagal mengirim data ke server");
    }

    // produk suskes ditambahkan ke backend
    console.log(await response.json());
    showProducts();
    var modalAdd = new bootstrap.Modal("#addProductModal");
    modalAdd.hide();
  } catch (err) {
  } finally {
    btnFormSaveProduct.disabled = false;
    btnFormSaveProduct.innerHTML = "Simpan";
  }
}


async function showProducts(){
  const productListElement = document.querySelector("#product-list");

  try {
    const response = await API.admin.getProducts();
    if(!response.ok){
      throw new Error("Gagal mengambil produk");
    }

    const products = await response.json();

    console.log(products);

    productListElement.innerHTML = "";
    products.forEach(product => {
      const productTemplate = `
        <div class="card col-md-3 p-3">
          <img src="${BASE_URL}/images/uploads/${product.image}" class="card-img-top object-fit-cover rounded-2"/>
          <div class="card-body">
            <h3 class="card-title">${product.name}</h3>
            <p class="card-text">
              ${product.price}
            </p>

            <button class="btn btn-sm btn-outline-primary">Edit</button>
            <button class="btn btn-sm btn-outline-danger">Hapus</button>
          </div>
        </div>
      `;

      productListElement.innerHTML += productTemplate;
    });
    
  } catch {
    
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
                <a class="dropdown-item" href="../logout.html">Logout</a>
              </li>
            </ul>
          </li>
        </ul>
      `;
    }
  } catch (err) {}
}

document.addEventListener("DOMContentLoaded", () => {
  showCurrentUser();
  showProducts();
});
