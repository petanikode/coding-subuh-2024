import { API } from "../API";

// Import our custom CSS
import "../../scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

// DOM Elements
const loginRegisterButtons = document.querySelector("#loginRegisterButtons");

const formAddProduct = document.querySelector("#form-add-product");
const btnFormSaveProduct = document.querySelector("#btn-save-product");

// deteksi evenst
btnFormSaveProduct.addEventListener("submit", handleSubmitNewProduct);

async function handleSubmitNewProduct(event){
  // event.preventDefault();

  const productData = new FormData(formAddProduct);

  try {
    const response = await API.admin.postProduct(productData);
    if(!response.ok){
      throw new Error("Gagal Mengirim data ke server");

    }

    // produk sukses di tambahkan ke backend
    modalAddProduct.toggleAttribute()
    console.log(await response.json());
    console.log(await response.json());
  } catch (err) {
    
  } finally {
    btnFormSaveProduct.disabled = false;
    btnFormSaveProduct.innerHTML = "simpan";
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

document.addEventListener("DOMContentLoaded", () => {
  showCurrentUser();
});
