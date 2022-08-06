import { useState } from "react";

const FetchApi = (apiFunc) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true)
    try {
      const result = await apiFunc(...args);
      setData(result.data);
    } catch (err) {
      console.log(err)
      setError(err.message || "Unexpected Error!");
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    error,
    loading,
    request
  };
};


export default FetchApi;