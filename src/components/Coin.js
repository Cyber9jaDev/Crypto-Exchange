import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { formatPrice } from '../utilities/formatNumber';
import Chart from './Chart';
import useApi from '../utilities/useApi';
import useHeaders from '../utilities/useHeaders';

const Token = ({ coin, chartPeriod }) => {
  const { data : eachCoin} = useApi(`coin/${coin.uuid}/history?timePeriod=${chartPeriod}`, process.env.REACT_APP_COINRANKING_URL, useHeaders().coinrankingHeader);
  // if(loading) return;

  // console.log(coin);


  // Ensure token is defined and has a value to avoid error
  if( eachCoin?.change === undefined || eachCoin.change === null ) return;
  // console.log((coin.symbol).toLowerCase());

  return (
      <div className='coins-row'>
            <div className="all-coins">
              <div className="favorite-icon-wrapper">
                <FontAwesomeIcon icon={faStar} className='favorite-icon' />
              </div>
              <div className="coin-icon-wrapper">
                <img src={coin?.iconUrl} alt="" className='coin-icon' />
              </div>
              <div className="coin-details">
                <p className='coin-name'><Link className='coin' to={`/coin/${(coin?.symbol).toLowerCase()}`}>{coin?.name}</Link></p>
                <p className="coin-symbol">{coin?.symbol}</p>
              </div>
            </div>
            <div className="price-wrapper">
              <p className='price'>{formatPrice(coin?.price)}</p>
            </div>
            <div className="market-cap-wrapper">
              <p className='market-cap'>{formatPrice(coin?.marketCap, 'compact')}</p>
            </div>
            
            <div className="change-wrapper">
              <div className="line-chart">
                { <Chart coinId={coin.uuid} chartPeriod={chartPeriod} change={eachCoin?.change} /> }
              </div>
              <p 
                className='change' 
                style={
                  {
                    backgroundColor: eachCoin?.change >= 0 ? 'green': 'red', 
                    color: 'white'
                  }
                }
                  >{`${eachCoin?.change}%`}
              </p>
            </div>
          </div>
  )
}

export default Token;
