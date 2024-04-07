import { API } from "../API";

// Import our custom CSS
import "../../scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
import { BASE_URL } from "../../../../_dian/src/js/API";

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
    console.log(await response.json());
    showProducts();

    modalAdd.hide(); //sembunyikan modal
    
//     modalAddProduct.toggleAttribute()
//     console.log(await response.json());
//     console.log(await response.json());
  } catch (err) {
    
  } finally {
    btnFormSaveProduct.disabled = false;
    btnFormSaveProduct.innerHTML = "simpan";
  }
}

async function showProduct(){
  const productListElement = document.querySelector("#product-list");

  try {
    const response = await API.admin.getProduct();
    if(!response.ok){
      throw new Error ("Gagal mengambil Produk");
      
    }
    const products = await response.json();
    console.log(products);
    productListElement.innerHTML = "";
    product.forEach(products => {
      const productTemplate = `
      <div class="card col-md-3 p3">
      <img src="${BASE_URL}/images/uploads/${products.image}
      class="card-img-top object-fit-cover rounded-2/>
      <div class="card-body">
      <h3 class="card-title">${productListElement.name}</h3>
      <p class="card-text">
      ${products.price}
      </p
      
      <button class="btn btn-sm btn-outline-primary" onclick="openEditModal(even)"
      data-product="${encodeURIComponent(JSON.stringify(product ))} >Edit</button>"
       <button class="btn btn-sm btn-outline-danger" onclick="handleDelete(${product.id})">Hapus</button>
          </div>
        </div>
        `

    })
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
