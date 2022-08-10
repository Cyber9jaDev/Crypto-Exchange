import React from 'react';
import Cryptos from './Cryptos';
import MarketStat from './MarketStat';
import LatestNews from './LatestNews';
import useApi from '../utilities/useApi';
import CryptoContext from './CryptoContext';
import useHeaders from '../utilities/useHeaders';

const Main = () => {  
  const { loading, data } = useApi('coins', process.env.REACT_APP_COINRANKING_URL, useHeaders().coinrankingHeader );
  return (
    <>
      <CryptoContext.Provider value={{loading, data}} >
        <Cryptos />
      </CryptoContext.Provider>
      <MarketStat />
      <LatestNews />
      {/* <Outlet /> */}
    </>
  )
}

export default Main;