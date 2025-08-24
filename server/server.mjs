// server/server.js
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Serve static files from public/icons (only once)
app.use("/icons", express.static(path.join(__dirname, "public/icons")));

// ✅ Example API: Sidebar tabs
app.get("/api/tabs", (req, res) => {
  res.json([
    { name: "Dashboard", icon: "/icons/home.png", path: "/" },
    { name: "Products", icon: "/icons/products.png", path: "/products" },
    { name: "Stock", icon: "/icons/stock.png", path: "/stock" },
    { name: "Shipments", icon: "/icons/shipments.png", path: "/shipments" },
    { name: "Reports", icon: "/icons/reports.png", path: "/reports" },
    { name: "Settings", icon: "/icons/settings.png", path: "/settings" },
  ]);
});

// ✅ Example API: Sales chart
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
});
