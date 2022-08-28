import { useMemo } from 'react'

const useHeaders = () => {

  const coinrankingHeader = useMemo(() => ({
      method: 'GET',
      headers: {
        'x-access-token': `${process.env.REACT_APP_COINRANKING_API_KEY}`,
        'Access-Control-Allow-Origin': '*',
        origin: 'http://localhost:3000',
		    'x-requested-with': 'https://api.coinranking.com/v2',
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': '40df961746msh7848f759f337171p11c108jsn953d06536098',
		    'X-RapidAPI-Host': 'http-cors-proxy.p.rapidapi.com'
      }
    }), []);

  const messariHeader = useMemo(() => ({
    method: 'GET',
    headers: {
      'x-messari-api-key': `${process.env.REACT_APP_MESSARI_API_KEY}`
    }
  }), []);

  const coinGeckoHeader = useMemo(() => ({
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  }), [])


  return { coinrankingHeader, messariHeader, coinGeckoHeader }
}

export default useHeaders;