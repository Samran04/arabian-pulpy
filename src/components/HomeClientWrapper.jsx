"use client";

import React, { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import FlavorsSection from "./FlavorsSection";
import RefreshmentBanner from "./RefreshmentBanner";
import ValueProps from "./ValueProps";
import CommunityBlog from "./CommunityBlog";
import Footer from "./Footer";
import QuickViewModal from "./QuickViewModal";
import CartDrawer from "./CartDrawer";
import SearchModal from "./SearchModal";
import UserModal from "./UserModal";
import DistributorModal from "./DistributorModal";
import { useCart } from "../context/CartContext";
import { Sparkles } from "lucide-react";

export default function HomeClientWrapper({ initialFlavors, initialValueProps }) {
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
    <main className="min-h-screen bg-primary-deep text-gray-100 flex flex-col relative selection:bg-accent selection:text-white">
      
      {/* TOAST NOTIFICATION FLOATER */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-2xl bg-accent text-white font-sans font-bold text-xs tracking-wider shadow-sm flex items-center gap-2 animate-fadeIn">
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

      {/* HERO SECTION */}
      <Hero onExploreClick={scrollToFlavors} />

      {/* FLAVORS GRID SECTION */}
      <FlavorsSection onSelectFlavor={(flavor) => setSelectedFlavor(flavor)} flavors={initialFlavors} />

      {/* REFRESHMENT HIGHLIGHT BANNER */}
      <RefreshmentBanner />

      {/* VALUE PROPOSITION BADGES */}
      <ValueProps propsData={initialValueProps} />

      {/* ARABIAN COMMUNITY & BLOG (STORY) */}
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
        flavors={initialFlavors}
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
