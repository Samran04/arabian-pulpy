"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Plus, Minus, ShoppingBag, Sparkles } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function QuickViewModal({ flavor, onClose }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!flavor) return null;

  const handleAdd = () => {
    addToCart(flavor, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#FDFBF9] border border-neutral-border rounded-3xl p-6 sm:p-10 text-neutral-dark shadow-2xl max-h-[90vh] overflow-y-auto">
        
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-neutral-100 text-neutral-muted hover:text-neutral-dark hover:bg-neutral-200 transition-all duration-300"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 stroke-[2]" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* IMAGE PREVIEW */}
          <div className="md:col-span-5 relative aspect-square bg-gradient-to-br from-[#FAF6F0] via-[#F3EBE0] to-[#E9DFD0] rounded-2xl p-6 flex items-center justify-center overflow-hidden border border-neutral-200/80 shadow-inner group">
            <div
              className="absolute inset-0 opacity-20 blur-xl rounded-2xl"
              style={{ backgroundColor: flavor.borderColor || '#9456B7' }}
            />
            <Image
              src={flavor.image}
              alt={flavor.name}
              fill
              sizes="(max-width: 768px) 100vw, 300px"
              className="object-contain p-4 relative z-10 drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* DETAILS */}
          <div className="md:col-span-7 space-y-5">
            
            <div className="space-y-1.5">
              <span className="text-xs text-accent font-sans uppercase font-bold tracking-widest">
                {flavor.category}
              </span>
              
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-dark">
                {flavor.name}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-muted font-sans font-light">
                {flavor.tagline}
              </p>
            </div>

            {/* PRICE */}
            <div className="flex items-center gap-4 py-2.5 border-y border-neutral-200/80">
              <span className="font-montserrat text-2xl font-bold text-neutral-dark tabular-nums">
                ₹{flavor.price.toFixed(2)}
              </span>
              <span className="text-[11px] font-sans text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 font-medium">
                In Stock
              </span>
            </div>

            <p className="text-xs sm:text-sm text-neutral-muted font-sans leading-relaxed font-light">
              {flavor.description}
            </p>

            {/* TASTING NOTES */}
            {flavor.tastingNotes && flavor.tastingNotes.length > 0 && (
              <div className="space-y-2.5 pt-1">
                <h4 className="text-xs font-bold text-neutral-dark uppercase tracking-widest font-sans flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-accent" />
                  <span>Tasting Profile</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {flavor.tastingNotes.map((note, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-purple-50/80 border border-purple-200/80 text-accent text-[11px] font-sans font-semibold rounded-full shadow-sm"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* QUANTITY & ADD TO CART */}
            <div className="flex items-center gap-4 pt-4 border-t border-neutral-200/80">
              <div className="flex items-center border border-neutral-300 rounded-full bg-white px-3 py-1.5 shadow-sm">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-1 text-neutral-muted hover:text-accent transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5 stroke-[2]" />
                </button>
                <span className="w-8 text-center font-sans font-bold text-sm text-neutral-dark">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-1 text-neutral-muted hover:text-accent transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5 stroke-[2]" />
                </button>
              </div>

              <button
                onClick={handleAdd}
                disabled={flavor.inStock === false || flavor.stock === 0}
                className={`flex-1 py-3.5 px-6 font-sans font-bold text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2.5 rounded-full shadow-md ${
                  flavor.inStock === false || flavor.stock === 0
                    ? "bg-neutral-200 text-neutral-400 cursor-not-allowed"
                    : "bg-accent text-white hover:bg-accent-light hover:shadow-lg active:scale-95"
                }`}
              >
                <ShoppingBag className="w-4 h-4 stroke-[2]" />
                <span>
                  {flavor.inStock === false || flavor.stock === 0
                    ? "Out of Stock"
                    : `Add To Cart • ₹${(flavor.price * quantity).toFixed(2)}`}
                </span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
