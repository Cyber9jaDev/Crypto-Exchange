const token = "coinranking64cde228d1852cd27131b0dba9371a17bc09d58764fbe1ae";
const mobileMenu = document.querySelector(".mobile-menu");
const nav =  document.querySelector("nav");
const links = document.querySelectorAll("nav ul li");

class CryptoExchange{

  constructor(){
    mobileMenu.addEventListener("click", this.mobileMenu);
    this.mobileMenuLinks();
    this.currencies();
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