import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const addToCart = (product) => {
    const existItem = cart.findIndex((item) => item.id === product.id);
    if (existItem !== -1) {
      removeFromCart(product.id);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const decreaseQuantity = (product) => {
    const updatedCart = [...cart];
    if (product.quantity > 1) {
      product.quantity -= 1;
      setCart(updatedCart);
    } else {
      removeFromCart(product.id);
    }
  };

  const increaseQuantity = (product) => {
    const updatedCart = [...cart];
    product.quantity += 1;
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        decreaseQuantity,
        increaseQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
