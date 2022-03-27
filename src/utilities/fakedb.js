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

export { addDb, getStoresCart };
