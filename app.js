const token = "coinranking64cde228d1852cd27131b0dba9371a17bc09d58764fbe1ae";
const mobileMenu = document.querySelector(".mobile-menu");
const nav =  document.querySelector("nav");
const links = document.querySelectorAll("nav ul li");
const tableBody = document.querySelector(".tableBody");

class CryptoExchange{

  constructor(){
    mobileMenu.addEventListener("click", this.mobileMenu);
    this.mobileMenuLinks();
    window.addEventListener("DOMContentLoaded", CryptoExchange.currencies);
  }

  // Show and hide hamburger menu
  mobileMenu(){
    mobileMenu.classList.toggle("active");
    nav.classList.toggle("active");
  }

  // Hide hamburger menu as the user clicks a link
  mobileMenuLinks(){
    links.forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
        nav.classList.toggle("active");
      });
    });
  }

  static async currencies(){
    const currencies = await fetch("https://api.coinranking.com/v2/coins", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "x-access-token": `${token}`,
        "Authorization": `token ${token}`
      }
    });
    const response = await currencies.json();
    CryptoExchange.rowData(response.data.coins);
    CryptoExchange.marketStatistics(response.data.stats);    
  }

  static formatPrice(price){
    price = parseFloat(price);
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      useGrouping: true,
      notation: "standard"
    });
    return formatter.format(price);
  }

  static formatChangeColor(change, row){
    change = parseFloat(change);
    if(change < 0){
      const changeColor = row.querySelector(".change");
      changeColor.style.backgroundColor = "red";
    }
    else{
      const changeColor = row.querySelector(".change");
      changeColor.style.backgroundColor = "green";
    }

  }

  static formatMarketCap(marketCap){
    marketCap = parseInt(marketCap);
    const formatter = new Intl.NumberFormat("en", {
      style: "decimal",
      useGrouping: true,
      notation: "compact"
    });
    return formatter.format(marketCap);
  }
  
  static rowData(coins){
    coins.forEach(coin => {
      let {name, symbol, price, marketCap, change, iconUrl} = coin;
      const row = document.createElement("div");
      row.classList.add("tableRow");

      marketCap = this.formatMarketCap(marketCap);    // Format marketCap
      price = this.formatPrice(price);                // Format price
    
      row.innerHTML = CryptoExchange.tableRow(name, symbol, price, marketCap, change, iconUrl);
      tableBody.appendChild(row); 

      this.formatChangeColor(change, row);
    });
  }
  
  static tableRow(name, symbol, price, marketCap, change, iconUrl){
    return `
      <div class="tokenDiv token d-flex align-items-center">
        <i class="fa-solid fa-star star"></i>
        <span class="token-icon"><img src="${iconUrl}" alt="iconImage"></span>
        <div class="token-data d-flex flex-column">
          <span class="token-name">${name}</span>
          <small class="token-symbol py-2">${symbol}</small>
        </div>
      </div>
      <div class="priceDiv price">${price}</div>
      <div class="marketCapDiv marketCap">${marketCap}</div>
      <div class="hourDiv change">${change}%</div>
    `;
  }

  static marketStatisticsHTML(){
    return `
      <div class="container-lg">
      <div class="row">
        <div class="col-sm-6">
          <article>
            <h2 class="">Cryptocurrency Market Statistics</h2>
            <p>An overview of the complete cryptocurrency market, including the number of cryptocurrencies, the total market cap, and trading volume.</p>
          </article>
        </div>
        <div class="col-sm-6">
          <article>
            <h2 class="">Cryptocurrency Market Statistics</h2>
            <p>An overview of the complete cryptocurrency market, including the number of cryptocurrencies, the total market cap, and trading volume.</p>
          </article>
      </div>
    `;
  }

  static marketStatistics(stats){
    let {total, total24hVolume, totalCoins, totalExchanges, totalMarketCap, totalMarkets} = stats;
    
    // Format 'total24hVolume and 'totalMarketCap'"
    console.log(total24hVolume);
  }

}

new CryptoExchange();