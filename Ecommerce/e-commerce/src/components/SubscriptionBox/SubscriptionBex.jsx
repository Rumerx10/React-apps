import React from 'react';
import './subscriptionBox.css';



const SubscriptionBex = () => {
  return (
    <div className='subscription-box'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe our newsletter and stay updated.</p>
        <form action="">
            <input type="text" placeholder='Your Email Address' />
            <button className='subscribe-btn'>Subscribe</button>
        </form>  
    </div>
  );
}

export default SubscriptionBex;
