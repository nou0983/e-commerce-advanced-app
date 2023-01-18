const getLocalStorage = () => {
  const cart = localStorage.getItem("cart");

  if (cart) {
    return JSON.parse(cart);
  }
  return [];
};

const INITIAL_CART_STATE = {
  total: 0,
  totalItems: 0,
  shippingFee: 500,
  cart: getLocalStorage(),
};

const CART_ACTION_TYPE = {
  ADD_TO_CART: "ADD_TO_CART",
  CLEAR_CART: "CLEAR_CART",
  REMOVE_ITEM: "REMOVE_ITEM",
  SET_TOTAL: "SET_TOTAL",
  TOGGLE_AMOUNT: "TOGGLE_AMOUNT",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPE.ADD_TO_CART:
      return { ...state, cart: payload };
    case CART_ACTION_TYPE.CLEAR_CART:
      return { ...state, cart: [] };
    case CART_ACTION_TYPE.REMOVE_ITEM:
      return { ...state, cart: payload };
    case CART_ACTION_TYPE.SET_TOTAL:
      return { ...state, total: payload.newTotal, totalItems: payload.newAmount };
    case CART_ACTION_TYPE.TOGGLE_AMOUNT:
      return { ...state, cart: payload };
    default:
      throw new Error(`Unhandled type of ${type} in cartReducer`);
  }
};

export { INITIAL_CART_STATE, CART_ACTION_TYPE, cartReducer };
