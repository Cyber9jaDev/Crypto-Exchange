import React from 'react';
import { exchangeIcons, exchangeIds } from '../../iconURLs';

const Market = () => {
  return (
    <div className='market'>
      <h6>MARKET</h6>
      <div className="market-table-header">
        <p className="exchange">EXCHANGE</p>
        <p className="pair">PAIR</p>
        <p className="price">PRICE</p>
        <p className="24h-volume">24H VOL</p>
      </div>

      <div className="market-table-data">
        <div>
          <img src="" alt="" />
          <p>Binance</p>
        </div>
        <p>BTC</p>
        <p>$23,459.57</p>
        <p>$30.48m</p>
      </div>
    </div>
  )
}

export default Market;