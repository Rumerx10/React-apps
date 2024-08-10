import React, { createContext, useState } from 'react';
import all_product from './../assets/all_product';


export const ShopContext = React.createContext();

const getDefaultCart =()=>{
    let cart = {};
    for(let i=0; i<all_product.length+1; i++){
        cart[i] = 0;
    }
    return cart;
}
const ShopContextProvider = (props) => {
    const [cartItem, setCartItem] = useState(getDefaultCart());


    const addTocart=(itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        console.log(cartItem);
    }   
    const removeFromCart=(itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount =()=>{
        let totalAmount = 0;
        for(const item in cartItem){
            if(cartItem[item]>0){
                let itemInfo = all_product.find((product)=>product.id===Number(item));
                totalAmount += itemInfo.new_price * cartItem[item];
                console.log(itemInfo.new_price, cartItem[item]);
            }
            return totalAmount;
        }
    }

    const getTotalCartItems=()=>{
        let totalItem = 0;
        for(const item in cartItem){
            if(cartItem[item]>0){
                totalItem += cartItem[item];
            }
        }
        return totalItem;
    }

    const contextValue = {all_product, cartItem, addTocart, removeFromCart, getTotalCartAmount, getTotalCartItems};


    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;