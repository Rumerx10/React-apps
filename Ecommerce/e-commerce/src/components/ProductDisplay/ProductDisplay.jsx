import React, { useContext } from 'react';

import './productDisplay.css';
import star_icon from '../../assets/star_icon.png';
import star_dull_icon from '../../assets/star_dull_icon.png';
import { ShopContext } from '../../context/ShopContext';


const ProductDisplay = (props) => {
    const {product} = props;
    const {addTocart} = useContext(ShopContext);
  return (
    <div className='productDisplay'>
        <div className="productDisplay-left">
            <div className="productDisplay-img-list">
                <img src={product.image} alt="product image" />
                <img src={product.image} alt="product image" />
                <img src={product.image} alt="product image" />
                <img src={product.image} alt="product image" />
            </div>
            <div className="productDisplay-img">
                <img className="productDisplay-main-img" src={product.image} alt='product image' />
            </div>
        </div>
        <div className="productDisplay-right">
            <h1>{product.name}</h1>
            <div className="productDisplay-right-stars">
                <img src={star_icon} alt="start icon" />
                <img src={star_icon} alt="start icon" />
                <img src={star_icon} alt="start icon" />
                <img src={star_icon} alt="start icon" />
                <img src={star_dull_icon} alt="start icon" />
                <p>(122)</p>
            </div>
            <div className="productDisplay-right-prices">
                <div className="productDisplay-right-price-old">${product.old_price}</div>
                <div className="productDisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className="productDisplay-right-description">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
            </div>
            <div className="productDisplay-right-size">
                <h3>Select Size</h3>
                <div className="productDisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addTocart(product.id)}}>ADD TO CART</button>
            <p className='productDisplay-right-category'>
                <span>Category: </span>Women, T-Shirt, Crop Top
            </p>
            <p className='productDisplay-right-category'>
                <span>Tags: </span>Modern, Latest
            </p>
        </div>
    </div>
  );
}

export default ProductDisplay;
