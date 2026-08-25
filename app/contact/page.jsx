"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Building, 
  Globe, 
  HelpCircle, 
  Sparkles,
  ArrowRight,
  ChevronDown
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

export default function ContactPage() {
  const { toastMessage } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  
  // Modals state
  const [searchOpen, setSearchOpen] = useState(false);
  const [userModalOpen, setUserModalOpen] = useState(false);
  const [distributorModalOpen, setDistributorModalOpen] = useState(false);
  const [selectedFlavorModal, setSelectedFlavorModal] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "General Inquiry",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        inquiryType: "General Inquiry",
        subject: "",
        message: "",
      });
    }, 4000);
  };

  const faqs = [
    {
      q: "Where can I buy Arabian Pulpy beverages locally?",
      a: "Our products are available across major supermarket chains, premium grocery outlets, and authorized regional distributors. You can also order directly online through our website for cold delivery."
    },
    {
      q: "Are your beverages 100% natural with real fruit pulp?",
      a: "Yes! Every single cup and pouch of Arabian Pulpy is crafted with handpicked real fruit pulp, free from harmful chemical preservatives or artificial flavor enhancers."
    },
    {
      q: "How can I apply to become an official regional distributor?",
      a: "You can submit a business application through our Distributor Portal or select 'Wholesale & Distribution' in the contact form on this page. Our corporate sales team will contact you within 24 business hours."
    },
    {
      q: "What is the shelf life of your 2.5L Pulpy Grape Pouch?",
      a: "When unopened, our sealed pouch maintains fresh quality for up to 9 months. Once opened, keep refrigerated with the resealable spout closed and consume within 7 days."
    }
  ];

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

      {/* BREADCRUMB & HERO */}
      <section className="pt-28 lg:pt-36 pb-16 bg-gradient-to-b from-[#F8F5F0] via-[#FAF6F0] to-[#FDFBF9] border-b border-neutral-200/60 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-sans text-neutral-muted mb-2">
            <Link href="/" className="hover:text-accent">Home</Link>
            <span>/</span>
            <span className="text-neutral-dark font-medium">Contact Us</span>
          </div>

          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 text-accent text-[11px] font-sans font-bold tracking-widest uppercase border border-purple-200/80 shadow-sm">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WE ARE HERE FOR YOU</span>
          </span>

          <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-neutral-dark tracking-tight leading-tight">
            Get In Touch With <br />
            <span className="italic font-light text-accent">Arabian Pulpy</span>
          </h1>

          <p className="text-neutral-muted font-sans text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed pt-2">
            Have questions about our beverages, distribution opportunities, or bulk orders? Reach out to our dedicated team anytime.
          </p>
        </div>
      </section>

      {/* CONTACT INFO CARDS GRID */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white p-8 rounded-3xl border border-neutral-200/80 space-y-4 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-accent flex items-center justify-center">
                <MapPin className="w-6 h-6 stroke-[1.75]" />
              </div>
              <h3 className="font-serif font-bold text-xl text-neutral-dark">Corporate HQ</h3>
              <p className="text-xs text-neutral-muted font-sans leading-relaxed">
                Arabian Pulpy Beverages Ltd.<br />
                Industrial Food Park, Sector 4<br />
                Kochi, Kerala – 682030, India
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-neutral-200/80 space-y-4 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-accent flex items-center justify-center">
                <Phone className="w-6 h-6 stroke-[1.75]" />
              </div>
              <h3 className="font-serif font-bold text-xl text-neutral-dark">Phone & WhatsApp</h3>
              <div className="space-y-1 text-xs text-neutral-muted font-sans">
                <p className="font-medium text-neutral-dark">+91 1800 425 7857 (Toll-Free)</p>
                <p>+91 98950 12345 (Sales & B2B)</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-neutral-200/80 space-y-4 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-accent flex items-center justify-center">
                <Mail className="w-6 h-6 stroke-[1.75]" />
              </div>
              <h3 className="font-serif font-bold text-xl text-neutral-dark">Email Support</h3>
              <div className="space-y-1 text-xs text-neutral-muted font-sans">
                <p className="font-medium text-neutral-dark">care@arabianpulpy.com</p>
                <p>partners@arabianpulpy.com</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-neutral-200/80 space-y-4 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-accent flex items-center justify-center">
                <Clock className="w-6 h-6 stroke-[1.75]" />
              </div>
              <h3 className="font-serif font-bold text-xl text-neutral-dark">Business Hours</h3>
              <div className="space-y-1 text-xs text-neutral-muted font-sans">
                <p>Monday – Saturday: 9:00 AM – 6:30 PM</p>
                <p>Sunday: Closed (Online Orders Open 24/7)</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FORM & MAP / SIDEBAR SECTION */}
      <section className="py-12 lg:py-20 bg-[#F8F5F0] border-t border-b border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* LEFT: INTERACTIVE FORM */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-neutral-200/80 shadow-md space-y-6">
              <div className="space-y-2 border-b border-neutral-200 pb-4">
                <span className="text-xs font-sans tracking-widest uppercase font-bold text-accent">Send a message</span>
                <h2 className="font-serif text-3xl font-bold text-neutral-dark">
                  How Can We Help You Today?
                </h2>
                <p className="text-xs text-neutral-muted font-sans font-light">
                  Fill out the form below and a representative will get back to you shortly.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-purple-100 text-accent p-4 mx-auto shadow-sm flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 stroke-[2]" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-neutral-dark">Message Sent Successfully!</h3>
                  <p className="text-xs text-neutral-muted max-w-md mx-auto font-sans leading-relaxed">
                    Thank you for reaching out to Arabian Pulpy. Our support manager will review your inquiry and get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-xs font-sans">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-neutral-dark font-bold mb-1.5 uppercase tracking-wider text-[11px]">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FDFBF9] border border-neutral-200 text-neutral-dark placeholder:text-neutral-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all shadow-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-neutral-dark font-bold mb-1.5 uppercase tracking-wider text-[11px]">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FDFBF9] border border-neutral-200 text-neutral-dark placeholder:text-neutral-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-neutral-dark font-bold mb-1.5 uppercase tracking-wider text-[11px]">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FDFBF9] border border-neutral-200 text-neutral-dark placeholder:text-neutral-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all shadow-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-neutral-dark font-bold mb-1.5 uppercase tracking-wider text-[11px]">
                        Inquiry Category *
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FDFBF9] border border-neutral-200 text-neutral-dark focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all shadow-sm"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Wholesale & Distribution">Wholesale & Distribution</option>
                        <option value="Online Order Support">Online Order Support</option>
                        <option value="Feedback & Suggestions">Feedback & Suggestions</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-neutral-dark font-bold mb-1.5 uppercase tracking-wider text-[11px]">
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Brief title of your inquiry..."
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FDFBF9] border border-neutral-200 text-neutral-dark placeholder:text-neutral-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-dark font-bold mb-1.5 uppercase tracking-wider text-[11px]">
                      Your Message *
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Write your message details here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FDFBF9] border border-neutral-200 text-neutral-dark placeholder:text-neutral-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all shadow-sm"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-4 rounded-full bg-accent hover:bg-accent-light text-white font-sans font-bold text-xs tracking-widest uppercase shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 active:scale-95"
                    >
                      <Send className="w-4 h-4 stroke-[2]" />
                      <span>Send Message</span>
                    </button>
                  </div>

                </form>
              )}
            </div>

            {/* RIGHT: PARTNERSHIP PORTAL & DISTRIBUTOR CARD */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="bg-gradient-to-br from-[#3D245B] to-[#25123A] text-white p-8 sm:p-10 rounded-3xl shadow-xl space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full pointer-events-none" />
                
                <span className="px-3 py-1 rounded-full bg-white/10 text-white font-sans text-[10px] font-bold tracking-widest uppercase border border-white/20">
                  B2B OPPORTUNITIES
                </span>

                <h3 className="font-serif text-3xl font-bold text-white">
                  Looking to Distribute Arabian Pulpy?
                </h3>

                <p className="text-white/80 text-xs sm:text-sm font-light leading-relaxed">
                  Join our expanding international network of distributors across India, the GCC, Europe, and Asia. Access wholesale pricing and dedicated logistics support.
                </p>

                <button
                  onClick={() => setDistributorModalOpen(true)}
                  className="inline-flex items-center gap-3 px-6 py-3.5 bg-white text-neutral-dark font-sans text-xs font-bold tracking-widest uppercase hover:bg-purple-50 transition-all rounded-full shadow-md"
                >
                  <span>Open Distributor Portal</span>
                  <ArrowRight className="w-4 h-4 text-accent" />
                </button>
              </div>

              {/* QUICK REASSURANCE BADGES */}
              <div className="bg-white p-8 rounded-3xl border border-neutral-200/80 space-y-4 shadow-sm">
                <h4 className="font-serif font-bold text-lg text-neutral-dark">Why Connect With Us?</h4>
                
                <div className="space-y-3 text-xs font-sans text-neutral-muted">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    <span>Dedicated 24/7 customer experience team</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    <span>Direct cold-chain shipping updates</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    <span>Bulk & customized corporate gift solutions</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* FAQ ACCORDION SECTION */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-sans tracking-widest uppercase text-accent font-bold">Answers to Common Questions</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-dark">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-[#FDFBF9] border border-neutral-200/80 rounded-2xl overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif font-bold text-base sm:text-lg text-neutral-dark hover:text-accent transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-neutral-muted transition-transform duration-300 shrink-0 ${activeFaq === idx ? "rotate-180 text-accent" : ""}`} />
                </button>

                {activeFaq === idx && (
                  <div className="px-6 pb-6 pt-0 text-xs sm:text-sm text-neutral-muted font-sans font-light leading-relaxed border-t border-neutral-100 animate-fadeIn">
                    <p className="pt-3">{faq.a}</p>
                  </div>
                )}
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
