"use client";

import React, { useState } from "react";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";
import ArabianLogo from "./ArabianLogo";

export default function Header({ onOpenSearch, onOpenUserModal, onOpenDistributorModal }) {
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 bg-white/60 backdrop-blur-md border-b border-neutral-border/30">
      <div className="w-full max-w-7xl h-20 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* STANDALONE OFFICIAL WORDMARK LOGO */}
        <a href="#" className="flex items-center group">
          <ArabianLogo className="h-12 sm:h-[4.5rem] lg:h-[5rem] w-32 sm:w-40 lg:w-48" />
        </a>

        {/* DESKTOP NAV LINKS */}
        <nav className="hidden lg:flex items-center space-x-10 text-xs tracking-[0.2em] uppercase font-sans font-medium text-neutral-dark">
          <button
            onClick={() => scrollToSection("flavors")}
            className="hover:text-accent transition-colors py-1"
          >
            FLAVORS
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-accent transition-colors py-1"
          >
            OUR STORY
          </button>
          <button
            onClick={() => scrollToSection("flavors")}
            className="hover:text-accent transition-colors py-1"
          >
            SHOP
          </button>
          <button
            onClick={onOpenDistributorModal}
            className="hover:text-accent transition-colors py-1"
          >
            DISTRIBUTORS
          </button>
          <button
            onClick={() => scrollToSection("footer")}
            className="hover:text-accent transition-colors py-1"
          >
            CONTACT
          </button>
        </nav>

        {/* ACTION BUTTONS */}
        <div className="flex items-center space-x-5 text-neutral-dark">
          <button
            onClick={onOpenSearch}
            aria-label="Search"
            className="hover:text-accent transition-colors duration-300"
          >
            <Search className="w-4 h-4 stroke-[1.5]" />
          </button>

          <button
            onClick={onOpenUserModal}
            aria-label="User Account"
            className="hover:text-accent transition-colors duration-300"
          >
            <User className="w-4 h-4 stroke-[1.5]" />
          </button>

          <button
            onClick={() => setIsCartOpen(true)}
            aria-label="Cart"
            className="relative hover:text-accent transition-colors duration-300 flex items-center gap-1.5"
          >
            <ShoppingBag className="w-4 h-4 stroke-[1.5]" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-accent text-white font-bold text-[9px] rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-dark hover:text-accent transition-all"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 stroke-[1.5]" /> : <Menu className="w-6 h-6 stroke-[1.5]" />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-primary border-b border-neutral-border px-6 py-6 space-y-4 animate-fadeIn shadow-lg">
          <button
            onClick={() => scrollToSection("flavors")}
            className="block w-full text-left text-sm font-sans tracking-widest text-neutral-dark hover:text-accent py-2"
          >
            FLAVORS
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="block w-full text-left text-sm font-sans tracking-widest text-neutral-dark hover:text-accent py-2"
          >
            OUR STORY
          </button>
          <button
            onClick={() => scrollToSection("flavors")}
            className="block w-full text-left text-sm font-sans tracking-widest text-neutral-dark hover:text-accent py-2"
          >
            SHOP
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenDistributorModal();
            }}
            className="block w-full text-left text-sm font-sans tracking-widest text-neutral-dark hover:text-accent py-2"
          >
            DISTRIBUTORS
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="block w-full text-left text-sm font-sans tracking-widest text-neutral-dark hover:text-accent py-2"
          >
            ABOUT
          </button>
        </div>
      )}
    </header>
  );
}
