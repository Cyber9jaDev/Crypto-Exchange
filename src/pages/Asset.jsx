import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { iconUrls, uuids} from '../iconURLs';
import useApi from '../utilities/useApi';
import useHeaders from '../utilities/useHeaders';
import './styles/asset.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import ChartPeriodContext from '../components/contexts/ChartPeriodContext'
import { formatPrice } from '../utilities/formatNumber';
// import { Link } from 'react-router-dom';


const SingleCoin = () => {
  const [active, setActive] = useState('overview');
  const { asset_symbol } = useParams();
  const { chartPeriod } = useContext(ChartPeriodContext);
  const { data : assetInformation } = useApi(`coin/${uuids[asset_symbol]}?timePeriod=${chartPeriod}`, process.env.REACT_APP_COINRANKING_URL, useHeaders().coinrankingHeader);
  const { data : profile } = useApi(`/v2/assets/${asset_symbol}/profile`, process.env.REACT_APP_MESSARI_URL, useHeaders().messariHeader);
  const { data : metrics } = useApi(`/v1/assets/${asset_symbol}/metrics`, process.env.REACT_APP_MESSARI_URL, useHeaders().messariHeader);

  // console.log(profile);
  console.log(metrics);
  // console.log(assetInformation);

  const handleClick = (e) => setActive(() => e.target.name);
  // const getDate = (date) => new Date(date).toDateString();

  return (
    <section id="asset">
      <main>
        <div className="asset-header-wrapper">
          <img className='asset-icon' src={assetInformation?.coin?.iconUrl} alt="asset icon" />
          <div className="asset-header-text">
            <p className="asset-name">{profile.name}</p>
            <p className="asset-symbol">{profile.symbol}</p>
            <p className="asset-price">{(formatPrice(assetInformation?.coin?.price))}</p>
            <p style={{color: assetInformation?.coin?.change < 0 ? 'red' : 'green'}} className="asset-change">({assetInformation?.coin?.change}%)</p>
            <p className="asset-tagline">{profile?.profile?.general?.overview?.tagline}</p>
          </div>
          <FontAwesomeIcon className='favorite-icon' icon={faStar} />
          <FontAwesomeIcon className='share-icon' icon={faShareNodes} />
        </div>

        <div className="profile-links">
          <p className='overview'><Link to='' className={ active === 'overview' ? 'link active' : 'link' } name='overview' onClick={handleClick}>Overview</Link></p>
          <p className='market'><Link to='' className={ active === 'market' ? 'link active' : 'link' } name='market' onClick={handleClick}>Market</Link></p>
          <p className='metrics'><Link to='' className={ active === 'metrics' ? 'link active' : 'link' } name='metrics' onClick={handleClick}>Metrics</Link></p>
          <p className='historical-data'><Link to='' className={ active === 'historical-data' ? 'link active' : 'link' } name='historical-data' onClick={handleClick}>Historical Data</Link></p>
          <p className='charts'><Link to='' className={ active === 'charts' ? 'link active' : 'link' } name='charts' onClick={handleClick}>Charts</Link></p>
          <p className='research'><Link to='' className={ active === 'research' ? 'link active' : 'link' } name='research' onClick={handleClick}>Research</Link></p>
          <p className='news'><Link to='' className={ active === 'news' ? 'link active' : 'link' } name='news' onClick={handleClick}>News</Link></p>
          <p className='events'><Link to='' className={ active === 'events' ? 'link active' : 'link' } name='events' onClick={handleClick}>Events</Link></p>
        </div>

        <div className="overview">
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
              {/* <p>{getDate(metrics?.all_time_high?.at)}</p> */}
              <p>{new Date(metrics?.all_time_high?.at).toDateString()}</p>
              <p>% Down from ATH</p>
              {/* <p style={{ color: Math.floor(metrics?.all_time_high?.percent_down) >= 0 ? 'red' : 'green' }}>{Math.floor(metrics?.all_time_high?.percent_down)}%</p> */}
              {/* <p style={{ color: Math.floor(metrics?.all_time_high?.percent_down) >= 0 ? 'red' : 'green' }}>
                { metrics?.all_time_high?.percent_down > 0 ? `-${Math.floor(metrics?.all_time_high?.percent_down)}` : `+${Math.floor(metrics?.all_time_high?.percent_down)}` }%
              </p> */}
              <p style={{ color: 'red' }}> -{ Math.floor(metrics?.all_time_high?.percent_down ) }% </p>
              <p>Cycle Low</p>
              <p>{formatPrice(metrics?.cycle_low?.price)}</p>
              <p>Cycle Low Date</p>
              <p>{new Date(metrics?.cycle_low?.at).toDateString()}</p>
              <p>Up From Cycle Low</p>
              {/* <p style={{ color: Math.floor(metrics?.cycle_low?.percent_up) >= 0 ? 'green' : 'green' }}>
                { metrics?.cycle_low?.percent_up > 0 ? `+${Math.floor(metrics?.cycle_low?.percent_up)}` : `-${Math.floor(metrics?.cycle_low?.up)}` }%
              </p> */}
              <p style={{ color: 'green' }}> +{ Math.floor(metrics?.cycle_low?.percent_up) }% </p>
            </div>
          </div>
          <div className="charts">
            <h6>CHARTS</h6>
          </div>
          <div className="roi">
            <h6>ROI</h6>
          </div>
        </div>
      </main>
    </section>
  )
}

export default SingleCoin;