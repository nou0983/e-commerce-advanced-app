const PRODUCTS_ACITON_TYPE = {
  SET_PRODUCTS: "SET_PRODUCTS",
  SET_PRODUCTS_LOADING: "SET_PRODUCTS_LOADING",
  SET_PRODUCTS_ERROR: " SET_PRODUCTS_ERROR",
  SET_PRODUCT: "SET_PRODUCT",
  SET_PRODUCT_LOADING: "SET_PRODUCT_LOADING",
  SET_PRODUCT_ERROR: " SET_PRODUCT_ERROR",
};

const INITIAL_PRODUCTS_STATE = {
  products: [],
  productsLoading: false,
  productsError: false,
  product: [],
  productLoading: false,
  productError: false,
  featuredProducts: [],
};

const productsReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCTS_ACITON_TYPE.SET_PRODUCTS:
      return {
        ...state,
        products: payload.all,
        featuredProducts: payload.featured,
        productsLoading: false,
      };

    case PRODUCTS_ACITON_TYPE.SET_PRODUCTS_LOADING:
      return { ...state, productsLoading: payload, productsError: false };

    case PRODUCTS_ACITON_TYPE.SET_PRODUCTS_ERROR:
      return { ...state, productsError: payload, productsLoading: false };

    case PRODUCTS_ACITON_TYPE.SET_PRODUCT:
      return {
        ...state,
        product: payload,
        productLoading: false,
      };

    case PRODUCTS_ACITON_TYPE.SET_PRODUCT_LOADING:
      return { ...state, productLoading: payload, productError: false };

    case PRODUCTS_ACITON_TYPE.SET_PRODUCT_ERROR:
      return { ...state, productError: payload, productLoading: false };

    default:
      throw new Error(`Unhandled type of ${type} in productsReducer`);
  }
};

export { PRODUCTS_ACITON_TYPE, INITIAL_PRODUCTS_STATE, productsReducer };
