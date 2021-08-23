import React, { useState, useEffect } from "react";
import "./Sass/CartItem.scss";

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart, items, products }) => {
  const [currQty, setCurrQty] = useState(1);
  const [currLineItem, setCurrLineItem] = useState('');
  const [pdctItem, setPdctItem] = useState();
  const [pdctId, setPdctId] = useState("");

  useEffect(() => {
    const tempPdct = products.find((pdct) => pdct.id === tempPdctId);
    setPdctItem(tempPdct);
    if(items && items.length > 0){
      setCurrLineItem(items.find(i => i.product_id === tempPdctId));
    }

  }, [location, products, items]);


  const updateQty = (operation) => {
    let updatedQty = operation === 'add' ? currQty + 1 : currQty - 1;
    if(updatedQty < 1){
      updatedQty = 1
    }
    setCurrQty(updatedQty);
}

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
                onClick={() => updateQty('remove')}
              >
                -
              </button>
              <div>{item.quantity}</div>
              <button
                type="button"
                className="plus-button"
                onClick={() => updateQty('add')}

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
