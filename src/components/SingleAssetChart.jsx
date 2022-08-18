import React from 'react';
import { AssetChart } from './AllComponents';
import { uuids } from '../iconURLs';

const SingleAssetChart = ( { asset_symbol, chartPeriod }) => {
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
      <AssetChart coinId={uuids[asset_symbol]} chartPeriod={chartPeriod} />
    </div>
  )
}

export default SingleAssetChart