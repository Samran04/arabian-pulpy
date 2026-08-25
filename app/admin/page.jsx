"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Package, 
  ShoppingBag, 
  RefreshCw, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Plus, 
  Minus, 
  Edit3, 
  Database, 
  ShieldCheck, 
  Search, 
  TrendingUp, 
  ArrowLeft,
  Users,
  Check,
  Sparkles
} from "lucide-react";
import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import DistributorModal from "../../src/components/DistributorModal";
import SearchModal from "../../src/components/SearchModal";
import UserModal from "../../src/components/UserModal";
import CartDrawer from "../../src/components/CartDrawer";
import { 
  getFlavorsWithStock, 
  updateProductStock, 
  getCustomerOrders, 
  seedFirestoreDatabase 
} from "../../src/services/firebaseService";
import { isFirebaseConfigured } from "../../src/lib/firebase";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("inventory");
  const [inventory, setInventory] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [seedStatus, setSeedStatus] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingPriceId, setEditingPriceId] = useState(null);
  const [tempPrice, setTempPrice] = useState("");

  // Modals state
  const [searchOpen, setSearchOpen] = useState(false);
  const [userModalOpen, setUserModalOpen] = useState(false);
  const [distributorModalOpen, setDistributorModalOpen] = useState(false);

  useEffect(() => {
    fetchAdminData();
  }, []);

  const fetchAdminData = async () => {
    setLoading(true);
    const flavorsData = await getFlavorsWithStock();
    const ordersData = await getCustomerOrders();
    setInventory(flavorsData);
    setOrders(ordersData);
    setLoading(false);
  };

  const handleStockChange = async (productId, delta) => {
    const currentProduct = inventory.find((p) => p.id === productId);
    if (!currentProduct) return;

    const newStock = Math.max(0, (currentProduct.stock ?? 50) + delta);
    const newInStock = newStock > 0;

    const updated = await updateProductStock(productId, {
      stock: newStock,
      inStock: newInStock,
    });

    setInventory((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, stock: newStock, inStock: newInStock } : item))
    );
  };

  const handleToggleInStock = async (productId, currentStatus) => {
    const newStatus = !currentStatus;
    await updateProductStock(productId, { inStock: newStatus });
    setInventory((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, inStock: newStatus } : item))
    );
  };

  const handleSavePrice = async (productId) => {
    const numericPrice = parseFloat(tempPrice);
    if (isNaN(numericPrice) || numericPrice <= 0) return;

    await updateProductStock(productId, { price: numericPrice });
    setInventory((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, price: numericPrice } : item))
    );
    setEditingPriceId(null);
  };

  const handleSeedDB = async () => {
    setSeedStatus("Seeding database...");
    const res = await seedFirestoreDatabase();
    if (res.success) {
      setSeedStatus("Database seeded successfully!");
      fetchAdminData();
    } else {
      setSeedStatus(`Seed error: ${res.message}`);
    }
    setTimeout(() => setSeedStatus(null), 4000);
  };

  const filteredInventory = inventory.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalProducts = inventory.length;
  const totalInStock = inventory.filter((p) => p.inStock !== false && (p.stock ?? 50) > 0).length;
  const lowStockCount = inventory.filter((p) => (p.stock ?? 50) < 15 && (p.stock ?? 50) > 0).length;

  return (
    <main className="min-h-screen bg-[#FDFBF9] text-neutral-dark flex flex-col relative selection:bg-accent selection:text-white font-sans">
      
      {/* HEADER */}
      <Header
        onOpenSearch={() => setSearchOpen(true)}
        onOpenUserModal={() => setUserModalOpen(true)}
        onOpenDistributorModal={() => setDistributorModalOpen(true)}
      />

      {/* TOP BANNER */}
      <div className="pt-28 lg:pt-36 pb-8 bg-gradient-to-b from-[#3D245B] to-[#26133B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Link 
                  href="/"
                  className="inline-flex items-center gap-1.5 text-xs text-white/70 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Store</span>
                </Link>
                <span className="text-white/40">•</span>
                <span className="text-xs font-bold text-purple-300 uppercase tracking-widest bg-white/10 px-2.5 py-0.5 rounded-full border border-white/20">
                  {isFirebaseConfigured ? "Firebase Connected" : "Local Dynamic Inventory"}
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Inventory & Stock Control Panel
              </h1>
              <p className="text-xs sm:text-sm text-white/80 font-light max-w-xl">
                Manage live product stock quantities, toggle availability, update prices, and track customer orders in real-time.
              </p>
            </div>

            {/* SEED DATABASE BUTTON */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleSeedDB}
                className="px-5 py-3 rounded-full bg-accent hover:bg-accent-light text-white text-xs font-bold tracking-wider uppercase transition-all shadow-md flex items-center gap-2"
              >
                <Database className="w-4 h-4" />
                <span>Seed Firestore DB</span>
              </button>

              <button
                onClick={fetchAdminData}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20"
                title="Refresh inventory"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
              </button>
            </div>
          </div>

          {seedStatus && (
            <div className="mt-4 px-4 py-2 bg-purple-500/30 border border-purple-400/40 rounded-xl text-xs text-white flex items-center gap-2 animate-fadeIn">
              <Sparkles className="w-4 h-4" />
              <span>{seedStatus}</span>
            </div>
          )}
        </div>
      </div>

      {/* DASHBOARD STATS METRICS */}
      <section className="py-8 bg-white border-b border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            <div className="bg-[#FAF6F0] p-5 rounded-2xl border border-neutral-200/70 space-y-1">
              <span className="text-[11px] font-bold text-neutral-muted uppercase tracking-wider block">Total SKUs</span>
              <span className="font-serif text-3xl font-bold text-neutral-dark">{totalProducts} Products</span>
            </div>

            <div className="bg-emerald-50/70 p-5 rounded-2xl border border-emerald-200/70 space-y-1">
              <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block">In Stock Active</span>
              <span className="font-serif text-3xl font-bold text-emerald-800">{totalInStock} SKUs</span>
            </div>

            <div className="bg-amber-50/70 p-5 rounded-2xl border border-amber-200/70 space-y-1">
              <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider block">Low Stock Alert</span>
              <span className="font-serif text-3xl font-bold text-amber-800">{lowStockCount} Products</span>
            </div>

            <div className="bg-purple-50/70 p-5 rounded-2xl border border-purple-200/70 space-y-1">
              <span className="text-[11px] font-bold text-accent uppercase tracking-wider block">Total Customer Orders</span>
              <span className="font-serif text-3xl font-bold text-neutral-dark">{orders.length} Orders</span>
            </div>

          </div>
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      <section className="py-10 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* TAB CONTROL & SEARCH BAR */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-neutral-200 pb-4">
            <div className="flex gap-6">
              <button
                onClick={() => setActiveTab("inventory")}
                className={`pb-2 text-sm font-bold tracking-widest uppercase transition-all ${
                  activeTab === "inventory"
                    ? "text-accent border-b-2 border-accent"
                    : "text-neutral-muted hover:text-neutral-dark"
                }`}
              >
                Stock & Inventory ({inventory.length})
              </button>

              <button
                onClick={() => setActiveTab("orders")}
                className={`pb-2 text-sm font-bold tracking-widest uppercase transition-all ${
                  activeTab === "orders"
                    ? "text-accent border-b-2 border-accent"
                    : "text-neutral-muted hover:text-neutral-dark"
                }`}
              >
                Customer Orders ({orders.length})
              </button>
            </div>

            {activeTab === "inventory" && (
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 absolute left-3.5 top-3 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-full bg-white border border-neutral-200 text-xs focus:outline-none focus:border-accent"
                />
              </div>
            )}
          </div>

          {/* INVENTORY TAB CONTENT */}
          {activeTab === "inventory" && (
            <div className="space-y-6">
              {filteredInventory.length === 0 ? (
                <div className="py-12 text-center text-neutral-muted text-sm bg-white rounded-3xl border border-neutral-200">
                  No products found. Click "Seed Firestore DB" to initialize inventory.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredInventory.map((product) => {
                    const currentStock = product.stock ?? 50;
                    const isInStock = product.inStock !== false && currentStock > 0;

                    return (
                      <div 
                        key={product.id}
                        className="bg-white p-6 rounded-3xl border border-neutral-200/80 shadow-sm flex flex-col justify-between space-y-5"
                      >
                        <div className="flex gap-4 items-start">
                          <div className="relative w-20 h-20 bg-[#FAF6F0] rounded-2xl overflow-hidden shrink-0 border border-neutral-200/60 p-2 flex items-center justify-center">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              sizes="100px"
                              className="object-contain p-2"
                            />
                          </div>

                          <div className="flex-1 min-w-0 space-y-1">
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-bold text-accent uppercase tracking-widest">
                                {product.category}
                              </span>

                              <button
                                onClick={() => handleToggleInStock(product.id, isInStock)}
                                className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border transition-all ${
                                  isInStock
                                    ? "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100"
                                    : "bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100"
                                }`}
                              >
                                {isInStock ? "In Stock" : "Out of Stock"}
                              </button>
                            </div>

                            <h3 className="font-serif font-bold text-lg text-neutral-dark truncate">
                              {product.name}
                            </h3>
                            <p className="text-xs text-neutral-muted truncate">{product.tagline}</p>

                            {/* PRICE EDITOR */}
                            <div className="pt-2 flex items-center gap-2">
                              {editingPriceId === product.id ? (
                                <div className="flex items-center gap-1.5">
                                  <span className="font-bold text-xs">₹</span>
                                  <input
                                    type="number"
                                    step="0.01"
                                    value={tempPrice}
                                    onChange={(e) => setTempPrice(e.target.value)}
                                    className="w-20 px-2 py-1 border rounded text-xs font-montserrat font-bold"
                                  />
                                  <button
                                    onClick={() => handleSavePrice(product.id)}
                                    className="p-1 rounded bg-accent text-white hover:bg-accent-light"
                                  >
                                    <Check className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              ) : (
                                <div className="flex items-center gap-2">
                                  <span className="font-montserrat font-bold text-base text-neutral-dark tabular-nums">
                                    ₹{product.price.toFixed(2)}
                                  </span>
                                  <button
                                    onClick={() => {
                                      setEditingPriceId(product.id);
                                      setTempPrice(product.price.toString());
                                    }}
                                    className="text-neutral-400 hover:text-accent p-1"
                                    title="Edit price"
                                  >
                                    <Edit3 className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* STOCK COUNT CONTROL BAR */}
                        <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#FDFBF9] p-4 rounded-2xl">
                          <div className="flex items-center gap-2">
                            <Package className="w-4 h-4 text-accent" />
                            <span className="text-xs font-bold text-neutral-dark">
                              Current Stock:
                            </span>
                            <span className="font-montserrat font-bold text-sm text-accent tabular-nums bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200">
                              {currentStock} Units
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleStockChange(product.id, -5)}
                              className="px-2.5 py-1 rounded-lg bg-white border border-neutral-300 text-neutral-dark hover:border-accent text-xs font-bold"
                            >
                              -5
                            </button>
                            <button
                              onClick={() => handleStockChange(product.id, -1)}
                              className="p-1.5 rounded-lg bg-white border border-neutral-300 text-neutral-dark hover:border-accent"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleStockChange(product.id, 1)}
                              className="p-1.5 rounded-lg bg-white border border-neutral-300 text-neutral-dark hover:border-accent"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleStockChange(product.id, 10)}
                              className="px-2.5 py-1 rounded-lg bg-white border border-neutral-300 text-neutral-dark hover:border-accent text-xs font-bold"
                            >
                              +10
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* CUSTOMER ORDERS TAB CONTENT */}
          {activeTab === "orders" && (
            <div className="space-y-6">
              {orders.length === 0 ? (
                <div className="py-16 text-center space-y-3 bg-white rounded-3xl border border-neutral-200">
                  <ShoppingBag className="w-10 h-10 text-neutral-300 mx-auto" />
                  <h3 className="font-serif font-bold text-xl text-neutral-dark">No Orders Yet</h3>
                  <p className="text-xs text-neutral-muted">Customer orders placed through guest checkout will appear here in real-time.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div 
                      key={order.id}
                      className="bg-white p-6 rounded-3xl border border-neutral-200 shadow-sm space-y-4"
                    >
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-neutral-100 pb-3">
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-sm font-mono text-neutral-dark">{order.id}</span>
                          <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                            {order.paymentMethod === "COD" ? "Cash On Delivery" : "UPI Paid"}
                          </span>
                        </div>
                        <span className="text-xs text-neutral-muted">
                          {new Date(order.createdAt).toLocaleString()}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
                        <div>
                          <span className="text-neutral-muted block">Customer Name & Phone</span>
                          <span className="font-bold text-neutral-dark text-sm">{order.customerName}</span>
                          <span className="block text-neutral-muted">{order.phone}</span>
                        </div>
                        <div>
                          <span className="text-neutral-muted block">Delivery Address</span>
                          <span className="font-medium text-neutral-dark">{order.address}</span>
                        </div>
                      </div>

                      <div className="bg-[#FAF6F0] p-4 rounded-xl space-y-2 text-xs">
                        <span className="font-bold text-neutral-muted uppercase tracking-wider text-[10px]">
                          Items List
                        </span>
                        {order.items?.map((item, idx) => (
                          <div key={idx} className="flex justify-between font-medium">
                            <span>{item.quantity}x {item.name}</span>
                            <span className="font-montserrat font-bold tabular-nums">₹{item.total.toFixed(2)}</span>
                          </div>
                        ))}
                        <div className="pt-2 border-t border-neutral-200/80 flex justify-between font-bold text-sm text-neutral-dark">
                          <span>Total Amount</span>
                          <span className="font-montserrat text-accent text-base tabular-nums">₹{order.finalTotal.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

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
        flavors={inventory}
        blogs={[]}
        onSelectFlavor={() => {}}
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

    </main>
  );
}
