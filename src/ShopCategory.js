import React from "react";
import "./Sass/ShopCategory.scss";
import speaker from "./img/speaker3nobg.png";
import computermonitor from "./img/computermonitor1.png";
import keyboard from "./img/keyboard2nobg.png";
import tablet from "./img/tablet1.png";

const ShopCategory = () => {
  return (
    <div className="shopcategory">
        <h2>Shop By Category</h2>
      <div className="shopcategory-flex">
        <div className="shopcategory-item">
            <div className="shopcategory-circle">
          <img src={speaker} alt="" className="img1"></img>
          </div>
        </div>
        <div className="shopcategory-item">
            <div className="shopcategory-circle">
          <img src={computermonitor} alt="" className="img2"></img>
          </div>
        </div>
        <div className="shopcategory-item">
            <div className="shopcategory-circle">
          <img src={keyboard} alt="" className="img3"></img>
          </div>
        </div>
        <div className="shopcategory-item">
            <div className="shopcategory-circle">
          <img src={tablet} alt="" className="img4"></img>
          </div>
        </div>
        <div className="shopcategory-item">
            <div className="shopcategory-circle">
          <img src={speaker} alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopCategory;
