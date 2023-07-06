import { ImCross } from 'react-icons/im';
import { RiCopperCoinLine } from 'react-icons/ri';

import { QuantityControl } from '../../../../../components';

import cl from './CartItem.module.css';

export const CartItem = ({ data, dispatch }) => {
  return (
    <div className={cl.cartItem}>
      <img className={cl.cartImg} src={data.img} alt="" />
      <div className={cl.name}>{data.displayName.substring(0, 10)}</div>
      <div className={cl.price}>
        {data.price} <RiCopperCoinLine className="coin" />
      </div>
      <QuantityControl data={data} dispatch={dispatch} itemCount={data.count} />
      <ImCross
        onClick={() => {
          dispatch({ data, type: 'DELETE' });
        }}
        className={cl.cross}
      />
    </div>
  );
};
