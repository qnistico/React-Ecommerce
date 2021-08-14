import React from "react";
import Product from "./Product";
import { useParams } from "react-router";

const Categories = ({ categories, products, onAddToCart }) => {
  
  const { category_id } = useParams();
  products
    .filter((p) => p.category_id === category_id)
    .map((product) => (
      <div className="product-card" key={product.id}>
        <Product product={product} onAddToCart={onAddToCart} />
      </div>
    ));
  console.log(categories);
  return <div>
    
  </div>;
};

export default Categories;
