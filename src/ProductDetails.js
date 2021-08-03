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

function ProductDetails({ product, onAddToCart }) {
  const productDetails = [
    {
      title: "Earphones",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      price: "$1",
      img: earphones1,
      pdctId: "1",
    },
    {
      title: "hi",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      price: "$1",
      img: earphones1,
      pdctId: "2",
    },
    {
      title: "hi",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      price: "$1",
      img: earphones1,
      pdctId: "3",
    },
    {
      title: "hi",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      price: "$1",
      img: earphones1,
      pdctId: "4",
    },
    {
      title: "hi",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      price: "$1",
      img: earphones1,
      pdctId: "5",
    },
  ];
  var pdctId = new URLSearchParams(window.location.search).get("Id");
  const pdctItem = productDetails.find((pdct) => pdct.pdctId == pdctId);
  return (
    <div className="pdctdetails">
      <div className="pdctdetails-flex">
        <img src={pdctItem.img} alt="" />
        <div className="pdctdetails-content">
          <h1>{pdctItem.title}</h1>
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
            <p className="pdct-price">{pdctItem.price}</p>
            <p className="pdct-details">{pdctItem.details}</p>
          </div>
          <div className="pdctdetails-add">
            <button
              className="add-to-cart"
              onClick={() => onAddToCart(product.id, 1)}
            >Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
