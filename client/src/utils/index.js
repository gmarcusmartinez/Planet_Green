// Functions to be called in Cart Reducer
export const addItemToCart = (cartItems, itemToAdd) => {
  const existingCartItem = findCartItem(cartItems, itemToAdd);

  if (existingCartItem) return increaseItemCount(cartItems, itemToAdd);
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  const existingCartItem = findCartItem(cartItems, itemToRemove);

  if (existingCartItem.quantity === 1)
    return clearItemFromCart(cartItems, itemToRemove);

  return decreaseItemCount(cartItems, itemToRemove);
};

// Helper functions for functions we will call in our Cart Reducer
const findCartItem = (cartItems, item) =>
  cartItems.find(({ _id }) => _id === item._id);

const increaseItemCount = (cartItems, itemToAdd) =>
  cartItems.map((item) =>
    item._id === itemToAdd._id ? { ...item, quantity: item.quantity + 1 } : item
  );

const decreaseItemCount = (cartItems, itemToRemove) =>
  cartItems.map((item) =>
    item._id === itemToRemove._id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );

const clearItemFromCart = (cartItems, itemToRemove) =>
  cartItems.filter(({ _id }) => _id !== itemToRemove._id);

export const calculateTotal = (cartItems) =>
  cartItems.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);

// Functions to be called in Product Reducer
export const sortItems = (items, order) =>
  order === 'ascending'
    ? [...items.sort((a, b) => a.price - b.price)]
    : [...items.sort((a, b) => b.price - a.price)];
