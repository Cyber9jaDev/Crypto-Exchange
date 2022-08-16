import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { iconUrls, uuids} from '../iconURLs';
import useApi from '../utilities/useApi';
import useHeaders from '../utilities/useHeaders';
import './styles/asset.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import ChartPeriodContext from '../components/contexts/ChartPeriodContext'
import { formatPrice } from '../utilities/formatNumber';




const SingleCoin = () => {
  const { symbol } = useParams();
  const { chartPeriod, setChartPeriod } = useContext(ChartPeriodContext);
  const { data : assetInformation } = useApi(`coin/${uuids[symbol]}?timePeriod=${chartPeriod}`, process.env.REACT_APP_COINRANKING_URL, useHeaders().coinrankingHeader);
  const { data : profile } = useApi(`/v2/assets/${symbol}/profile`, process.env.REACT_APP_MESSARI_URL, useHeaders().messariHeader);
  const { data : metrics } = useApi(`/v1/assets/${symbol}/metrics`, process.env.REACT_APP_MESSARI_URL, useHeaders().messariHeader);

  console.log(profile);
  // console.log(asset);

  return (
    <section id="asset">
      <main>
        {/* <div className="asset-header">
          <img className='asset-icon' src={`${iconUrls[symbol]}`} alt="asset icon" />
          <div className="asset-header-text">
            <p className="asset-name">{profile.name}</p>
            <p className="asset-symbol">{profile.symbol}</p>
            <p className="asset-price">{(formatPrice(assetInformation?.coin?.price, 'compact'))}</p>
            <p style={{color: assetInformation?.coin?.change < 0 ? 'red' : 'green'}} className="asset-change">{assetInformation?.coin?.change}%</p>
          </div>
          <FontAwesomeIcon className='favorite-icon' icon={faStar} />
          <FontAwesomeIcon className='favorite-icon' icon={faShareNodes} />
        </div> */}
      </main>
    </section>
  )
}

export default SingleCoin;