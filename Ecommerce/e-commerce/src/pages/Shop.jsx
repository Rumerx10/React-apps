import React from 'react';
import Hero from './../components/Hero/Hero';
import Popular from './../components/Popular/Popular';
import Offers from './../components/Offers/Offers';
import NewCollections from './../components/NewCollections/NewCollections';
import SubscriptionBex from './../components/SubscriptionBox/SubscriptionBex';


const Shop = () => {
    return (
    <div>
        <Hero />
        <Popular />
        <Offers />
        <NewCollections />
        <SubscriptionBex />
    </div>
    );
}

export default Shop;
