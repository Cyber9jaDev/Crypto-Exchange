import React from 'react';
import { Routes, Route} from "react-router-dom";
import { Main, Cryptocurrencies, Exchanges, Markets,  News, Signup, SingleCoin, Navbar, Footer } from './components/allComponents';

const RouterLink = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='cryptocurrencies' element={<Cryptocurrencies/>} />
        <Route path='/coin/:coinName' element={<SingleCoin/>} />
        <Route path='exchanges' element={<Exchanges/>} />
        <Route path='markets' element={<Markets/>} />
        <Route path='news' element={<News/>} />
        <Route path='signup' element={<Signup/>} />
      </Routes>
      <Footer />

    </>
  )
}

export default RouterLink;