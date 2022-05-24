import { RiShoppingCart2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import cl from "./Menu.module.css";

export const Menu = () => {
  return (
    <div className={cl.menu}>
      <div className={cl.menu__item}>
        <Link to={"/shop"}>
          <img
            src="https://fortniteskins.net/wp-content/themes/fskins/assets/img/img-logo.png"
            alt=""
          />
        </Link>
      </div>
      <div className={`${cl.menu__item} ${cl.cart}`}>
        <RiShoppingCart2Fill className={cl.icon} />
      </div>
    </div>
  );
};
