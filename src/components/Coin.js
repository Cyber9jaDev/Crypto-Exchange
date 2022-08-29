import React, { useEffect, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { formatPrice } from '../utilities/formatNumber';
import Chart from './Chart';
import useApi from '../utilities/useApi';
import useHeaders from '../utilities/useHeaders';
// import { coinGeckoHeader , coinrankingHeader} from '../utilities/useHeaders';

const Token = ({ coin, chartPeriod }) => {

  const reducer = (state, action) => {
    switch (action.type){
      case '1':
        return {changePercentage: 'price_change_percentage_24h'} 
      case '7': 
        return { changePercentage: 'price_change_percentage_7d'}
      case '14':
        return { changePercentage: 'price_change_percentage_14d'}
      case '30':
        return { changePercentage: 'price_change_percentage_30d'}
      case '60':
        return { changePercentage: 'price_change_percentage_60d'}
      case '365':
        return { changePercentage: 'price_change_percentage_1y'}
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, {changePercentage : '1'});
  const [percentageChange, setPercentageChange ] = useState(coin?.market_data?.price_change_percentage_1h_in_currency?.usd)  // Initial state of 1hour 

  useEffect(() => {
    const resolve = () => {
      if(chartPeriod ===  '1') setPercentageChange(coin?.market_data?.price_change_percentage_24h);   // 1 day or 24hours
      else if(chartPeriod === '7') setPercentageChange(coin?.market_data?.price_change_percentage_7d)
      else if(chartPeriod === '14') setPercentageChange(coin?.market_data?.price_change_percentage_14d)
      else if(chartPeriod === '30') setPercentageChange(coin?.market_data?.price_change_percentage_30d)
      else if(chartPeriod === '60') setPercentageChange(coin?.market_data?.price_change_percentage_60d)
      else if(chartPeriod === '365') setPercentageChange(coin?.market_data?.price_change_percentage_1y)
      else {
        setPercentageChange(coin?.market_data?.price_change_percentage_1h_in_currency?.usd)
      }
    }
  
    return () =>  resolve() ;

  }, [chartPeriod])
  
  // const priceChange = {
  //   '1': 'price_change_percentage_24h',
  //   '7': 'price_change_percentage_7d',
  //   '14': 'price_change_percentage_14d',
  //   '30': 'price_change_percentage_30d',
  //   '60': 'price_change_percentage_60d',
  //   '365': 'price_change_percentage_1y',
  // }

  // console.log(chartPeriod);
  console.log(percentageChange)
  
  return (
      <div className='coins-row'>
            <div className="all-coins">
              <div className="favorite-icon-wrapper">
                <FontAwesomeIcon icon={faStar} className='favorite-icon' />
              </div>
              <div className="coin-icon-wrapper">
                <img src={coin?.image?.small} alt="" className='coin-icon' />
              </div>
              <div className="coin-details">
                <p className='coin-name'><Link className='coin' to={`/coin/${(coin?.symbol).toLowerCase()}`}>{coin?.name}</Link></p>
                <p className="coin-symbol">{coin?.symbol.toUpperCase()}</p>
              </div>
            </div>
            <div className="price-wrapper">
              <p className='price'>{formatPrice(coin?.market_data?.current_price?.usd)}</p>
            </div>
            <div className="market-cap-wrapper">
              <p className='market-cap'>{formatPrice(coin?.market_data?.market_cap?.usd, 'compact')}</p>
            </div>
            
            <div className="change-wrapper">
              <div className="line-chart">
                { <Chart chartPeriod={chartPeriod} change={coin?.market_data?.price_change_percentage_24h} /> }
              </div>
              <p 
                className='change' 
                style={
                  {
                    backgroundColor: percentageChange >= 0 ? 'green': 'red', 
                    // backgroundColor: coin?.market_data?.priceChange[chartPeriod] >= 0 ? 'green': 'red', 
                    color: 'white'
                  }
                }
                  // >{`${(coin?.market_data?.price_change_percentage_24h).toFixed(2)}%`}
                  >{`${(percentageChange).toFixed(2)}%`}
                  
              </p>
              {/* <p 
                className='change' 
                style={
                  {
                    backgroundColor: coin?.market_data?.price_change_percentage_24h >= 0 ? 'green': 'red', 
                    color: 'white'
                  }
                }
                  >{`${(coin?.market_data?.price_change_percentage_24h).toFixed(2)}%`}
              </p> */}
            </div>
          </div>
  )
}

export default Token;
