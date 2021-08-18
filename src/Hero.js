import React from "react";
import heroimgnobg from "./img/heroimgnobgmin.png";
import "./Sass/Hero.scss";
import { ParallaxProvider } from "react-scroll-parallax";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Hero() {
  window.addEventListener("load", parallax);
  window.addEventListener("scroll", parallax);

  function parallax() {
    function getPosition(item) {
      let top = (
        (item.getBoundingClientRect().top / window.innerHeight) *
        100
      ).toFixed(2);

      return top;
    }

    let itemsToParallax = document.getElementsByClassName("parallaxify");

    for (let item of itemsToParallax) {
      if (!item.dataset.speedMultiplier) {
        item.dataset.speedMultiplier = "0.7";
      }

      item.style.transform =
        "translate3d(0, " +
        getPosition(item) * item.dataset.speedMultiplier +
        "px, 0)";
    }

    let imagesToParallax = document.getElementsByClassName("parallaxifyBg");

    for (let item of imagesToParallax) {
      function getPosition(item) {
        let top = (
          (item.getBoundingClientRect().top / window.innerHeight) *
          100
        ).toFixed(2);

        return top;
      }

      if (!item.dataset.speedMultiplier) {
        item.dataset.speedMultiplier = "3";
      }

      item.style.backgroundAttachment = "fixed";
      item.style.backgroundPositionY =
        getPosition(item) * item.dataset.speedMultiplier + "px";
    }
  }
  return (
    <div className="hero-responsive-header">
      <div className="hero-text mobileshow">
          <p>Get up to 50% off on all products this weekend!</p>
          <h1>Quality Affordable Technology</h1>
          <Link to="/AllProducts">
            <button className="hero-button">View All Products</button>
          </Link>
        </div>
    <div className="hero">
      <div className="hero-flex">
        <div className="hero-text mobilehide">
          <p>Get up to 50% off on all products this weekend!</p>
          <h1>Quality Affordable Technology</h1>
          <Link to="/AllProducts">
            <button className="hero-button">View All Products</button>
          </Link>
        </div>
        
        <img
          src={heroimgnobg}
          alt="woman holding phone with headphones"
          className="parallaxify"
          data-speed-multiplier="-1.618"
        />
      </div>
    </div>
    </div>
  );
}

export default Hero;
