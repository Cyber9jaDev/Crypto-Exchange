import millify from 'millify';
import React from 'react';
import './styles/cryptolist.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { formatPrice } from '../utilities/formatNumber';


const Crypto = ({ coin, allCoins, price, marketCap, change, symbol }) => {
  // let backgroundColor = formatChange(coin.change);
  // console.log(coin.change);
  // if(coin !== undefined) console.log(formatChange(coin.change));

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
          <p className='coin-name'>{allCoins === undefined ? coin?.name : 'All Coins'}</p>
          <p className="coin-symbol">{symbol === undefined ? coin?.symbol : null}</p>
        </div>
      </div>
      <div className="price-wrapper">
        <p className='price'>{price === undefined ? millify(formatPrice(coin?.price)) : 'Price'}</p>
      </div>
      <div className="market-cap-wrapper">
        <p className='market-cap'>{marketCap === undefined ? (millify(coin?.marketCap)) : 'Market Cap'}</p>
      </div>
      <div className="change-wrapper">
        {/* <p className='change' style={coin && {backgroundColor: `${formatChange(coin.change)}`}}>{change === undefined ? `${coin?.change}%` : '24h'}</p> */}
        {/* <p className='change' style={change === undefined ? coin?.change > 0 ? {backgroundColor: 'green'} : {backgroundColor: 'red'}  : {backgroundColor: 'white'}}>{change === undefined ? `${coin?.change}%` : '24h'}</p> */}
        {/* <p className='change' style={change === undefined ? { backgroundColor: coin?.change > 0 ? 'green' : 'red'}  : {backgroundColor: 'white'}}>{change === undefined ? `${coin?.change}%` : '24h'}</p> */}
        <p className='change' style={{backgroundColor: change === undefined ? coin?.change >= 0 ? 'green': 'red' : 'inherit'}}>{change === undefined ? `${coin?.change}%` : '24h'}</p>

        {/* {backgroundColor: `${formatChange(coin.change)}`} */}
      </div>
    </div>
  )
}

export default Crypto; 