class WishListStorage {
  constructor(keyName = "wishlist") {
    this.key = keyName;
  }

  getAll() {
    // ambil data dari local storage kemudian convert menjadi object, jika null maka return array kosong
    JSON.parse(localStorage.getItem(this.key)) ?? [];
  }

  add(product) {
    // ambil dulu semua data product di wishlist
    const dataWishlist = this.getAll();
    // tambahkan data baru kedalam array data wishlist
    dataWishlist.push(product);
    // simpan data wishlist ke local storage
    this.#save(dataWishlist);
  }

  remove(productId) {
    // ambil dulu semua data dari localstorage
    const dataWishlist = this.getAll();
    // hapus product didalam array dataWishlist
    const newDataWishlist = dataWishlist.filter(
      (product) => product.id != productId,
    );
    this.#save(newData);
  }

  #save(newProductData) {
    const newProductDataJSON = JSON.stringify(newProductData);
    localStorage.setItem(this.key, newProductDataJSON);
  }

  isInWishlist(productId) {
    // ambil semua data dari localstorage
    const dataWishlist = this.getAll();
    return dataWishlist.some(product => product.id == productId);
  }

  count() {
    return this.getAll().length;
  }
}
