import React from 'react';


const MarketStat = () => {
  const {loading, data} = useApi('coin/Qwsogvtv82FCd/history?timePeriod=1y', process.env.REACT_APP_COINRANKING_URL, useHeaders().coinrankingHeader);
  if(loading) return;

  const coinPrice =[];
  const coinTimestamp = [];

  

  console.log(data?.history);

  return (
    <div>

    </div>
  )
}

export default MarketStat;