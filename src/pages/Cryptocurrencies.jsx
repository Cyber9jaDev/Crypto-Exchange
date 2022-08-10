import React from 'react';
import '../components/styles/cryptolist.css';
import Cryptos from '../components/Cryptos';
import CryptoContext from '../components/CryptoContext';
import useApi from '../utilities/useApi';
import useHeaders from '../utilities/useHeaders';

const Cryptocurrencies = () => {
  const {loading, data} = useApi('coins', process.env.REACT_APP_COINRANKING_URL, useHeaders().coinrankingHeader);
  
  return (
    <section>
      <CryptoContext.Provider value={{data, loading}}>
        <Cryptos
          number={5}
          headerText={'Cryptocurrency Prices by Market Cap'}
          more={null}
        />
      </CryptoContext.Provider>
    </section>
  )
}

export default Cryptocurrencies;