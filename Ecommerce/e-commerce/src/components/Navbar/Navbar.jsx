import React,{useContext, useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import './navbar.css';


import logo from '../../assets/logo.png';
import cart_icon from '../../assets/cart_icon.png';
import { ShopContext } from '../../context/ShopContext';


const Navbar = () => {
    const {getTotalCartItems} = useContext(ShopContext);
    const [menu, setMenu] = useState("shop");
    return (
        <nav className='navbar'>
            <Link to='/'>
                <div className="nav-logo">
                    <img src={logo} alt="logo" />
                    <p>Shopper</p>
                </div>
            </Link>
            
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}>
                    <Link to='/'>Shop</Link> {menu==="shop"? <hr/>:<></>}
                </li>
                <li onClick={()=>{setMenu("mens")}}>
                    <Link to='/mens'>Men's</Link> {menu==="mens"? <hr/>:<></>}
                </li>
                <li onClick={()=>{setMenu("womens")}}>
                    <Link to='/womens'>Women's</Link> {menu==="womens"? <hr/>:<></>}
                </li>
                <li onClick={()=>{setMenu("kids")}}>
                    <Link to='/kids'>Kid's</Link> {menu==="kids"? <hr/>:<></>}
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/loginSignup'>
                    <button>Login</button>            
                </Link>
                <Link to='/cart'>
                    <img src={cart_icon} alt="cart" />
                </Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </nav>
    );
}

export default Navbar;
