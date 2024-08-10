import React from 'react';
import Nabvar from './components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Product from './pages/Product';
import ShopCategory from './pages/ShopCategory';
import LoginSignup from './pages/LoginSignup';
import men_banner from './assets/banner_mens.png';
import women_banner from './assets/banner_women.png';
import kid_banner from './assets/banner_kids.png';


import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nabvar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category={"men"}/>} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category={"women"}/>} />
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category={"kid"}/>} />
          <Route path='/product' element={<Product />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/loginSignup' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
