import React from 'react';
import useApi from '../utilities/useApi';
import useHeaders from '../utilities/useHeaders';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';

const LineChart = ({ coinId, chartPeriod, change }) => {
  ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler );
  const { data: token, loading } = useApi('/v1/assets/bitcoin/metrics/exch.flow.in.usd.incl/time-series?after=2020-01-01&interval=1d', process.env.REACT_APP_MESSARI_URL, useHeaders().messariHeader);
  const { data: toke, loading: lod } = useApi('https://data.messari.io/api/v1/assets/metrics', process.env.REACT_APP_MESSARI_URL, useHeaders().messariHeader);
  
  console.log(toke);
  
  if(loading) return;  

  const coinPrice = [];
  const coinTimestamp = [];

  // coin?.history.forEach(coin => {
  //   if(coin.price === null || coin.timestamp === null ) return;
  //   coinPrice.push(coin.price);
  //   coinTimestamp.push(new Date((coin.timestamp) * 1000).toLocaleDateString());
  // });

  // coin?.values.forEach(coin => {
  //   if(coin.price === null || coin.timestamp === null ) return;
  //   coinPrice.push(coin.price);
  //   coinTimestamp.push(new Date((coin.timestamp) * 1000).toLocaleDateString());
  // });

  token?.values.forEach(coin => {
    if(coin.price === null || coin.timestamp === null ) return;
    // console.log(coin[0])
    // console.log(coin[5])
  });

  coinPrice.reverse();
  coinTimestamp.reverse();

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        data: coinPrice,
        fill: true,
        backgroundColor: 'rgba(223, 229, 240, 0.3)',
        borderColor: () => {
          if(change >= 0 ) return 'green'; 
          else return 'red';
        },

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
      op
      {/* <Line options={ options } data={ data }  /> */}
    </div>
  )
}

export default LineChart;