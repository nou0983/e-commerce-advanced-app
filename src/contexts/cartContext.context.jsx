import { useReducer } from "react";
import { createContext, useContext } from "react";
import { createAction } from "../utils/createAtion.utils";
import {
  INITIAL_CART_STATE,
  cartReducer,
  CART_ACTION_TYPE,
} from "../reducers/cartReducer";
import { useEffect } from "react";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_CART_STATE);
  const { cart } = state;

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (id, amount, color, product) => {
    const { name, images, price, stock } = product;
    const checkExisting = cart.find((item) => item.id === id + color);
    let payload;

    if (checkExisting) {
      payload = cart.map((item) => {
        if (item.id === id + color) {
          return { ...item, amount, color };
        }
        return item;
      });
    } else {
      const newItem = {
        id: id + color,
        amount,
        color,
        name,
        price,
        stock,
        image: images[0].url,
      };
      payload = [...cart, newItem];
    }

    dispatch(createAction(CART_ACTION_TYPE.ADD_TO_CART, payload));
  };

  const clearCart = () => {
    dispatch(createAction(CART_ACTION_TYPE.CLEAR_CART));
  };

  const value = {
    ...state,
    addToCart,
    clearCart
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartContextProvider, useCartContext };
