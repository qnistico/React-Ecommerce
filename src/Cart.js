import React from "react";
import CartItem from "./CartItem";
import "./Sass/Cart.scss";

const Cart = ({ cart }) => {

  const EmptyCart = () => <div mode="subtitle1">No items in cart.</div>;

  const CartAdded = () => (
    <>
      <div>
        {cart.line_items.map((item) => (
          <div key={item.id}>
              <CartItem item={item} />
          </div>
        ))}
      </div>
      <div className="cart-details">
        Subtotal: {cart.subtotal.formatted_width_symbol}
        <button className="emptyButton" type="button">
          Empty cart
        </button>
        <button className="checkoutButton" type="button">
          Go to checkout
        </button>
      </div>
    </>
  );

  if(!cart.line_items) return 'Loading...';
  return (
    <div className="cart">
      <h1 className="cart-header">Shopping Cart</h1>
      {!cart.line_items.length ? <EmptyCart /> : <CartAdded />}
    </div>
  );
};

export default Cart;
