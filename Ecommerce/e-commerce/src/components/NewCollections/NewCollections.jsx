import React from 'react';
import './newCollections.css';
import new_collections from '../../assets/new_collections';

import Item from '../Item/Item';
const NewCollections = () => {
  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className='new-collections-item'>
          {new_collections.map((item)=>{
            return <Item key={item.id} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
          })}
        </div>
      
    </div>
  );
}

export default NewCollections;
