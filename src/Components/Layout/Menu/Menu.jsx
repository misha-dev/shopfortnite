import { useState } from "react";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../hooks/useCartContext";
import { Cart } from "./Cart/Cart";
import { CartItem } from "./Cart/CartItem/CartItem";
import cl from "./Menu.module.css";

export const Menu = () => {
  const { cart, totalCount, dispatch } = useCartContext();
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className={cl.menu}>
      <div className={cl.menu__item}>
        <Link to={"/shopfortnite"}>
          <img
            src="https://fortniteskins.net/wp-content/themes/fskins/assets/img/img-logo.png"
            alt=""
          />
        </Link>
      </div>
      <div
        onClick={() => {
          setIsVisible(!isVisible);
        }}
        className={`${cl.menu__item} ${cl.cart}`}
      >
        <div className={cl.menu__count}>{totalCount}</div>
        <RiShoppingCart2Fill className={cl.icon} />
        <Cart isVisible={isVisible}>
          {cart.length === 0 ? (
            <div style={{ textAlign: "center" }}>Cart is empty</div>
          ) : (
            <div>
              {cart.map((item) => {
                return (
                  <CartItem key={item.mainId} data={item} dispatch={dispatch} />
                );
              })}
            </div>
          )}
        </Cart>
      </div>
    </div>
  );
};
