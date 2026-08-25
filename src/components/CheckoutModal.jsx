"use client";

import React, { useState } from "react";
import { 
  X, 
  ShoppingBag, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  User, 
  CreditCard, 
  MessageSquare, 
  ArrowRight, 
  ShieldCheck, 
  Truck,
  Sparkles
} from "lucide-react";
import { useCart } from "../context/CartContext";
import { createCustomerOrder } from "../services/firebaseService";

export default function CheckoutModal({ isOpen, onClose }) {
  const { cart, subtotal, discount, shipping, finalTotal, clearCart } = useCart();
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
    paymentMethod: "COD", // "COD" or "UPI"
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cart.length === 0) return;

    setIsSubmitting(true);

    const orderPayload = {
      customerName: formData.name,
      phone: formData.phone,
      email: formData.email || "N/A",
      address: `${formData.address}, ${formData.city} - ${formData.pincode}`,
      paymentMethod: formData.paymentMethod,
      notes: formData.notes,
      items: cart.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        total: item.price * item.quantity,
      })),
      subtotal,
      discount,
      shipping,
      finalTotal,
    };

    try {
      const order = await createCustomerOrder(orderPayload);
      setConfirmedOrder(order);
      clearCart();
    } catch (err) {
      console.error("Order error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateWhatsAppLink = () => {
    if (!confirmedOrder) return "#";
    const text = `Hello Arabian Pulpy! I placed an order:\n*Order ID:* ${confirmedOrder.id}\n*Name:* ${confirmedOrder.customerName}\n*Phone:* ${confirmedOrder.phone}\n*Address:* ${confirmedOrder.address}\n*Total:* ₹${confirmedOrder.finalTotal.toFixed(2)} (${confirmedOrder.paymentMethod})\n\nPlease confirm my delivery status!`;
    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#FDFBF9] border border-neutral-border rounded-3xl p-6 sm:p-10 text-neutral-dark shadow-2xl max-h-[92vh] overflow-y-auto">
        
        {/* CLOSE BUTTON */}
        <button
          onClick={() => {
            setConfirmedOrder(null);
            onClose();
          }}
          className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-neutral-100 text-neutral-muted hover:text-neutral-dark hover:bg-neutral-200 transition-all duration-300"
          aria-label="Close checkout"
        >
          <X className="w-5 h-5 stroke-[2]" />
        </button>

        {confirmedOrder ? (
          /* ORDER CONFIRMATION RECEIPT */
          <div className="py-8 text-center space-y-6 animate-fadeIn font-sans">
            <div className="w-16 h-16 rounded-full bg-purple-100 text-accent p-4 mx-auto shadow-md flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 stroke-[2]" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-accent uppercase tracking-widest bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
                Order Confirmed
              </span>
              <h3 className="font-serif text-3xl font-bold text-neutral-dark">
                Thank You, {confirmedOrder.customerName}!
              </h3>
              <p className="text-xs text-neutral-muted">
                Order Reference: <span className="font-bold text-neutral-dark">{confirmedOrder.id}</span>
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-200 text-left space-y-4 text-xs shadow-sm">
              <div className="flex justify-between border-b border-neutral-100 pb-3 font-semibold">
                <span>Delivery To</span>
                <span className="text-neutral-dark">{confirmedOrder.address}</span>
              </div>
              <div className="flex justify-between border-b border-neutral-100 pb-3">
                <span>Phone / WhatsApp</span>
                <span className="font-bold text-neutral-dark">{confirmedOrder.phone}</span>
              </div>
              <div className="flex justify-between border-b border-neutral-100 pb-3">
                <span>Payment Mode</span>
                <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {confirmedOrder.paymentMethod === "COD" ? "Cash On Delivery" : "UPI Online"}
                </span>
              </div>

              <div className="pt-2 space-y-2">
                <span className="font-bold uppercase tracking-wider text-[11px] text-neutral-muted block">
                  Items Ordered
                </span>
                {confirmedOrder.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between text-neutral-dark">
                    <span>{item.quantity}x {item.name}</span>
                    <span className="font-montserrat font-bold tabular-nums">₹{item.total.toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-neutral-200 flex justify-between font-bold text-sm text-neutral-dark">
                <span>Total Amount Paid/Due</span>
                <span className="font-montserrat text-accent text-lg tabular-nums">₹{confirmedOrder.finalTotal.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-6 rounded-full bg-emerald-600 text-white font-bold text-xs tracking-widest uppercase hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Order Receipt to WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setConfirmedOrder(null);
                  onClose();
                }}
                className="py-3.5 px-6 rounded-full bg-neutral-100 text-neutral-dark hover:bg-neutral-200 font-bold text-xs tracking-widest uppercase transition-all"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* GUEST CHECKOUT FORM */
          <div className="space-y-6">
            <div className="space-y-2 border-b border-neutral-200/80 pb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-accent text-[11px] font-sans font-bold tracking-widest uppercase border border-purple-200/80">
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>EXPRESS GUEST CHECKOUT</span>
              </div>
              <h3 className="font-serif text-3xl font-bold text-neutral-dark">
                Delivery Details
              </h3>
              <p className="text-xs text-neutral-muted font-sans font-light">
                No account required! Fill in your delivery details below to place your order.
              </p>
            </div>

            {cart.length === 0 ? (
              <div className="py-8 text-center text-neutral-muted text-sm">
                Your cart is empty. Add beverages before checking out!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-xs font-sans">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-neutral-dark font-bold mb-1.5 uppercase tracking-wider text-[11px]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-200 text-neutral-dark placeholder:text-neutral-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-dark font-bold mb-1.5 uppercase tracking-wider text-[11px]">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-200 text-neutral-dark placeholder:text-neutral-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-neutral-dark font-bold mb-1.5 uppercase tracking-wider text-[11px]">
                    Delivery Address (House/Building, Street) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Flat 302, Green Valley Apartments, Main Street"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-200 text-neutral-dark placeholder:text-neutral-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all shadow-sm"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-neutral-dark font-bold mb-1.5 uppercase tracking-wider text-[11px]">
                      City / Area *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Kochi"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-200 text-neutral-dark placeholder:text-neutral-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-dark font-bold mb-1.5 uppercase tracking-wider text-[11px]">
                      Pincode *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="682030"
                      value={formData.pincode}
                      onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-200 text-neutral-dark placeholder:text-neutral-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all shadow-sm"
                    />
                  </div>
                </div>

                {/* PAYMENT METHOD SELECTOR */}
                <div className="space-y-2 pt-2">
                  <label className="block text-neutral-dark font-bold uppercase tracking-wider text-[11px]">
                    Payment Option *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, paymentMethod: "COD" })}
                      className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                        formData.paymentMethod === "COD"
                          ? "border-accent bg-purple-50/50 ring-1 ring-accent"
                          : "border-neutral-200 bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Truck className="w-4 h-4 text-accent" />
                        <span className="font-bold text-xs">Cash on Delivery</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, paymentMethod: "UPI" })}
                      className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                        formData.paymentMethod === "UPI"
                          ? "border-accent bg-purple-50/50 ring-1 ring-accent"
                          : "border-neutral-200 bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4 text-accent" />
                        <span className="font-bold text-xs">UPI / GPay / PhonePe</span>
                      </div>
                    </button>
                  </div>
                </div>

                {/* ORDER SUMMARY BANNER */}
                <div className="bg-white p-4 rounded-xl border border-neutral-200/80 flex items-center justify-between font-sans">
                  <div>
                    <span className="text-neutral-muted text-[11px] block">Order Total ({cart.length} items)</span>
                    <span className="font-serif text-xl font-bold text-neutral-dark">
                      ₹{finalTotal.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-emerald-600 text-xs font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Free Cold Shipping</span>
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full bg-accent hover:bg-accent-light text-white font-sans font-bold text-xs tracking-widest uppercase hover:shadow-lg transition-all flex items-center justify-center gap-2.5 shadow-md active:scale-95 disabled:opacity-50"
                  >
                    <span>{isSubmitting ? "Processing Order..." : `Place Order • ₹${finalTotal.toFixed(2)}`}</span>
                    <ArrowRight className="w-4 h-4 stroke-[2]" />
                  </button>
                </div>

              </form>
            )}

          </div>
        )}

      </div>
    </div>
  );
}
