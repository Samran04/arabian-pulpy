"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Star, Plus, Minus, ShoppingBag, Check } from "lucide-react";
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#160a25] border border-[#e3be5a]/30 rounded-3xl p-6 sm:p-8 text-gray-200 shadow-2xl max-h-[90vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-2.5 rounded-full bg-[#25103a] hover:bg-[#e3be5a] text-gray-300 hover:text-[#12081d] border border-[#e3be5a]/20 transition-all duration-300"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* IMAGE PREVIEW */}
          <div className="md:col-span-5 relative aspect-square bg-gradient-to-b from-[#200d34] to-[#12081d] rounded-2xl border border-[#e3be5a]/20 p-4 flex items-center justify-center overflow-hidden">
            <div
              className="absolute inset-0 opacity-50 blur-2xl rounded-2xl"
              style={{ backgroundColor: flavor.borderColor }}
            />
            <Image
              src={flavor.image}
              alt={flavor.name}
              fill
              className="object-contain p-4 relative z-10 drop-shadow-2xl"
            />
          </div>

          {/* DETAILS */}
          <div className="md:col-span-7 space-y-4">
            
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#25103a] text-[#f5d77f] text-[10px] font-sans font-bold border border-[#e3be5a]/40 shadow-gold-glow">
                  {flavor.badge}
                </span>
                <span className="text-xs text-gray-400 font-sans">{flavor.category}</span>
              </div>
              
              <h3 className="font-serif text-3xl font-bold text-white">
                {flavor.name}
              </h3>
              <p className="text-xs text-[#e3be5a] font-sans font-medium italic">
                {flavor.tagline}
              </p>
            </div>

            <div className="flex items-center gap-4 py-1">
              <span className="font-sans text-2xl font-extrabold text-[#e3be5a]">
                ${flavor.price.toFixed(2)}
              </span>
              <div className="flex items-center gap-1 bg-[#200d34] px-3 py-1 rounded-lg border border-[#e3be5a]/20">
                <Star className="w-4 h-4 fill-[#e3be5a] text-[#e3be5a]" />
                <span className="text-xs font-bold text-white">{flavor.rating}</span>
                <span className="text-[10px] text-gray-400">({flavor.reviewsCount} reviews)</span>
              </div>
            </div>

            <p className="text-xs text-gray-300 font-sans leading-relaxed font-light">
              {flavor.description}
            </p>

            {/* TASTING NOTES */}
            <div className="space-y-1.5 pt-1">
              <h4 className="text-xs font-bold text-gray-200 uppercase tracking-wider font-sans">
                Tasting Profile:
              </h4>
              <div className="flex flex-wrap gap-2">
                {flavor.tastingNotes.map((note, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-[#200d34] border border-[#e3be5a]/20 text-gray-300 text-[11px] font-sans"
                  >
                    • {note}
                  </span>
                ))}
              </div>
            </div>

            {/* NUTRITION & SPECS */}
            <div className="grid grid-cols-4 gap-2 pt-2 text-center bg-[#200d34] p-3 rounded-xl border border-[#e3be5a]/20">
              <div>
                <span className="block text-[10px] text-gray-400 uppercase font-sans">Calories</span>
                <span className="text-xs font-bold text-white font-sans">{flavor.nutrition.calories}</span>
              </div>
              <div>
                <span className="block text-[10px] text-gray-400 uppercase font-sans">Real Pulp</span>
                <span className="text-xs font-bold text-[#e3be5a] font-sans">{flavor.nutrition.fruitPulp}</span>
              </div>
              <div>
                <span className="block text-[10px] text-gray-400 uppercase font-sans">Serving</span>
                <span className="text-xs font-bold text-white font-sans">{flavor.nutrition.servings}</span>
              </div>
              <div>
                <span className="block text-[10px] text-gray-400 uppercase font-sans">Vit C</span>
                <span className="text-xs font-bold text-white font-sans">{flavor.nutrition.vitaminC}</span>
              </div>
            </div>

            {/* QUANTITY & ADD TO CART */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center border border-[#e3be5a]/30 rounded-xl bg-[#200d34] p-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-1.5 hover:bg-[#391552] text-gray-300 hover:text-white rounded-lg transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 font-sans font-bold text-sm text-white">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-1.5 hover:bg-[#391552] text-gray-300 hover:text-white rounded-lg transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={handleAdd}
                className="flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#e3be5a] via-[#f5d77f] to-[#b8902c] text-[#12081d] font-sans font-bold text-xs tracking-wider uppercase hover:scale-[1.02] transition-all shadow-gold-glow flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4 text-[#12081d]" />
                ADD TO CART (${(flavor.price * quantity).toFixed(2)})
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
