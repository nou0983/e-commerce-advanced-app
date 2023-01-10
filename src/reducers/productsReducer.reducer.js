const PRODUCTS_ACITON_TYPE = {
  TOGGLE_SIDE_BAR: "TOGGLE_SIDE_BAR",
};

const INITIAL_PRODUCTS_STATE = {
  isSidebarOpen: false,
};

const productsReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCTS_ACITON_TYPE.TOGGLE_SIDE_BAR:
      return { ...state, isSidebarOpen: payload };
    default:
      throw new Error(`Unhandled type of ${type} in productsReducer`);
  }
};

export { PRODUCTS_ACITON_TYPE, INITIAL_PRODUCTS_STATE, productsReducer };
