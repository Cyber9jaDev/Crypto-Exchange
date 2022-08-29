import React, { useContext } from 'react';
import '../components/styles/coins.css';
import useApi from '../utilities/useApi';
import useHeaders from '../utilities/useHeaders';
import Coin from '../components/Coin';
import SelectChartPeriod from '../components/selectChartPeriod';
import ChartPeriodContext from '../components/contexts/ChartPeriodContext';

const Cryptocurrencies = () => {
  // const { data, loading } = useApi('coins', process.env.REACT_APP_COINRANKING_URL, useHeaders().coinrankingHeader);
  const { data, loading } = useApi('/coins', process.env.REACT_APP_COINGECKO_API_URL, useHeaders().coinGeckoHeader);
  const { chartPeriod, setChartPeriod } = useContext(ChartPeriodContext);
  console.log(data);

  // console.log(data?.coins?.uuid, data?.coins?.symbol);

  // if(data?.coins === undefined ) return;

  // for(let i = 0; i < data?.coins.length; i++){
  //   console.log((data?.coins[i]?.symbol).toLowerCase(), ':', `'${data?.coins[i]?.uuid}',`);
  // }

  

  return (
    <section>
      <>
        <h2 className="coins-header-text">Top Coins</h2>
        
        <div className="coins-details-container">

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
            { !loading && data?.map(coin => 
              <Coin
                  key={coin?.id}
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