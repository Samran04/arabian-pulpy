"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, CheckCircle2 } from "lucide-react";
import { useCart } from "../context/CartContext";
import CheckoutModal from "./CheckoutModal";

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, clearCart, subtotal, discount, setDiscount } = useCart();
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [promoCode, setPromoCode] = useState("");

  if (!isCartOpen) return null;

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === "ARABIAN10") {
      setDiscount(subtotal * 0.1);
    } else {
      alert("Invalid Code. Try promo code: ARABIAN10 for 10% off!");
    }
  };

  const handleCheckout = () => {
    setCheckoutModalOpen(true);
  };

  const shipping = subtotal > 20 || subtotal === 0 ? 0 : 4.99;
  const finalTotal = Math.max(0, subtotal - discount + shipping);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* OVERLAY BACKDROP */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-primary-dark/80 backdrop-blur-sm transition-opacity animate-fadeIn"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-primary border-l border-primary-light/30 text-neutral-offwhite shadow-2xl flex flex-col justify-between">
          
          {/* HEADER */}
          <div className="p-6 border-b border-primary-light/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5 text-accent stroke-[1.5]" />
              <h3 className="font-serif text-2xl font-normal text-neutral-white tracking-wide">Your Cart</h3>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-full hover:bg-primary-light/20 text-neutral-muted hover:text-accent transition-all duration-300"
            >
              <X className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>

          {/* CART ITEMS LIST */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-16">
                <ShoppingBag className="w-12 h-12 text-neutral-muted/50 stroke-[1]" />
                <p className="text-sm font-sans text-neutral-muted font-light">Your cart is currently empty.</p>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 py-4 border-b border-primary-light/20"
                >
                  <div className="relative w-20 h-24 shrink-0 bg-primary-light/10 rounded-md p-2 flex items-center justify-center">
                    <Image src={item.image} alt={item.name} fill className="object-contain p-2" />
                  </div>

                  <div className="flex-1 min-w-0 flex flex-col h-full justify-between py-1">
                    <div>
                      <h4 className="font-serif text-lg text-neutral-white truncate">{item.name}</h4>
                      <span className="text-sm text-accent font-montserrat font-bold block pt-1 tabular-nums">
                        ₹{item.price.toFixed(2)}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 pt-3">
                      <div className="flex items-center border border-primary-light/30 rounded-md">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="px-2 py-1 text-neutral-muted hover:text-accent transition-colors"
                        >
                          <Minus className="w-3 h-3 stroke-[2]" />
                        </button>
                        <span className="text-xs text-neutral-offwhite font-sans px-2 w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="px-2 py-1 text-neutral-muted hover:text-accent transition-colors"
                        >
                          <Plus className="w-3 h-3 stroke-[2]" />
                        </button>
                      </div>
                      
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs font-sans tracking-wider text-neutral-muted hover:text-accent transition-colors"
                      >
                        REMOVE
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* FOOTER TOTAL & CHECKOUT */}
          {cart.length > 0 && (
            <div className="p-6 bg-primary-dark space-y-6 text-sm font-sans border-t border-primary-light/30">
              
              {/* PROMO CODE INPUT */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 px-4 py-3 bg-primary border border-primary-light/30 text-neutral-offwhite placeholder:text-neutral-muted text-sm focus:outline-none focus:border-accent rounded-md transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 border border-primary-light/30 text-neutral-offwhite font-sans text-xs tracking-widest uppercase hover:border-accent hover:text-accent transition-all rounded-md"
                >
                  APPLY
                </button>
              </form>

              <div className="space-y-3 pt-4 border-t border-primary-light/20 text-neutral-muted font-light">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-montserrat font-bold text-neutral-offwhite tabular-nums">₹{subtotal.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-accent">
                    <span>Discount (10%)</span>
                    <span className="font-montserrat font-bold tabular-nums">-₹{discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-montserrat font-medium">{shipping === 0 ? "Complimentary" : `₹${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-base font-normal text-neutral-white pt-4 border-t border-primary-light/20">
                  <span>Total</span>
                  <span className="font-montserrat font-bold text-lg text-white tabular-nums">₹{finalTotal.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full py-4 bg-accent/40 text-neutral-white border border-accent/50 font-sans font-bold text-xs tracking-[0.2em] uppercase hover:bg-accent/60 transition-colors flex items-center justify-center gap-3 rounded-md"
              >
                CHECKOUT
                <ArrowRight className="w-4 h-4 stroke-[2]" />
              </button>
            </div>
          )}

        </div>
      </div>

      {/* GUEST CHECKOUT MODAL */}
      <CheckoutModal
        isOpen={checkoutModalOpen}
        onClose={() => setCheckoutModalOpen(false)}
      />
    </div>
  );
}
