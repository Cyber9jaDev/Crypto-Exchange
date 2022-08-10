import { useMemo } from 'react'

const useHeaders = () => {

  const coinrankingHeader = useMemo(() => ({
      method: 'GET',
      headers: {
        'x-access-token': `${process.env.REACT_APP_COINRANKING_API_KEY}`,
      }
    }), []);

  const messariHeader = useMemo(() => ({
    method: 'GET',
    headers: {
      'x-messari-api-key': `${process.env.REACT_APP_MESSARI_API_KEY}`
    }
  }), [])


  return { coinrankingHeader, messariHeader }
}

export default useHeaders;