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
            sch3="Mobile Convenience"
            scimg={tablet1}
            scalt="iPad tablet"
            sclink="/ProductDetails?id=prod_RyWOwmdnyGlnEa"
          />
        </div>
        <div className="card-double-body cdb2">
          <SingleCard
            sctop="Featured Product"
            scspan="Desk Speakers"
            sch3="Excellent sound"
            scimg={speaker3}
            scalt="audio speaker"
            sclink="/ProductDetails?id=prod_Kvg9l6A2qb51bB"
          />
        </div>
        
        <div className="card-double-body cdb3">
        <SingleCard
          sctop="Featured Product"
          scspan="Computer Parts "
          sch3="Mice & Keyboards"
          scimg={mouse1}
          scalt="computer mouse"
          sclink="/ProductDetails?id=prod_p6dP5g0BPkln7k"
        />
        </div>
      </div>
    </div>
  );
}

export default CardDouble;
