import { createContext, useContext, useReducer } from "react";
import {
  cartReducer,
  initialCartState,
  REDUCER_ACTION_TYPES,
} from "../reducers/getCartData";

interface ShoppingProps {
  getCartItemQuantity: (id: any) => any;
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
}

const ShoppingCartContext = createContext({} as ShoppingProps);

export const ShoppingCartContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);
  const addToCart = (id: any) => {
    dispatch({
      type: REDUCER_ACTION_TYPES.ADD_TO_CART,
      payload: id,
    });
  };
  const removeFromCart = (id: any) => {
    dispatch({
      type: REDUCER_ACTION_TYPES.REMOVE_FROM_CART,
      payload: id,
    });
  };
  const getCartItemQuantity = (id: any) => {
    return state.cart.find((item: any) => item.id === id)?.quantity || 0;
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        addToCart,
        removeFromCart,
        getCartItemQuantity,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};
