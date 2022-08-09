import React, { useContext } from 'react';
import Crypto from '../components/Crypto';
import '../components/styles/cryptolist.css';
import Cryptos from '../components/Cryptos';
import CryptoContext from '../components/CryptoContext';
import useApi from '../utilities/useApi';


const Cryptocurrencies = () => {
  const {coins, loading} = useApi('coins');
  return (
    <section>
    <CryptoContext.Provider value={{coins, loading}}>
      <Cryptos
        number={5}
        headerText={'Crypto Currency Price List'}
        more={null}
      />
    </CryptoContext.Provider>
      {/* <Cryptos
        number={50}
        coins={coins}
        loading={loading}
      /> */}
    </section>
  )
}

export default Cryptocurrencies;