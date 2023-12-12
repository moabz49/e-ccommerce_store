import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Homepage from './Pages/Homepage';
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import Sidebar from './Components/Sidebar';

export default function App() {

  return (
    <div className='overflow-hidden'>
      <Header />
        <Routes>
          <Route path="/" exact element={ <Homepage />} />
          <Route path="/product/:id" element={ <ProductDetailsPage />} />
        </Routes>
      <Sidebar/>
      <Footer />
    </div>
  )
}