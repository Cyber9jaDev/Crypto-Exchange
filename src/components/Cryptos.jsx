import React, { useContext } from 'react';
import './styles/cryptolist.css';
import { Link } from 'react-router-dom';
import Token from './Token';
import useApi from '../utilities/useApi';
import useHeaders from '../utilities/useHeaders';
import ChartPeriodContext from './contexts/ChartPeriodContext';
import SelectChartPeriod from './SelectChartPeriod';

const Cryptos = () => {
  const { chartPeriod, setChartPeriod } = useContext(ChartPeriodContext);
  const { data, loading } = useApi('coins', process.env.REACT_APP_COINRANKING_URL, useHeaders().coinrankingHeader);

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
                <p className='market-cap'>Market Cap </p>
              </div>
            
              <SelectChartPeriod chartPeriod={chartPeriod} setChartPeriod={setChartPeriod} />

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

export default Cryptos;