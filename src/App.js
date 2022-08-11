import React, { useContext, useState } from "react";
import RouterLink from "./Routes";
import './App.css';
import ChartPeriodContext from "./components/contexts/ChartPeriodContext";

function App() {
  const [chartPeriod, setChartPeriod] = useState('12h');   // set chart period to 12h 

  return (
    <>
      <ChartPeriodContext.Provider value={ { chartPeriod, setChartPeriod } }>
        <RouterLink />  
      </ChartPeriodContext.Provider>
    </>
  );
}

export default App;
