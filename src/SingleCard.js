import React from 'react';
import "./Sass/SingleCard.scss";

function SingleCard(props) {
    return (
        <div className="singlecard">
            <div className="singlecard-body">
                <div className="singlecard-content">
                    <p>{props.sctop}</p>
                    <h3><span className="color">{props.scspan}</span>{props.sch3}</h3>
                </div>
                <img src={props.scimg} alt={props.scalt} />
            </div>
        </div>
    )
}

export default SingleCard
