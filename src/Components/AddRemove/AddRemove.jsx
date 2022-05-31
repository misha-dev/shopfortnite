import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import cl from "./AddRemove.module.css";

export const AddRemove = ({ itemCount, dispatch, data }) => {
  return (
    <div className={cl.wrapper}>
      <AiOutlineMinusCircle className={cl.changeCount} />
      <div className={cl.count}>{itemCount}</div>
      <AiOutlinePlusCircle
        className={cl.changeCount}
        onClick={() => {
          dispatch({ data, type: "ADD" });
        }}
      />
    </div>
  );
};
