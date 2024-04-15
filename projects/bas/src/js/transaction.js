import { API, BASE_URL } from "./API";
import { formatRP } from "./utils/formatRP";

// Import our custom CSS
import "../scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

// DOM Elements
const cartCountElement = document.querySelector("#cart-count");
const cartLink = document.querySelector("#cart-link");
const loginRegisterButtons = document.querySelector("#loginRegisterButtons");
const transactionListElement = document.querySelector("#transaction-list");

async function showTransactions() {
  try {
    const response = await API.getTransactions();

    if (!response.ok) {
      throw new Error("Gagal mengambil data transaksi");
    }

    const transactions = await response.json();

    console.log(transactions);

    if (transactions.length <= 0) {
      transactionListElement.innerHTML = "Belum ada transaksi apapun";
    } else {
      transactionListElement.innerHTML = "";
    }

    transactions.forEach((trx) => {
      const items = trx.details.map(
        (item) => `
        <li>
          <
          ${item.product.name} &middot; ${formatRP(item.product.price)} &times; ${item.quantity}
        </li>
      `,
      );

      const transactionTemplate = `
        <div class="card col-12">
          <div class="card-body">
            <h2 class="card-title">${trx.status}</h2>
            <p>Tanggal: ${trx.createdAt}</p>
            <p>Total: ${formatRP(trx.total)}</p>
            <p>
              Items
              <ol>
                ${items.join("")}
              </ol>
            </p>
          </div>
        </div>
      `;

      transactionListElement.innerHTML += transactionTemplate;
    });
  } catch (error) {}
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
                <a class="dropdown-item" href="transaction.html">Transaksi</a>
                <a class="dropdown-item" href="logout.html">Logout</a>
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
  showCartCount();
  showTransactions();
});
