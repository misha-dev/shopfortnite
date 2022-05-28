import { useFetch } from "../../hooks/useFetch";
import { Item } from "../Item/Item";
import { Loader } from "../Loader/Loader";
import cl from "./ItemList.module.css";

export const ItemList = () => {
  const { data, error, isLoading } = useFetch();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={cl.wrapperItems}>
          {data &&
            // @ts-ignore
            data?.map((item) => {
              return (
                <Item
                  key={item.mainId}
                  displayName={item.displayName}
                  mainId={item.mainId}
                  price={item.price.regularPrice}
                  img={item.displayAssets[0].url}
                />
              );
            })}
        </div>
      )}
    </>
  );
};
