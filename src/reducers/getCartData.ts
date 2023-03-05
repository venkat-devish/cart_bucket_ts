export const enum REDUCER_ACTION_TYPES {
    GET_CART_ITEM_QTY,
    ADD_TO_CART,
    REMOVE_FROM_CART,
}

export const initialCartState: any = { cart: [] };


export const cartReducer = (state: any, action: any) => {
    const id = action.payload;
    const isExisting = state.cart?.find((item: any) => item.id === id);

    switch (action.type) {
        case REDUCER_ACTION_TYPES.GET_CART_ITEM_QTY:
            return state.cart.find((item: any) => item.id === id)?.quantity || 0;

        case REDUCER_ACTION_TYPES.ADD_TO_CART:
            if (isExisting) {
                console.log(isExisting)
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
            if (isExisting.quantity === 1) {
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