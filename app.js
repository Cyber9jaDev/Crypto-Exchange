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
    // CryptoExchange.currencies();
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
  }

  static formatPrice(price){
    price = parseFloat(price);
    return price.toFixed(4);
  }

  static changeColorToRed(change, row){
    change = parseFloat(change);
    const changeColor = row.querySelector(".change");
    changeColor.style.color = "red";
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

      // Change color if it is less than zero
      if(change < 0){
        this.changeColorToRed(change, row);
      }
      // 

      
    });
  }
  
  static tableRow(name, symbol, price, marketCap, change, iconUrl){
    return `
      <div class="tokenDiv token d-flex align-items-center">
        <i class="fa-solid fa-star pe-2"></i>
        <span class="token-icon px-4"><img src="${iconUrl}" alt="iconImage"></span>
        <div class="token-data d-flex flex-column px-4">
          <span class="token-name">${name}</span>
          <small class="token-symbol py-2">${symbol}</small>
        </div>
      </div>
      <div class="priceDiv price"><i class="fa-solid fa-dollar-sign"></i>${price}</div>
      <div class="marketCapDiv marketCap">${marketCap}</div>
      <div class="hourDiv change">${change}%</div>
    `;
  }

}

new CryptoExchange();