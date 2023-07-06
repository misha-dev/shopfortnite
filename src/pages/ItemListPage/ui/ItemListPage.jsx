import { ItemCard, Loader } from '../../../components';
import { useFetch } from '../../../hooks';

import cl from './ItemListPage.module.css';

export const ItemListPage = () => {
  const { data, error, isLoading } = useFetch();

  return (
    <>
      {error && <p>{error}</p>}
      {isLoading ? (
        <Loader />
      ) : (
        <div className={cl.wrapperItems}>
          {data &&
            data?.map((item) => {
              return <ItemCard key={item.mainId} displayName={item.displayName} mainId={item.mainId} price={item.price.regularPrice} img={item.displayAssets[0].url} />;
            })}
        </div>
      )}
    </>
  );
};
