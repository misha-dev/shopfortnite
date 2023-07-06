import { useLayoutEffect, useState } from 'react';

const queries = ['(max-width: 1199px)', '(min-width: 1200px)'];

export const useMatchMedia = () => {
  const mediaQueryLists = queries.map((query) => {
    return matchMedia(query);
  });
  const getValues = () => mediaQueryLists.map((mql) => mql.matches);

  const [values, setValues] = useState(getValues);

  useLayoutEffect(() => {
    const handler = () => {
      setValues(getValues);
    };
    mediaQueryLists.forEach((mql) => mql.addEventListener('change', handler));
    return () => {
      mediaQueryLists.forEach((mql) =>
        mql.removeEventListener('change', handler)
      );
    };
  }, []);

  return { isMobile: values[0], isDesktop: values[1] };
};
