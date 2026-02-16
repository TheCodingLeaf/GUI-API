import { useState, useEffect } from 'react';

export const useProductsDATA = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://dummyjson.com/products");

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const result = await response.json();
        setData(result);

      } catch (error) {
        console.error("Der skete en fejl", error);
        setError(error.message);

      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, error, isLoading };
}