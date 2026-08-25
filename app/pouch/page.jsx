"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, 
  ShoppingBag, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Truck, 
  RefreshCw, 
  Heart, 
  Star,
  Plus,
  Minus,
  Check,
  Award,
  Droplets,
  PackageCheck,
  Feather
} from "lucide-react";
import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import CartDrawer from "../../src/components/CartDrawer";
import SearchModal from "../../src/components/SearchModal";
import UserModal from "../../src/components/UserModal";
import DistributorModal from "../../src/components/DistributorModal";
import QuickViewModal from "../../src/components/QuickViewModal";
import FadeInView from "../../src/components/FadeInView";
import { useCart } from "../../src/context/CartContext";
import { FLAVORS_DATA } from "../../src/data/flavors";

export default function PouchDetailsPage() {
  const pouchFlavor = FLAVORS_DATA.find((f) => f.id === "grape-pouch") || {
    id: "grape-pouch",
    name: "Grape Pouch (2.5L)",
    tagline: "Share the Joy",
    price: 18.99,
    rating: 5.0,
    reviewsCount: 204,
    image: "/assets/grape-pouch.png",
    description: "Our signature Pulpy Grape in a family-sized 2.5L pouch. Crafted with real fruit pulp and natural richness, perfect for family gatherings, celebrations, and everyday luxury refreshment.",
    tastingNotes: ["Rich Concord Grape", "Authentic Sweetness", "Deep Velvet Aroma"],
    ingredients: "Black Concord Grape Pulp, Purified Water, Fruit Sugars, Vitamin C.",
    nutrition: {
      calories: "120 kcal",
      servings: "250 ml (10 Servings)",
      fruitPulp: "85%",
      vitaminC: "100% DV",
    },
  };

  const { addToCart, toastMessage } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState("2.5L Pouch");
  
  // Modals state
  const [searchOpen, setSearchOpen] = useState(false);
  const [userModalOpen, setUserModalOpen] = useState(false);
  const [distributorModalOpen, setDistributorModalOpen] = useState(false);
  const [selectedFlavorModal, setSelectedFlavorModal] = useState(null);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(pouchFlavor);
    }
  };

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  return (
    <main className="min-h-screen bg-[#FDFBF9] text-neutral-dark flex flex-col relative selection:bg-accent selection:text-white">
      
      {/* TOAST NOTIFICATION */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-2xl bg-accent text-white font-sans font-bold text-xs tracking-wider shadow-xl flex items-center gap-2 animate-fadeIn">
          <Sparkles className="w-4 h-4 fill-white" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* HEADER */}
      <Header
        onOpenSearch={() => setSearchOpen(true)}
        onOpenUserModal={() => setUserModalOpen(true)}
        onOpenDistributorModal={() => setDistributorModalOpen(true)}
      />

      {/* BREADCRUMB & BACK NAV */}
      <div className="pt-28 lg:pt-36 pb-6 bg-[#F8F5F0] border-b border-neutral-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-xs font-sans font-semibold tracking-widest uppercase text-neutral-dark/70 hover:text-accent transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </Link>

            <div className="hidden sm:flex items-center gap-2 text-xs font-sans text-neutral-muted">
              <Link href="/" className="hover:text-accent">Home</Link>
              <span>/</span>
              <span className="hover:text-accent">Shop</span>
              <span>/</span>
              <span className="text-neutral-dark font-medium">Pulpy Grape Pouch 2.5L</span>
            </div>
          </div>
        </div>
      </div>

      {/* PRODUCT DETAILS HERO SECTION */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* LEFT: GALLERY & PRODUCT IMAGE DISPLAY */}
            <div className="lg:col-span-7 space-y-6">
              <FadeInView>
                <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-3xl bg-gradient-to-br from-[#FAF6F0] via-[#F3EBE0] to-[#E9DFD0] overflow-hidden border border-neutral-200/80 shadow-xl flex items-center justify-center p-8 sm:p-12 group">
                  
                  {/* Luxury Background Glow */}
                  <div className="absolute inset-0 bg-radial from-purple-500/10 via-transparent to-transparent opacity-60 pointer-events-none" />
                  
                  {/* Badge */}
                  <div className="absolute top-6 left-6 z-10 flex flex-col gap-2">
                    <span className="px-3.5 py-1.5 rounded-full bg-accent text-white font-sans text-[10px] font-bold tracking-widest uppercase shadow-md">
                      FAMILY SIZE 2.5L
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-neutral-dark font-sans text-[10px] font-semibold tracking-wider uppercase border border-neutral-200">
                      Signature Edition
                    </span>
                  </div>

                  <button 
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className="absolute top-6 right-6 z-10 p-3 rounded-full bg-white/90 backdrop-blur-md shadow-md text-neutral-dark hover:text-accent transition-all duration-300"
                    aria-label="Wishlist"
                  >
                    <Heart className={`w-5 h-5 ${isWishlisted ? "fill-accent text-accent" : ""}`} />
                  </button>

                  <div className="relative w-full h-full max-w-[420px] mx-auto transform group-hover:scale-105 transition-transform duration-700">
                    <Image
                      src={pouchFlavor.image}
                      alt={pouchFlavor.name}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>
              </FadeInView>

              {/* THREE BENEFIT HIGHLIGHT CARDS BELOW GALLERY */}
              <div className="grid grid-cols-3 gap-4 pt-2">
                <div className="bg-white p-4 rounded-2xl border border-neutral-200/70 text-center space-y-1.5 shadow-sm">
                  <PackageCheck className="w-5 h-5 text-accent mx-auto" />
                  <h4 className="text-xs font-bold font-sans tracking-wide">2.5L Capacity</h4>
                  <p className="text-[11px] text-neutral-muted">Serves 10+ cups</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-neutral-200/70 text-center space-y-1.5 shadow-sm">
                  <Droplets className="w-5 h-5 text-accent mx-auto" />
                  <h4 className="text-xs font-bold font-sans tracking-wide">Real Pulp</h4>
                  <p className="text-[11px] text-neutral-muted">Handpicked grapes</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-neutral-200/70 text-center space-y-1.5 shadow-sm">
                  <Award className="w-5 h-5 text-accent mx-auto" />
                  <h4 className="text-xs font-bold font-sans tracking-wide">Spout Cap</h4>
                  <p className="text-[11px] text-neutral-muted">Locks freshness in</p>
                </div>
              </div>
            </div>

            {/* RIGHT: PRODUCT INFO & PURCHASE CONTROLS */}
            <div className="lg:col-span-5 space-y-8">
              <FadeInView>
                <div className="space-y-4 border-b border-neutral-200 pb-6">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs font-sans font-bold text-neutral-dark">5.0</span>
                    <span className="text-xs text-neutral-muted font-sans">(204 Verified Reviews)</span>
                  </div>

                  <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-dark leading-tight">
                    Pulpy Grape <br />
                    <span className="italic font-light text-accent">Pouch (2.5 Litres)</span>
                  </h1>

                  <p className="text-sm text-neutral-muted font-sans font-light leading-relaxed">
                    Designed for family tables, celebrations, and sharing authentic Arabian refreshment. Packed with rich Concord grape pulp and crafted without artificial preservatives.
                  </p>

                  <div className="flex items-baseline gap-4 pt-2">
                    <span className="font-montserrat text-3xl font-bold text-neutral-dark tabular-nums">
                      ₹{pouchFlavor.price.toFixed(2)}
                    </span>
                    <span className="text-xs font-sans font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      In Stock • Ready for Delivery
                    </span>
                  </div>
                </div>

                {/* SELECT VARIANT / SIZE */}
                <div className="space-y-3 pt-2">
                  <label className="text-xs font-sans font-bold uppercase tracking-widest text-neutral-dark">
                    Pack Size:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setSelectedVariant("2.5L Pouch")}
                      className={`p-3.5 rounded-xl border text-left flex flex-col gap-1 transition-all ${
                        selectedVariant === "2.5L Pouch"
                          ? "border-accent bg-purple-50/50 ring-1 ring-accent"
                          : "border-neutral-200 hover:border-neutral-300 bg-white"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold font-sans">Single 2.5L Pouch</span>
                        {selectedVariant === "2.5L Pouch" && <Check className="w-4 h-4 text-accent" />}
                      </div>
                      <span className="text-[11px] text-neutral-muted">₹18.99 / pouch</span>
                    </button>

                    <button
                      onClick={() => setSelectedVariant("Twin Pack (2 x 2.5L)")}
                      className={`p-3.5 rounded-xl border text-left flex flex-col gap-1 transition-all ${
                        selectedVariant === "Twin Pack (2 x 2.5L)"
                          ? "border-accent bg-purple-50/50 ring-1 ring-accent"
                          : "border-neutral-200 hover:border-neutral-300 bg-white"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold font-sans">Twin Pack (2 Pouches)</span>
                        <span className="text-[9px] font-bold text-accent bg-purple-100 px-1.5 py-0.5 rounded">SAVE 10%</span>
                      </div>
                      <span className="text-[11px] text-neutral-muted">₹33.99 / pack</span>
                    </button>
                  </div>
                </div>

                {/* QUANTITY & ADD TO CART */}
                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-neutral-300 rounded-full bg-white px-3 py-1.5">
                      <button 
                        onClick={() => handleQuantityChange(-1)}
                        className="p-1 hover:text-accent transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-10 text-center font-sans font-bold text-sm">
                        {quantity}
                      </span>
                      <button 
                        onClick={() => handleQuantityChange(1)}
                        className="p-1 hover:text-accent transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <button
                      onClick={handleAddToCart}
                      className="flex-1 py-3.5 px-6 rounded-full bg-accent text-white font-sans text-xs font-bold tracking-[0.15em] uppercase hover:bg-accent-light transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add To Cart • ₹{(pouchFlavor.price * quantity).toFixed(2)}</span>
                    </button>
                  </div>
                </div>

                {/* HIGHLIGHTED GUARANTEES */}
                <div className="pt-6 border-t border-neutral-200 grid grid-cols-2 gap-4 text-xs font-sans text-neutral-muted">
                  <div className="flex items-center gap-2.5">
                    <Truck className="w-4 h-4 text-accent" />
                    <span>Free express cold delivery</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-accent" />
                    <span>100% Quality & Freshness Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <RefreshCw className="w-4 h-4 text-accent" />
                    <span>Resealable spout cap for extended life</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Feather className="w-4 h-4 text-accent" />
                    <span>Eco-conscious recyclable packaging</span>
                  </div>
                </div>
              </FadeInView>
            </div>

          </div>
        </div>
      </section>

      {/* DETAILED TABS & PRODUCT INFORMATION */}
      <section className="py-16 bg-[#F8F5F0] border-t border-b border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* TAB HEADER NAV */}
          <div className="flex justify-center border-b border-neutral-200/80 mb-12 overflow-x-auto">
            <div className="flex gap-8 sm:gap-12">
              {[
                { id: "description", label: "Tasting Profile & Story" },
                { id: "nutrition", label: "Ingredients & Nutrition" },
                { id: "serving", label: "Serving & Storage Guide" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-4 font-sans text-xs sm:text-sm font-bold tracking-widest uppercase transition-all relative ${
                    activeTab === tab.id
                      ? "text-accent border-b-2 border-accent"
                      : "text-neutral-muted hover:text-neutral-dark"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* TAB CONTENTS */}
          <div className="max-w-4xl mx-auto">
            {activeTab === "description" && (
              <div className="space-y-8 animate-fadeIn">
                <div className="text-center space-y-3">
                  <h3 className="font-serif text-3xl font-bold text-neutral-dark">
                    Rich Concord Grape Flavor Profile
                  </h3>
                  <p className="text-neutral-muted font-sans text-sm max-w-2xl mx-auto leading-relaxed">
                    Crafted to capture the essence of sun-ripened Arabian vineyards. Every pour delivers thick, velvety fruit texture combined with a smooth balance of natural sweetness and subtle tartness.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                  {pouchFlavor.tastingNotes.map((note, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl border border-neutral-200/80 text-center space-y-2 shadow-sm">
                      <Sparkles className="w-5 h-5 text-accent mx-auto" />
                      <h4 className="font-serif font-bold text-lg text-neutral-dark">{note}</h4>
                      <p className="text-xs text-neutral-muted">Extracted carefully from fresh fruit harvests.</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "nutrition" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center animate-fadeIn">
                <div className="bg-white p-8 rounded-3xl border border-neutral-200/80 space-y-4 shadow-sm">
                  <h4 className="font-serif font-bold text-xl text-neutral-dark">Ingredients</h4>
                  <p className="text-sm font-sans text-neutral-muted leading-relaxed">
                    {pouchFlavor.ingredients}
                  </p>
                  <div className="pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs font-semibold text-accent">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>0% Artificial Colors • 0% Chemical Preservatives</span>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-3xl border border-neutral-200/80 space-y-4 shadow-sm">
                  <h4 className="font-serif font-bold text-xl text-neutral-dark">Nutrition Facts (Per 250ml)</h4>
                  <div className="space-y-3 text-xs font-sans">
                    <div className="flex justify-between py-2 border-b border-neutral-100">
                      <span className="text-neutral-muted">Calories</span>
                      <span className="font-bold text-neutral-dark">{pouchFlavor.nutrition.calories}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-neutral-100">
                      <span className="text-neutral-muted">Real Fruit Pulp Content</span>
                      <span className="font-bold text-neutral-dark">{pouchFlavor.nutrition.fruitPulp}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-neutral-100">
                      <span className="text-neutral-muted">Vitamin C</span>
                      <span className="font-bold text-neutral-dark">{pouchFlavor.nutrition.vitaminC}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-neutral-muted">Servings Per Pouch</span>
                      <span className="font-bold text-neutral-dark">10 Servings (2.5L Total)</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "serving" && (
              <div className="bg-white p-8 sm:p-12 rounded-3xl border border-neutral-200/80 space-y-6 shadow-sm animate-fadeIn">
                <h3 className="font-serif text-2xl font-bold text-neutral-dark text-center">
                  How to Serve & Enjoy Your Pouch
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                  <div className="space-y-2 text-center">
                    <div className="w-10 h-10 rounded-full bg-purple-100 text-accent font-bold font-sans flex items-center justify-center mx-auto text-sm">1</div>
                    <h4 className="font-bold text-sm font-sans">Serve Ice Cold</h4>
                    <p className="text-xs text-neutral-muted leading-relaxed">Chill in the refrigerator before pouring over crushed ice for maximum refreshment.</p>
                  </div>
                  <div className="space-y-2 text-center">
                    <div className="w-10 h-10 rounded-full bg-purple-100 text-accent font-bold font-sans flex items-center justify-center mx-auto text-sm">2</div>
                    <h4 className="font-bold text-sm font-sans">Shake Before Pouring</h4>
                    <p className="text-xs text-neutral-muted leading-relaxed">Give the pouch a light shake so the real fruit pulp distributes evenly.</p>
                  </div>
                  <div className="space-y-2 text-center">
                    <div className="w-10 h-10 rounded-full bg-purple-100 text-accent font-bold font-sans flex items-center justify-center mx-auto text-sm">3</div>
                    <h4 className="font-bold text-sm font-sans">Reseal & Store</h4>
                    <p className="text-xs text-neutral-muted leading-relaxed">Tightly close the spout cap and refrigerate. Consumable within 7 days of opening.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* OTHER FLAVORS SUGGESTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-sans tracking-widest uppercase text-accent font-bold">Discover More</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-dark">
              You Might Also Love
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {FLAVORS_DATA.filter((f) => f.id !== "grape-pouch").slice(0, 3).map((flavor) => (
              <div 
                key={flavor.id}
                onClick={() => setSelectedFlavorModal(flavor)}
                className="group cursor-pointer bg-gradient-to-br from-[#FAF6F0] to-[#F3EBE0] p-6 rounded-3xl border border-neutral-200/80 hover:shadow-xl transition-all duration-300 space-y-4"
              >
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden flex items-center justify-center p-6">
                  <Image
                    src={flavor.image}
                    alt={flavor.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-1 text-center">
                  <h3 className="font-serif font-bold text-xl text-neutral-dark">{flavor.name}</h3>
                  <p className="text-xs text-neutral-muted font-sans">{flavor.tagline}</p>
                  <p className="font-montserrat font-bold text-lg text-accent pt-2 tabular-nums">₹{flavor.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer onOpenDistributorModal={() => setDistributorModalOpen(true)} />

      {/* CART DRAWER */}
      <CartDrawer />

      {/* SEARCH MODAL */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        flavors={FLAVORS_DATA}
        onSelectFlavor={(f) => setSelectedFlavorModal(f)}
      />

      {/* USER MODAL */}
      <UserModal
        isOpen={userModalOpen}
        onClose={() => setUserModalOpen(false)}
      />

      {/* DISTRIBUTOR MODAL */}
      <DistributorModal
        isOpen={distributorModalOpen}
        onClose={() => setDistributorModalOpen(false)}
      />

      {/* QUICK VIEW MODAL */}
      {selectedFlavorModal && (
        <QuickViewModal
          flavor={selectedFlavorModal}
          onClose={() => setSelectedFlavorModal(null)}
        />
      )}

    </main>
  );
}
