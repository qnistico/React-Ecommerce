import React, { useState, useEffect } from "react";
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
import ReactImageMagnify from "react-image-magnify";
import Product from "./Product";
import ForwardIcon from '@material-ui/icons/Forward';

import { useLocation } from "react-router-dom";

function ProductDetails({ products, onAddToCart, items, onUpdateCartQty }) {
  let location = useLocation();
  const [pdctItem, setPdctItem] = useState();
  const [pdctId, setPdctId] = useState("");
  const [currLineItem, setCurrLineItem] = useState('');


  useEffect(() => {
    const tempPdctId = new URLSearchParams(location.search).get("id");
    setPdctId(tempPdctId);
    const tempPdct = products.find((pdct) => pdct.id === tempPdctId);
    setPdctItem(tempPdct);
    if(items && items.length > 0){
      setCurrLineItem(items.find(i => i.product_id === tempPdctId));
    }

  }, [location, products, items]);

  return (
    <div className="pdctdetails">
      <div className="pdctdetails-flex">
        <div className="img-container">
          <ReactImageMagnify
            fadeDurationInMs="0"
            hoverDelayInMs="0"
            shouldUsePositiveSpaceLens="true"
            enlargedImageContainerClassName="zoom-img"
            enlargedImagePosition="over"

            {...{
              smallImage: {
                isFluidWidth: true,
                src: pdctItem?.media.source,
              },
              largeImage: {
                src: pdctItem?.media.source,
                width: 1200,
                height: 1200,
              },
            }}
          />
        </div>

        <div className="pdctdetails-content">
          <h1 dangerouslySetInnerHTML={{ __html: pdctItem?.name }}></h1>
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
            <p className="pdct-price">
              {pdctItem?.price.formatted_with_symbol}
            </p>
            <p
              className="pdct-details"
              dangerouslySetInnerHTML={{ __html: pdctItem?.description }}
            ></p>
          </div>
          <div className="cartitem-plusminus-buttons">
              <button
                type="button"
                className="minus-button"
                onClick={() => onUpdateCartQty(pdctId, 'remove')}
                disabled={!currLineItem}
              >
                -
              </button>
              <div>{currLineItem ? currLineItem.quantity : 1}</div>
              <button
                type="button"
                className="plus-button"
                onClick={() => onUpdateCartQty(pdctId, 'add')}
              >
                +
              </button>
            </div>
          <div className="pdctdetails-add">
            <button
              className="add-to-cart"
              onClick={() => onAddToCart(pdctId?.id, 1)}
            >
              Add to Cart What the heck
            </button>
            
          </div>
        </div>
      </div>
      <div className="product-line">
        <div className="product-line-headericon">
        <h2>Related Products</h2>
        <ForwardIcon />
        </div>

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
