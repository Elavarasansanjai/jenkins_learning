const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming JSON payloads
app.use(express.json());

// Basic GET route (Home Page)
app.get("/", (req, res) => {
  res.send("Hello! Node.js backend server is running.");
});

// GET route with parameters
app.get("/api/user/:id", (req, res) => {
  const userId = req.params.id;
  res.json({
    status: "success",
    user: { id: userId, name: "John Doe", role: "Developer" },
  });
});

// POST route receiving JSON data
app.post("/api/data", (req, res) => {
  const receivedData = req.body;
  res.status(201).json({
    message: "Data received successfully!",
    data: receivedData,
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
