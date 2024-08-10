import React from 'react'
import Counter from './components/Counter';
import './assets/css/counter.css';


const App=()=>{
  return (
    <div className='appContainer'>
      <h1 className='appName'>Counter App</h1>
      <Counter />
    </div>
  )
}

export default App;