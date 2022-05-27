import { useFetch } from "../../hooks/useFetch";
import { Loader } from "../Loader/Loader";

export const ItemList = () => {
  const { data, error, isLoading } = useFetch();
  console.log(data);

  return (
    <>
      <Loader />
    </>
  );
};
