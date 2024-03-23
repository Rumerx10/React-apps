import React from 'react';
import './App.css';

import { Header, Blog, Possibility, Features, WhatGPT3, Footer} from './containers';
import { Article, Brand, CTA, NavBar} from './components';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <NavBar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />      
    </div>
  );
}

export default App;
