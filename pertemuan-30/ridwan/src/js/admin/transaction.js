import { API, BASE_URL } from "../API";
import { formatRP } from "../utils/formatRP";

// Import our custom CSS
import "../../scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
window.bootstrap = bootstrap;

// DOM Elements
const loginRegisterButtons = document.querySelector("#loginRegisterButtons");
const paidTransactionList = document.querySelector("#paid-transaction-list");
const allTransactionList = document.querySelector("#all-transaction-list")

async function showTransactions() {
  try {
    const allTransactionResponse = await API.admin.getAllTransactions();
    const paidTransactionResponse = await API.admin.getPaidTransactions();

    const allTransactions = await allTransactionResponse.json();
    const paidTransactions = await paidTransactionResponse.json();

    console.log("ALL TRX:", allTransactions);
    console.log("PAID TRX:", paidTransactions);

    if(paidTransactions.length <= 0){
      paidTransactionList.innerHTML = "No Transaction";
    }

    if(allTransactions.length <= 0){
      allTransactionList.innerHTML = "No Transaction";
    }

    paidTransactions.forEach(trx => {
      const trxTemplate = `
        <tr>
          <td>${trx.createdAt}</td>
          <td>${trx.user.name}</td>
          <td>${formatRP(trx.total)}</td>
          <td>${trx.status}</td>
          <td>
            <a href="${trx.invoiceUrl}" target="_blank">Lihat Invoice</a>
          </td>
        </tr>
      `;
      paidTransactionList.innerHTML += trxTemplate;
    });


    allTransactions.forEach(trx => {
      const trxTemplate = `
        <tr>
          <td>${trx.createdAt}</td>
          <td>${trx.user.name}</td>
          <td>${formatRP(trx.total)}</td>
          <td class="${trx.status == "PAID" ? "text-success": "text-secondary"}" >${trx.status}</td>
          <td>
            <a href="${trx.invoiceUrl}" target="_blank">Lihat Invoice</a>
          </td>
        </tr>
      `;
      allTransactionList.innerHTML += trxTemplate;
    });

  } catch (error) {

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
                <a class="dropdown-item" href="/admin/transaction.html">Transaksi</a>
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
  showTransactions();
});
