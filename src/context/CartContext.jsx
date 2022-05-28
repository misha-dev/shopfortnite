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
          return {
            shop: [action.data, ...state.shop],
            itemCount: state.itemCount + 1,
          };
        } else {
          state[index].count++;
          return [...state];
        }

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(cartReducer, { cart: [], itemCount: 0 });

  return (
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
