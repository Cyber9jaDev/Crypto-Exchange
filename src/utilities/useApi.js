import { useCallback, useEffect, useState } from "react";

const useApi = (endpoint, url, headers) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [ error, setError ] = useState(false)

  const fetchApi = useCallback(async () => {
    try{
      const response = await fetch(`${url}${endpoint}`, headers); 
      const data =  await response.json();
      setLoading(false);
      setData(data);
    } catch(err){
      setLoading(false);
      setError(true);
      // return new Error(`Error: ${err}`);
    }},  [endpoint, headers, url] );

  useEffect(() => {
    
    fetchApi();

  }, [fetchApi]);


  return  { loading, data, error }

};

export default useApi;
