import React from 'react';
import "./Sass/SingleRowItem.scss";


function SingleRowItem(props) {
    return (
        <div className="single-row-item">
            <a href={props.srlink}>
            <img src={props.srimg} alt="" />
            <p>{props.srtitle}</p>
            </a>
        </div>
    )
}

export default SingleRowItem
