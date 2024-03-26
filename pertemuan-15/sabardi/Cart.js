class Cart {
    constructor(){
        this.items = [];
    }

    addItem(product){
        if(product instanceof product) {
            this.items.push(product);
        }else{
            console.error("tidak bisa menambahkan objek selain product ke keranjang")
        }
    }

    removeItem(index){
        this.items.splice(index,1);
    }
    clear(){
        this.items = [];
    }

    count(){
        return this.items.length;
    }

    getTotalPrice(){
        let totalPrice = 0;
        this.items.forEach(product => totalPrice += product.price);
        return totalPrice;
    }

    getTotalPriceIDR(){
        return this.getTotalPrice().toLocaleString("id",{
            style: "currency",
            currency: "IDR",
        })
    }
}