import axios from "axios";
import { useEffect, useState } from "react";

export function useFetch(endpoint: string) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/${endpoint}`)
      .then((res) => setData(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return {
    data,
    loading,
    error,
  };
}
