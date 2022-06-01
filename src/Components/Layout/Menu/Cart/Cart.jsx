import { useState } from "react";
import { RiCopperCoinLine } from "react-icons/ri";
import { useCartContext } from "../../../../hooks/useCartContext";
import cl from "./Cart.module.css";

export const Cart = ({ children, isVisible }) => {
  const { totalPrice, dispatch } = useCartContext();
  const [isThanked, setIsThanked] = useState(false);
  const classesForModal = [cl.modal];
  const classesForThanks = [cl.thanks];

  if (isVisible) {
    classesForModal.push(cl.active);
  }

  if (isThanked) {
    classesForThanks.push(cl.activeThanks);
  }
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className={classesForModal.join(" ")}
    >
      <div className={cl.header}>Cart</div>
      <div className={cl.modalContent}>{children}</div>
      <div className={cl.modalFooter}>
        <div className={cl.totalPrice}>
          Total Price: {totalPrice}
          <RiCopperCoinLine className="coin" />
        </div>
        {totalPrice === 0 ? (
          <></>
        ) : (
          <button
            onClick={() => {
              setIsThanked(true);
              setTimeout(() => {
                setIsThanked(false);
              }, 1500);

              dispatch({ data: {}, type: "CLEAR" });
            }}
            className={cl.modalButton}
          >
            Checkout
          </button>
        )}
      </div>
      <div className={classesForThanks.join(" ")}>Thanks for purchase!</div>
    </div>
  );
};
