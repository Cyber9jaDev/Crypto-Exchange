import React from 'react';
import { Routes, Route} from "react-router-dom";
import { Homepage, Main, Cryptocurrencies, Exchanges, Markets,  News, Signup, SingleCurrency } from './components/allComponents';

const RouterLink = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} >
          <Route index element={<Main/>} />
          <Route path='cryptocurrencies' element={<Cryptocurrencies/>} />
          <Route path='cryptocurrencies/:cryptocurrencyUuid' element={<SingleCurrency/>} />
          <Route path='exchanges' element={<Exchanges/>} />
          <Route path='markets' element={<Markets/>} />
          <Route path='news' element={<News/>} />
          <Route path='signup' element={<Signup/>} />
        </Route>
      </Routes>
    </>
  )
}

export default RouterLink;