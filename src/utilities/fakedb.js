const addDb = (id) => {
  let shopingCart = {};

  const storedCart = localStorage.getItem("shoping-cart");

  if (storedCart) {
    shopingCart = JSON.parse(storedCart);
  }

  const quantity = shopingCart[id];

  if (quantity) {
    const newQty = quantity + 1;
    shopingCart[id] = newQty;
  } else {
    shopingCart[id] = 1;
  }

  localStorage.setItem("shoping-cart", JSON.stringify(shopingCart));
};

const getStoresCart = () => {
  let shopingCart = {};

  const storedCart = localStorage.getItem("shoping-cart");
  if (storedCart) {
    shopingCart = JSON.parse(storedCart);
  }
  return shopingCart;
};

const removeFromDb = (id) => {
  const storedCard = localStorage.getItem("shoping-cart");
  if (storedCard) {
    const shopingCart = JSON.parse(storedCard);

    for (const id in shopingCart) {
      delete shopingCart[id];
      localStorage.setItem("shoping-cart", JSON.stringify(shopingCart));
    }
  }
};

const deleteShopingCart = () => {
  localStorage.removeItem("shoping-cart");
};

export { addDb, getStoresCart, removeFromDb, deleteShopingCart };
