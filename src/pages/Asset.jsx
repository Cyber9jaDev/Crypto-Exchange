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
import { AssetError, SingleAssetChart, ROI, Summary, KeyMetrics, HistoricalData, KeyInfo, Market } from '../components/AllComponents';

const Asset = () => {
  const [active, setActive] = useState('overview');
  const { asset_symbol } = useParams();
  const { chartPeriod, setChartPeriod } = useContext(ChartPeriodContext);
  const { data : assetInformation } = useApi(`coin/${uuids[asset_symbol]}?timePeriod=${chartPeriod}`, process.env.REACT_APP_COINRANKING_URL, useHeaders().coinrankingHeader);
  const { data : profile } = useApi(`/v2/assets/${asset_symbol}/profile`, process.env.REACT_APP_MESSARI_URL, useHeaders().messariHeader);
  const { data : metrics } = useApi(`/v1/assets/${asset_symbol}/metrics`, process.env.REACT_APP_MESSARI_URL, useHeaders().messariHeader);

  const handleClick = (e) => setActive(() => e.target.name);

  // console.log(metrics);
  // console.log(profile);
  // console.log(assetInformation)
  console.log(iconUrls[asset_symbol]);
  console.log(asset_symbol);

  return (
    <section id="asset">
      {
        ( metrics === undefined || profile === undefined || metrics === null || profile === null )  ? <AssetError /> 
          : 
          <main>
            <div className="asset-header-wrapper">
              {/* <img className='asset-icon' src={assetInformation?.coin?.iconUrl} alt="asset icon" /> */}
              <img className='asset-icon' src={iconUrls[asset_symbol]} alt="asset icon" />
              <div className="asset-header-text">
                <div className="asset-header-text-wrapper">
                  <p className="asset-name">{profile.name}</p>
                  <p className="asset-symbol">{profile.symbol}</p>
                  <p className="asset-price">{(formatPrice(assetInformation?.coin?.price))}</p>
                  <p style={{color: assetInformation?.coin?.change < 0 ? 'red' : 'green'}} className="asset-change">({assetInformation?.coin?.change}%)</p>
                </div>
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
              <div className="col-1">
                <KeyMetrics assetInformation={ assetInformation} metrics={metrics} />
              </div>
              <div className="col-2">
                <SingleAssetChart chartPeriod={ chartPeriod } asset_symbol={asset_symbol} setChartPeriod={setChartPeriod} change={assetInformation?.coin?.change}/>
              </div>
              <div className="col-3">
                <ROI metrics={metrics}  /> 
                <Market />  
              </div>
            
            </div>
          </main>
      }
    </section>
  )
}

export default Asset;