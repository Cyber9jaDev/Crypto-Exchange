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
  // const { loading, data : coinNED } = useApi('/coins/bitcoin/market_chart?vs_currency=usd&days=14', process.env.REACT_APP_COINGECKO_API_URL, useHeaders().coinGeckoHeader);

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
                    backgroundColor: coin?.market_data?.price_change_percentage_24h >= 0 ? 'green': 'red', 
                    color: 'white'
                  }
                }
                  >{`${(coin?.market_data?.price_change_percentage_24h).toFixed(2)}%`}
              </p>
            </div>
          </div>
  )
}

export default Token;
