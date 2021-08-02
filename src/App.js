import React, { useState, useEffect } from "react";
import { commerce } from "./Library/commerce";
import "./App.scss";
import Nav from "./Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./LandingPage";
import AllProducts from "./AllProducts";

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <Router>
        <Nav />

        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/AllProducts">
            <AllProducts products={products} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
