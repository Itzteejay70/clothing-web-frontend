import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext();

const STORAGE_KEY = "cart_items_v1";

export function CartProvider({ children }) {
  // Load initial cart from localStorage (runs once)
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Persist cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore storage errors
    }
  }, [items]);

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

  function clearCart() {
    setItems([]);
  }

  const subtotal = useMemo(() => {
    return items.reduce((sum, x) => sum + x.product.price * x.qty, 0);
  }, [items]);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        increment,
        decrement,
        subtotal,
        clearCart,
      }}
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
