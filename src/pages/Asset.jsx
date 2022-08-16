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
  const { asset_symbol } = useParams();
  const { chartPeriod } = useContext(ChartPeriodContext);
  const { data : assetInformation } = useApi(`coin/${uuids[asset_symbol]}?timePeriod=${chartPeriod}`, process.env.REACT_APP_COINRANKING_URL, useHeaders().coinrankingHeader);
  const { data : profile } = useApi(`/v2/assets/${asset_symbol}/profile`, process.env.REACT_APP_MESSARI_URL, useHeaders().messariHeader);
  const { data : metrics } = useApi(`/v1/assets/${asset_symbol}/metrics`, process.env.REACT_APP_MESSARI_URL, useHeaders().messariHeader);

  console.log(profile);
  // console.log(asset);

  return (
    <section id="asset">

      <main>
        <div className="asset-header-wrapper">
          <img className='asset-icon' src={`${iconUrls[asset_symbol]}`} alt="asset icon" />
          <div className="asset-header-text">
            <p className="asset-name">{profile.name}</p>
            <p className="asset-symbol">{profile.symbol}</p>
            <p className="asset-price">{(formatPrice(assetInformation?.coin?.price))}</p>
            {/* <p style={{color: assetInformation?.coin?.change < 0 ? 'red' : 'green'}} className="asset-change">{assetInformation?.coin?.change}%</p> */}
            <p style={{color: assetInformation?.coin?.change < 0 ? 'red' : 'green'}} className="asset-change">({assetInformation?.coin?.change}%)</p>
            <p className="asset-tagline">{profile?.profile?.general?.overview?.tagline}</p>
          </div>
          <FontAwesomeIcon className='favorite-icon' icon={faStar} />
          <FontAwesomeIcon className='share-icon' icon={faShareNodes} />
        </div>
        <div className="overview-wrapper">
          <p className='overview'><Link to='/' className='link'>Overview</Link></p>
          <p className='market'><Link to='/' className='link'>Market</Link></p>
          <p className='metrics'><Link to='/' className='link'>Metrics</Link></p>
          <p className='historical-data'><Link to='/' className='link'>Historical Data</Link></p>
          <p className='charts'><Link to='/' className='link'>Charts</Link></p>
          <p className='research'><Link to='/' className='link'>Research</Link></p>
          <p className='news'><Link to='/' className='link'>News</Link></p>
          <p className='events'><Link to='/' className='link'>Events</Link></p>
        </div>
      </main>
    </section>
  )
}

export default SingleCoin;