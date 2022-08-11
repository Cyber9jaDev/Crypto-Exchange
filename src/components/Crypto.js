import React, { useContext, useState } from 'react';
import './styles/cryptolist.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { formatPrice } from '../utilities/formatNumber';
import CryptoContext from './CryptoContext';
import LineChart from './LineChart';
import SelectChartPeriod from './selectChartPeriod';

const Crypto = ({ coin }) => {
  const {loading} = useContext(CryptoContext);

  const [chartPeriod, setChartPeriod] = useState({
    period: '1h'
  });

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
                <p className='coin-name'>{coin?.name}</p>
                <p className="coin-symbol">{coin?.symbol}</p>
              </div>
            </div>
            <div className="price-wrapper">
              <p className='price'>{formatPrice(coin?.price)}</p>
            </div>
            <div className="market-cap-wrapper">
              <p className='market-cap'>{formatPrice(coin?.marketCap)}</p>
            </div>
            
            <div className="change-wrapper">
              <div className="line-chart">
                { <LineChart chartPeriod={chartPeriod} /> }
              </div>
              <p 
                className='change' 
                style={
                  {
                    backgroundColor: coin?.change >= 0 ? 'green': 'red', 
                    color: 'white'
                  }
                }
                  >{`${coin?.change}%`}
              </p>
            </div>
          </div>
      }

    </>
  )
}

export default Crypto; 