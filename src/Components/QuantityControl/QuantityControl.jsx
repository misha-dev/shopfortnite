import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';

import cl from './QuantityControl.module.css';

export const QuantityControl = ({ itemCount, dispatch, data }) => {
  return (
    <div className={cl.wrapper}>
      <AiOutlineMinusCircle
        className={cl.changeCount}
        onClick={(e) => {
          e.stopPropagation();
          dispatch({ data, type: 'DECREASE' });
        }}
      />
      <div className={cl.count}>{itemCount}</div>
      <AiOutlinePlusCircle
        className={cl.changeCount}
        onClick={(e) => {
          e.stopPropagation();
          dispatch({ data, type: 'ADD' });
        }}
      />
    </div>
  );
};
