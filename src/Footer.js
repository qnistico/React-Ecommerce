import React from "react";
import "./Sass/Footer.scss";
import Socialmediaicons from "./SocialMediaIcons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-newsletter">
        <h3>Subscribe to our newsletter</h3>
        <p>Get the latest updates to our products, policies and more</p>
        <div className="form-group">
          <input type="text" placeholder="Your email address" />
          <button className="hero-button">Subscribe</button>
        </div>
      </div>
      <div className="footer-flex">
        <div className="footer-item footer-about">
          <h3>About Us</h3>
          <p className="footer-item-padding">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor.
          </p>
        </div>
        <div className="footer-item footer-contactinfo">
          <h3>Shop</h3>
          <ul className="footer-item-padding">
            <li>
              <Link to="/category/cat_RqEv5xnGewZz4j">
              Sound & Audio
              </Link>
            </li>
            <li>
              <Link to="/category/cat_LvJjoPb3Ele0nO">
              Computers & Monitors
              </Link>
            </li>
            <li>
              <Link to="category/cat_8XxzoBz1NoPQAZ">
              Mice & Keyboards
              </Link>
            </li>
            <li>
              <Link to="category/cat_VKXmwDejDorgDA">
              Tablets & Phones
              </Link>
            </li>
            <li>
              <Link to="category/cat_eN1ql9G8Yoz3ym">
              Accessories & Lighting
              </Link>
              </li>
          </ul>
        </div>
        <div className="footer-item footer-customerservice">
          <h3>Customer Service</h3>
          <ul className="footer-item-padding">
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
          <ul className="footer-item-padding">
            <li>
              <a href="#!">Lorem, Lorem 12345, USA</a>
            </li>
            <li>
              <a href="#!">(610)-123-4567</a>
            </li>
            <li>
              <a href="#!">(610)-123-4565</a>
            </li>
            <li>
              <a href="#!">example@gmail.com</a>
            </li>
          </ul>
        </div>
        
      </div>
      <div className="creditcards">
          <img
            alt="Credit Card Logos"
            title="Credit Card Logos"
            src="https://www.credit-card-logos.com/images/multiple_credit-card-logos-1/credit_card_logos_10.gif"
            width="336"
            height="50"
            border="0"
          />
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-flex">
          <p>&copy; 2021 | EZSTORE | All Rights Reserved</p>
          <div className="footer-bottom-icons">
            <Socialmediaicons
              weburl="https://facebook.com/"
              webtitle="Facebook"
              socialmedia="facebook"
            />
            <Socialmediaicons
              weburl="https://twitter.com/"
              webtitle="Twitter"
              socialmedia="twitter"
            />
            <Socialmediaicons
              weburl="https://linkedin.com/"
              webtitle="Linkedin"
              socialmedia="linkedin"
            />
            <Socialmediaicons
              weburl="https://pinterest.com/"
              webtitle="Pinterest"
              socialmedia="pinterest"
            />
            <Socialmediaicons
              weburl="https://instagram.com/"
              webtitle="Instagram"
              socialmedia="instagram"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
