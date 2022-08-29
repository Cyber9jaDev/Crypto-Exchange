import React, { useState } from "react";
import RouterLink from "./Routes";
import './App.css';
import ChartPeriodContext from "./components/contexts/ChartPeriodContext";

function App() {
  // const [chartPeriod, setChartPeriod] = useState('1');   // set chart period to 12h 
  const [chartPeriod, setChartPeriod] = useState('0.041667');   // set chart period to 12h 

  return (
    <>
      <ChartPeriodContext.Provider value={ { chartPeriod, setChartPeriod } }>
        <RouterLink />  
      </ChartPeriodContext.Provider>
    </>
  );
}

export default App;
