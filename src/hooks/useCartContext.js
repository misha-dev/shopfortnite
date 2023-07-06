import { useContext } from 'react';

import { CartContext } from '../data';

export const useCartContext = () => {
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    throw new Error('useCartContext should be within CartContextProvider!');
  }

  return cartContext;
};
