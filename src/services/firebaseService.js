import { db, isFirebaseConfigured } from "../lib/firebase";
import { 
  collection, 
  getDocs, 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  addDoc, 
  query, 
  orderBy, 
  serverTimestamp 
} from "firebase/firestore";
import { FLAVORS_DATA } from "../data/flavors";
import { BLOG_POSTS } from "../data/blog";
import { VALUE_PROPS } from "../data/valueProps";

// In-memory cache for local inventory changes when offline/demo
let localInventoryState = [...FLAVORS_DATA.map(f => ({ ...f, stock: f.stock ?? 50, inStock: f.inStock ?? true }))];
let localOrdersState = [];

/**
 * Fetch all products/flavors with inventory stock info
 */
export async function getFlavorsWithStock() {
  if (isFirebaseConfigured && db) {
    try {
      const querySnapshot = await getDocs(collection(db, "flavors"));
      if (!querySnapshot.empty) {
        const flavors = [];
        querySnapshot.forEach((docSnap) => {
          flavors.push({ id: docSnap.id, ...docSnap.data() });
        });
        return flavors;
      }
    } catch (err) {
      console.warn("Firestore fetch flavors error, falling back to local inventory state:", err);
    }
  }
  return localInventoryState;
}

/**
 * Admin: Update stock quantity, inStock status, or price for a product
 */
export async function updateProductStock(productId, updates) {
  // Update local memory state
  localInventoryState = localInventoryState.map((item) =>
    item.id === productId ? { ...item, ...updates } : item
  );

  if (isFirebaseConfigured && db) {
    try {
      const docRef = doc(db, "flavors", productId);
      await updateDoc(docRef, { ...updates, updatedAt: serverTimestamp() });
    } catch (err) {
      console.warn("Firestore update stock error:", err);
    }
  }

  return localInventoryState.find((item) => item.id === productId);
}

/**
 * Save Guest / Auth Customer Order
 */
export async function createCustomerOrder(orderData) {
  const newOrder = {
    id: `ORD-${Date.now()}`,
    createdAt: new Date().toISOString(),
    status: "Pending Processing",
    paymentStatus: orderData.paymentMethod === "COD" ? "Cash On Delivery" : "Paid (UPI)",
    ...orderData,
  };

  localOrdersState.unshift(newOrder);

  // Decrement inventory stock
  for (const item of orderData.items) {
    const existing = localInventoryState.find((f) => f.id === item.id);
    if (existing && typeof existing.stock === "number") {
      const newStock = Math.max(0, existing.stock - item.quantity);
      await updateProductStock(item.id, { 
        stock: newStock, 
        inStock: newStock > 0 
      });
    }
  }

  if (isFirebaseConfigured && db) {
    try {
      await addDoc(collection(db, "orders"), {
        ...newOrder,
        createdAt: serverTimestamp(),
      });
    } catch (err) {
      console.warn("Firestore save order error:", err);
    }
  }

  return newOrder;
}

/**
 * Admin: Get all customer orders
 */
export async function getCustomerOrders() {
  if (isFirebaseConfigured && db) {
    try {
      const q = query(collection(db, "orders"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const orders = [];
        querySnapshot.forEach((docSnap) => {
          orders.push({ id: docSnap.id, ...docSnap.data() });
        });
        return orders;
      }
    } catch (err) {
      console.warn("Firestore fetch orders error:", err);
    }
  }
  return localOrdersState;
}

/**
 * Seed initial products, blogs, and value props to Firestore
 */
export async function seedFirestoreDatabase() {
  if (!isFirebaseConfigured || !db) {
    return { success: false, message: "Firebase is not configured yet. Add keys to .env.local" };
  }

  try {
    // Seed Flavors
    for (const flavor of FLAVORS_DATA) {
      const flavorRef = doc(db, "flavors", flavor.id);
      await setDoc(flavorRef, {
        ...flavor,
        stock: flavor.stock ?? 50,
        inStock: flavor.inStock ?? true,
        updatedAt: serverTimestamp(),
      });
    }

    // Seed Blogs
    for (const blog of BLOG_POSTS) {
      const blogRef = doc(db, "blogs", blog.id.toString());
      await setDoc(blogRef, blog);
    }

    // Seed Value Props
    for (const prop of VALUE_PROPS) {
      const propRef = doc(db, "valueProps", prop.id?.toString() || Math.random().toString());
      await setDoc(propRef, prop);
    }

    return { success: true, message: "Firestore database seeded successfully!" };
  } catch (err) {
    console.error("Firestore seed error:", err);
    return { success: false, message: err.message };
  }
}
