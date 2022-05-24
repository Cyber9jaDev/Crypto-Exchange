const apiKey = "coinranking64cde228d1852cd27131b0dba9371a17bc09d58764fbe1ae";
const proxyUrl = "https://corsanywhere.herokuapp.com/";
const baseUrl = "https://api.coinranking.com/v2/coins";
const newsAPIKey = "a67dac3a0bb6433880752099ce23ae70";
const newsAPIBaseUrl = `https://newsapi.org/v2/everything?q=crypto&apiKey=${newsAPIKey}`;
const gnewsAPI = "a69f28a224477acd6b1ef8298221b3f8";
const gnewsBaseUrl= `https://gnews.io/api/v4/search?q=crypto&token=${gnewsAPI}`;
const theNewsAPIToken = "7WOHFbPY1tVxE04jDyhq30YV8OJlg8ekDglAOn0S";
const mobileMenu = document.querySelector(".mobile-menu");
const nav =  document.querySelector("nav");
const links = document.querySelectorAll("nav ul li");
const tableBody = document.querySelector(".tableBody");
class CryptoExchange{
  constructor(){
    window.addEventListener("DOMContentLoaded", this.mobileMenuLinks);
    mobileMenu.addEventListener("click", this.mobileMenu);
    window.addEventListener("DOMContentLoaded", CryptoExchange.currencies);
    CryptoExchange.news();
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
    const currencies = await fetch(`${proxyUrl}${baseUrl}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': "*",
        'x-access-token': `${apiKey}`,
      },
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
   
  static formatItem(item){
    item = parseFloat(item);
    const formatter = new Intl.NumberFormat("en", {
      style: "currency",
      currency: "USD",
      useGrouping: true,
      notation: "compact"
    });
    return formatter.format(item);
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

  static marketStatisticsHTML(stats, total24hVolume, totalMarketCap){
    return `
      <div class="container-lg">
        <div class="row">
          <div class="col-sm-6">
            <article class="d-flex flex-column">
              <h2 class="">Cryptocurrency Market Statistics</h2>
              <p>An overview of the complete cryptocurrency market, including the number of cryptocurrencies, the total market cap, and trading volume.</p>
              <a href="#" class="d-flex align-items-center text-decoration-none">More Statistics<i class="fa-solid fa-circle-arrow-right"></i></a>
            </article>
            <main class="d-fex flex-column justify-content-between">
              <div>
                <i class="fa-solid fa-droplet"></i>
                <span>24h Volume</span>
                <small>${total24hVolume}</small>
              </div>
              <div>
                <i class="fa-solid fa-coins"></i>
                <span>All Coins</span>
                <small>${stats.totalCoins}</small>
              </div>
              <div>
                <i class="fa-brands fa-stack-exchange"></i>
                <span>All Crypto Exchanges</span>
                <small>${stats.totalExchanges}</small>
              </div>
              <div>
                <i class="fa-solid fa-money-bill-trend-up"></i>
                <span>Total Market Cap</span>
                <small>${totalMarketCap}</small>
              </div>
              <div>
                <i class="fa-solid fa-money-bill-wheat"></i>
                <span>Total Markets</span>
                <small>${stats.totalMarkets}</small>
              </div>
            </main>
          </div>
          <div class="col-sm-6 whatsapp-page">
            <article class="d-flex flex-column text-white bg-dark text-center justify-content-between py-4">
              <i class="fab fa-whatsapp whatsapp-1"></i>
              <h2 class="">View Crypto Prices on Whatsapp</h2>
              <p>Instant price updates. 10,000+ cryptocurrencies. Share with friends.</p>
              <a href="https://wa.me/message/E74FVDHIDFUSA1" class="d-flex flex-row align-items-center justify-content-center text-decoration-none text-white">
                <i class="fab fa-whatsapp whatsapp-2 me-2"></i>
                <span>Click Here</span>
              </a>
            </article>
          </div>
        </div>
      </div>
    `;
  }

  static marketStatistics(stats){
    let {total24hVolume,  totalMarketCap} = stats;
    const section = document.getElementById('market-statistics');
    section.innerHTML = this.marketStatisticsHTML(stats, this.formatItem(total24hVolume), totalMarketCap = this.formatItem(totalMarketCap));
  }

  static footerDate(){
    const d = new Date();
    const year = d.getFullYear();
    footerDate.innerText = year;
  }

  static newsHTML(article, description){
    return `
      <div class="newsBox">
        <a href="${article.url}" class="d-flex flex-column">
          <article>
            <figure>
              <img src=${article.image_url} alt="">
              <figcaption>${article.title}</figcaption>
            </figure>
          </article>
          <p class="articleDescription">${description}</p>
          <p class="source text-secondary">Source: <small class="text-white">${article.source}</small></p>
        </a>
      </div>
    `;
  }

  static async news(){
    const news = await fetch(` https://api.thenewsapi.com/v1/news/top?api_token=${theNewsAPIToken}&locale=us&limit=5&search=crypto`);
    const response = await (news.json());
    console.log(response.data);
    CryptoExchange.loadNews(response.data);
  }

  static formatDescription(description){
    if(description.length > 200)   description = description.substring(0, 200) + "...";
    return description;
  }

  static loadNews(articles){
    const row = document.getElementById("newsRow");
    articles.map((article) => {
      let description = article.description;
      row.innerHTML += CryptoExchange.newsHTML(article, this.formatDescription(description));
    });
    
    newsContainer.append(row);
  }
  


}

new CryptoExchange();