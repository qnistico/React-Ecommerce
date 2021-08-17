import React from "react";
import Product from "./Product";
import { useParams } from "react-router";
import { Helmet } from "react-helmet";

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
  return <div className="categories-flex">
    <Helmet>
        <title>Product Category | EZStore Ecommerce</title>
        <meta
          name="description"
          content="EZStore Ecommerce product category"
        />
        
      </Helmet>
      {getProductsByCategory().map((product) => (
      <div className="product-card category-productcard" key={product.id}>
          <Product product={product} onAddToCart={onAddToCart} />
      </div>
      ))}
  </div>;
};

export default Categories;
