"use client";

import React, { useState } from "react";
import { X, Building2, MapPin, Phone, Mail, Send, CheckCircle2 } from "lucide-react";

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#160a25] border border-[#e3be5a]/30 rounded-3xl p-8 space-y-6 text-gray-200 shadow-2xl max-h-[90vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-[#25103a] hover:bg-[#e3be5a] text-gray-300 hover:text-[#12081d] border border-[#e3be5a]/20 transition-all duration-300"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2 border-b border-[#e3be5a]/20 pb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#25103a] text-[#f5d77f] text-[11px] font-sans font-bold tracking-widest uppercase border border-[#e3be5a]/40 shadow-gold-glow">
            <Building2 className="w-3.5 h-3.5 text-[#e3be5a]" />
            <span>GLOBAL PARTNERSHIP</span>
          </div>
          <h3 className="font-serif text-3xl font-bold text-white">
            Join the Arabian Pulp Distributor Network
          </h3>
          <p className="text-xs text-gray-400 font-sans font-light">
            Expand your wholesale beverage portfolio with India&apos;s premier natural fruit pulp brand.
          </p>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-4 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#e3be5a] to-[#b8902c] p-[1.5px] mx-auto shadow-gold-glow">
              <div className="w-full h-full rounded-full bg-[#12081d] flex items-center justify-center text-[#e3be5a]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
            </div>
            <h4 className="font-serif text-2xl font-bold text-white">Inquiry Submitted Successfully!</h4>
            <p className="text-xs text-gray-300 max-w-md mx-auto font-sans font-light">
              Our regional distribution manager will review your business credentials and contact you within 24 business hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 font-semibold mb-1 uppercase tracking-wider">Business / Company Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Al-Taj Trading LLC"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#200d34] border border-[#e3be5a]/30 text-white focus:outline-none focus:border-[#e3be5a]"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-semibold mb-1 uppercase tracking-wider">Contact Person</label>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#200d34] border border-[#e3be5a]/30 text-white focus:outline-none focus:border-[#e3be5a]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 font-semibold mb-1 uppercase tracking-wider">Corporate Email</label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#200d34] border border-[#e3be5a]/30 text-white focus:outline-none focus:border-[#e3be5a]"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-semibold mb-1 uppercase tracking-wider">Phone / WhatsApp</label>
                <input
                  type="tel"
                  required
                  placeholder="+971 50 123 4567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#200d34] border border-[#e3be5a]/30 text-white focus:outline-none focus:border-[#e3be5a]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 font-semibold mb-1 uppercase tracking-wider">Distribution Region</label>
                <select
                  value={formData.region}
                  onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#200d34] border border-[#e3be5a]/30 text-white focus:outline-none focus:border-[#e3be5a]"
                >
                  <option value="Middle East & GCC">Middle East & GCC</option>
                  <option value="South Asia & India">South Asia & India</option>
                  <option value="Southeast Asia">Southeast Asia</option>
                  <option value="Europe & UK">Europe & UK</option>
                  <option value="North America">North America</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 font-semibold mb-1 uppercase tracking-wider">Estimated Monthly Volume</label>
                <select
                  value={formData.estimatedVolume}
                  onChange={(e) => setFormData({ ...formData, estimatedVolume: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#200d34] border border-[#e3be5a]/30 text-white focus:outline-none focus:border-[#e3be5a]"
                >
                  <option value="5,000 - 10,000 Units/Month">5,000 - 10,000 Units/Month</option>
                  <option value="10,000 - 50,000 Units/Month">10,000 - 50,000 Units/Month</option>
                  <option value="50,000+ Container Loads">50,000+ Container Loads</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gray-300 font-semibold mb-1 uppercase tracking-wider">Additional Requirements / Notes</label>
              <textarea
                rows={3}
                placeholder="Tell us about your distribution channels, cold storage facility, or market coverage..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#200d34] border border-[#e3be5a]/30 text-white focus:outline-none focus:border-[#e3be5a]"
              />
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#e3be5a] via-[#f5d77f] to-[#b8902c] text-[#12081d] font-sans font-bold text-xs tracking-widest uppercase hover:scale-[1.02] transition-all shadow-gold-glow flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-[#12081d]" />
                SUBMIT DISTRIBUTOR APPLICATION
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
