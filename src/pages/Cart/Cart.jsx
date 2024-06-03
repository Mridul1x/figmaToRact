import React, { useState } from "react";
import CartItem from "../../components/CartItem.jsx";
import OrderSummary from "../../components/OrderSummary.jsx";

const Cart = () => {
  const initialItems = [
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      image:
        "https://res.cloudinary.com/dfilp24nj/image/upload/v1717449190/halcyon/suo7kcgxc6zetfkmwyhd.png",
      size: "Large",
      color: "White",
      price: 145,
      quantity: 1,
    },
    {
      id: 2,
      name: "Checkered Shirt",
      size: "Medium",
      color: "Red",
      image:
        "https://res.cloudinary.com/dfilp24nj/image/upload/v1717449191/halcyon/t2baqokha02pp06wpyfq.png",
      price: 180,
      quantity: 1,
    },
    {
      id: 3,
      name: "Skinny Fit Jeans",
      size: "Large",
      color: "Blue",
      image:
        "https://res.cloudinary.com/dfilp24nj/image/upload/v1717449190/halcyon/qbavr9et19edmb7r5w7g.png",
      price: 240,
      quantity: 1,
    },
  ];

  const [items, setItems] = useState(initialItems);

  const updateQuantity = (id, quantity) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = subtotal * 0.2;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <section >
      <h1 className="section-title">YOUR CART</h1>
      <div className="cart-container">
        <div className="cart-items">
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              updateQuantity={updateQuantity}
            />
          ))}
        </div>
        <OrderSummary
          subtotal={subtotal}
          discount={discount}
          deliveryFee={deliveryFee}
          total={total}
        />
      </div>
    </section>
  );
};

export default Cart;
