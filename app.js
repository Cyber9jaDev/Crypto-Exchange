const token = "coinranking64cde228d1852cd27131b0dba9371a17bc09d58764fbe1ae";
const mobileMenu = document.querySelector(".mobile-menu");
const nav =  document.querySelector("nav");
const links = document.querySelectorAll("nav ul li");
const tableBody = document.querySelector(".tableBody");

class CryptoExchange{

  constructor(){
    mobileMenu.addEventListener("click", this.mobileMenu);
    this.mobileMenuLinks();
    CryptoExchange.currencies();
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
  
  static rowData(coins){
    coins.forEach(coin => {
      let {name, symbol, price, marketCap, change, iconUrl} = coin;
      change = parseFloat(change);
      if(change < 0) document.querySelector("body").style.color = "red";
      const row = document.createElement("div");
      row.classList.add("tableRow");
      row.innerHTML = CryptoExchange.tableRow(name, symbol, price, marketCap, change, iconUrl);
      tableBody.appendChild(row);
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