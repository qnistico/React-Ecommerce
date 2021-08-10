import React, { useState, useEffect } from 'react';
import AllProducts from './AllProducts';
import BannerProductOne from './BannerProductOne';
import CardDouble from './CardDouble';
import Hero from "./Hero";
import RowItems from './RowItems';
import "./Sass/LandingPage.scss";
import { commerce } from "./Library/commerce";
import MobileBanner from './MobileBanner';
import Footer from './Footer';



function LandingPage({ onAddToCart, products }) {
  const [cart, setCart] = useState({});
  

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  

  const handleUpdateCartQty = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity });
    setCart(response.cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  };

  useEffect(() => {
    fetchCart();
  }, []);

    return (
        <div className="landing-page">
            <Hero />
            <RowItems products={products} onAddToCart={onAddToCart} />
            <BannerProductOne />
            <CardDouble />
            <MobileBanner />
        </div>
    )
}

export default LandingPage
