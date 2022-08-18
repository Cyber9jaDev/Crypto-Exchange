import React from 'react';
import useApi from '../utilities/useApi';
import useHeaders from '../utilities/useHeaders';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { formatPrice } from '../utilities/formatNumber';

const LineChart = ({ coinId, chartPeriod, change }) => {
  ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler );
  const { loading, data : coin } = useApi(`coin/${coinId}/history?timePeriod=${chartPeriod}`, process.env.REACT_APP_COINRANKING_URL, useHeaders().coinrankingHeader);
  
  if(loading) return;  

  const coinPrice = [];
  const coinTimestamp = [];

  coin?.history.forEach(coin => {
    if(coin.price === null || coin.timestamp === null ) return;
    coinPrice.push(coin?.price);
    coinTimestamp.push(new Date((coin.timestamp) * 1000).toLocaleDateString());
  });

  coinPrice.reverse();
  coinTimestamp.reverse();


  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        data: coinPrice,
        fill: true,
        backgroundColor: 'rgb(223, 229, 240)',
        borderColor: () => {
          if(change >= 0) return 'green';
          else return 'red';
        },
        pointBorderWidth: 1,
        drawBorder: true,
        radius: 1,
        borderWidth: 2,
      }
    ]
  }

  const options = {
    responsive: true,
    scales: {
      y: {
        ticks: {
          display: true,
          // Include a dollar sign in the ticks
          callback: (value) => formatPrice(value)
        },
        grid: {
          display: false,
          drawTicks: true,
          drawBorder: true
        }
      },
      x: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          drawTicks: true,
          drawBorder: true
        }
      }
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  }

  return (
    <div>
      <Line options={ options } data={ data }  />
    </div>
  )
}

export default LineChart;