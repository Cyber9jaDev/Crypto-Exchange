import React, { useContext } from 'react';
import '../components/styles/cryptolist.css';
import useApi from '../utilities/useApi';
import useHeaders from '../utilities/useHeaders';
import Token from '../components/Token';
import SelectChartPeriod from '../components/SelectChartPeriod';
import ChartPeriodContext from '../components/contexts/ChartPeriodContext';

const Cryptocurrencies = () => {
  const {data, loading} = useApi('coins', process.env.REACT_APP_COINRANKING_URL, useHeaders().coinrankingHeader);
  const { chartPeriod, setChartPeriod} = useContext(ChartPeriodContext);

  return (
    <section>
      <>
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
              <SelectChartPeriod chartPeriod={chartPeriod} setChartPeriod={setChartPeriod}  />
              
            </div>
          </div>
          <div className="coins-information-container">
            { !loading && data?.coins.map(coin => 
              <Token 
                key={coin.uuid} 
                coin={coin} 
                loading={loading}
                chartPeriod={chartPeriod}
              />
            )}
          </div>
        </div>
      </>
    </section>
  )
}

export default Cryptocurrencies;