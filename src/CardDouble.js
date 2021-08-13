import React from "react";
import "./Sass/CardDouble.scss";
import SingleCard from "./SingleCard";
import speaker1 from "./img/speaker2nobg.png";
import speaker3 from "./img/speaker3nobg.png";
import mouse1 from "./img/mouse2nobg.png";
import earphones2 from "./img/earphones2nobg.png";
import tablet1 from "./img/tablet1.png";


function CardDouble(props) {
  return (
    <div className="card-double">
      <div className="card-double-flex">
      <div className="card-double-body cdb1">
          <SingleCard
            sctop="Featured Product"
            scspan="Apple iPad"
            sch3="Mobile Convenience."
            scimg={tablet1}
            scalt="speaker"
          />
        </div>
        <div className="card-double-body cdb2">
          <SingleCard
            sctop="Featured Product"
            scspan="Desktop Speakers."
            sch3="Excellent sound"
            scimg={speaker3}
            scalt="speaker"
          />
        </div>
        
        <div className="card-double-body cdb3">
        <SingleCard
          sctop="Featured Product"
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
