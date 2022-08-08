import React from 'react';
import useApi from '../utilities/useApi';
import Crypto from '../components/Crypto';
import './styles/cryptolist.css';

const Cryptos = () => {
  const { loading, data } = useApi('coins');
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
              data?.data?.coins.map(coin => 
                <Crypto
                  key={coin.uuid}
                  coin={coin}
                />
              )
            }
          </div>

        </div>
      </div>
    </section>
  )
}

export default Cryptos;