import { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async () => {
    setLoading(true);
    const response = await apiFunc();
    setLoading(false);

    if (!response.ok) {
      setError(true);
      setData([]);
    } else {
      setError(false);
      setData(response.data);
    }
  };

  return { request, data, loading, error };
};
