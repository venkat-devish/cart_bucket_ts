import { createContext, useContext, ReactNode, useReducer } from "react";
import {
  CartItem,
  cartReducerFn,
  initialState,
} from "../reducers/ContextReducer";

type CartContextChildren = {
  children: ReactNode;
};

const CartContext = createContext({});

export const CartContextProvider = ({ children }: CartContextChildren) => {
  const [state, dispatch] = useReducer(cartReducerFn, initialState);

  const addToCart = (item: CartItem) => {};
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
};

export function useCartContext() {
  return useContext(CartContext);
}
