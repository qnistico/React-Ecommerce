import React from 'react';
import "./Sass/MobileBanner.scss";
import overlay1 from "./img/overlay1.png";

function MobileBanner() {
    return (
        <div className="mobilebanner">
            <img src={overlay1} alt="" />
        </div>
    )
}

export default MobileBanner
