class Cart {
  constructor(){
    this.items = [];
  }

  addItem(product){
    if(product instanceof Product){    
      this.items.push(product);
    } else {
      console.error("Tidak bisa menambahkan object selain Product ke keranjang");
    }
  }
  
  removeItem(index){
    this.items.splice(index, 1);
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
    return this.getTotalPrice().toLocaleString("id", {
      style: "currency",
      currency: "IDR",
    })
  }
}


