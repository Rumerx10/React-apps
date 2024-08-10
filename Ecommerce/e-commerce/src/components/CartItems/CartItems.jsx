import React, { useContext } from 'react';

import './cartItems.css';
import { ShopContext } from '../../context/ShopContext';
import remove_icon from '../../assets/cart_cross_icon.png';
const CartItems = () => {
    const {all_product, cartItem, removeFromCart, getTotalCartAmount} = useContext(ShopContext);
  return (
    <div className='cartItems'>
        <div className="cartItems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>      
        <hr />
        {all_product.map((e)=>{
            if(cartItem[e.id]>0){
                // eslint-disable-next-line react/jsx-key
                return <div key={[e.id]}>
                            <div className="cartItems-format cartItems-format-main">
                                <img src={e.image} alt="" className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitems-quantity'>{cartItem[e.id]}</button>
                                <p>${e.new_price*cartItem[e.id]}</p>
                                <img className='cartitems-remove-icon' src={remove_icon} alt="delete" onClick={()=> {removeFromCart(e.id)}}/>
                            </div>
                            <hr />
                        </div>
            }
            return null;
        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Total</h1>
                <div>
                    <div className='cartitems-total-item'>
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className='cartitems-total-item'>
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className='cartitems-total-item'>
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>Procees To Checkout</button>
            </div>
            <div className="cartitem-promocode">
                <p>If you have promo code, Enter it here.</p>
                <div className="cartitems-promobox">
                    <input type="text" placeholder='promo code' />
                    <button>Submit</button>
                </div>
            </div>
        </div>

    </div>
  );
}

export default CartItems;
