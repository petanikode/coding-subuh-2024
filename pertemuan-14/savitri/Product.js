function Product(name, price, image){
  this.name = name;
  this.price = price;
  this.image = image;
}
Product.prototype.render = function() {
  return this.price.toLocaleString("id", {
    style: 'currency',
    currency: 'IDR'
  });
}