import React from 'react';
import { Routes, Route} from "react-router-dom";
import { Homepage, IndexPage,  Cryptocurrencies, Exchanges, Markets,  News } from './components/allComponents';

const RouterLink = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} >
          <Route index element={<IndexPage/>} />
          <Route path='cryptocurrencies' element={<Cryptocurrencies/>} />
          <Route path='exchanges' element={<Exchanges/>} />
          <Route path='markets' element={<Markets/>} />
          <Route path='news' element={<News/>} />
        </Route>
      </Routes>
    </>
  )
}

export default RouterLink;