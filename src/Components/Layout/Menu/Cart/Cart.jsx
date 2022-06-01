import { RiCopperCoinLine } from "react-icons/ri";
import { useCartContext } from "../../../../hooks/useCartContext";
import cl from "./Cart.module.css";

export const Cart = ({ children, isVisible }) => {
  const { totalPrice } = useCartContext();
  const classes = [cl.modal];

  if (isVisible) {
    classes.push(cl.active);
  }
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className={classes.join(" ")}
    >
      <div className={cl.header}>Cart</div>
      <div className={cl.modalContent}>{children}</div>
      <div className={cl.modalFooter}>
        <div className={cl.totalPrice}>
          Total Price: {totalPrice}
          <RiCopperCoinLine className="coin" />
        </div>
        <button className={cl.modalButton}>Checkout</button>
      </div>
    </div>
  );
};
