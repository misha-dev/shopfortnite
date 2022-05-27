import { RiCopperCoinLine } from "react-icons/ri";
import cl from "./Item.module.css";

export const Item = ({ displayName, price, mainId, img }) => {
  return (
    <div
      //   style={{ background: `url(${imgBackground}) center center/cover` }}
      className={cl.itemBody}
    >
      <img src={img} alt="" />
      <div className={cl.itemName}>{displayName}</div>
      <div className={cl.itemPrice}>
        {price} <RiCopperCoinLine className={cl.coin}></RiCopperCoinLine>
      </div>
      <button>BUY</button>
    </div>
  );
};
