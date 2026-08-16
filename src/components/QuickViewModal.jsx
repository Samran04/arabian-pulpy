"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Star, Plus, Minus, ShoppingBag } from "lucide-react";
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary-dark/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-primary border border-primary-light/30 rounded-lg p-8 sm:p-10 text-neutral-offwhite shadow-2xl max-h-[90vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-2 text-neutral-muted hover:text-accent transition-colors duration-300"
        >
          <X className="w-5 h-5 stroke-[1.5]" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          
          {/* IMAGE PREVIEW */}
          <div className="md:col-span-5 relative aspect-square bg-primary-light/10 rounded-md p-4 flex items-center justify-center overflow-hidden">
            <div
              className="absolute inset-0 opacity-10 blur-2xl rounded-md mix-blend-screen"
              style={{ backgroundColor: flavor.borderColor || '#A78BFA' }}
            />
            <Image
              src={flavor.image}
              alt={flavor.name}
              fill
              className="object-contain p-4 relative z-10 drop-shadow-2xl"
            />
          </div>

          {/* DETAILS */}
          <div className="md:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs text-neutral-muted font-sans uppercase tracking-widest">{flavor.category}</span>
              
              <h3 className="font-serif text-3xl font-normal text-neutral-white">
                {flavor.name}
              </h3>
              <p className="text-sm text-neutral-muted font-sans font-light">
                {flavor.tagline}
              </p>
            </div>

            <div className="flex items-center gap-4 py-2 border-y border-primary-light/20">
              <span className="font-sans text-xl font-medium text-neutral-offwhite">
                ${flavor.price.toFixed(2)}
              </span>
            </div>

            <p className="text-sm text-neutral-muted font-sans leading-relaxed font-light">
              {flavor.description}
            </p>

            {/* TASTING NOTES */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-medium text-neutral-white uppercase tracking-widest font-sans">
                Tasting Profile
              </h4>
              <div className="flex flex-wrap gap-2">
                {flavor.tastingNotes.map((note, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-primary-light/20 border border-primary-light/30 text-neutral-offwhite text-[11px] uppercase tracking-wider font-sans rounded-sm"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* QUANTITY & ADD TO CART */}
            <div className="flex items-center gap-6 pt-6 border-t border-primary-light/20">
              <div className="flex items-center border border-primary-light/50 rounded-md">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-neutral-muted hover:text-accent transition-colors"
                >
                  <Minus className="w-3 h-3 stroke-[2]" />
                </button>
                <span className="px-4 font-sans font-medium text-sm text-neutral-white w-6 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-neutral-muted hover:text-accent transition-colors"
                >
                  <Plus className="w-3 h-3 stroke-[2]" />
                </button>
              </div>

              <button
                onClick={handleAdd}
                className="flex-1 py-4 px-6 bg-accent/40 text-neutral-white border border-accent/50 font-sans font-bold text-xs tracking-widest uppercase hover:bg-accent/60 transition-colors flex items-center justify-center gap-3 rounded-md"
              >
                <ShoppingBag className="w-4 h-4 stroke-[2]" />
                ADD TO CART
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
