import React from 'react';
import Cryptos from './Cryptos';
import MarketStat from './MarketStat';
import LatestNews from './LatestNews';
import useApi from '../utilities/useApi';
import CryptoContext from './CryptoContext';
// import
// import

// import { Outlet } from "react-router-dom";


const Main = () => {  
  const { loading, coins, stats } = useApi('coins');

  return (
    <>
      <CryptoContext.Provider value={{coins, loading, stats}} >
        <Cryptos />
      </CryptoContext.Provider>
      <MarketStat />
      <LatestNews />
      {/* <Outlet /> */}
    </>
  )
}

export default Main;