"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { getFlavorsWithStock } from "../services/firebaseService";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [stockPopupMessage, setStockPopupMessage] = useState(null);
  const [liveInventory, setLiveInventory] = useState([]);

  // Fetch live inventory to check stock levels
  const refreshInventory = async () => {
    try {
      const data = await getFlavorsWithStock();
      setLiveInventory(data || []);
      return data || [];
    } catch (err) {
      console.warn("Error fetching inventory for stock check:", err);
      return [];
    }
  };

  useEffect(() => {
    refreshInventory();
  }, []);

  const getProductStock = (productId, defaultStock = 50) => {
    const found = liveInventory.find((item) => item.id === productId);
    if (found) {
      if (found.inStock === false) return 0;
      return typeof found.stock === "number" ? found.stock : defaultStock;
    }
    return defaultStock;
  };

  const showStockPopup = (msg) => {
    setStockPopupMessage(msg);
  };

  const closeStockPopup = () => {
    setStockPopupMessage(null);
  };

  const addToCart = async (product, quantity = 1) => {
    const currentInventory = await refreshInventory();
    const invItem = currentInventory.find((i) => i.id === product.id);
    const availableStock = invItem ? (invItem.inStock === false ? 0 : invItem.stock ?? 50) : (product.stock ?? 50);

    // 1. Check if item is completely Out of Stock
    if (availableStock <= 0) {
      showStockPopup(`Sorry! "${product.name}" is currently Out of Stock.`);
      return false;
    }

    let addedSuccessfully = false;

    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      const currentQtyInCart = existing ? existing.quantity : 0;
      const totalDesired = currentQtyInCart + quantity;

      // 2. Check if desired quantity exceeds available stock
      if (totalDesired > availableStock) {
        const canAddCount = Math.max(0, availableStock - currentQtyInCart);

        if (canAddCount > 0) {
          showStockPopup(`Only ${availableStock} units of "${product.name}" are in stock! Added ${canAddCount} to your cart.`);
          addedSuccessfully = true;
          if (existing) {
            return prevCart.map((item) =>
              item.id === product.id ? { ...item, quantity: availableStock } : item
            );
          }
          return [...prevCart, { ...product, quantity: availableStock }];
        } else {
          showStockPopup(`Only ${availableStock} units of "${product.name}" are in stock, and they are already in your cart!`);
          return prevCart;
        }
      }

      // Quantity available
      addedSuccessfully = true;
      showToast(`Added ${quantity}x ${product.name} to cart!`);

      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });

    return addedSuccessfully;
  };

  const updateQuantity = async (productId, delta) => {
    if (delta <= 0) {
      // Decrementing
      setCart((prevCart) =>
        prevCart
          .map((item) => {
            if (item.id === productId) {
              const newQty = item.quantity + delta;
              return newQty > 0 ? { ...item, quantity: newQty } : null;
            }
            return item;
          })
          .filter(Boolean)
      );
      return;
    }

    // Incrementing quantity - check stock!
    const currentInventory = await refreshInventory();
    const invItem = currentInventory.find((i) => i.id === productId);
    const existingCartItem = cart.find((i) => i.id === productId);
    const currentQtyInCart = existingCartItem ? existingCartItem.quantity : 0;
    const availableStock = invItem ? (invItem.inStock === false ? 0 : invItem.stock ?? 50) : 50;

    if (currentQtyInCart + delta > availableStock) {
      showStockPopup(`Only ${availableStock} units are in stock for this beverage!`);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + delta } : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        toastMessage,
        showToast,
        stockPopupMessage,
        showStockPopup,
        closeStockPopup,
        getProductStock,
        refreshInventory,
      }}
    >
      {children}

      {/* OUT OF STOCK / STOCK LIMIT POPUP MODAL */}
      {stockPopupMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#FDFBF9] border border-rose-200 rounded-3xl p-6 sm:p-8 max-w-sm w-full text-center space-y-5 shadow-2xl">
            <div className="w-14 h-14 rounded-full bg-rose-100 text-rose-600 p-3.5 mx-auto flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
              </svg>
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-2xl font-bold text-neutral-dark">
                Stock Limit Reached
              </h3>
              <p className="text-xs text-neutral-muted font-sans leading-relaxed">
                {stockPopupMessage}
              </p>
            </div>

            <button
              onClick={closeStockPopup}
              className="w-full py-3 rounded-full bg-accent hover:bg-accent-light text-white font-sans font-bold text-xs uppercase tracking-widest transition-all shadow-md active:scale-95"
            >
              Understand & Continue
            </button>
          </div>
        </div>
      )}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
