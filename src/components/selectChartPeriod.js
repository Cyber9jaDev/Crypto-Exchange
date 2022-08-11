import React from 'react';

const SelectChartDuration = ({ chartPeriod, setChartPeriod}) => {
  const changeChartDuration = (e) => {
    setChartPeriod(prev => ({
      ...prev,
      period: e.target.value
    }));
  }

  return (
    <select onChange={changeChartDuration} value= {chartPeriod.period} name="chartPeriod" >
      <option value="1h">1h</option>
      <option value="3h">3h</option>
      <option value="12h">12h</option>
      <option value="24h">24h</option>
      <option value="7d">7d</option>
      <option value="30d">30d</option>
      <option value="3m">3m</option>
      <option value="1y">1y</option>
      <option value="3y">3y</option>
      <option value="5y">5y</option>
    </select>
  )
}

export default SelectChartDuration;