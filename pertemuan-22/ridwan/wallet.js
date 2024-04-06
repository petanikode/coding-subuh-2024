// membuat custom class yang diturunkan dari class Error
class BalanceError extends Error {
  constructor(message){
    super(message);
    this.name = "BalanceError";
  }
}

class Wallet {
  constructor(initialBalance){
    this.balance = initialBalance;
  }

  topUp(amount){
    if(amount < 0 || isNaN(amount)){
      throw new BalanceError("Ups! Jumlah topup salah.");
    }

    this.balance += amount;
  }

  withdraw(amount){
    if(amount < 0 || isNaN(amount) || amount > this.balance){
      throw new BalanceError("Ups, jumlah saldo yang mau ditarik salah.");
    }

    this.balance -= amount;
  }
}

// export class supaya bisa diimport di file lain
export default Wallet; // default class yang akan dieksport
export { Wallet, BalanceError } // object export
