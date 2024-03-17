

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



