const keranjang = new Cart();

const goPay = new Wallet(10000);

const totoroRiceBowl = new Product(
  "Totoro Rice Bowl",
  539000,
  "https://images.tokopedia.net/img/cache/100-square/VqbcmM/2024/3/21/2cab1f7f-55e8-40ab-adb1-f40f5cf242e1.jpg.webp?ect=4g",
);

const shinchanMug = new Product(
  "Shinchan Mug",
  499000,
  "https://images.tokopedia.net/img/cache/100-square/VqbcmM/2023/10/18/f4fe728e-1fba-4664-a1c8-02bd4625381b.jpg.webp?ect=4g",
);

const totoroTrinket = new Product(
  "Totoro Trinket",
  459000,
  "https://images.tokopedia.net/img/cache/100-square/VqbcmM/2023/9/20/dbe12d73-bf66-4f8a-ae57-f2713a1375c5.jpg.webp?ect=4g",
);

const calciferIncenseHolder = new Product(
  "Calcifer Incense Holder",
  529000,
  "https://images.tokopedia.net/img/cache/100-square/VqbcmM/2024/3/21/d4bc6abe-04ac-46be-9f77-e7451cfa1320.jpg.webp?ect=4g",
);

const ponyoSosukeMug = new Product(
  "Ponyo Sosuke Mug",
  599000,
  "https://images.tokopedia.net/img/cache/100-square/VqbcmM/2024/2/7/6e2ff931-5b26-4a5d-b837-2518bf311293.jpg.webp?ect=4g",
);

keranjang.addItem(totoroRiceBowl);

goPay.topUp(5000000);

console.log(goPay.getCurrentBalanceIDR());