import React from "react";
import "./Sass/MobileBanner.scss";
import mobileoverlay from "./img/mobileoverlaymin.png";
import mobilephone from "./img/mbnobgcrop.png";
import { Link } from "react-router-dom";
function MobileBanner() {
  return (
    <div className="mobilebanner">
      <div className="mobilebanner-flex">
        <div className="mobilebanner-content">
            <h2>Up to 50% off on all mobile phones!</h2>
            <p>Sale ends 01/01/2021</p>
            <Link to="/ProductDetails?id=prod_BkyN5YVdR7l0b6">
            <button className="hero-button">Shop Now</button>
            </Link>
        </div>
        <img src={mobileoverlay} alt="mobile phone" className="mobilephone-img mobilehide" />
        <img src={mobilephone} alt="mobile phone" className="mobileshow" />
      </div>
    </div>
  );
}

export default MobileBanner;
