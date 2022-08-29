// import React, { useEffect, useState } from 'react';
// import { asset_id, exchange_id, exchange_icon } from '../../iconURLs';
// import { formatPrice } from '../../utilities/formatNumber';

// const Market = ( { asset_symbol } ) => {
//   const [market, setMarket] = useState({});
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     async function asset(){
//       try{
//         const res = await fetch(`${process.env.REACT_APP_COINGECKO_API_URL}/coins/${asset_id[asset_symbol]}`);
//         const data = await res.json();
//         setMarket( () => data );
//         setLoading(false)
//       }
//       catch (err) {
//         setLoading(false);
//         return new Error(err);
//       }
      
//     }
//     asset();
//   }, []);

  
//   return (
    
//     <div className='market'>
//       <h6>MARKET</h6>
//       <div className="market-table-header">
//         <p className="exchange">EXCHANGE</p>
//         <p className="pair">PAIR</p>
//         <p className="price">PRICE</p>
//         <p className="24h-volume">VOLUME</p>
//       </div>

//       { loading ? null 
//         : 
//         market.tickers.map((asset, index) => {
//           return (
//             <div key={index} className="market-table-data">
//               <div>
//                 <img src={`${exchange_icon[asset.market.identifier]}`} alt="" />
//                 <p>{asset.market.name}</p>
//               </div>
//               <p><span className="base">{asset.base}</span> / <span className="target">{asset.target}</span></p>
//               <p>{formatPrice(asset.last)}</p>
//               <p>{formatPrice(asset.converted_volume.usd, 'compact')}</p>
//             </div>
//           );
//         })
//       }



      
//     </div>
//   )
// }

// export default Market;


import React from 'react'

const Market = () => {
  return (
    <div>Market</div>
  )
}

export default Market