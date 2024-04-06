const axios = require('axios');

const request = axios.get("https://fakestoreapi.com/products/");

request.then(response => {
  console.log(response.data);
}).catch(err => {
  console.log(err);
});
