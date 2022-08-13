import React from 'react';
import useApi from '../utilities/useApi';
import useHeaders from '../utilities/useHeaders';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';

const LineChart = ({ coinId, chartPeriod }) => {
  ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler );
  
  const { loading, data : coin } = useApi(`coin/${coinId}/history?timePeriod=${chartPeriod}`, process.env.REACT_APP_COINRANKING_URL, useHeaders().coinrankingHeader);
  // console.log(coin);
  
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
        fill: true,
        backgroundColor: 'white',
        borderColor: 'black',
        // tension: 4,
        // showLine: true,
        // color: 'black',
        // pointBorderWidth: 1,
        drawBorder: true,
        radius: 0,
        borderWidth: 1.2,
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
          drawBorder: false
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
          drawBorder: false
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