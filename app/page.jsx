"use client";

import React, { useState } from "react";
import Header from "../src/components/Header";
import Hero from "../src/components/Hero";
import FlavorsSection from "../src/components/FlavorsSection";
import RefreshmentBanner from "../src/components/RefreshmentBanner";
import ValueProps from "../src/components/ValueProps";
import CommunityBlog from "../src/components/CommunityBlog";
import Footer from "../src/components/Footer";
import QuickViewModal from "../src/components/QuickViewModal";
import CartDrawer from "../src/components/CartDrawer";
import SearchModal from "../src/components/SearchModal";
import UserModal from "../src/components/UserModal";
import DistributorModal from "../src/components/DistributorModal";
import { useCart } from "../src/context/CartContext";
import { Sparkles } from "lucide-react";

export default function Home() {
  const [selectedFlavor, setSelectedFlavor] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [userModalOpen, setUserModalOpen] = useState(false);
  const [distributorModalOpen, setDistributorModalOpen] = useState(false);

  const { toastMessage } = useCart();

  const scrollToFlavors = () => {
    const el = document.getElementById("flavors");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-[#12081d] text-gray-100 flex flex-col relative selection:bg-[#e3be5a] selection:text-[#12081d]">
      
      {/* TOAST NOTIFICATION FLOATER */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-2xl bg-[#e3be5a] text-[#12081d] font-sans font-bold text-xs tracking-wider shadow-gold-glow flex items-center gap-2 animate-fadeIn">
          <Sparkles className="w-4 h-4 fill-[#12081d]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* HEADER */}
      <Header
        onOpenSearch={() => setSearchOpen(true)}
        onOpenUserModal={() => setUserModalOpen(true)}
        onOpenDistributorModal={() => setDistributorModalOpen(true)}
      />

      {/* HERO SECTION */}
      <Hero onExploreClick={scrollToFlavors} />

      {/* FLAVORS GRID SECTION */}
      <FlavorsSection onSelectFlavor={(flavor) => setSelectedFlavor(flavor)} />

      {/* REFRESHMENT HIGHLIGHT BANNER */}
      <RefreshmentBanner />

      {/* VALUE PROPOSITION BADGES */}
      <ValueProps />

      {/* ARABIAN COMMUNITY & BLOG */}
      <CommunityBlog />

      {/* FOOTER */}
      <Footer onOpenDistributorModal={() => setDistributorModalOpen(true)} />

      {/* OVERLAY MODALS & DRAWERS */}
      <CartDrawer />

      <QuickViewModal
        flavor={selectedFlavor}
        onClose={() => setSelectedFlavor(null)}
      />

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectFlavor={(flavor) => setSelectedFlavor(flavor)}
      />

      <UserModal
        isOpen={userModalOpen}
        onClose={() => setUserModalOpen(false)}
      />

      <DistributorModal
        isOpen={distributorModalOpen}
        onClose={() => setDistributorModalOpen(false)}
      />

    </main>
  );
}
