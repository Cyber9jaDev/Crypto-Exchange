import React from 'react';
import Cryptos from './Cryptos';
import MarketStat from './MarketStat';
import LatestNews from './LatestNews';

const IndexPage = () => {
  return (
    <>
      <Cryptos />
      <MarketStat />
      <LatestNews />
    </>
  )
}

export default IndexPage;