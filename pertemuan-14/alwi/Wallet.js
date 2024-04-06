class Wallet {
  constructor(initalBalance) {
    this.balance = initalBalance;
  }

  topUp(amount){
    if (amount < 0 && isNaN(amount)) {    
      console.error("jumlah topUp salah");
      return;
    }
    this.balance += amount;
  }
  withdraw(amount){
    if(isNaN(amount) && amount > this.balance && amount < 0) {
      console.eror("jumlah penarikan salah");
      return;
    }
    this.balance -= amount;
  }
  pay(amount){
    const pin = Number(prompt("Inputkan Pin"));
    const isValidAmount = isNan(amount) && amount > this.balance && amount < 0;
    const isPinCorrect = pin === 123456;
  }
  getCurrentBalance(){
    return this.balance;
  }

  getcurrentBalanceIDR(){
    return this.balance.toLocaleString('id-ID', {
      style: 'currency', currency: 'IDR'
    })
  }
}