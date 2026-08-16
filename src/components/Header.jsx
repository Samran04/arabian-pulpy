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
    <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 lg:px-8 transition-all duration-300">
      <div className="w-full max-w-6xl bg-accent/30 backdrop-blur-md border border-accent-light/30 shadow-[0_8px_32px_rgba(0,0,0,0.2)] rounded-full h-16 sm:h-20 px-6 sm:px-10 flex items-center justify-between">
        
        {/* STANDALONE OFFICIAL WORDMARK LOGO */}
        <a href="#" className="flex items-center group py-1">
          <ArabianLogo className="h-9 sm:h-11 w-auto" />
        </a>

        {/* DESKTOP NAV LINKS */}
        <nav className="hidden lg:flex items-center space-x-10 text-sm tracking-[0.15em] uppercase font-sans font-medium text-neutral-offwhite/80">
          <button
            onClick={() => scrollToSection("flavors")}
            className="hover:text-neutral-white transition-colors py-1 relative hover:after:content-[''] hover:after:absolute hover:after:-bottom-1 hover:after:left-0 hover:after:w-full hover:after:h-[1px] hover:after:bg-neutral-white"
          >
            FLAVORS
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-neutral-white transition-colors py-1 relative hover:after:content-[''] hover:after:absolute hover:after:-bottom-1 hover:after:left-0 hover:after:w-full hover:after:h-[1px] hover:after:bg-neutral-white"
          >
            OUR STORY
          </button>
          <button
            onClick={() => scrollToSection("flavors")}
            className="hover:text-neutral-white transition-colors py-1 relative hover:after:content-[''] hover:after:absolute hover:after:-bottom-1 hover:after:left-0 hover:after:w-full hover:after:h-[1px] hover:after:bg-neutral-white"
          >
            SHOP
          </button>
          <button
            onClick={onOpenDistributorModal}
            className="hover:text-neutral-white transition-colors py-1 relative hover:after:content-[''] hover:after:absolute hover:after:-bottom-1 hover:after:left-0 hover:after:w-full hover:after:h-[1px] hover:after:bg-neutral-white"
          >
            DISTRIBUTORS
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-neutral-white transition-colors py-1 relative hover:after:content-[''] hover:after:absolute hover:after:-bottom-1 hover:after:left-0 hover:after:w-full hover:after:h-[1px] hover:after:bg-neutral-white"
          >
            ABOUT
          </button>
        </nav>

        {/* ACTION BUTTONS */}
        <div className="flex items-center space-x-5 text-neutral-offwhite/80">
          <button
            onClick={onOpenSearch}
            aria-label="Search"
            className="hover:text-neutral-white transition-colors duration-300"
          >
            <Search className="w-5 h-5 stroke-[1.5]" />
          </button>

          <button
            onClick={onOpenUserModal}
            aria-label="User Account"
            className="hover:text-neutral-white transition-colors duration-300"
          >
            <User className="w-5 h-5 stroke-[1.5]" />
          </button>

          <button
            onClick={() => setIsCartOpen(true)}
            aria-label="Cart"
            className="relative hover:text-neutral-white transition-colors duration-300 flex items-center gap-1.5"
          >
            <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-2 w-4 h-4 bg-neutral-white text-accent font-bold text-[9px] rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-offwhite/80 hover:text-neutral-white transition-all"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 stroke-[1.5]" /> : <Menu className="w-6 h-6 stroke-[1.5]" />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-primary border-b border-primary-light px-6 py-6 space-y-4 animate-fadeIn">
          <button
            onClick={() => scrollToSection("flavors")}
            className="block w-full text-left text-sm font-sans tracking-widest text-neutral-offwhite hover:text-accent py-2"
          >
            FLAVORS
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="block w-full text-left text-sm font-sans tracking-widest text-neutral-offwhite hover:text-accent py-2"
          >
            OUR STORY
          </button>
          <button
            onClick={() => scrollToSection("flavors")}
            className="block w-full text-left text-sm font-sans tracking-widest text-neutral-offwhite hover:text-accent py-2"
          >
            SHOP
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenDistributorModal();
            }}
            className="block w-full text-left text-sm font-sans tracking-widest text-neutral-offwhite hover:text-accent py-2"
          >
            DISTRIBUTORS
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="block w-full text-left text-sm font-sans tracking-widest text-neutral-offwhite hover:text-accent py-2"
          >
            ABOUT
          </button>
        </div>
      )}
    </header>
  );
}
