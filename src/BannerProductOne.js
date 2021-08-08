import React from 'react';
import keyboard1 from "./img/keyboard1nobg.png";
import laptop1 from "./img/laptop1nobg.png";
import "./Sass/BannerProductOne.scss";
import { useHistory } from "react-router-dom";

function BannerProductOne() {
    const history = useHistory();
    return (
        <div className="bp-1">
            <div className="bp-1-flex">
            <div className="bp-1-content">
                <p>Comfort ready keyboard</p>
                <h2>XM43 Comfort Keyboard</h2>
                <button className="hero-button" onClick={() => history.push("/ProductDetails?id=prod_aZWNoyY2W2o80J")}>View</button>
            </div>
            <img src={laptop1} alt="" />
            
            </div>
        </div>
    )
}

export default BannerProductOne
