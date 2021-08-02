import React, { useState, useEffect } from "react";
import { commerce } from "./Library/commerce";
import "./App.scss";
import Nav from "./Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./LandingPage";
import AllProducts from "./AllProducts";

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
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);

  return (
    <div className="App">
      <Router>
        <Nav totalItems={cart.total_items} />

        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/AllProducts">
            <AllProducts products={products} onAddToCart={handleAddToCart} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
