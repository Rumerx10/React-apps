import React from 'react';

import './popular.css';
import Item from '../Item/Item';
import data_product from '../../assets/data';



const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr/>
        <div className="popular-item">
            {data_product.map((item)=>{
                return <Item key={item.id} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
      
    </div>
  );
}

export default Popular;
