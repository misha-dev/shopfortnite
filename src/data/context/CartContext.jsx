import produce from 'immer';
import { createContext, useEffect, useReducer } from 'react';

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
    return produce(state, (draft) => {
      switch (action.type) {
      case 'GETCONTEXT':
        const localState = localStorage.getItem('context');
        if (localState) {
          const parsedContext = JSON.parse(localState);
          return parsedContext;
        } else {
          draft.cart = [];
          draft.totalCount = 0;
          draft.totalPrice = 0;
          draft.context = true;
          localStorage.setItem('context', JSON.stringify(draft));
        }
        break;
      case 'ADD':
        if (index === -1) {
          action.data.count = 1;
          draft.cart.push(action.data);
          draft.totalCount++;
          draft.totalPrice += action.data.price;
          localStorage.setItem('context', JSON.stringify(draft));
        } else {
          draft.cart[index].count += 1;
          draft.totalCount++;
          draft.totalPrice += action.data.price;

          localStorage.setItem('context', JSON.stringify(draft));
        }
        break;
      case 'DECREASE':
        if (state.cart[index].count === 1) {
          draft.cart = state.cart.filter((item) => {
            return item.mainId !== action.data.mainId;
          });
        } else {
          draft.cart[index].count -= 1;
        }

        draft.totalCount--;
        draft.totalPrice -= action.data.price;

        localStorage.setItem('context', JSON.stringify(draft));
        break;
      case 'DELETE':
        draft.cart = state.cart.filter((item) => {
          return item.mainId !== action.data.mainId;
        });

        draft.totalCount -= action.data.count;
        draft.totalPrice -= action.data.price * action.data.count;

        localStorage.setItem('context', JSON.stringify(draft));
        break;
      case 'CLEAR':
        draft.cart = [];
        draft.totalCount = 0;
        draft.totalPrice = 0;
        localStorage.setItem('context', JSON.stringify(draft));
        break;
      default:
        break;
      }
    });
  };
  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
    totalCount: 0,
    totalPrice: 0,
    context: false,
  });

  useEffect(() => {
    dispatch({
      type: 'GETCONTEXT',
      data: { cart: [], totalCount: 0, totalPrice: 0, context: false },
    });
  }, []);

  return (
    <CartContext.Provider

      value={{ ...state, dispatch }}
    >
      {children}
    </CartContext.Provider>
  );
};
