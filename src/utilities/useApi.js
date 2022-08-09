import { useCallback, useEffect, useMemo, useState } from "react";

const useApi = (endpoint) => {
  const baseUrl = 'https://api.coinranking.com/v2/';
  const cors_api_host = "https://corsanywhere.herokuapp.com/";
  
  const [loading, setLoading] = useState(true);
  // const [coins, setCoins] = useState([]);
  // const [stats, setStats] = useState({});
  const [data, setData] = useState({})

  const headers = useMemo(() => ({
    method: 'GET',
    headers: {
      'x-access-token': `${process.env.REACT_APP_COINS_API_KEY}`,
    }
  }), [])

  const fetchApi = useCallback(async () => {
    try{
      const response = await fetch(`${cors_api_host}${baseUrl}${endpoint}`, headers); 
      const data =  await response.json();
      setLoading(false);
      // setCoins(data?.data?.coins);
      // setStats(data?.data?.stats);
      setData(data?.data);
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
  
  return { loading, data }
};

export default useApi;

