import { createContext, useContext, useReducer } from "react";

const enum REDUCER_ACTION_TYPES {
  ADD_TO_CART,
  REMOVE_FROM_CART,
}

interface ShoppingProps {
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
}

const ShoppingCartContext = createContext({} as ShoppingProps);

const initialCartState: any = { cart: [] };
const cartReducer = (state: any, action: any) => {
  const id = action.payload;
  switch (action.type) {
    case REDUCER_ACTION_TYPES.ADD_TO_CART:
      const isExistig = state.cart?.find((item: any) => item.id === id);
      if (isExistig) {
        state.cart.map((item: any) => {
          if (item.id === id) {
            item.quantity += 1;
          }
        });
      } else {
        state.cart = [...state.cart, { id, quantity: 1 }];
      }
      return {
        ...state,
        id,
      };

    case REDUCER_ACTION_TYPES.REMOVE_FROM_CART:
      const isExistig2 = state.cart?.find((item: any) => item.id === id);
      if (isExistig2.quantity === 1) {
        state.cart = state.cart.filter((item: any) => item.id !== id);
      } else {
        state.cart.map((item: any) => {
          if (item.id === id) {
            item.quantity -= 1;
          }
        });
      }
      return {
        ...state,
        id,
      };
  }
};

export const ShoppingCartContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);
  console.log(state.cart);
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
  return (
    <ShoppingCartContext.Provider
      value={{
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};
