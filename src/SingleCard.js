import React from "react";
import "./Sass/SingleCard.scss";
import { Link } from "react-router-dom";

function SingleCard(props) {
  return (
    <div className="singlecard">
      <div className="singlecard-body">
        <div className="singlecard-content">
          <p>{props.sctop}</p>
          <h2>
            <span className="color">{props.scspan}</span>
          </h2>
          <h3>{props.sch3}</h3>
          <Link to={props.sclink}>
            <button className="hero-button">View</button>
          </Link>
        </div>
        <Link to={props.sclink}>
          <img src={props.scimg} alt={props.scalt} />
        </Link>
      </div>
    </div>
  );
}

export default SingleCard;
