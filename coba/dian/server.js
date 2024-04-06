

const andaMember = false;

if(isMember){
  console.log("Anda dapat diskon!");
} else if(paymentMethod == 'paylater') {
  console.log("Anda dapat cashback 🤑");
} else {
  console.log("tidak dapat apa-apa");
}


if(inputedUsername === username){
  if(inputedPassword === password){
    if(user.role === isAdmin){
      console.log("Login sebagai admin");
    }
    console.log("login sebagai member");
  } else {
    console.log("password salah");
  }
} else {
  console.log("username salah")
}



if(inputedUsername !== username){
  console.log("username salah")
  return;
}

if(inputedPassword !== password){
  console.log("password salah");
  return;
}

if(user.role === isAdmin){
  console.log("Login sebagai admin");
}

console.log("login sebagai member");


var statusPesanan = "BELUM_BAYAR";
var color = "gray";

switch (statusPesanan) {
  case "BELUM_BAYAR":
    color = "red";
    break;
  case "DIPROSES":
    color = "yellow";
    break;
  case "PENGIRIMAN":
    color = "blue";
    break;
  case "SAMPAI_TUJUAN":
    color = "green";
    break;
  default:
    color = "gray";
}


switch(true){
  case suhu > 80:
    console.log("Mendidih");
    break;
  case suhu > 60:
    console.log("Enak buat ngopi");
  case suhu > 30:
    console.log("Hangat");
  default:
    console.log("Airnya dingin");
}




for(let hitungan = 0; hitungan < 10; hitungan++){
  document.write(`<p>Perulangan ke-${hitungan}</p>`);
}


// tampilkan teks "Coding subuh" sebanyak 10x
document.write("Coding Subuh");
document.write("Coding Subuh");
document.write("Coding Subuh");
document.write("Coding Subuh");
document.write("Coding Subuh");
document.write("Coding Subuh");
document.write("Coding Subuh");
document.write("Coding Subuh");
document.write("Coding Subuh");
document.write("Coding Subuh");



let i = 0;

do {
  i++;
  console.log("Kode ini diulang");
} while (i < 10);

while(i < 10){
  console.log("Kode ini diulang");
  i++;
}


let products = [];



var fruits = ["🍎", "🍇", "🍓"];



const fruits = [
  "🍎", 
  "🍇", 
  "🍓"
];


var fruits = new Array("🍎","🍎","🍎");




fruits[0] = "🌽";
fruits[1] = "🍅";
fruits[2] = "🥦";

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);