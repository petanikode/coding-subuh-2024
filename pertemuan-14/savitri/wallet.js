class Wallet {
  constructor(initialBalance) {
    this.balance = initialBalance;
  }

  topUp(amount){
    if(amount < 0 && isNan(amount)){
      console.error("Jumlah Top up tidak memenuhi jumlah minimum top up!");
      return;
    }

    this.balance += amount;
  }

  withdraw(amount){
    if(isNaN(amount) && amount > this.balance && amount < 0){
      console.error("Jumlah penarikan salah!");
      return;
    }

    this.balance -= amount;
  }

  pay(amount){
    const pin = Number(prompt("Inputkan PIN"));
    const isValidAmount = isNaN(amount) && amount > this.balance && amount < 0;
    const isPinCorrect = pin === 123907;



  if(!isPinCorrect){
    alert("PIN Salah");
    return;
  }

  if(!isValidAmount){
    alert("Saldo tidak cukup, silahkan topup dulu!");
    return;
  }
}
  getCurrentBalanace(){
    return this.balance;
  }

  getCurrentBlanceIDR(){
    return this.balance.toLocaleString("id", {
      style: 'currency',
      currency: 'IDR'
    })
  }

  
}