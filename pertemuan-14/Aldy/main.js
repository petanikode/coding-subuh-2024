// coba buat object product dan cart
const keranjang = new Cart();

// buat object Wallet dengan saldo awal 10000
const gopay = new Wallet(10000);

// buat object product
const iphone = new Product(
  "iPhone 15 Pro Max",
  33000000,
  "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg",
);
const samsung = new Product(
  "Samsung Galaxy A55",
  6000000,
  "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a55.jpg",
);

//global variable
var modal_body = document.getElementById("modalBody");
var cart_total = document.getElementById("cartTotal");
var checkout_total = document.getElementById("checkoutTotal");
var total_saldo = document.getElementById("totalSaldo");
var cartModal = new bootstrap.Modal(document.getElementById('cartModal'), {
  keyboard: false
});

//masukkan product ke array
var products = [iphone,samsung];
var productWrapper = document.getElementById("phoneWrapper");

for(temp_product of products){
  productWrapper.innerHTML += `
    <div class="col">
      <img src="${temp_product.image}">
      <h2>${temp_product.name}</h2>
      <p>${temp_product.getPriceIDR()}</p>
      <button id="addBtn" class="cartBtn" onclick="addToCart('${temp_product.name}')">Add to cart</button>
    </div>
  `;
}

//add to cart
function addToCart(product_name){
  for(temp of products){
    if(temp.name == product_name)
    keranjang.addItem(temp);
    cart_total.innerText = keranjang.count();
    checkout_total.innerHTML = `<h2>Total : ${keranjang.getTotalPriceIDR()}</h2>`;
  }
}

//show keranjang
function showCart(){
  let cart_index = 0;
  modal_body.innerHTML = "";
  for(temp of keranjang.items){
    console.log(temp);
    modal_body.innerHTML += `
      <div class="col">
        <img src="${temp.image}">
      </div>
      <div class="col">
        <h2>${temp.name}</h2>
        <p>${temp.getPriceIDR()}</p>
        <button id="deleteBtn" class="cartBtn" onclick="deleteItem(${cart_index})">Hapus</button>
      </div>
      <hr style="margin-top:15px">
    `;
    cart_index++;
  }
}

//modal
function showModal(){
  //call modal
  cartModal.show();
  showCart();
}

//delete cart item
function deleteItem(index){
  let add_confirmation = confirm("Apakah anda yakin?");
  if(add_confirmation == true){
    keranjang.removeItem(index);
    showCart();
    cart_total.innerText = keranjang.count();
    checkout_total.innerHTML = `<h2>Total : ${keranjang.getTotalPriceIDR()}</h2>`;
  }

}

//bagian topup dan bayar
total_saldo.innerHTML = gopay.getCurrentBalanceIDR();

function topup(){
  let nominal = parseInt(prompt("Isi nominal yang ingin ditop-up?"));
  gopay.topUp(nominal);
  //update new saldo
  total_saldo.innerHTML = gopay.getCurrentBalanceIDR();
}

//checkout

function checkout(){
  let pay = gopay.pay(keranjang.getTotalPrice());
  if(pay == "success"){
    keranjang.clear();
    modal_body.innerHTML = "";
    cart_total.innerText = "";
    checkout_total.innerHTML = "";
    total_saldo.innerHTML = gopay.getCurrentBalanceIDR();
    alert("Terima kasih telah berbelanja di Toko Javascript");
    cartModal.hide();
  }
}
