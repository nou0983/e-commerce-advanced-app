const INITIAL_CART_STATE = {
  totalAmount: 0,
  totalItems: 0,
  shippingFee: 534,
  cart: [],
};

const CART_ACTION_TYPE = {
  ADD_TO_CART: " ADD_TO_CART",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPE.ADD_TO_CART:
      return { ...state, cart: payload };
    default:
      throw new Error(`Unhandled type of ${type} in cartReducer`);
  }
};

export { INITIAL_CART_STATE, CART_ACTION_TYPE, cartReducer };
