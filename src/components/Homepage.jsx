import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className='homepage'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Homepage;