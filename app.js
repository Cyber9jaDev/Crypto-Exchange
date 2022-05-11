const token = "coinranking64cde228d1852cd27131b0dba9371a17bc09d58764fbe1ae";

class CryptoExchange{
  constructor(){
    this.currencies();
  }

  async currencies(){
    const currencies = await fetch("https://api.coinranking.com/v2/coins", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "x-access-token": `${token}`,
        "Authorization": `token ${token}`
      }
    });
    const response = await currencies.json();
    console.log(response.data.coins);

  }
}

new CryptoExchange();