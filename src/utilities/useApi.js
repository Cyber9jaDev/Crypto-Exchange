import { useCallback, useEffect, useMemo, useState } from "react";

const useApi = (endpoint) => {
  const baseUrl = 'https://api.coinranking.com/v2/';
  const cors_api_host = "https://corsanywhere.herokuapp.com/";
  const key = 'coinranking64cde228d1852cd27131b0dba9371a17bc09d58764fbe1ae';
  
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [stats, setStats] = useState({});

  const headers = useMemo(() => ({
    method: 'GET',
    headers: {
      'x-access-token': `${key}`,
    }
  }), [])

  const fetchApi = useCallback(async () => {
    try{
      const response = await fetch(`${cors_api_host}${baseUrl}${endpoint}`, headers); 
      const data =  await response.json();
      setLoading(false);
      setCoins(data?.data?.coins);
      setStats(data?.data?.stats)
    }
    catch(error){
      setLoading(false);
      return new Error(`Error: ${error}`)
    }}, 
    [endpoint, headers]
  )

  useEffect(() => {
    fetchApi();
  }, [fetchApi]);
  
  return { loading, coins, stats }
};

export default useApi;

