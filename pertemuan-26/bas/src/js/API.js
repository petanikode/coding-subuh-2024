const BASE_URL = "https://b27b4550-1313-4bb1-afb8-d82e1be332aa-00-6woy1h5xti2b.sisko.replit.dev";
// const BASE_URL = "https://3tj59h-3000.csb.app";

const TOKEN = localStorage.getItem("token");

function sendPostRequest(URL, data){
  return fetch(URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  })
}

function fetchWithToken(URL){
  return fetch(URL, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`
    }
  })
}

function postUpload(URL, data){
  return fetch(URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`
    },
    body: data
  })
}


export const API = {
  signUp: (newUser) => sendPostRequest(`${BASE_URL}/register`, newUser),
  login: (email, password) => sendPostRequest(`${BASE_URL}/auth`, {email, password}),
  getCurrentUser: _ => fetchWithToken(`${BASE_URL}/me`),
  getCartCount: _ => fetchWithToken(`${BASE_URL}/cart/count`),

  admin: {
    getProduct: _ => fetchWithToken(`${BASE_URL}/admin/products`),
    postProduct: (product) => postUpload(`${BASE_URL}/admin/products`, product)
  }
}