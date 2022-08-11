import React from 'react';
import './styles/cryptolist.css';
import { Link } from 'react-router-dom';
import Token from './Token';
import useApi from '../utilities/useApi';
import useHeaders from '../utilities/useHeaders';

const Cryptos = () => {
  // const {loading, data} = useContext(CryptoContext);
  const {data, loading} = useApi('coins', process.env.REACT_APP_COINRANKING_URL, useHeaders().coinrankingHeader);

  return (
    <section> 
      <div className="container-fluid">
        {/* <CryptoTableHead /> */}
        <h2 className="coins-list-header">Top 10 Cryptocurrency Price by Market Cap</h2>
        
        <div className="coins-list-container">

          <div className="coins-header-row">
            <div className='coins-row'>
              <div className="all-coins">All Coins</div>
              <div className="price-wrapper">
                <p className='price'>Price</p>
              </div>
              <div className="market-cap-wrapper">
                <p className='market-cap'>Market Cap</p>
            </div>
            
            <div className="change-wrapper">
              <select  value= '12h' name="chartPeriod" >
                <option value="1h">1h</option>
                <option value="3h">3h</option>
                <option value="12h">12h</option>
                <option value="24h">24h</option>
                <option value="7d">7d</option>
                <option value="30d">30d</option>
                <option value="3m">3m</option>
                <option value="1y">1y</option>
                <option value="3y">3y</option>
                <option value="5y">5y</option>
              </select>
            </div>
          </div>

          </div>

          <div className="coins-information-container">
            {
              loading ? null
                :
              data?.coins.slice(0, 10).map(coin => 
                <Token
                  key={coin.uuid}
                  coin={coin}
                  loading={loading}
                />
              )
            }
          </div>
        </div>

        { !loading && 
          <div className="load-more-wrapper">
            { <Link to='/cryptocurrencies' className="load-more">Load more</Link> }
          </div>
        }
      
      </div>
    </section>
  )
}

export default Cryptos;