import React from 'react';
import './footer.css';

import logo from '../../assets/logo.png';
import instagram_icon from '../../assets/instagram_icon.png';
import pintester_icon from '../../assets/pintester_icon.png';
import whatsapp_icon from '../../assets/whatsapp_icon.png';



const Footer = () => {
  return (
    <div className='footer'>
        <div className='logo'>
            <img src={logo} alt="logo" />
            <p>SHOPPER</p>
        </div>
        <div className='services'>            
            <a href="#">Company</a>
            <a href="#">Product</a>
            <a href="#">Office</a>
            <a href="#">About</a>
            <a href="#">Contact</a>            
        </div>

        <div className='social-media'>
            <a href=""><img src={instagram_icon} alt="" /></a>
            <a href=""><img src={pintester_icon} alt="" /></a>
            <a href=""><img src={whatsapp_icon} alt="" /></a>
        </div>

        <hr/>
        <p className='copyright-text'>Copyright @ 2024 - All Right Reserved.</p> 
    </div>
  );
}

export default Footer;
