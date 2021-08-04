import React from "react";
import earphones1 from "./img/earphones1.jpg";
import earphones2 from "./img/earphones2.jpg";
import keyboard1 from "./img/keyboard1.jpg";
import keyboard2 from "./img/keyboard2.jpg";
import lamp1 from "./img/lamp1.jpg";
import lamp2 from "./img/lamp2.jpg";
import mouse1 from "./img/mouse1.jpg";
import mouse2 from "./img/mouse2.jpg";
import "./Sass/ProductDetails.scss";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import ReactImageMagnify from 'react-image-magnify';
import Product from "./Product";


function ProductDetails({ product, products, onAddToCart }) {
  
  var pdctId = new URLSearchParams(window.location.search).get("Id");
  const pdctItem = products.find((pdct) => pdct.id == pdct.id);
  console.log(products, pdctItem);
  
  return (
    
    <div className="pdctdetails">
      <div className="pdctdetails-flex">
          <div className="img-container">
      <ReactImageMagnify fadeDurationInMs="0" hoverDelayInMs="0" shouldUsePositiveSpaceLens="true" {...{
    smallImage: {
        isFluidWidth: true,
        src: pdctItem?.media?.source
    },
    largeImage: {
        src: pdctItem?.media?.source,
        width: 1200,
        height: 1200
    }
}} />
</div>

        <div className="pdctdetails-content">
          <h1>{pdctItem?.title}</h1>
          <div className="pdctdetails-reviews">
            <div className="stars">
                <div className="stars-flex">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <p>No reviews</p>
              </div>
              <div>
                <p className="items-sold">
                  <WhatshotIcon /> 5 sold in the last 24 hours
                </p>
              </div>
            </div>
          </div>
          <div className="vendor-info">
            <p>Vendor: Lorem Ipsum</p>
            <p>Item ID: 15243</p>
            <p>Availability: 23 in stock</p>
          </div>
          <div className="pdctdetails-info">
            <p className="pdct-price">{pdctItem?.price.formatted_with_symbol}</p>
            <p className="pdct-details">{pdctItem?.details}</p>
          </div>
          <div className="pdctdetails-add">
            <button
              className="add-to-cart"
              onClick={() => onAddToCart(pdctItem?.id, 1)}
            >Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="product-line">
        <h2>Related Products</h2>
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
}

export default ProductDetails;
