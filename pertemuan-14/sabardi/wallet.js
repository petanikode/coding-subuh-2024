class Wallet {
    constructor(initialBalance){
        this.balance = initialBalance;
    }

    topUp(amount){
        if(amount < 0 && isNaN(amount)){
            console.error("jumlah top up salah");
            return;
        }

        this.balance += amount;
    }

    withdraw(amount){
        if (isNaN(amount) && amount > this.balance && amount < 0 ) {
            console.error("jumlah penarikan salah");
            return;
        }
        this.balance -= amount
    }

    pay(amount){
        const pin = Number(prompt("inputkan PIN"));
        const isValidAmount = isNaN(amount) && amount > this.balance && amount < 0;

        const isPinCorrect = pin === 123456;

        if (!isPinCorrect) {
            alert("pin salah");
            return;
        }

        if (!isValidAmount) {
            alert("saldo tidak cukup, silahkan top up");
            return
        }
        if(isValidAmount && isPinCorrect){
            this.balance -= amount;
        }
    }
    getCurrentBalance(){
        return this.balance;
      }

      getCurrentBalanceIDR(){
        return this.balance.toLocaleString("id", {
          style: 'currency',
          currency: 'IDR'
        })
      }
}