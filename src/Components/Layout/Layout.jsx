import { Outlet } from "react-router-dom";
import { Footer } from "./Footer/Footer";
import cl from "./Layout.module.css";
import { Menu } from "./Menu/Menu";

export const Layout = () => {
  return (
    <>
      <Menu />
      <div className={cl.mainContent}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
