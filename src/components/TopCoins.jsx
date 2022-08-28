import React, { useContext } from 'react';
import './styles/coins.css';
import { Link } from 'react-router-dom';
import Coin from './Coin';
import useApi from '../utilities/useApi';
import useHeaders from '../utilities/useHeaders';
import ChartPeriodContext from './contexts/ChartPeriodContext';
import SelectChartPeriod from './selectChartPeriod';

const TopCoins = () => {
  const { chartPeriod, setChartPeriod } = useContext(ChartPeriodContext);
  const { data, loading } = useApi('/coins', process.env.REACT_APP_COINGECKO_API_URL, useHeaders().coinGeckoHeader);
  console.log(data);

  return (
    <section id='coins'> 
      <div className="container-fluid">
        {/* <CryptoTableHead /> */}
        <h2 className="coins-header-text">Top 10 Coins</h2>
        
        <div className="coins-details-container">
          <div className="coins-header-row">
            <div className='coins-row'>
              <div className="all-coins">All Coins</div>
              <div className="price-wrapper">
                <p className='price'>Price</p>
              </div>
              <div className="market-cap-wrapper">
                <p className='market-cap'>Market Cap </p>
              </div>
            
              <SelectChartPeriod chartPeriod={chartPeriod} setChartPeriod={setChartPeriod} />

            </div>
          </div>

          <div className="coins-information-container">
            {
              loading ? null
                :
              data?.slice(0, 10).map((coin, index) => 
                <Coin
                  // key={coin.uuid}
                  key={index}
                  coin={coin}
                  loading={loading}
                  chartPeriod={chartPeriod}
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

export default TopCoins;
