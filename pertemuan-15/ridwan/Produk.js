function Produk (name, price, image) {
  this.name = name;
  this.price = price;
  this.image = image;
}
Produk.prototype.getPriceIDR = function () {
  return this.price.toLocaleString("id", {
    style: 'currency',
    currency: 'IDR'
  });
}