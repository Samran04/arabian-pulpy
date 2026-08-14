"use client";

import React, { useState } from "react";
import { Instagram, Facebook, Twitter, Linkedin, Send, CheckCircle2 } from "lucide-react";
import ArabianLogo from "./ArabianLogo";

export default function Footer({ onOpenDistributorModal }) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <footer className="bg-[#180d28] text-gray-200 font-sans border-t border-[#8869AC]/30 pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#e3be5a]/15">
          
          {/* COL 1: LOGO & ABOUT */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="flex items-center group py-1">
              <ArabianLogo className="h-10 sm:h-12 w-auto" />
            </a>

            <p className="text-xs leading-relaxed text-gray-400 font-light max-w-sm">
              India&apos;s premier natural pulp drink brand, crafted with pure Arabian essence and real fruit pulp.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex items-center space-x-3 pt-2">
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-[#19092c] border border-[#e3be5a]/20 flex items-center justify-center text-gray-300 hover:text-[#12081d] hover:bg-[#e3be5a] hover:border-[#e3be5a] shadow-gold-glow transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-[#19092c] border border-[#e3be5a]/20 flex items-center justify-center text-gray-300 hover:text-[#12081d] hover:bg-[#e3be5a] hover:border-[#e3be5a] shadow-gold-glow transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full bg-[#19092c] border border-[#e3be5a]/20 flex items-center justify-center text-gray-300 hover:text-[#12081d] hover:bg-[#e3be5a] hover:border-[#e3be5a] shadow-gold-glow transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-[#19092c] border border-[#e3be5a]/20 flex items-center justify-center text-gray-300 hover:text-[#12081d] hover:bg-[#e3be5a] hover:border-[#e3be5a] shadow-gold-glow transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* COL 2: QUICK LINKS */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-sans text-xs font-bold text-white uppercase tracking-widest">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#hero" className="hover:text-[#e3be5a] transition-colors">Home</a></li>
              <li><a href="#flavors" className="hover:text-[#e3be5a] transition-colors">Flavors</a></li>
              <li><a href="#flavors" className="hover:text-[#e3be5a] transition-colors">Store</a></li>
              <li><a href="#about" className="hover:text-[#e3be5a] transition-colors">About Us</a></li>
              <li><a href="#blog" className="hover:text-[#e3be5a] transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* COL 3: HELP & SUPPORT */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-sans text-xs font-bold text-white uppercase tracking-widest">
              HELP & SUPPORT
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-[#e3be5a] transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-[#e3be5a] transition-colors">Shipping & Delivery</a></li>
              <li><a href="#" className="hover:text-[#e3be5a] transition-colors">Returns & Refunds</a></li>
              <li><a href="#" className="hover:text-[#e3be5a] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#e3be5a] transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* COL 4: DISTRIBUTOR NETWORK */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-sans text-xs font-bold text-white uppercase tracking-widest">
              DISTRIBUTOR NETWORK
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={onOpenDistributorModal} className="hover:text-[#e3be5a] transition-colors text-left">
                  Become a Distributor
                </button>
              </li>
              <li>
                <button onClick={onOpenDistributorModal} className="hover:text-[#e3be5a] transition-colors text-left">
                  Distributor Login
                </button>
              </li>
              <li>
                <button onClick={onOpenDistributorModal} className="hover:text-[#e3be5a] transition-colors text-left">
                  Find a Distributor
                </button>
              </li>
              <li>
                <button onClick={onOpenDistributorModal} className="hover:text-[#e3be5a] transition-colors text-left">
                  Distributor Support
                </button>
              </li>
            </ul>
          </div>

          {/* COL 5: NEWSLETTER */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-sans text-xs font-bold text-white uppercase tracking-widest">
              NEWSLETTER
            </h4>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              Subscribe to get updates on our latest flavors and offers.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-[#230d36] border border-[#e3be5a] text-[#e3be5a] text-xs flex items-center gap-2 shadow-gold-glow">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-[#e3be5a]" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-[#19092c] border border-[#e3be5a]/30 rounded-l-xl text-white focus:outline-none focus:border-[#e3be5a]"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="px-3.5 py-2 bg-gradient-to-r from-[#e3be5a] to-[#b8902c] text-[#12081d] font-bold rounded-r-xl hover:scale-105 transition-transform shadow-gold-glow"
                >
                  <Send className="w-4 h-4 text-[#12081d]" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 font-light">
          <p>© 2025 Arabian Pulp. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-gray-300">Privacy</a>
            <a href="#" className="hover:text-gray-300">Terms</a>
            <a href="#" className="hover:text-gray-300">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
