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
      <p className="no-items-cart">No items in cart.</p>
      <Link to="/AllProducts"><button className="hero-button">Back to Shop</button></Link>
    </div>
  );
  const CartAdded = () => (
    <>
      <div>
        {cart.line_items.map((item) => (
          <div key={item.id}>
            <CartItem
              item={item}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={handleRemoveFromCart}
            />
          </div>
        ))}
      </div>
      <div className="cart-bottom">
        <p className="subtotal">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </p>
        <div>
          <button
            className="empty-cart-button"
            type="button"
            onClick={handleEmptyCart}
          >
            Empty cart
          </button>
          <Link to="/Checkout">
            <button className="checkout-button" type="button">
              Go to checkout
            </button>
          </Link>
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
