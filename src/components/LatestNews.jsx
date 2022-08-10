import React from 'react';
import useApi from '../utilities/useApi';
import useHeaders from '../utilities/useHeaders';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
// import { faker } from '@faker-js/faker';

const LatestNews = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const { loading, data : coin } = useApi('coin/Qwsogvtv82FCd/history?timePeriod=1y', process.env.REACT_APP_COINRANKING_URL, useHeaders().coinrankingHeader);
  
  if(loading) return;

  const coinPrice = [];
  const coinTimestamp = [];

  coin?.history.forEach(coin => {
    if(coin.price === null || coin.timestamp === null ) return;
    coinPrice.push(coin.price);
    coinTimestamp.push(new Date(coin.timestamp).toLocaleDateString());
  });

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price in USD',
        data: coinPrice,
        fill: true,
        backgroundColor: 'green',
        borderColor: 'green',
      }
    ]
  }

  const options = {
    // scales: {
    //   yAxes: [
    //     {
    //       ticks: {
    //         beginAtZero: true,
    //       }
    //     }
    //   ]
    // }
  }

  // const options = {
  //   responsive: true,
  //   plugins: {
  //     legend: {
  //       position: 'top',
  //     },
  //     title: {
  //       display: true,
  //       text: 'Chart.js Line Chart',
  //     },
  //   },
  //   // scales: {

  //   // }
  // }

  return (
    <div>
      <Line options={ options } data={ data }  />
    </div>
  )
}

export default LatestNews;