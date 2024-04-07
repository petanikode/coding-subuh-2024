import { API } from "./API";
import { confetti } from "@tsparticles/confetti";

// Import our custom CSS
import "../scss/styles.scss";

// Import all of Bootstrap's JS
//import * as bootstrap from "bootstrap";

// setup element DOM
const formRegister = document.querySelector("#formRegister");
const inputAcceptTerm = document.querySelector("#inputAcceptTerms");
const btnShowPassword = document.querySelector("#btnShowPassword");
const btnSubmit = document.querySelector("#btnSubmit");
const errorAlert = document.querySelector("#error-alert");

// membuat custom event
const congratulationEvent = new Event("congratulation");

// deteksi event pada object/elemen HTML
inputAcceptTerm.addEventListener("click", handleTermsChecked);
btnShowPassword.addEventListener("click", handleShowHidePassword);
formRegister.addEventListener("submit", handleSubmit);
document.addEventListener("congratulation", handleCongratulation);

function handleTermsChecked(event) {
  console.log(event.target.checked);
  btnSubmit.disabled = !event.target.checked;
}

function handleShowHidePassword(event) {
  const inputPassword = document.querySelector("#inputPassword");

  if (inputPassword.type === "password") {
    inputPassword.type = "text";
    event.target.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
  <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z"/>
  <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z"/>
</svg>`;
  } else {
    inputPassword.type = "password";
    event.target.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                </svg>`;
  }
}

function handleSubmit(event) {
  // cegah defaul aksi yang dilakukan di browser
  event.preventDefault();

  // object Form data
  const formData = new FormData(formRegister);

  const newUser = Object.fromEntries(formData);

  // object newUser bisa kita kirim ke server/backend API
  console.log(newUser);

  // Disble button submit sebelum melakukan request
  btnSubmit.disabled = true;
  btnSubmit.textContent = "Mendaftar...";

  // ambil data dari promise dengan then..catch
  API.signUp(newUser)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Ups, gagal mendaftar!");
      }
      return response.json();
    })
    .then((data) => {
      // trigger custom event
      document.dispatchEvent(congratulationEvent);
    })
    .catch((err) => {
      console.log(err);
      errorAlert.classList.remove("d-none");
      //errorAlert.textContent = err.message;
    })
    .finally((_) => {
      // reset button submit ke semula
      btnSubmit.disabled = false;
      btnSubmit.textContent = "Daftar";
    });
}

// handle custom event
function handleCongratulation() {
  console.log("Selamat, anda sudah berhasil menjadi user");

  // jalankan efek confetti
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });

  // redirect ke halaman login
  window.location.href = "login.html";
}
