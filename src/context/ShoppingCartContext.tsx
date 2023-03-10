import {
  createContext,
  ReactNode,
  useContext,
  useReducer,
  useState,
} from "react";
import {
  cartReducer,
  initialCartState,
  REDUCER_ACTION_TYPES,
} from "../reducers/getCartData";

type ChildrenType = {
  children: ReactNode;
};

export type CartItem = {
  id: number;
  quantity: number;
};

interface ShoppingProps {
  cartItems: CartItem[];
  isOpen: boolean;
  cartQuantity: number;
  handleSideBar: () => void;
  getCartItemQuantity: (id: number) => number;
  addToCart: (id: number) => void;
  decreaseQtyFromCart: (id: number) => void;
  removeFromCart: (id: number) => void;
}

const ShoppingCartContext = createContext({} as ShoppingProps);

export const ShoppingCartContextProvider = ({ children }: ChildrenType) => {
  const [isOpen, setisOpen] = useState<boolean>(false);
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  const handleSideBar = () => {
    setisOpen((prev) => !prev);
  };

  const addToCart = (id: number) => {
    dispatch({
      type: REDUCER_ACTION_TYPES.ADD_TO_CART,
      payload: id,
    });
  };

  const decreaseQtyFromCart = (id: number) => {
    dispatch({
      type: REDUCER_ACTION_TYPES.DECREASE_CART_QUANTITY,
      payload: id,
    });
  };

  const removeFromCart = (id: number) => {
    dispatch({
      type: REDUCER_ACTION_TYPES.REMOVE_FROM_CART,
      payload: id,
    });
  };

  const getCartItemQuantity = (id: number) => {
    return state.cart.find((item: CartItem) => item.id === id)?.quantity || 0;
  };

  const cartQuantity = state.cart.reduce(
    (acc: number, curr: CartItem) => curr.quantity + acc,
    0
  );

  const ShoppingContextValue = {
    cartItems: state.cart,
    isOpen,
    cartQuantity,
    addToCart,
    decreaseQtyFromCart,
    getCartItemQuantity,
    removeFromCart,
    handleSideBar,
  };

  return (
    <ShoppingCartContext.Provider value={ShoppingContextValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};
