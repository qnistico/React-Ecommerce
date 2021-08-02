import React from "react";

const Cart = ({ cart }) => {
  const isEmpty = !cart.line_items.length;

  const EmptyCart = () => <div mode="subtitle1">No items in cart.</div>;

  const CartAdded = () => (
    <>
      <div>
        {cart.line_items.map((item) => (
          <div className="wtf" item key={item.id}>
            <div className="cart-item">{item.name}</div>
          </div>
        ))}
      </div>
      <div className="cart-details">
        Subtotal: {cart.subtotal.formatted_width_symbol}
        <button className="emptyButton" type="button">Empty Cart</button>
        <button className="checkoutButton" type="button">Empty Cart</button>
      </div>
    </>
  );
  return (
    <div className="cart">
      <h3 className="cart-header">Shopping Cart</h3>
      {isEmpty ? <EmptyCart /> : <CartAdded />}
    </div>
  );
};

export default Cart;
