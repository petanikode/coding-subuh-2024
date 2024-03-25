function Product(name, price,image) {
  this.name = name;
  this.price = price;
  this.image = image;
}

product.prototype.getPriceIDR = function () {
  return this.price.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
  });
}