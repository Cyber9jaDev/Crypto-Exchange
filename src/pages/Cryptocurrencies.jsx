import React from 'react';
import '../components/styles/cryptolist.css';
import Cryptos from '../components/Cryptos';
import CryptoContext from '../components/CryptoContext';
import useApi from '../utilities/useApi';

const Cryptocurrencies = () => {
  const {coins, loading, data} = useApi('coins');
  console.log(data.coins);
  return (
    <section>
      <CryptoContext.Provider value={{data, coins, loading}}>
        <Cryptos
          number={5}
          headerText={'Crypto Currency Price List'}
          more={null}
        />
      </CryptoContext.Provider>
    </section>
  )
}

export default Cryptocurrencies;