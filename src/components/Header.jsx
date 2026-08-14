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
    <header className="sticky top-0 z-40 bg-[#251738]/95 backdrop-blur-xl border-b border-[#8869AC]/40 shadow-2xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* STANDALONE OFFICIAL WORDMARK LOGO */}
        <a href="#" className="flex items-center group py-1">
          <ArabianLogo className="h-9 sm:h-11 w-auto" />
        </a>

        {/* DESKTOP NAV LINKS */}
        <nav className="hidden lg:flex items-center space-x-8 text-xs tracking-widest uppercase font-sans font-semibold text-gray-300">
          <button
            onClick={() => scrollToSection("hero")}
            className="hover:text-[#e3be5a] transition-colors py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-[#e3be5a]"
          >
            HOME
          </button>
          <button
            onClick={() => scrollToSection("flavors")}
            className="hover:text-[#e3be5a] transition-colors py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-[#e3be5a]"
          >
            FLAVORS
          </button>
          <button
            onClick={() => scrollToSection("flavors")}
            className="hover:text-[#e3be5a] transition-colors py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-[#e3be5a]"
          >
            STORE
          </button>
          <button
            onClick={onOpenDistributorModal}
            className="hover:text-[#e3be5a] transition-colors py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-[#e3be5a]"
          >
            DISTRIBUTOR NETWORK
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-[#e3be5a] transition-colors py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-[#e3be5a]"
          >
            ABOUT US
          </button>
          <button
            onClick={() => scrollToSection("blog")}
            className="hover:text-[#e3be5a] transition-colors py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-[#e3be5a]"
          >
            BLOG
          </button>
        </nav>

        {/* ACTION BUTTONS */}
        <div className="flex items-center space-x-4 text-gray-300">
          <button
            onClick={onOpenSearch}
            aria-label="Search"
            className="p-2.5 hover:text-[#e3be5a] hover:bg-[#25103a] rounded-full border border-transparent hover:border-[#e3be5a]/30 transition-all duration-300"
          >
            <Search className="w-5 h-5" />
          </button>

          <button
            onClick={onOpenUserModal}
            aria-label="User Account"
            className="p-2.5 hover:text-[#e3be5a] hover:bg-[#25103a] rounded-full border border-transparent hover:border-[#e3be5a]/30 transition-all duration-300"
          >
            <User className="w-5 h-5" />
          </button>

          <button
            onClick={() => setIsCartOpen(true)}
            aria-label="Cart"
            className="relative p-2.5 hover:text-[#e3be5a] hover:bg-[#25103a] rounded-full border border-transparent hover:border-[#e3be5a]/30 transition-all duration-300"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-[#e3be5a] to-[#b8902c] text-[#12081d] font-bold text-[10px] rounded-full flex items-center justify-center shadow-gold-glow animate-pulse">
                {totalItems}
              </span>
            )}
          </button>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 text-gray-300 hover:text-[#e3be5a] rounded-full border border-transparent hover:border-[#e3be5a]/30 transition-all"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#180a29] border-b border-[#2e1644] px-6 py-6 space-y-4 animate-fadeIn">
          <button
            onClick={() => scrollToSection("hero")}
            className="block w-full text-left text-sm font-sans tracking-wider text-gray-200 hover:text-[#e3be5a] py-2"
          >
            HOME
          </button>
          <button
            onClick={() => scrollToSection("flavors")}
            className="block w-full text-left text-sm font-sans tracking-wider text-gray-200 hover:text-[#e3be5a] py-2"
          >
            FLAVORS
          </button>
          <button
            onClick={() => scrollToSection("flavors")}
            className="block w-full text-left text-sm font-sans tracking-wider text-gray-200 hover:text-[#e3be5a] py-2"
          >
            STORE
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenDistributorModal();
            }}
            className="block w-full text-left text-sm font-sans tracking-wider text-[#e3be5a] font-medium py-2"
          >
            DISTRIBUTOR NETWORK
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="block w-full text-left text-sm font-sans tracking-wider text-gray-200 hover:text-[#e3be5a] py-2"
          >
            ABOUT US
          </button>
          <button
            onClick={() => scrollToSection("blog")}
            className="block w-full text-left text-sm font-sans tracking-wider text-gray-200 hover:text-[#e3be5a] py-2"
          >
            BLOG
          </button>
        </div>
      )}
    </header>
  );
}
