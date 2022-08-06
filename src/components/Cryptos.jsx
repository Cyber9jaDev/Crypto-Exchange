import React, { useState } from 'react';
import useApi from '../utilities/useApi';
import Crypto from '../components/Crypto';
import './styles/cryptolist.css';

const Cryptos = () => {
  const [coins, setCoins] = useState([]);
  const [stat, setStat] = useState({});

  const { loading, data } = useApi('coins');
  // console.log(data)
  // setStat(data?.data?.stat);
  // setCoins(data?.data?.coins);


  // setStat(data?.data?.stats);
  // setCoins(data?.data?.coins);

  // console.log(coins)

  // if(loading){
  //   // alert('loading')
  // }


  return (
    <section>
      <div className="container-fluid">
        <h2 className="coins-list-header">
          Cryptocurrency Price List
        </h2>
          
        <div className="coins-list-container">
          {
            loading ? null
              :
            <Crypto 
              coins={data?.data?.coins}
            />
          }
        </div>
      </div>
    </section>
  )
}

export default Cryptos;