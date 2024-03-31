class Wallet {
  constructor(initialBalance) {
    this.balance = initialBalance;
  }

  topUp(amount) {
    if (amount < 0 && isNaN(amount)) {
      console.error("Jumlah topup salah!");
      return;
    }

    this.balance += amount;
  }

  withdraw(amount) {
    if (isNaN(amount) && amount > this.balance && amount < 0) {
      console.error("Jumlah penarikan salah!");
      return;
    }

    this.balance -= amount;
  }

  pay(amount) {
    const pin = Number(prompt("Inputkan PIN"));
    // amount: harus angka dan lebih besar dari 0 dan lebih kecil dari saldo
    const validAmount = !isNaN(amount) && amount < this.balance && amount > 0;
    const isPinCorrect = pin === 123456;

    if (!isPinCorrect) {
      alert("PIN Salah");
      return;
    }

    if (!validAmount) {
      alert("Saldo tidak cukup, silahkan topup dulu!");
      return;
    }

    this.balance -= amount;
    document.dispatchEvent(new Event("payment-success"));
  }

  getCurrentBalance() {
    return this.balance;
  }

  getCurrentBalanceIDR() {
    return this.balance.toLocaleString("id", {
      style: "currency",
      currency: "IDR",
    });
  }
}
