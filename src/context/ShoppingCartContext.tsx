import { createContext, ReactNode, useState, useContext } from "react";

type ProviderChildren = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
};

interface ShoppingCartContext {
  getItemQuantity: (id: number) => number;
  increaseCartItemQuantity: (id: number) => void;
  decreaseCartItemQuantity: (id: number) => void;
  removeCartItem: (id: number) => void;
}

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export const ShoppingCartContextProvider = ({ children }: ProviderChildren) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

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
    getItemQuantity,
    increaseCartItemQuantity,
    decreaseCartItemQuantity,
    removeCartItem,
  };
  return (
    <ShoppingCartContext.Provider value={ShoppingCartValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

function useShoppingCartContext() {
  return useContext(ShoppingCartContext);
}

export default useShoppingCartContext;
