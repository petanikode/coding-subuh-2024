const newCart = new Cart();
const xiaomi = new Product(
  "redmi note 9 pro",
  355000,
  "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-9-pro-global-.jpg",
);

const iphone = new Product(
  "iphone 14",
  1355000,
  "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14.jpg",
);
newCart.addItem(xiaomi);
