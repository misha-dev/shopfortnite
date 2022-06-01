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
    const index = findItem(action.data.mainId);
    switch (action.type) {
      case "ADD":
        if (index === -1) {
          action.data.count = 1;
          return {
            cart: [action.data, ...state.cart],
            totalCount: state.totalCount + 1,
            totalPrice: state.totalPrice + action.data.price,
          };
        } else {
          state.cart[index].count += 1;

          return {
            ...state,
            totalCount: state.totalCount + 1,
            totalPrice: state.totalPrice + action.data.price,
          };
        }

      case "DECREASE":
        if (state.cart[index].count === 1) {
          state.cart = state.cart.filter((item) => {
            return item.mainId !== action.data.mainId;
          });
        } else {
          state.cart[index].count -= 1;
        }

        return {
          ...state,
          totalCount: state.totalCount - 1,
          totalPrice: state.totalPrice - action.data.price,
        };

      case "DELETE":
        state.cart = state.cart.filter((item) => {
          return item.mainId !== action.data.mainId;
        });
        return {
          ...state,
          totalCount: state.totalCount - action.data.count,
          totalPrice: state.totalPrice - action.data.price * action.data.count,
        };

      case "CLEAR":
        return {
          cart: [],
          totalCount: 0,
          totalPrice: 0,
        };

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
