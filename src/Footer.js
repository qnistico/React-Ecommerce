import React from "react";
import "./Sass/Footer.scss";

function Footer() {
  return (
      <footer>
      <div className="footer-flex">
        <div className="footer-item footer-contact">
          <h3>ABOUT US</h3>
          <p>About</p>
        </div>
        <div className="footer-item footer-customerservice">
          <h3>CUSTOMER SERVICE</h3>
          <ul>
            <li>
              <a href="#!">Help & FAQs</a>
            </li>
            <li>
              <a href="#!">Shipping Information</a>
            </li>
            <li>
              <a href="#!">Return Policy</a>
            </li>
            <li>
              <a href="#!">Privacy Policy</a>
            </li>
            <li>
              <a href="#!">Terms & Conditions</a>
            </li>
          </ul>
        </div>
        <div className="footer-item footer-contactinfo">
            <h3>Contact Us</h3>
          <ul>
            <li>
              <a href="#!">Lorem, Lorem 12345, USA</a>
            </li>
            <li>
              <a href="#!">(610)-123-4567</a>
            </li>
            <li>
              <a href="#!">(610)-123-4567</a>
            </li>
            <li>
              <a href="#!">example@gmail.com</a>
            </li>
          </ul>
        </div>
        <div className="footer-item footer-contactinfo">
            <h3>Contact Us</h3>
          <ul>
            <li>
              <a href="#!">Lorem, Lorem 12345, USA</a>
            </li>
            <li>
              <a href="#!">(610)-123-4567</a>
            </li>
            <li>
              <a href="#!">(610)-123-4567</a>
            </li>
            <li>
              <a href="#!">example@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      </footer>
  );
}

export default Footer;
