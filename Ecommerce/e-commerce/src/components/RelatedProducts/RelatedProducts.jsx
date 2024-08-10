import React from 'react';

import './realatedProducts.css';
import Item from '../Item/Item';
import all_product from './../../assets/all_product';


const RelatedProducts = (props) => {
  
  let {productId, productCategory} = props;
  productId = Number(productId);

  return (
    <div className='relatedProducts'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedProducts-item">
          {all_product.map((item)=>{
            if(item.category===productCategory && item.id!==productId){
              return <Item key={item.id} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>               
            }
          })}
        </div>
    </div>
  );
}

export default RelatedProducts;
