import React, { useContext } from 'react';
import './css/shopCategory.css';
import '../components/NewCollections/newCollections.css';
import { ShopContext } from './../context/ShopContext';
import dropdown_icon from '../assets/dropdown_icon.png';
import Item from '../components/Item/Item';



const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);

  return (
    <div className='shop-catagory'>
      <img src={props.banner} alt="banner" />
      <div className='shopCategory-indexSort'>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className='shopCategory-sort'>
          Sort by <img src={dropdown_icon} alt="dropdown icon" />
        </div>
      </div>
      <div className="shopCategory-products">
      {all_product.map((item)=>{
        if(item.category===props.category){
          return <Item key={item.id} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
        }
      })}
      </div>
    </div>
  );
}

export default ShopCategory;
