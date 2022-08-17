export const formatPrice = (price, notation) => {
  if(isNaN(price)) return;
  
  price = parseFloat(price);
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: notation ? 'compact' : 'standard',
    maximumFractionDigits: 2
  })

  return formatter.format(price)
}

export const formatChange = (change) => {
  if(isNaN(change)) return;
  let backgroundColor = 'green';

  if(change < 0) backgroundColor = 'red';

  return backgroundColor;
};

export const formatCoin = (coin) => {
  coin = parseFloat(coin);
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'standard',
    // maximumFractionDigits: 2
  })

  return formatter.format(coin)
}
