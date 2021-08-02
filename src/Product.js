import React from 'react';
import "./Sass/Product.scss";
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';

const Product = ({ product }) => {
    return (
        <div className="productcard">
            <div className="productcard-body">
            <img src={product.media.source} alt="" />
<div className="productcard-content">
                <p className="pcc-name">{product.name}</p>
                <p className="pcc-description" dangerouslySetInnerHTML={{ __html: product.description}} />
                <div className="stars">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarHalfIcon />
                </div>
                <p className="pcc-price"><span className="from">from </span>{product.price.formatted_with_symbol}</p>
                
                <button  className="hero-button">Add</button>

                </div>
            </div>
        </div>
    )
}

export default Product
