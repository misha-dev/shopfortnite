import { useEffect, useState } from "react";
import { API_KEY, API_URL } from "../config/config";
export const useFetch = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(API_URL, {
          headers: {
            Authorization: API_KEY,
          },
        });
        const data = await response.json();
        console.log(data);
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, error, isLoading };
};
