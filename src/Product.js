import React from "react";
import "./Sass/Product.scss";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { useHistory } from "react-router-dom";

const Product = ({ product, onAddToCart }) => {
  const history = useHistory();
  return (
    <div className="productcard">
      <div className="productcard-body">
        <div className="img-container">
          <img
            src={product.media.source}
            alt=""
            onClick={() => history.push(`/ProductDetails?id=${product?.id}`)}
          />
        </div>
        <div className="productcard-content">
          <p className="pcc-name">{product.name}</p>
          <p
            className="pcc-description"
            /*
            dangerouslySetInnerHTML={{ __html: product.description }}
            */
          />
          <div className="stars">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarHalfIcon />
          </div>
          <div className="productcard-bottom">
            <p className="pcc-price">
              <span className="from">from </span>
              {product.price.formatted_with_symbol}
            </p>

            <button
              className="add-to-cart"
              onClick={() => history.push(`/ProductDetails?id=${product?.id}`)}
            >
              View Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
