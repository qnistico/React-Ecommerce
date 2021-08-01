import React from "react";
import Product from "./Product";
import mouse from "./img/mouse1nobgcrop.png";
import earphones1 from "./img/earphones1min.jpg";
import earphones2 from "./img/earphones2.jpg";
import headphones1 from "./img/headphones1min.jpg";
import headphones2 from "./img/headphones2min.jpg";
import keyboard1 from "./img/keyboard1min.jpg";
import keyboard2 from "./img/keyboard2min.jpg";
import lamp1 from "./img/lamp1min.jpg";
import lamp2 from "./img/lamp2min.jpg";
import mouse1 from "./img/mouse1min.jpg";
import mouse2 from "./img/mouse2min.jpg";
import SingleRowItem from './SingleRowItem';
import "./Sass/AllProducts.scss";

function AllProducts(props) {
  const Products = [
    {
      id: 1,
      name: "Mouse",
      price: "$19.99",
      description: "Computer mouse",
      img: mouse1
    },
    {
      id: 2,
      name: "Lamp",
      price: "$19.99",
      description: "Lamp",
      img: lamp1
    },
    {
      id: 3,
      name: "Headphones",
      price: "$39.99",
      description: "Headphones",
      img: headphones1
    },
    {
      id: 4,
      name: "Keyboard",
      price: "$39.99",
      description: "Keyboard",
      img: keyboard1
    },
    {
      id: 4,
      name: "Keyboard",
      price: "$39.99",
      description: "Keyboard",
      img: keyboard1
    },
    {
      id: 4,
      name: "Keyboard",
      price: "$39.99",
      description: "Keyboard",
      img: keyboard1
    },
    {
      id: 4,
      name: "Keyboard",
      price: "$39.99",
      description: "Keyboard",
      img: keyboard1
    },
    {
      id: 4,
      name: "Keyboard",
      price: "$39.99",
      description: "Keyboard",
      img: keyboard1
    },
  ];
  return (
    <div className="allproducts">
        <div className="allproducts-flex">
      {Products.map((product) => (
        <div className="product-card" key={product.id}>
          <Product product={product} />
        </div>
      ))}
      </div>
    </div>
  );
}

export default AllProducts;
