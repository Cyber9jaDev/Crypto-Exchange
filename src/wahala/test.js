const key = "El7lPszcqU4yeVtL4Js4V3vRhGWYolSx1Lj";
const token = "coinranking64cde228d1852cd27131b0dba9371a17bc09d58764fbe1ae";

// function checkResponseAndParse(response){
//   if(!response.ok) throw new Error(response.status);
//   return response.json();
// }

// function currencies(){
//   fetch("https://api.exchange.cryptomkt.com/api/3/public/ticker")
//   // .then((response) => {
//   //   if(!response.ok) throw new Error(response.status);
//   //   return response.json();
//   // })
//   .then(checkResponseAndParse)
//   .then((data) => {
//     console.log(data);
//     // CryptoExchange.rowData(response.data.coins);
//     // CryptoExchange.marketStatistics(response.data.stats);
//   })
//   .catch((err) => {
//     return err;
//   });
// }

async function currencies(){
  const currencies = await fetch(`https://api.coinranking.com/v2/coins`, {
    // method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    },
  });
  const response = await currencies.json();
  console.log(response);
  // CryptoExchange.rowData(response.data.coins);
  // CryptoExchange.marketStatistics(response.data.stats);    
}


currencies();
