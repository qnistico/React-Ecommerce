import React from "react";
import CartItem from "./CartItem";
import "./Sass/Cart.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Cart = ({
  cart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart,
}) => {
  const EmptyCart = () => (
    <div>
      <p>No items in cart.</p>
      <Link to="/">Back to Shop</Link>
    </div>
  );
  const CartAdded = () => (
    <>
      <div>
        {cart.line_items.map((item) => (
          <div key={item.id}>
            <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} />
          </div>
        ))}
      </div>
      <div className="cart-bottom">
        Subtotal: {cart.subtotal.formatted_with_symbol}
        <div>
          <button className="emptyButton" type="button" onClick={handleEmptyCart}>
            Empty cart
          </button>
          <button className="checkoutButton" type="button">
            Go to checkout
          </button>
        </div>
      </div>
    </>
  );

  if (!cart.line_items) return "Loading...";
  return (
    <div className="cart">
      <h1 className="cart-header">Shopping Cart</h1>
      {!cart.line_items.length ? <EmptyCart /> : <CartAdded />}
    </div>
  );
};

export default Cart;
