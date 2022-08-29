import React from 'react';
import './styles/chart.scss';


const SelectChartPeriod = ({ chartPeriod, setChartPeriod }) => {
  
  const changeChartPeriod = (e) => {
    setChartPeriod(() => e.target.value);
  }

  return (
    <div className="chart-wrapper">
      <select onChange={changeChartPeriod} value= {chartPeriod} name="chartPeriod" >
        <option value="0.041667">Last 1Hour</option>
        <option value="1">Last 1Day</option>
        <option value="7">Last 1Week</option>
        <option value="14">Last 2Weeks</option>
        <option value="30">Last 1Month</option>
        <option value="60">Last 2Months</option>
        <option value="365">Last 1Year</option>
      </select>
    </div>
  )
}

export default SelectChartPeriod;