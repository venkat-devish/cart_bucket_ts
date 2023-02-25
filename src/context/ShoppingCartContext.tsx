import { createContext, ReactNode, useState, useContext } from "react";
import ShoppingCart from "../components/ShoppingCart";

type ProviderChildren = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
};

interface ShoppingCartContext {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: number) => number;
  increaseCartItemQuantity: (id: number) => void;
  decreaseCartItemQuantity: (id: number) => void;
  removeCartItem: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItem[];
}

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export const ShoppingCartContextProvider = ({ children }: ProviderChildren) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  function openCart() {
    setIsOpen(true);
  }

  function closeCart() {
    setIsOpen(false);
  }

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartItemQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((el) => el.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartItemQuantity(id: number) {
    setCartItems((currItems) => {
      const existing = currItems.find((el) => el.id === id);
      if (existing?.quantity === 1) {
        return currItems.filter((el) => el.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeCartItem(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  const ShoppingCartValue = {
    openCart,
    closeCart,
    getItemQuantity,
    increaseCartItemQuantity,
    decreaseCartItemQuantity,
    removeCartItem,
    cartQuantity,
    cartItems,
  };
  return (
    <ShoppingCartContext.Provider value={ShoppingCartValue}>
      {children}
      <ShoppingCart isCartOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
};

function useShoppingCartContext() {
  return useContext(ShoppingCartContext);
}

export default useShoppingCartContext;
