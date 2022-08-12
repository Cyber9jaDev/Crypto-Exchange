import React from 'react';
import './styles/chart.scss';


const SelectChartPeriod = ({ chartPeriod, setChartPeriod }) => {
  
  const changeChartPeriod = (e) => {
    setChartPeriod(() => e.target.value);
  }

  return (
    <div className="chart-wrapper">
      <select onChange={changeChartPeriod} value= {chartPeriod} name="chartPeriod" >
        <option value="1h">Last 1hour</option>
        <option value="3h">Last 3hours</option>
        <option value="12h">Last 12hours</option>
        <option value="24h">Last 24hours</option>
        <option value="7d">Last 7days</option>
        <option value="30d">Last 30days</option>
        <option value="3m">Last 3months</option>
        <option value="1y">Last 1year</option>
        <option value="3y">Last 3years</option>
        <option value="5y">Last 5years</option>
      </select>
    </div>
  )
}

export default SelectChartPeriod;