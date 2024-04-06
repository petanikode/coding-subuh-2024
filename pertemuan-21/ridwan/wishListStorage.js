class WishListStorage{
  constructor(keyName = "wishlist"){
    this.key = keyName;
  }

  getAll(){
    // ambil data dari local storage, convert menjadi object, jika null maka return array kosong
    return JSON.parse(localStorage.getItem(this.key)) ?? [];
  }

  add(product){
    // ambil dulu semua data product di wishlish
    const dataWishlists = this.getAll();
    // tambahkan data baru ke dalam array dataWishlist
    dataWishlists.push(product);
    // simpan array yang udah diupdate ke dalam localStorage
    this.#save(dataWishlists);
  }

  remove(productId){
    // ambil dulu semua data dari localstorage
    const dataWishlists = this.getAll();
    // hapus product di dalam array dataWishlists
    const newData = dataWishlists.filter(product => product.id != productId);
    this.#save(newData);
  }

  // buat simpan data ke localStorage
  #save(newProductData){
    const newProductDataJSON = JSON.stringify(newProductData);
    localStorage.setItem(this.key, newProductDataJSON);
  }

  isInWishlist(productId){
    // ambil dulu semua data dari localstorage
    const dataWishlists = this.getAll();
    return dataWishlists.some(product => product.id == productId);
  }

  count(){
    return this.getAll().length;
  }
}