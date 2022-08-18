import React from 'react'

const ROI = ( { metrics } ) => {
  return (
    <div className="roi">
      <h6>ROI</h6>
      <div className="roi-table">
        <div className="roi-table-row">
          <p>PERIOD</p>
          <p>VS USD</p>
          <p>VS ETH</p>
          <p>VS BTC</p>
        </div>
        <div className="roi-table-row">
          <p>24H</p>
          <p>---</p>
          <p>---</p>
          <p>---</p>
        </div>
        <div className="roi-table-row">
          <p>1W</p>
          <p style={{color: metrics?.roi_data?.percent_change_last_1_week < 0 ? 'red' : 'green'}}>{metrics?.roi_data?.percent_change_last_1_week.toFixed(2)}%</p>
          <p style={{color: metrics?.roi_data?.percent_change_eth_last_1_week < 0 ? 'red' : 'green'}}>{metrics?.roi_data?.percent_change_eth_last_1_week.toFixed(2)}%</p>
          <p style={{color: metrics?.roi_data?.percent_change_btc_last_1_week < 0 ? 'red' : 'green'}}>{metrics?.roi_data?.percent_change_btc_last_1_week.toFixed(2)}%</p>
        </div>
        <div className="roi-table-row">
          <p>1M</p>
          <p style={{color: metrics?.roi_data?.percent_change_last_1_month < 0 ? 'red' : 'green'}}>{metrics?.roi_data?.percent_change_last_1_month.toFixed(2)}%</p>
          <p style={{color: metrics?.roi_data?.percent_change_eth_last_1_month < 0 ? 'red' : 'green'}}>{metrics?.roi_data?.percent_change_eth_last_1_month.toFixed(2)}%</p>
          <p style={{color: metrics?.roi_data?.percent_change_btc_last_1_month < 0 ? 'red' : 'green'}}>{metrics?.roi_data?.percent_change_btc_last_1_month.toFixed(2)}%</p>
        </div>
        <div className="roi-table-row">
          <p>3M</p>
          <p style={{color: metrics?.roi_data?.percent_change_last_3_months < 0 ? 'red' : 'green'}}>{metrics?.roi_data?.percent_change_last_3_months.toFixed(2)}%</p>
          <p style={{color: metrics?.roi_data?.percent_change_eth_last_3_months < 0 ? 'red' : 'green'}}>{metrics?.roi_data?.percent_change_eth_last_3_months.toFixed(2)}%</p>
          <p style={{color: metrics?.roi_data?.percent_change_btc_last_3_months < 0 ? 'red' : 'green'}}>{metrics?.roi_data?.percent_change_btc_last_3_months.toFixed(2)}%</p>
        </div>
        <div className="roi-table-row">
          <p>1Y</p>
          <p style={{color: metrics?.roi_data?.percent_change_last_1_year < 0 ? 'red' : 'green'}}>{metrics?.roi_data?.percent_change_last_1_year.toFixed(2)}%</p>
          <p style={{color: metrics?.roi_data?.percent_change_eth_last_1_year < 0 ? 'red' : 'green'}}>{metrics?.roi_data?.percent_change_eth_last_1_year.toFixed(2)}%</p>
          <p style={{color: metrics?.roi_data?.percent_change_btc_last_1_year < 0 ? 'red' : 'green'}}>{metrics?.roi_data?.percent_change_btc_last_1_year.toFixed(2)}%</p>
        </div>
      </div>
    </div> 
  )
}

export default ROI;
