import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]); 
  // items: [{ product, qty }]

  function addToCart(product) {
    setItems((prev) => {
      const found = prev.find((x) => x.product.id === product.id);
      if (found) {
        return prev.map((x) =>
          x.product.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      }
      return [...prev, { product, qty: 1 }];
    });
  }

  function removeFromCart(productId) {
    setItems((prev) => prev.filter((x) => x.product.id !== productId));
  }

  function increment(productId) {
    setItems((prev) =>
      prev.map((x) =>
        x.product.id === productId ? { ...x, qty: x.qty + 1 } : x
      )
    );
  }

  function decrement(productId) {
    setItems((prev) =>
      prev
        .map((x) =>
          x.product.id === productId ? { ...x, qty: x.qty - 1 } : x
        )
        .filter((x) => x.qty > 0)
    );
  }

  const subtotal = useMemo(() => {
    return items.reduce((sum, x) => sum + x.product.price * x.qty, 0);
  }, [items]);

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, increment, decrement, subtotal }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
