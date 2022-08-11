import { createContext } from "react";

const ChartPeriodContext = createContext({
  chartPeriod: '',
  setChartPeriod: () => {}
});

export default ChartPeriodContext;