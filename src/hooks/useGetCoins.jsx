import { useState, useEffect, useCallback } from "react";

export const useGetCoins = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const fetchCoins = useCallback(() => {
    fetch(import.meta.env.VITE_CRYPTO_API_ENDPOINT)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchCoins();
  }, [loading]);

  return { data, loading, refetch: fetchCoins };
};
