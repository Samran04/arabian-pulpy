"use client";

import React, { useState } from "react";
import { X, Building2, Send, CheckCircle2, Globe, ShieldCheck } from "lucide-react";

export default function DistributorModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    contactPerson: "",
    email: "",
    phone: "",
    region: "Middle East & GCC",
    estimatedVolume: "10,000 - 50,000 Units/Month",
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#FDFBF9] border border-neutral-border rounded-3xl p-8 sm:p-10 space-y-6 text-neutral-dark shadow-2xl max-h-[90vh] overflow-y-auto">
        
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-neutral-100 text-neutral-muted hover:text-neutral-dark hover:bg-neutral-200 transition-all duration-300"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 stroke-[2]" />
        </button>

        {/* HEADER SECTION */}
        <div className="space-y-3 border-b border-neutral-200/80 pb-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 text-accent text-[11px] font-sans font-bold tracking-widest uppercase border border-purple-200/80 shadow-sm">
            <Globe className="w-3.5 h-3.5 text-accent" />
            <span>GLOBAL PARTNERSHIP NETWORK</span>
          </div>
          
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-dark tracking-tight">
            Distributor Application
          </h3>
          
          <p className="text-xs sm:text-sm text-neutral-muted font-sans font-light leading-relaxed">
            Expand your wholesale beverage portfolio with India&apos;s premier natural fruit pulp brand. Partner with Arabian Pulpy.
          </p>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-4 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-purple-100 text-accent p-4 mx-auto shadow-sm flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 stroke-[2]" />
            </div>
            <h4 className="font-serif text-2xl font-bold text-neutral-dark">Inquiry Submitted Successfully!</h4>
            <p className="text-xs text-neutral-muted max-w-md mx-auto font-sans font-light leading-relaxed">
              Our regional distribution manager will review your business credentials and contact you within 24 business hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-neutral-dark font-bold mb-1.5 uppercase tracking-wider text-[11px]">
                  Business / Company Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Al-Taj Trading LLC"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-200 text-neutral-dark placeholder:text-neutral-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all shadow-sm"
                />
              </div>

              <div>
                <label className="block text-neutral-dark font-bold mb-1.5 uppercase tracking-wider text-[11px]">
                  Contact Person
                </label>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-200 text-neutral-dark placeholder:text-neutral-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all shadow-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-neutral-dark font-bold mb-1.5 uppercase tracking-wider text-[11px]">
                  Corporate Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-200 text-neutral-dark placeholder:text-neutral-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all shadow-sm"
                />
              </div>

              <div>
                <label className="block text-neutral-dark font-bold mb-1.5 uppercase tracking-wider text-[11px]">
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-200 text-neutral-dark placeholder:text-neutral-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all shadow-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-neutral-dark font-bold mb-1.5 uppercase tracking-wider text-[11px]">
                  Distribution Region
                </label>
                <select
                  value={formData.region}
                  onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-200 text-neutral-dark focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all shadow-sm"
                >
                  <option value="Middle East & GCC">Middle East & GCC</option>
                  <option value="South Asia & India">South Asia & India</option>
                  <option value="Southeast Asia">Southeast Asia</option>
                  <option value="Europe & UK">Europe & UK</option>
                  <option value="North America">North America</option>
                </select>
              </div>

              <div>
                <label className="block text-neutral-dark font-bold mb-1.5 uppercase tracking-wider text-[11px]">
                  Estimated Monthly Volume
                </label>
                <select
                  value={formData.estimatedVolume}
                  onChange={(e) => setFormData({ ...formData, estimatedVolume: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-200 text-neutral-dark focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all shadow-sm"
                >
                  <option value="5,000 - 10,000 Units/Month">5,000 - 10,000 Units/Month</option>
                  <option value="10,000 - 50,000 Units/Month">10,000 - 50,000 Units/Month</option>
                  <option value="50,000+ Container Loads">50,000+ Container Loads</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-neutral-dark font-bold mb-1.5 uppercase tracking-wider text-[11px]">
                Additional Requirements / Notes
              </label>
              <textarea
                rows={3}
                placeholder="Tell us about your distribution channels, cold storage facility, or market coverage..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-200 text-neutral-dark placeholder:text-neutral-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all shadow-sm"
              />
            </div>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-200/80">
              <div className="flex items-center gap-2 text-neutral-muted text-[11px]">
                <ShieldCheck className="w-4 h-4 text-accent" />
                <span>Verified Official B2B Partner Portal</span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-accent hover:bg-accent-light text-white font-sans font-bold text-xs tracking-widest uppercase hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2.5 active:scale-95 shadow-md"
              >
                <Send className="w-4 h-4 stroke-[2]" />
                <span>Submit Application</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
