import React, { useContext } from 'react';
// import useApi from '../utilities/useApi';
import Crypto from '../components/Crypto';
import './styles/cryptolist.css';
import { Link } from 'react-router-dom';
import CryptoContext from './CryptoContext';

const Cryptos = () => {
  const {coins, loading} = useContext(CryptoContext);
  return (
    <section>
      <div className="container-fluid">
        <h2 className="coins-list-header"> Cryptocurrency Price List</h2>
          
        <div className="coins-list-container">
          <div className="coins-header-row">
            <Crypto
              allCoins = {'All Coins'}
              price = {'Price'}
              marketCap = {'Market Cap'}
              change = {'24h'}
            />
          </div>
 
          <div className="coins-information-container">
            {
              loading ? <div>Loading</div>
                :
              coins.slice(0, 21).map(coin => 
                <Crypto
                  key={coin.uuid}
                  coin={coin}
                />
              )
            }
          </div>
        </div>

        <div className="load-more-wrapper">
          <Link to='/cryptocurrencies' className="load-more">Load more</Link>
        </div>
      
      </div>
    </section>
  )
}

export default Cryptos;