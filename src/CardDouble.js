import React from "react";
import "./Sass/CardDouble.scss";
import SingleCard from "./SingleCard";
import speaker1 from "./img/speaker2nobg.png";
import mouse1 from "./img/mouse2nobg.png";
import earphones2 from "./img/earphones2nobg.png";

function CardDouble(props) {
  return (
    <div className="card-double">
      <div className="card-double-flex">
        <div className="card-double-body cdb1">
          <SingleCard
            sctop="XM4 Speakers"
            scspan="Excellent sound. "
            sch3="Headphones & Speakers"
            scimg={speaker1}
            scalt="speaker"
          />
        </div>
        <div className="card-double-body cdb2">
          <SingleCard
            sctop="ZRX Parts"
            scspan="Computer Parts. "
            sch3="Mice & Keyboards"
            scimg={earphones2}
            scalt="speaker"
          />
        </div>
        <div className="card-double-body cdb3">
        <SingleCard
          sctop="ZRX Parts"
          scspan="Computer Parts. "
          sch3="Mice & Keyboards"
          scimg={mouse1}
          scalt="speaker"
        />
        </div>
      </div>
    </div>
  );
}

export default CardDouble;
