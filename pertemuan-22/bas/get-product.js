//const axios = require('axios');

import axios from 'axios';

const request = axios.get("https://fakestoreapi.com/products/");

request.then(response => {
  console.log(response);
}).catch(err => {
  console.log(err);
})
