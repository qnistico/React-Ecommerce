import React from "react";
import Product from "./Product";
import earphones1 from "./img/earphones1.jpg";
import earphones2 from "./img/earphones2.jpg";

import keyboard1 from "./img/keyboard1.jpg";
import keyboard2 from "./img/keyboard2.jpg";
import lamp1 from "./img/lamp1.jpg";
import lamp2 from "./img/lamp2.jpg";
import mouse1 from "./img/mouse1.jpg";
import mouse2 from "./img/mouse2.jpg";
import SingleRowItem from "./SingleRowItem";
import "./Sass/AllProducts.scss";
import { Helmet } from "react-helmet";

const AllProducts = ({ products, onAddToCart }) => {
  console.log(products);
  return (
    <div className="row-items all-products">
      <Helmet>
        <title>All Products | EZStore Ecommerce</title>
        <meta
          name="description"
          content="All products from EZStore"
        />
        
      </Helmet>
      <h2>View Our Products</h2>
      <div className="product-line">
      <div className="product-line-flex">
      {products.map((product) => (
          <div className="product-card" key={product.id}>
            <Product product={product} onAddToCart={onAddToCart} />
          </div>
        ))}
        </div>
  </div>
    </div>
  );
};

export default AllProducts;
