import React, { useState, useEffect } from 'react';
import './styles/cryptolist.css';

const Cryptos = () => {
  const [coins, setCoins] = useState([]);
  const key = 'coinranking64cde228d1852cd27131b0dba9371a17bc09d58764fbe1ae';
  const cors_api_host = "https://corsanywhere.herokuapp.com/";
  // const cors_api_host = "https://attach-cors.herokuapp.com/";


  const checkResponseAndParse = (response) => {
    if(!response.ok) throw new Error(response.status);
    return response.json();
  }

  useEffect(() => {
    fetch(`${cors_api_host}https://api.coinranking.com/v2/coins`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': "*",
        'x-access-token': `${key}`,
      },
    })
    .then(checkResponseAndParse)
    .then(data => console.log(data))
    .catch(error => console.log(error));
  
    return () => { }
  }, [])
  

  return (
    <section>
      <div className="container-fluid">
        <h2 className="coins-list-header">
          Cryptocurrency Price List
        </h2>

        <div className="coins-list-container">

        </div>
      </div>
    </section>
  )
}

export default Cryptos;