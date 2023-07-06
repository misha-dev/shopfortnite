import { RiCopperCoinLine } from 'react-icons/ri';

import { QuantityControl } from '../QuantityControl/QuantityControl';

import { useCartContext } from '../../hooks';

import cl from './ItemCard.module.css';

export const ItemCard = ({ displayName, price, mainId, img }) => {
  const { cart, dispatch } = useCartContext();
  function countOfItem(mainId) {
    for (let index = 0; index < cart.length; index++) {
      const item = cart[index];
      if (item.mainId === mainId) {
        return item.count;
      }
    }

    return -1;
  }

  const itemCount = countOfItem(mainId);
  const data = { displayName, price, mainId, img };

  return (
    <div className={cl.itemBody}>
      <img src={img} alt="" />
      <div className={cl.itemName}>{displayName}</div>
      <div className={cl.itemPrice}>
        {price} <RiCopperCoinLine className="coin"></RiCopperCoinLine>
      </div>
      <div style={{ height: '28px' }}>
        {itemCount !== -1 ? (
          <QuantityControl itemCount={itemCount} dispatch={dispatch} data={data} />
        ) : (
          <button
            onClick={(e) => {
              e.stopPropagation();
              dispatch({
                data,
                type: 'ADD',
              });
            }}
          >
            BUY
          </button>
        )}
      </div>
    </div>
  );
};
