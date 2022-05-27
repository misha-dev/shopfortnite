import { createContext, useReducer } from "react";

export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {
  const cartReducer = (state, action) => {
    const findItem = (id) => {
      for (let index = 0; index < state.length; index++) {
        if (state[index].mainId === id) {
          return index;
        }
      }
      return -1;
    };
    switch (action.type) {
      case "ADD":
        state[-1].totalCount += 1;
        const index = findItem(action.data.mainId);
        if (index === -1) {
          return [{ ...action.data }, ...state];
        } else {
          state[index].count++;
          return [...state];
        }

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(cartReducer, [{ totalCount: 0 }]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
