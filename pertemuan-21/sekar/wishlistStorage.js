class WishlistStorage {
  constructor(keyName = "wishlist"){
    this.key = keyName;
  }

  getAll(){
    // ambil data dari local storage, convers menjadi objek. Jika null, maka array kosong
    return JSON.parse(localStorage.getItem(this.key)) ?? [];
  }

  add(product){
    // ambil dulu semua data produk di wishlist
    const dataWishlist = this.getAll();
    // tambahkan data baru ke dalam wishlist
    dataWishlist.push(product);
    // simpan array yang udah di update ke dalam local storage
    this.#save(dataWishlist);

  }

  remove(productId){
    const dataWishlists = this.getAll();
    const newData = dataWishlists.filter(product => product.id != productId);
    this.#save(newData);
  }

  #save(newProductData){
    const newProductDataJSON = JSON.stringify(newProductData);
    localStorage.setItem(this.key, newProductDataJSON);
  }

  isInWishlist(productId){
    const dataWishlists = this.getAll();
    return dataWishlists.some(product => product.id == productId);
  }

  count(){
    return this.getAll().length;
  }
}