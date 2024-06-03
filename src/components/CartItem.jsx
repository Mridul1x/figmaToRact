import React from "react";
import { HiOutlineTrash } from "react-icons/hi";

const CartItem = ({ item, updateQuantity }) => {
  const handleDecrease = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleIncrease = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="item-details">
        <p className="item-name">{item.name}</p>
        <p className="item-size">Size: {item.size}</p>
        <p className="item-color">Color: {item.color}</p>
        <p className="item-price">${item.price}</p>
      </div>
      <div className="cart-right">
        <HiOutlineTrash className="remove-item" />
        <div className="item-quantity">
          <button onClick={handleDecrease}>-</button>
          <span>{item.quantity}</span>
          <button onClick={handleIncrease}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
