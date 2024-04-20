import { API, BASE_URL } from "../API";

import Swal from "sweetalert2";

// Import our custom CSS
import "../../scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
window.bootstrap = bootstrap;

// DOM Elements
const loginRegisterButtons = document.querySelector("#loginRegisterButtons");
const formAddProduct = document.querySelector("#form-add-product");
const btnFormSaveProduct = document.querySelector("#btn-save-product");

// modals
var modalAdd = new bootstrap.Modal("#addProductModal");
var modalEdit = new bootstrap.Modal("#edit-modal");

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

    modalAdd.hide(); // sembunyikan modal
  } catch (err) {
  } finally {
    btnFormSaveProduct.disabled = false;
    btnFormSaveProduct.innerHTML = "Simpan";
  }
}

async function showProducts() {
const productListElement = document.querySelector("#product-list");

  try {
    const response = await API.admin.getProducts();
    if (!response.ok) {
      throw new Error("Gagal mengambil produk");
    }

    const products = await response.json();

    productListElement.innerHTML = "";
    products.forEach((product) => {
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
  } catch {}
}

window.openEditModal = function (event) {
  console.log(event.target.dataset.product);
  const product = JSON.parse(decodeURIComponent(event.target.dataset.product));

  console.log(product);

  // tampilkan modal edit
  modalEdit.show();
  document.querySelector("#form-edit-product").reset();

  // kirim data produk ke form
  document.querySelector("#edit-input-id").value = product.id;
  document.querySelector("#edit-input-name").value = product.name;
  document.querySelector("#edit-input-price").value = product.price;
  document.querySelector("#edit-input-stock").value = product.stock;

  document
    .querySelector("#btn-save-update-product")
    .addEventListener("click", (e) => {
      document.querySelector("#form-edit-product").requestSubmit();
    });
};

document
  .querySelector("#form-edit-product")
  .addEventListener("submit", handleUpdateData);

function handleUpdateData(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  console.log(formData.get("id"));

  API.admin.updateProduct(formData).then((response) => {
    if (response.ok) {
      modalEdit.hide();
      showProducts();
    }
  });
}

window.handleDelete = async function (productId) {
  console.log(productId);

  // konfirmasi sebelum mengahpus
  Swal.fire({
    title: "Apa anda yakin?",
    text: "Data produk akan dihapus selamanya!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, delete it!",
  }).then(async (result) => {
    if (result.isConfirmed) {
      // request delete ke API
      const response = await API.admin.deleteProduct(productId);
      if (response.ok) {
        showProducts();
        Swal.fire({
          title: "Berhasil dihapus!",
          text: "Data produk sudah dihapus.",
          icon: "success",
        });
      }
    }
  });
};

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
                <a class="dropdown-item" href="/logout.html">Logout</a>
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
