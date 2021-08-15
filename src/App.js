import React, { useState, useEffect } from "react";
import { CssBaseline } from '@material-ui/core';

import { commerce } from "./Library/commerce";
import "./App.scss";
import Nav from "./Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./LandingPage";
import AllProducts from "./AllProducts";
import Cart from "./Cart";
import ProductDetails from "./ProductDetails";
import RowItems from "./RowItems";
import ScrollToTop from "./ScrollToTop";
import Footer from "./Footer";
import Checkout from "./CheckoutForm/Checkout/Checkout";
import Categories from "./Categories";
const App = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCategories = async () => {
    const { data } = await commerce.categories.list();

    setCategories(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
    fetchCart();
  }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Nav totalItems={cart.total_items} />

        <Switch>
          <Route exact path="/">
            <LandingPage products={products} onAddToCart={handleAddToCart} />
          </Route>
          <Route exact path="/AllProducts">
            <AllProducts products={products} onAddToCart={handleAddToCart} />
          </Route>
          <Route exact path="/Cart">
            <Cart
              cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
            />
          </Route>
          <Route exact path="/ProductDetails">
            <ProductDetails products={products} onAddToCart={handleAddToCart} />
          </Route>
          <Route exact path="/Checkout">
          <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />
          </Route>
          <Route exact path="/category/:category_id">
            <Categories products={products} categories={categories} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;