import React, { useContext } from 'react';
import Crypto from '../components/Crypto';
import './styles/cryptolist.css';
import { Link } from 'react-router-dom';
import CryptoContext from './CryptoContext';

const Cryptos = ({number, more, headerText}) => {
  const {loading, data} = useContext(CryptoContext);
  
  return (
    <section> 
      <div className="container-fluid">
        <h2 className="coins-list-header"> { headerText === undefined ? 'Top 10 Cryptocurrency Price List' : headerText}</h2>
          
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
              data?.coins.slice(0, number===undefined ? 10 : data?.coins.length).map(coin => 
                <Crypto
                  key={coin.uuid}
                  coin={coin}
                />
              )
            }
          </div>
        </div>

        { !loading && 
          <div className="load-more-wrapper">
            { more===undefined ? <Link to='/cryptocurrencies' className="load-more">Load more</Link> : null }
          </div>
        }
      
      </div>
    </section>
  )
}

export default Cryptos;