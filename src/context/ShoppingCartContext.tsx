import { createContext, useReducer, ReactNode, useContext } from "react";
import data from "../data/items.json";

const enum REDUCER_ACTION_TYPES {
  ADD_TO_CART,
  REMOVE_FROM_CART,
}

type ReducerType = {
  type: REDUCER_ACTION_TYPES;
  payload: number;
};

type ChildrenType = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  imgUrl: string;
  name: string;
  price: number;
};

type InitState = {
  items: CartItem[];
};

interface ShoppingCartContextProps {
  totalCartItems: number;
  addToCart: (item: CartItem[]) => void;
  removeFromCart: (id: number) => void;
}
const ShoppingCartContext = createContext({} as ShoppingCartContextProps);

const initialState: InitState = { items: [] };

const reducerFn = (
  state: InitState,
  action: ReducerType
): typeof initialState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPES.ADD_TO_CART:
      const cartItem = state.items.find((item) => item.id === action.payload);
      return {
        ...state,
        items: state.items.concat(action.payload as CartItem[]),
      };
    case REDUCER_ACTION_TYPES.REMOVE_FROM_CART:
      console.log(action.payload);
      return {
        ...state,
        items: state.items.filter(
          (item) => item.id !== (action.payload as number)
        ),
      };
    default:
      throw new Error();
  }
};

export const ShoppingCartContextProvider = ({ children }: ChildrenType) => {
  const [state, dispatch] = useReducer(reducerFn, initialState);
  console.log(state);
  const addToCart = (payload: CartItem[]) => {
    dispatch({
      type: REDUCER_ACTION_TYPES.ADD_TO_CART,
      payload: payload,
    });
  };
  const removeFromCart = (id: number) => {
    dispatch({
      type: REDUCER_ACTION_TYPES.REMOVE_FROM_CART,
      payload: id,
    });
  };

  const ShoppingContextValue = {
    totalCartItems: state.items.length,
    addToCart,
    removeFromCart,
  };

  return (
    <ShoppingCartContext.Provider value={ShoppingContextValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCartData = () => {
  return useContext(ShoppingCartContext);
};
