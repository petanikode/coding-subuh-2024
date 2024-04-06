import { API } from "./API"

// import our custom css
import "../scss/styles.scss";

//import all of boostrap's js
// import * as boostrap from "boostrap";

// DOM Element
const cartCountElement = document.querySelector("#cart-count");
const cartLink = document.querySelector("#cart-link");
const btnLoginregister = document.querySelector("#btnLoginRegister");

async function showCartCount(){
 try{
   const response = await API.getCartCount();

   if(!response.ok){
     throw new Error("Invalid Token");
     
   }
   cartCountElement.textContent = await response.json();
   cartLink.href = "cart.html";
   
 } catch (err){
   cartLink.href = "login.html";
 }
}

async function showCurrentUser(){
  try{
    const response = await API.getCurrentUser();

    if(response.ok){
      const user = await response.json();

      btnLoginregister.innerHTML = `
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
    
  } catch {
    
  }
  
}

document.addEventListener("DOMContentLoaded", () => {
  showCurrentUser();
  showCartCount();
});

