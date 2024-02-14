// App.jsx
import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import ProductDetail from '../pages/productDetail';
import MyProfile from '../pages/mygiftcard';
import CalculatorModal from '../components/Calculator';
import GiftCard from '../pages/giftCardDetails';
import MyGiftCard from '../pages/mygiftcard';
import MyGiftCards from '../pages/mygiftcards';
import Checkout from '../pages/checkout';
import Orders from '../pages/order';
import Cart from "../pages/cart";



const Routers = () => {
    return (
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/productDetail/:productIndex" element={<ProductDetail/>}/>
                <Route exact path="/my-profile" element={<MyProfile/> }/>
                <Route path="/calculator" element={<CalculatorModal/> }/>
                <Route path="/gifts" element={<GiftCard/> }/>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="/my-gift-card" element={<MyGiftCard/> }/>
                <Route  path="/checkout" element={<Checkout/>} />
                <Route  path="/orders" element={<Orders/>} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/my-gift-cards" element={<MyGiftCards/>} />

            </Routes>
    );
};

export default Routers;
