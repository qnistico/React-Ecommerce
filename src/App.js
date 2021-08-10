import React, { useState, useEffect } from "react";
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
const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const response = await commerce.cart.add(productId, quantity);

    setCart(response.cart);
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
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);

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
            <Checkout />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;