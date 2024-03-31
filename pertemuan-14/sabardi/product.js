function Product(name, price, image){
    this.name = name;
    this.price = price;
    this.image = image;
}

Product.prototype.getPriceIDR = function(){
    return this.price.toLocaleString("id", {
    style: 'Currency', 
    currency: 'IDR'
    })
}