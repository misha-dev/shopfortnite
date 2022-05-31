import { createContext, useReducer } from "react";

export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {
  const cartReducer = (state, action) => {
    const findItem = (id) => {
      for (let index = 0; index < state.cart.length; index++) {
        if (state.cart[index].mainId === id) {
          return index;
        }
      }
      return -1;
    };
    switch (action.type) {
      case "ADD":
        const index = findItem(action.data.mainId);
        if (index === -1) {
          action.data.count = 1;
          return {
            cart: [action.data, ...state.cart],
            totalCount: state.totalCount + 1,
            totalPrice: state.totalPrice + action.data.price.regularPrice,
          };
        } else {
          state.cart[index].count += 1;

          return {
            ...state,
            totalCount: state.totalCount + 1,
            totalPrice: state.totalPrice + action.data.price.regularPrice,
          };
        }

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
    totalCount: 0,
    totalPrice: 0,
  });

  return (
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
