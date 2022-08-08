import { useEffect, useState } from "react";

const useApi = (endpoint) => {
  const baseUrl = 'https://api.coinranking.com/v2/';
  const cors_api_host = "https://corsanywhere.herokuapp.com/";
  const key = 'coinranking64cde228d1852cd27131b0dba9371a17bc09d58764fbe1ae';
  
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const headers =  {
    method: 'GET',
    headers: {
      'x-access-token': `${key}`,
    }
  }

  const fetchApi = async () => {
    try {
      const response = await fetch(`${cors_api_host}${baseUrl}${endpoint}`, headers); 
      const data =  await response.json();
      setLoading(false);
      setData(data);
    } catch (error) {
      return new Error(`Error: ${error}`)
    }
  }

  useEffect(() => {
    fetchApi();
  }, [])
  
  return { loading, data }
}

export default useApi;

