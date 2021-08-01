import React from 'react';
import keyboard1 from "./img/keyboard1nobg.png";
import "./Sass/BannerProductOne.scss";

function BannerProductOne() {
    return (
        <div className="bp-1">
            <div className="bp-1-flex">
            <div className="bp-1-content">
                <p>Comfort ready keyboard</p>
                <h2>XM43 Comfort Keyboard</h2>
                <a href="#!" className="hero-button">View</a>
            </div>
            <img src={keyboard1} alt="" />
            
            </div>
        </div>
    )
}

export default BannerProductOne
