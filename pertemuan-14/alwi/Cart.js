class Cart {
  constructor() {
    this.items = [];
  }
  addItem(product) {
    if (product instanceof Product) {
      this.items.push(product);
    } else {
      console.log("tidak bisa menambahkan object selain product ke keranjang");
    }
  }
  removeItem(index) {
    this.item.splice(index, 1);
  }
  clear() {
    this.items = [];
  }
  count() {
    return this.items.length;
  }
  getTotalPrice() {
    let totalPrice = 0;
    this.items.forEach((product) => {
      totalPrice += product.price;
      return totalPrice;
    });
  }
  getTotalPriceIDR() {
    return this.getTotalPrice().toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  }
}
