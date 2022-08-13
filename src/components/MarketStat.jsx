import React, { useEffect } from 'react'

const MarketStat = () => {

  useEffect(() => {
   async function fetch(){
      const res = await fetch ('https://data.messari.io/api/v1/assets/btc', {
        header: {
          'x-messari-api-key': 'a67dac3a0bb6433880752099ce23ae70'
        }
      });
      const data = await res.json();
      console.log(data)
    }
  
    fetch();

  }, [])

  return (
    <div>MarketStat</div>
  )
}

export default MarketStat;