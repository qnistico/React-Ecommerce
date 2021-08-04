import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Sass/Nav.scss";
import MenuIcon from "@material-ui/icons/Menu";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import PhoneIcon from "@material-ui/icons/Phone";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./img/logo.png";

function Nav({ totalItems }) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const [showBasic, setShowBasic] = useState(false);

  function fixHeaderOnScoll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      fixOn = 450,
      headerEl = document.getElementById("navbar");

    if (distanceY > fixOn) {
      headerEl.classList.add("fix-nav");
    } else {
      headerEl.classList.remove("fix-nav");
    }
  }

  window.addEventListener("scroll", fixHeaderOnScoll);
  const [show, handleShow] = useState(false);

  const location = useLocation();

  return (
    <div>
      <>
      {/*
        <div className="topnav">
          <div className="topnav-flex">
            <div className="topnav-flex-item topnav-address">
              <a href="#!" className="topnav-flex-item topnav-address">
                <LocationOnOutlinedIcon />
                123 Lorem Ave, PA, 12345 USA
              </a>
            </div>
            <div className="topnav-flex-item topnav-phone">
              <a
                href="tel:610-123-4567"
                className="topnav-flex-item topnav-address"
              >
                <PhoneIcon />
                (610)-123-4567
              </a>
            </div>
            <div className="topnav-flex-item topnav-hours">
              <a href="#!" className="topnav-flex-item topnav-address">
                <QueryBuilderIcon />
                Open Hours: Monday - Sunday, 5pm - 10pm
              </a>
            </div>
            <div className="topnav-flex-item topnav-social">
              
            </div>
          </div>
        </div>
      */}
        <nav className="navbar" id="navbar">
          <div className="nav-container">
            <a href="/">
              logo
            </a>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <a href="/AllProducts" className="nav-links">
                  All Products
                </a>
              </li>
              <li className="nav-item">
                <a href="/AboutPage" className="nav-links">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="/Gallery" className="nav-links">
                  Gallery
                </a>
              </li>

              <li className="nav-item">
                <a href="/#chefs" className="nav-links">
                  Chefs
                </a>
              </li>
              <li className="nav-item">
                <a href="/ContactPage" className="nav-links">
                  Contact Us
                </a>
              </li>
              <li className="nav-item mobile_show">
                <a
                  className="nav-links cart_mobile"
                  href="/#contact-us"
                >
                  
                </a>
              </li>
            </ul>
            
            <ul className="nav-menu-2 mobile_hide">
              <Link to="/Cart">
              <li className="nav-item">
                <div className="nav-cart">
                   
                  <ShoppingCartIcon />
                  <div className="cart-badge">{totalItems}</div>
                </div>
              </li>
              </Link>
            </ul>
                  
            <div className="nav-icon" onClick={handleClick}>
              <MenuIcon />
            </div>
          </div>
        </nav>
      </>
    </div>
  );
}

export default Nav;
