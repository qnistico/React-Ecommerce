import React from "react";
import "./Sass/CartItem.scss";

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
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
            <div className="cartitem-plusminus-buttons">
              <button
                type="button"
                className="minus-button"
                onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}
              >
                -
              </button>
              <div>{item.quantity}</div>
              <button
                type="button"
                className="plus-button"
                onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>
            <button
              type="button"
              className="remove-button"
              onClick={() => onRemoveFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
