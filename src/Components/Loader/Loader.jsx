import cl from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={cl.loaderBody}>
      <div className={cl.bigCircle}>
        <div className={cl.smallCircle}></div>
      </div>
    </div>
  );
};
