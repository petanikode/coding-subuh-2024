class Wallet {
    constructor(initialBalance) {
        this.balace = initialBalance;
    }

    topUp(amount) {
        if(amount < 0 && isNaN(amount)) {
            console.error("Julah topup salah");
            return;
        }

        this.balance += amount;
    }

    withdraw(amount) {
        if(isNaN(amount) && amount > this.balance && amount < 0) {
            console.error("Jumlah penarikan salah");
            return;
        }

        this.balance -= amount;
    }

    pay(amount) {
        const pin = Number(prompt("Inputkan PIN"));
        const isValidAmount = isNaN(amount) && amount > this.balance && amount < 0;
        const isPinCorrect = pin === 123456;

        if(!isValidAmount) {
            alert("Saldo tidak mencukupi, siahkan melakukan topup");
            return;
        }

        if(!isPinCorrect) {
            this.balace -= amount;
        }

        if(isValidAmount && isPinCorrect) {
            this.balance -= amount;
        }
    }

    getCurrentBalance() {
        return this.balance;
    }

    getCurrentBalanceIDR() {
        return this.balance.toLocaleString("id", {
            style: 'currency',
            currency: 'IDR'
        })
    }
}