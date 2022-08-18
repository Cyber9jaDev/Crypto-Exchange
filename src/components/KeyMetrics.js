import React from 'react';
import { formatPrice } from '../utilities/formatNumber';

const KeyMetrics = ( { metrics, assetInformation } ) => {
  return (
    <div className="key-metrics">
      <h6> KEY METRICS </h6>
      <div className="key-metrics-details">
        <p className="left">Price</p>
        <p>{formatPrice(assetInformation?.coin?.price)}</p>
        <p>Real Volume (24H)</p>
        <p>{formatPrice(metrics?.market_data?.real_volume_last_24_hours, 'compact')}</p>
        <p>Market Cap</p>
        <p>{ metrics?.marketcap?.liquid_marketcap_usd === null ? 'N/A' : formatPrice(metrics?.marketcap?.liquid_marketcap_usd, 'compact') }</p>
        <p>Y + 10 Market Cap</p>
        <p> { metrics?.marketcap?.y_plus10_marketcap_usd === null ? 'N/A' : formatPrice(metrics?.marketcap?.y_plus10_marketcap_usd, 'compact') }</p>
        <p>Y2050 Market Cap</p>
        <p>{ metrics?.marketcap?.y_2050_marketcap_usd === null ? 'N/A' : formatPrice(metrics?.marketcap?.y_2050_marketcap_usd, 'compact')}</p>
        <p>ATH</p>
        <p>{formatPrice(metrics?.all_time_high?.price)}</p>
        <p>ATH Date</p>
        <p>{new Date(metrics?.all_time_high?.at).toDateString()}</p>
        <p>% Down from ATH</p>
        <p style={{ color: 'red' }}> -{ metrics?.all_time_high?.percent_down.toFixed(2) }% </p>
        <p>Cycle Low</p>
        <p>{formatPrice(metrics?.cycle_low?.price)}</p>
        <p>Cycle Low Date</p>
        <p>{new Date(metrics?.cycle_low?.at).toDateString()}</p>
        <p>Up From Cycle Low</p>
        <p style={{ color: 'green' }}> +{ metrics?.cycle_low?.percent_up.toFixed(2) }% </p>
      </div>
    </div>
  )
}

export default KeyMetrics