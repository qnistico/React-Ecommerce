import React from "react";
import "./Sass/MobileBanner.scss";
import mobileoverlay from "./img/mobileoverlaymin.png";
function MobileBanner() {
  return (
    <div className="mobilebanner">
      <div className="mobilebanner-flex">
        <div className="mobilebanner-content">
            <h2>Up to 50% off on all mobile phones!</h2>
            <p>Sale ends 01/01/2021</p>
            <button className="hero-button">Shop Now</button>
        </div>
        <img src={mobileoverlay} alt="" className="mobilephone-img" />
      </div>
    </div>
  );
}

export default MobileBanner;
