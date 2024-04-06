const BASE_URL = "https://b27b4550-1313-4bb1-afb8-d82e1be332aa-00-6woy1h5xti2b.sisko.replit.dev";
// const BASE_URL = "https://3tj59h-3000.csb.app";

async function sendPostRequest(URL, data){
  return await fetch(URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  })
}


export const API = {
  signUp: async (newUser) => await sendPostRequest(`${BASE_URL}/register`, newUser),
  login: async (email, password) => await sendPostRequest(`${BASE_URL}/auth`, {email, password}),
}