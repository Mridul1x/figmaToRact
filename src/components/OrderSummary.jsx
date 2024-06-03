import React from "react";

const OrderSummary = ({ subtotal, discount, deliveryFee, total }) => {
  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      <p className="p1">
        Subtotal <span className="span">${subtotal.toFixed(2)}</span>
      </p>
      <p className="p1">
        Discount (-20%){" "}
        <span className="discount span">-${discount.toFixed(2)}</span>
      </p>
      <p className="p1">
        Delivery Fee <span className="span">${deliveryFee.toFixed(2)}</span>
      </p>
      <hr className="hr" />
      <p className="h3">
        Total <span className="span span1">${total.toFixed(2)}</span>
      </p>
      <input type="text" placeholder="Add promo code" />
      <button>Apply</button>
      <button className="checkout">Go to Checkout</button>
    </div>
  );
};

export default OrderSummary;
