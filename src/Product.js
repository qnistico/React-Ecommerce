import React from 'react';
import "./Sass/Product.scss"

const Product = ({ product }) => {
    return (
        <div className="productcard">
            <div className="productcard-body">
            <img src={product.img} alt="" />
<div className="productcard-content">
                <p className="pcc-name">{product.name}</p>
                <p className="pcc-description">{product.description}</p>
                <p className="pcc-price">{product.price}</p>
                <div className="button-box">
                <a href="#!" className="hero-button">Add to Cart</a>
                </div>

                </div>
            </div>
        </div>
    )
}

export default Product
