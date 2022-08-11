import React from 'react';
import useApi from '../utilities/useApi';
import useHeaders from '../utilities/useHeaders';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

const LatestNews = () => {
  ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend );

  const { loading, data : coin } = useApi('coin/Qwsogvtv82FCd/history?timePeriod=24h', process.env.REACT_APP_COINRANKING_URL, useHeaders().coinrankingHeader);
  if(loading) return;

  const coinPrice = [];
  const coinTimestamp = [];

  coin?.history.forEach(coin => {
    if(coin.price === null || coin.timestamp === null ) return;
    coinPrice.push(coin.price);
    coinTimestamp.push(new Date((coin.timestamp) * 1000).toLocaleDateString());
  });

  coinPrice.reverse();
  coinTimestamp.reverse();


  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        // label: 'Price in USD',
        data: coinPrice,
        fill: false,
        backgroundColor: 'rgb(0, 90, 226)',
        borderColor: 'rgb(0, 90, 226)',
        // tension: ,
        showLine: true,
        pointBorderWidth: 1,
        drawBorder: true,
        radius: 0,
        borderWidth: 3,
      }
    ]
  }


  const options = {
    responsive: true,
    scales: {
      y: {
        // beginAtZero: true,
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          drawTicks: false,
        }
      },
      x: {
        // beginAtZero: true,
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          drawTicks: false,
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

export default LatestNews;