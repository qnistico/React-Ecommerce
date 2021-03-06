import React from "react";
import "./Sass/ShopCategory.scss";
import speaker from "./img/speaker3nobg.png";
import computermonitor from "./img/computermonitor1.png";
import keyboard from "./img/keyboard2nobg.png";
import tablet from "./img/tablet1.png";
import lamp from "./img/lamp2nobg.png";
import { Link } from "react-router-dom";

const ShopCategory = () => {
  return (
    <div className="shopcategory">
        <h2>Shop By Category</h2>
      <div className="shopcategory-flex">
          <Link to="/category/cat_RqEv5xnGewZz4j" style={{ textDecoration: 'none' }}>
        <div className="shopcategory-item">
            <div className="shopcategory-circle">
          <img src={speaker} alt="audio speaker" className="img1"></img>
          </div>
          <h3>Sound & Audio</h3>
        </div>
        </Link>
        <Link to="/category/cat_LvJjoPb3Ele0nO" style={{ textDecoration: 'none' }}>
        <div className="shopcategory-item">
            <div className="shopcategory-circle">
          <img src={computermonitor} alt="desktop monitor" className="img2"></img>
          </div>
          <h3>Computers & Monitors</h3>
        </div>
        </Link>
        <Link to="category/cat_8XxzoBz1NoPQAZ" style={{ textDecoration: 'none' }}>
        <div className="shopcategory-item">
            <div className="shopcategory-circle">
          <img src={keyboard} alt="keyboard" className="img3"></img>
          </div>
          <h3>Mice & Keyboards</h3>
        </div>
        </Link>
        <Link to="category/cat_VKXmwDejDorgDA" style={{ textDecoration: 'none' }}>
        <div className="shopcategory-item">
            <div className="shopcategory-circle">
          <img src={tablet} alt="iPad tablet" className="img4"></img>
          </div>
          <h3>Tablets & Phones</h3>
        </div>
        </Link>
        <Link to="category/cat_eN1ql9G8Yoz3ym" style={{ textDecoration: 'none' }}>
        <div className="shopcategory-item">
            <div className="shopcategory-circle">
          <img src={lamp} alt="Desk lamp" className="img5"></img>
          </div>
          <h3>Accessories & Lighting</h3>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default ShopCategory;
