"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, CheckCircle2 } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, clearCart, subtotal } = useCart();
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

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
    setCheckoutComplete(true);
    setTimeout(() => {
      clearCart();
      setCheckoutComplete(false);
      setIsCartOpen(false);
    }, 3000);
  };

  const shipping = subtotal > 20 || subtotal === 0 ? 0 : 4.99;
  const finalTotal = Math.max(0, subtotal - discount + shipping);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* OVERLAY BACKDROP */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity animate-fadeIn"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#160a25] border-l border-[#e3be5a]/30 text-gray-200 shadow-2xl flex flex-col justify-between">
          
          {/* HEADER */}
          <div className="p-6 border-b border-[#e3be5a]/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5 text-[#e3be5a]" />
              <h3 className="font-serif text-2xl font-bold text-white">Your Cart</h3>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2.5 rounded-full bg-[#25103a] hover:bg-[#e3be5a] text-gray-300 hover:text-[#12081d] border border-[#e3be5a]/20 transition-all duration-300"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* CHECKOUT SUCCESS MESSAGE */}
          {checkoutComplete ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#e3be5a] to-[#b8902c] p-[1.5px] shadow-gold-glow">
                <div className="w-full h-full rounded-full bg-[#12081d] flex items-center justify-center text-[#e3be5a]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
              </div>
              <h4 className="font-serif text-2xl font-bold text-white">Order Confirmed!</h4>
              <p className="text-xs text-gray-300 font-sans font-light">
                Thank you for experiencing Arabian Pulp! Your natural pulp drinks are being freshly packaged and dispatched.
              </p>
            </div>
          ) : (
            <>
              {/* CART ITEMS LIST */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-3 py-16">
                    <ShoppingBag className="w-12 h-12 text-gray-600" />
                    <p className="text-sm font-sans text-gray-400 font-light">Your refreshment cart is empty.</p>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-4 p-3.5 rounded-xl bg-[#200d34] border border-[#e3be5a]/20"
                    >
                      <div className="relative w-16 h-16 shrink-0 bg-[#12081d] rounded-lg p-1 border border-[#e3be5a]/20">
                        <Image src={item.image} alt={item.name} fill className="object-contain" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif text-base font-bold text-white truncate">{item.name}</h4>
                        <span className="text-xs text-[#e3be5a] font-sans font-extrabold block">
                          ${item.price.toFixed(2)}
                        </span>

                        <div className="flex items-center gap-2 pt-1">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1.5 rounded-md bg-[#2c1248] text-gray-300 hover:text-white hover:bg-[#3d1858] border border-[#e3be5a]/20"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold text-white font-sans px-2">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1.5 rounded-md bg-[#2c1248] text-gray-300 hover:text-white hover:bg-[#3d1858] border border-[#e3be5a]/20"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {/* FOOTER TOTAL & CHECKOUT */}
              {cart.length > 0 && (
                <div className="p-6 border-t border-[#e3be5a]/20 bg-[#12071f] space-y-4 text-xs font-sans">
                  
                  {/* PROMO CODE INPUT */}
                  <form onSubmit={handleApplyPromo} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Promo code (e.g. ARABIAN10)"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1 px-3 py-2 rounded-lg bg-[#200d34] border border-[#e3be5a]/30 text-white focus:outline-none focus:border-[#e3be5a]"
                    />
                    <button
                      type="submit"
                      className="px-3.5 py-2 rounded-lg bg-[#25103a] border border-[#e3be5a]/40 text-[#e3be5a] font-bold hover:bg-[#e3be5a] hover:text-[#12081d] transition-all"
                    >
                      APPLY
                    </button>
                  </form>

                  <div className="space-y-2 pt-2 border-t border-[#e3be5a]/20 text-gray-300">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-[#e3be5a]">
                        <span>Promo Discount (10%)</span>
                        <span>-${discount.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Express Chilled Shipping</span>
                      <span>{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-[#e3be5a]/20">
                      <span>Total</span>
                      <span className="text-[#e3be5a] font-extrabold">${finalTotal.toFixed(2)}</span>
                    </div>
                  </div>

                  <button
                    onClick={handleCheckout}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#e3be5a] via-[#f5d77f] to-[#b8902c] text-[#12081d] font-sans font-bold text-xs tracking-widest uppercase hover:scale-[1.02] transition-all shadow-gold-glow flex items-center justify-center gap-2"
                  >
                    PROCEED TO CHECKOUT
                    <ArrowRight className="w-4 h-4 text-[#12081d]" />
                  </button>
                </div>
              )}
            </>
          )}

        </div>
      </div>
    </div>
  );
}
