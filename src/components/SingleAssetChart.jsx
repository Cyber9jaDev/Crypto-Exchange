import React from 'react';
import { AssetChart } from './AllComponents';
import { uuids } from '../iconURLs';

const SingleAssetChart = ( { asset_symbol, chartPeriod, setChartPeriod, change }) => {

  const handleClick = (e) => setChartPeriod(e.target.attributes.name.value);

  return (
    <div className="charts">
      <div className="charts-header">
        <h6>CHARTS</h6>
        <select name="" id="">
          <option value="price">Price</option>
          <option value="price">Price</option>
          <option value="price">Price</option>
          <option value="price">Price</option>
        </select>
      </div>
      <div className="chart-period-table">
        <p onClick={handleClick} name='1h'>1H</p>
        <p onClick={handleClick} name='3h'>3H</p>
        <p onClick={handleClick} name='12h'>12H</p>
        <p onClick={handleClick} name='24h'>24H</p>
        <p onClick={handleClick} name='7d'>7D</p>
        <p onClick={handleClick} name='30d'>30D</p>
        <p onClick={handleClick} name='3m'>3M</p>
        <p onClick={handleClick} name='1y'>1Y</p>
        <p onClick={handleClick} name='3y'>3Y</p>
        <p onClick={handleClick} name='5y'>5Y</p>
      </div>
      <AssetChart coinId={uuids[asset_symbol]} chartPeriod={chartPeriod} change={change} />
    </div>
  )
}

export default SingleAssetChart