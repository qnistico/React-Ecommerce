import React from "react";
import "./Sass/CartItem.scss";

const CartItem = ({ item }) => {
  return (
    <div className="cartitem">
      <div className="cartitem-flex">
        <img src={item.media.source} alt={item.name} />
        <div className="cartitem-content">
          <div className="cartitem-content-flex">
            <div>
              <h4>{item.name}</h4>
              <h5>{item.line_total.formatted_with_symbol}</h5>
            </div>
            <div className="cartitem-actions">
              <div className="cartitem-buttons">
                <button type="button">-</button>
                <button type="button">+</button>
              </div>
              <button type="button">Remove</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
