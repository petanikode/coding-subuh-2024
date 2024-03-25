class Cart {
  constructor() {
    this.items = [];
  }

  addItem(product){
    if(product instanceof Product){
    this.items.push(product);   
    }else{
      console.error("Tidak bisa menambahkan object selain product ke keranjang");
    }
  }

  removeItem(index){
    return.items.splice(index, 1);
  }

  clear(){}

  count(){
    return this.items.length;
  }

  getTotalPrice(){
    let totalPrice = 0;
    this.items.forEach(product =>totalPrice += product.price);
    return totalPrice;
  }

  getTotalPriceIDR(){
    return this.getTotalPrice().toLocaleString("id", {
      style: "currency",
      currency: "IDR",
    })
  }
}