// server/server.js
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

import { doc, getDoc } from "firebase/firestore";

const app = express();
app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//  Serve static files from public/icons (only once)
app.use("/icons", express.static(path.join(__dirname, "public/icons")));

const firebaseConfig = {
  apiKey: "AIzaSyB0zIP3VBk4PHXStN1odtLNe1H2p7xLf_0",
  authDomain: "inventory-dashboard-5d7d9.firebaseapp.com",
  projectId: "inventory-dashboard-5d7d9",
  storageBucket: "inventory-dashboard-5d7d9.firebasestorage.app",
  messagingSenderId: "1007000310503",
  appId: "1:1007000310503:web:696c20335f9cb7016bc842",
  measurementId: "G-ZS3SQ01EYP",
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

// 🔹 Stats API → now pulls from Firestore

app.get("/api/stats", async (req, res) => {
  try {
    const docRef = doc(db, "stats", "dashboard");
    const snapshot = await getDoc(docRef);

    if (snapshot.exists()) {
      res.json(snapshot.data());
    } else {
      res.status(404).json({ error: "Stats not found" });
    }
  } catch (err) {
    console.error("Error fetching stats:", err);
    res.status(500).json({ error: "Failed to fetch stats" });
  }
});

//  Example API: Sidebar tabs
app.get("/api/tabs", (req, res) => {
  res.json([
    { name: "Dashboard", icon: "/icons/Home.png", path: "/" },
    { name: "Products", icon: "/icons/Products.png", path: "/products" },
    { name: "Stock", icon: "/icons/Stock.png", path: "/stock" },
    { name: "Shipments", icon: "/icons/Shipments.png", path: "/shipments" },
    { name: "Reports", icon: "/icons/Reports.png", path: "/reports" },
    { name: "Settings", icon: "/icons/Settings.png", path: "/settings" },
  ]);
});

// Example API: Sales chart
app.get("/api/sales", (req, res) => {
  res.json({
    labels: [
      "5k",
      "10k",
      "15k",
      "20k",
      "25k",
      "30k",
      "35k",
      "40k",
      "45k",
      "50k",
      "55k",
      "60k",
      "65k",
      "70k",
      "75k",
      "80k",
      "85k",
      "90k",
      "95k",
      "100k",
    ],
    values: [
      20, 30, 50, 54, 33, 40, 37, 57, 30, 83, 37, 56, 52, 57, 80, 90, 57, 61,
      21, 80,
    ],
  });
});

// ✅ Start server
app.listen(5000, () => {
  console.log("✅ Backend running at: http://localhost:5000");
  console.log("➡️ Test tabs at: http://localhost:5000/api/tabs");
  console.log("➡️ Test sales at: http://localhost:5000/api/sales");
  console.log("➡️ Test sales at: http://localhost:5000/api/stats");
});
