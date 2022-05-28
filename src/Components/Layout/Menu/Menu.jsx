import { RiShoppingCart2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../hooks/useCartContext";
import cl from "./Menu.module.css";

export const Menu = () => {
  const { cart, itemCount, dispatch } = useCartContext();
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
      <div className={`${cl.menu__item} ${cl.cart}`}>
        <div className={cl.menu__count}>{itemCount}</div>
        <RiShoppingCart2Fill className={cl.icon} />
      </div>
    </div>
  );
};
