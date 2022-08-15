import React from 'react';
import { useParams } from 'react-router-dom';
import iconUrls from '../iconURLs';
import useApi from '../utilities/useApi';
import useHeaders from '../utilities/useHeaders';
// import


const SingleCoin = () => {
  const { symbol } = useParams();
  const { data : profile } = useApi(`/v2/assets/${symbol}/profile`, process.env.REACT_APP_MESSARI_URL, useHeaders().messariHeader);
  const { data : metrics } = useApi(`/v1/assets/${symbol}/metrics`, process.env.REACT_APP_MESSARI_URL, useHeaders().messariHeader);
  // console.log(metrics);
  // console.log(profile);

  return (
    <section id="asset">
      <main>
        <div className="asset-header">
          
        </div>
      </main>
    </section>
  )
}

export default SingleCoin;