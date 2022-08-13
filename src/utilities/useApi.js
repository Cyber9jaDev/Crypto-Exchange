import { useCallback, useEffect, useState } from "react";


const useApi = (endpoint, url, headers) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  const fetchApi = useCallback(async () => {
    try{
      const response = await fetch(`${process.env.REACT_APP_CORS_API_HOST}${url}${endpoint}`, headers); 
      const data =  await response.json();
      setLoading(false);
      setData(data?.data);
    } catch(error){
      setLoading(false);
      return new Error(`Error: ${error}`)
    }},  [endpoint, headers, url] );

  useEffect(() => {
    
    fetchApi();

  }, [fetchApi]);
  
  return { loading, data }
};

export default useApi;
