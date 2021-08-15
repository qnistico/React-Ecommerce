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
                <p>Macbook Laptop</p>
                <h2>Macbook laptop Lorem</h2>
                <button className="hero-button" onClick={() => history.push("/category/cat_VKXmwDejDorgDA")}>View</button>
            </div>
            <img src={laptop1} alt="" />
            
            </div>
        </div>
    )
}

export default BannerProductOne
