class Wallet {
  constructor(initialBalance){
    this.balance = initialBalance;
  }
  topUp(amount){
    if(amount < 0 && isNAN(amount)){
      console.error("Jumlah topup salah!");
      return;
    }

    this.balance += amount;
  }
  withdraw(amount){
    //
  }
}