export const enum CART_ACTION_TYPES {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_ITEM_TO_CART,
}

export type CartItem = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export type InitState = {
  items: CartItem[];
  totalPrice: number;
  count: number;
};

export const initialState: InitState = {
  items: [],
  totalPrice: 0,
  count: 0,
};

export const cartReducerFn = (state: InitState, action: any) => {
  switch (action.type) {
    case CART_ACTION_TYPES.ADD_TO_CART:
      return {
        ...state,
        items: action.payload,
        totalPrice: 100,
      };
  }
};
