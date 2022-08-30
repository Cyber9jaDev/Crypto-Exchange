import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { formatPrice } from '../utilities/formatNumber';
import Chart from './Chart';
import useApi from '../utilities/useApi';
import useHeaders from '../utilities/useHeaders';
// import { coinGeckoHeader , coinrankingHeader} from '../utilities/useHeaders';

const Token = ({ coin, chartPeriod }) => {
  // const { data : eachCoin} = useApi(`coin/${coin.uuid}/history?timePeriod=${chartPeriod}`, process.env.REACT_APP_COINRANKING_URL, useHeaders().coinrankingHeader);

  // Ensure token is defined and has a value to avoid error
  // if( eachCoin?.change === undefined || eachCoin.change === null ) return;
  // console.log((coin.symbol).toLowerCase());

  return (
      <div className='coins-row'>
            <div className="all-coins">
              <div className="favorite-icon-wrapper">
                <FontAwesomeIcon icon={faStar} className='favorite-icon' />
              </div>
              <div className="coin-icon-wrapper">
                <FontAwesomeIcon icon={faStar} className='favorite-icon' />
                {/* <img src={coin?.iconUrl} alt="" className='coin-icon' /> */}
              </div>
              <div className="coin-details">
                <p className='coin-name'><Link className='coin' to={`/coin/${(coin?.symbol).toLowerCase()}`}>{coin?.name}</Link></p>
                <p className="coin-symbol">{coin?.symbol}</p>
              </div>
            </div>
            <div className="price-wrapper">
              {/* <p className='price'>{formatPrice(coin?.price)}</p> */}
              <p className='price'>{formatPrice(coin?.metrics?.market_data?.price_usd)}</p>
            </div>
            <div className="market-cap-wrapper">
              {/* <p className='market-cap'>{formatPrice(coin?.marketCap, 'compact')}</p> */}
              <p className='market-cap'>{formatPrice(coin?.metrics?.marketcap?.current_marketcap_usd, 'compact')}</p>
            </div>
            
            <div className="change-wrapper">
              <div className="line-chart">
                { <Chart coinId={coin?.id} chartPeriod={chartPeriod} /> }
                {/* { <Chart coinId={coin.id} chartPeriod={chartPeriod} change={eachCoin?.change} /> } */}
              </div>
              <p 
                className='change' 
                style={
                  {
                    backgroundColor: coin?.metrics?.market_data?.percent_change_usd_last_24_hours >= 0 ? 'green': 'red', 
                    color: 'white'
                  }
                }
                  >{`${coin?.metrics?.market_data?.percent_change_usd_last_24_hours.toFixed(2)}%`}
              </p>
            </div>
          </div>
  )
}

export default Token;
