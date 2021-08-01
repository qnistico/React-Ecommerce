import React from 'react';
import earphones1 from "./img/earphones1min.jpg";
import earphones2 from "./img/earphones2nobg.png";
import headphones1 from "./img/headphones1min.jpg";
import headphones2 from "./img/headphones2min.jpg";
import keyboard1 from "./img/keyboard1min.jpg";
import keyboard2 from "./img/keyboard2min.jpg";
import lamp1 from "./img/lamp1min.jpg";
import lamp2 from "./img/lamp2min.jpg";
import mouse1 from "./img/mouse1min.jpg";
import mouse2 from "./img/mouse2min.jpg";
import SingleRowItem from './SingleRowItem';
import "./Sass/RowItems.scss";


function RowItems(props) {
    return (
        <div className="row-items">
            <h2>Scroll through our products</h2>
            <div className="row-items-flex">
<SingleRowItem srimg={earphones1} srtitle="Headphones" />
<SingleRowItem srimg={earphones2} srtitle="Headphones" />
<SingleRowItem srimg={headphones1} srtitle="Headphones" />
<SingleRowItem srimg={headphones2} srtitle="Headphones" />
<SingleRowItem srimg={keyboard1} srtitle="Headphones" />
<SingleRowItem srimg={keyboard2} srtitle="Headphones" />
<SingleRowItem srimg={lamp1} srtitle="Headphones" />
<SingleRowItem srimg={lamp2} srtitle="Headphones" />
<SingleRowItem srimg={mouse1} srtitle="Headphones" />
<SingleRowItem srimg={mouse2} srtitle="Headphones" />
            </div>
        </div>
    )
}

export default RowItems
