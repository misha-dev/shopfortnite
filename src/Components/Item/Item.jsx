import { RiCopperCoinLine } from "react-icons/ri";

import { useCartContext } from "../../hooks/useCartContext";
import { AddRemove } from "../AddRemove/AddRemove";

import cl from "./Item.module.css";

export const Item = ({ displayName, price, mainId, img }) => {
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
    <div
      //   style={{ background: `url(${imgBackground}) center center/cover` }}
      className={cl.itemBody}
    >
      <img src={img} alt="" />
      <div className={cl.itemName}>{displayName}</div>
      <div className={cl.itemPrice}>
        {price} <RiCopperCoinLine className="coin"></RiCopperCoinLine>
      </div>
      <div style={{ height: "28px" }}>
        {itemCount !== -1 ? (
          <AddRemove itemCount={itemCount} dispatch={dispatch} data={data} />
        ) : (
          <button
            onClick={() => {
              dispatch({
                data,
                type: "ADD",
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
