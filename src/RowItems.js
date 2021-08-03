import React from "react";
import earphones1 from "./img/earphones1.jpg";
import earphones2 from "./img/earphones2.jpg";

import keyboard1 from "./img/keyboard1.jpg";
import keyboard2 from "./img/keyboard2.jpg";
import lamp1 from "./img/lamp1.jpg";
import lamp2 from "./img/lamp2.jpg";
import mouse1 from "./img/mouse1.jpg";
import mouse2 from "./img/mouse2.jpg";
import SingleRowItem from "./SingleRowItem";
import "./Sass/RowItems.scss";
import { useHistory } from "react-router-dom";

function RowItems(props) {
  const history = useHistory();
  return (
    <div className="row-items">
      <h2>Scroll through our products</h2>
      <div className="row-items-flex">
        <div onClick={() => history.push("/ProductDetails?Id=1")}>
          <SingleRowItem srimg={earphones1} srtitle="Headphones" />
        </div>
        <div>
          <SingleRowItem srimg={earphones2} srtitle="Headphones" />
        </div>

        <div>
          <SingleRowItem srimg={keyboard1} srtitle="Headphones" />
        </div>
        <div>
          <SingleRowItem srimg={keyboard2} srtitle="Headphones" />
        </div>
        <div>
          <SingleRowItem srimg={lamp1} srtitle="Headphones" />
        </div>
        <div>
          <SingleRowItem srimg={lamp2} srtitle="Headphones" />
        </div>
        <div>
          <SingleRowItem srimg={mouse1} srtitle="Headphones" />
        </div>
        <div>
          <SingleRowItem srimg={mouse2} srtitle="Headphones" />
        </div>
      </div>
    </div>
  );
}

export default RowItems;
