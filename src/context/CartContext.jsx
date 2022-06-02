import { createContext, useEffect, useReducer } from "react";

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
      case "GETCONTEXT":
        const localState = localStorage.getItem("context");
        if (localState) {
          const localStateParsed = JSON.parse(localState);
          localStateParsed.context = true;
          return { ...localStateParsed };
        }
        state.context = true;
        localStorage.setItem("context", JSON.stringify(state));
        console.log(state);
        return { ...state };

      case "ADD":
        if (index === -1) {
          action.data.count = 1;
          const newState = {
            cart: [action.data, ...state.cart],
            totalCount: state.totalCount + 1,
            totalPrice: state.totalPrice + action.data.price,
            context: true,
          };
          localStorage.setItem("context", JSON.stringify(newState));
          return newState;
        } else {
          state.cart[index].count += 1;
          const newState = {
            ...state,
            totalCount: state.totalCount + 1,
            totalPrice: state.totalPrice + action.data.price,
            context: true,
          };

          localStorage.setItem("context", JSON.stringify(newState));

          return newState;
        }

      case "DECREASE":
        if (state.cart[index].count === 1) {
          state.cart = state.cart.filter((item) => {
            return item.mainId !== action.data.mainId;
          });
        } else {
          state.cart[index].count -= 1;
        }

        const newState = {
          ...state,
          totalCount: state.totalCount - 1,
          totalPrice: state.totalPrice - action.data.price,
          context: true,
        };

        localStorage.setItem("context", JSON.stringify(newState));

        return newState;

      case "DELETE":
        state.cart = state.cart.filter((item) => {
          return item.mainId !== action.data.mainId;
        });

        const newStateDel = {
          ...state,
          totalCount: state.totalCount - action.data.count,
          totalPrice: state.totalPrice - action.data.price * action.data.count,
          context: true,
        };

        localStorage.setItem("context", JSON.stringify(newStateDel));

        return newStateDel;

      case "CLEAR":
        const newStateClear = {
          cart: [],
          totalCount: 0,
          totalPrice: 0,
          context: true,
        };
        localStorage.setItem("context", JSON.stringify(newStateClear));

        return newStateClear;

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
    totalCount: 0,
    totalPrice: 0,
    context: false,
  });

  useEffect(() => {
    // @ts-ignore
    dispatch({
      type: "GETCONTEXT",
      data: { cart: [], totalCount: 0, totalPrice: 0, context: false },
    });
  }, []);

  return (
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
