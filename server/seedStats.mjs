// server/seedStats.mjs
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// 🔹 Your Firebase config (same as in server.mjs)
const firebaseConfig = {
  apiKey: "AIzaSyB0zIP3VBk4PHXStN1odtLNe1H2p7xLf_0",
  authDomain: "inventory-dashboard-5d7d9.firebaseapp.com",
  projectId: "inventory-dashboard-5d7d9",
  storageBucket: "inventory-dashboard-5d7d9.firebasestorage.app",
  messagingSenderId: "1007000310503",
  appId: "1:1007000310503:web:696c20335f9cb7016bc842",
  measurementId: "G-ZS3SQ01EYP",
};

// 🔹 Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 🔹 Your mock stats
const statsData = {
  top: [
    {
      title: "Sales",
      value: "$40,689",
      icon: "/icons/Sales.png",
      path: "/icons/trend-up.png",
      ColTrend: "8.5%",
      trend: "Up from yesterday",
    },
    {
      title: "Inventory",
      value: "$23,420",
      icon: "/icons/Stock.png",
      path: "/icons/trend-down.png",
      ColTrend: "2.1%",
      trend: "Down from last week",
    },
    {
      title: "Total Order",
      value: "10,293",
      icon: "/icons/Order.png",
      path: "/icons/trend-up.png",
      ColTrend: "1.3%",
      trend: "Up from yesterday",
    },
    {
      title: "Purchase Order",
      value: "$12,340",
      icon: "/icons/Purchase.png",
      path: "/icons/trend-up.png",
      ColTrend: "3.2%",
      trend: "Up from yesterday",
    },
  ],
  bottom: [
    {
      title: "Shipments",
      value: "3,402",
      icon: "/icons/Shipments.png",
      path: "/icons/trend-up.png",
      ColTrend: "4.2%",
      trend: "Up from yesterday",
    },
    {
      title: "Invoices Paid",
      value: "$20,560",
      icon: "/icons/Invoice.png",
      path: "/icons/trend-up.png",
      ColTrend: "1.5%",
      trend: "Up from yesterday",
    },
    {
      title: "Cancelled Order",
      value: "5",
      icon: "/icons/Cancel.png",
      path: "/icons/trend-down.png",
      ColTrend: "1.3%",
      trend: "Up from yesterday",
    },
    {
      title: "Delayed Orders",
      value: "3",
      icon: "/icons/Delay.png",
      path: "/icons/trend-down.png",
      ColTrend: "0.9%",
      trend: "Down from last week",
    },
  ],
};

// 🔹 Write it into Firestore
async function seed() {
  try {
    await setDoc(doc(db, "stats", "dashboard"), statsData);
    console.log("✅ Stats seeded successfully!");
  } catch (err) {
    console.error("❌ Error seeding stats:", err);
  }
}

seed();
