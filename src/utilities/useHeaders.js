import { useMemo } from 'react'

const useHeaders = () => {

  const coinrankingHeader = useMemo(() => ({
      method: 'GET',
      headers: {
        'x-access-token': `${process.env.REACT_APP_COINRANKING_API_KEY}`,
		    'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
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