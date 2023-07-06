import { useEffect, useState } from 'react';

import { API_KEY, API_URL } from '../data';

export const useFetch = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchController = new AbortController();
    const { signal } = fetchController;
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(API_URL, {
          headers: {
            Authorization: API_KEY,
          },
          signal,
        });
        const data = await response.json();
        setData(data.shop);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
    return () => {
      fetchController.abort();
    };
  }, []);

  return { data, error, isLoading };
};
