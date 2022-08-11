import React from 'react';
import '../components/styles/cryptolist.css';
import Cryptos from '../components/Cryptos';
import CryptoContext from '../components/CryptoContext';
import Crypto from '../components/Crypto';
import useApi from '../utilities/useApi';
import useHeaders from '../utilities/useHeaders';
import Token from '../components/Token';

const Cryptocurrencies = () => {
  const {data, loading} = useApi('coins', process.env.REACT_APP_COINRANKING_URL, useHeaders().coinrankingHeader);

  return (
    <section>
      <>
        <h2 className="coins-list-header">Top 10 Cryptocurrency Price by Market Cap</h2>
        <div className="coins-list-container">
          <div className="coins-information-container">
            { !loading && data?.coins.map(coin => 
              <Token 
                key={coin.uuid} 
                coin={coin} 
                loading={loading} 
              />
            )}
          </div>
        </div>
      </>
    </section>
  )
}

export default Cryptocurrencies;