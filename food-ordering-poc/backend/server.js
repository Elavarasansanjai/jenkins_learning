const express = require("express");
const app = express();
app.use(express.json());

const orders = [
  { id: 1, item: "Pepperoni Pizza", price: "$14.99", status: "Preparing" },
  { id: 2, item: "Cheeseburger & Fries", price: "$10.50", status: "Delivered" },
];

app.get("/api/orders", (req, res) => {
  res.json({ success: true, count: orders.length, data: orders });
});

app.post("/api/orders", (req, res) => {
  const newOrder = {
    id: orders.length + 1,
    item: req.body.item || "Custom Meal",
    price: "$12.00",
    status: "Received",
  };
  orders.push(newOrder);
  res.status(201).json({ success: true, data: newOrder });
});

app.get("/health", (req, res) => res.send("OK"));

app.listen(5000, () => console.log("Backend API running on port 5000"));
