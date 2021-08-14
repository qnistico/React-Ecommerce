import React from "react";
import Product from "./Product";
import { useParams } from "react-router";

const Categories = ({ categories, products, onAddToCart }) => {
  
  const { category_id } = useParams();

    /**
     * Filter products that are in a certain category.
     * @returns {*}
     */
  const getProductsByCategory = () => {
      // each product has array of categories, so you can use this .some() function to loop and check if it contains current id.
      return products
          .filter((prd) => prd.categories.some((category) => category.id === category_id));
  };

  console.log(categories);
  return <div>
      {getProductsByCategory().map((product) => (
      <div className="product-card" key={product.id}>
          <Product product={product} onAddToCart={onAddToCart} />
      </div>
      ))}
  </div>;
};

export default Categories;
