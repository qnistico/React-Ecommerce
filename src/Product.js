import React from "react";
import "./Sass/Product.scss";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const Product = ({ product, onAddToCart }) => {
  return (
    <div className="productcard">
      <div className="productcard-body">
        <img src={product.media.source} alt="" />
        <div className="productcard-content">
          <p className="pcc-name">{product.name}</p>
          <p
            className="pcc-description"
            dangerouslySetInnerHTML={{ __html: product.description }}
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
            onClick={() => onAddToCart(product.id, 1)}
          >
            <AddShoppingCartIcon />
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
