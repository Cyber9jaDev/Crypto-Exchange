import React from 'react';
import './styles/chart.scss';


const SelectChartPeriod = ({ chartPeriod, setChartPeriod }) => {
  
  const changeChartPeriod = (e) => {
    setChartPeriod(() => e.target.value);
  }

  return (
    <div className="chart-wrapper">
      <select onChange={changeChartPeriod} value= {chartPeriod} name="chartPeriod" >
        <option value="1">24H</option>
        <option value="7">1W</option>
        <option value="14">2W</option>
        <option value="30">1M</option>
        <option value="60">2M</option>
        <option value="365">1Y</option>
      </select>
    </div>
  )
}

export default SelectChartPeriod;