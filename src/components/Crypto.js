import React, { useContext, useState } from 'react';
import './styles/cryptolist.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { formatPrice } from '../utilities/formatNumber';
import CryptoContext from './CryptoContext';
import LineChart from './LineChart';
import SelectChartPeriod from './selectChartPeriod';

const Crypto = ({ coin, allCoins, price, marketCap, change, symbol }) => {
  const {loading} = useContext(CryptoContext);

  const [chartPeriod, setChartPeriod] = useState({
    period: '1h'
  });

  // console.log(chartPeriod.period);

  return (
    <>
      { !loading &&
          <div className='coins-row'>
            <div className="all-coins">
              <div className="favorite-icon-wrapper">
                <FontAwesomeIcon icon={faStar} className='favorite-icon' />
              </div>
              <div className="coin-icon-wrapper">
                <img src={coin?.iconUrl} alt="" className='coin-icon' />
              </div>
              <div className="coin-details">
                <p className='coin-name'>{allCoins === undefined ? coin?.name : 'All Coins'}</p>
                <p className="coin-symbol">{symbol === undefined ? coin?.symbol : null}</p>
              </div>
            </div>
            <div className="price-wrapper">
              <p className='price'>{price === undefined ? formatPrice(coin?.price) : 'Price'}</p>
            </div>
            <div className="market-cap-wrapper">
              <p className='market-cap'>{marketCap === undefined ? (formatPrice(coin?.marketCap)) : 'Market Cap'}</p>
            </div>
            
            <div className="change-wrapper">
              <div className="line-chart">
                { change === undefined ? <LineChart chartPeriod={chartPeriod} /> : null }
                {/* { <LineChart chartPeriod={chartPeriod} /> } */}

              </div>
              { change === undefined ? null :  <SelectChartPeriod chartPeriod={chartPeriod} setChartPeriod={setChartPeriod} />    }
              {/* { <SelectChartPeriod chartPeriod={chartPeriod} setChartPeriod={setChartPeriod} />  } */}
              
              {/* <p 
                className='change' 
                style={
                  {
                    backgroundColor: change === undefined ? coin?.change >= 0 ? 'green': 'red' : 'inherit', 
                    color: change === undefined ? 'white' : 'inherit'
                  }
                }
                  >{change === undefined ? `${coin?.change}%` : null}
              </p> */}
              <p 
                className='change' 
                style={
                  {
                    backgroundColor: change === undefined ? coin?.change >= 0 ? 'green': 'red' : 'inherit', 
                    color: change === undefined ? 'white' : 'inherit'
                  }
                }
                  >{change === undefined ? `${coin?.change}%` : null}
              </p>
            </div>
          </div>
      }

    </>
  )
}

export default Crypto; 