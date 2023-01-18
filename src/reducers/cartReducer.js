const getLocalStorage = () => {
  const cart = localStorage.getItem("cart");

  if (cart) {
    return JSON.parse(cart);
  }
  return [];
};

const INITIAL_CART_STATE = {
  totalAmount: 0,
  totalItems: 0,
  shippingFee: 534,
  cart: getLocalStorage(),
};

const CART_ACTION_TYPE = {
  ADD_TO_CART: "ADD_TO_CART",
  CLEAR_CART: "CLEAR_CART",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPE.ADD_TO_CART:
      return { ...state, cart: payload };
    case CART_ACTION_TYPE.CLEAR_CART:
      return { ...state, cart: [] };
    default:
      throw new Error(`Unhandled type of ${type} in cartReducer`);
  }
};

export { INITIAL_CART_STATE, CART_ACTION_TYPE, cartReducer };
