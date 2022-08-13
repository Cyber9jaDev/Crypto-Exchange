import React, { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import useApi from '../utilities/useApi';
// import useHeaders from '../utilities/useHeaders';

const SingleCoin = () => {
  // const { data } = useApi('assets/btc', process.env.REACT_APP_MESSARI_URL, useHeaders().messariHeader)
  // const { coinName } = useParams();
  // console.log(data)
  useEffect(() => {
   async function fetch(){
      const res = await fetch ('https://data.messari.io/api/v1/assets/btc', {
        header: {
          'x-messari-api-key': 'a67dac3a0bb6433880752099ce23ae70'
        }
      });
      const data = await res.json();
      console.log(data)
    }
  
    fetch();

  }, [])
  

  return (
    <div>SingleCoin</div>
  )
}

export default SingleCoin;