import React from 'react';
import Cryptos from './Cryptos';
import MarketStat from './MarketStat';
import LatestNews from './LatestNews';
import { Outlet } from "react-router-dom";


const IndexPage = () => {
  return (
    <>
      <Cryptos />
      <MarketStat />
      <LatestNews />
      <Outlet />
    </>
  )
}

export default IndexPage;