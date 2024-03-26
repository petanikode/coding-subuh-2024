class Cart {
  constructor(){
    this.items = [];
  }
  addItem(produk){
    if (produk instanceof Produk) {
      this.items.push(produk);
    } else {
      console.error("Tidak bisa menambahkan objek selain Produk ke keranjang");
    }
  }
  removeItem(index){
    this.items.splice(index, 1);
  }
  clear(){
    this.items = [];
  }
  count(){
    return this.items.lenght;
  }

  getTotalPrice(){
    let totalPrice = 0;
    this.items.forEach(produk => totalPrice += produk.price);
    return totalPrice;
  }
  getTotalPriceIDR(){
    return this.getTotalPrice().toLocaleString("id", {
      style: "currency",
      currency: "IDR"
    });
  }
}