const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { syncDB } = require("./models");

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", authRoutes);
app.use("/api/tasks", taskRoutes);

// Start server
app.listen(PORT, async () => {
  console.log(`Server running on http://localhost:${PORT}`);
  await syncDB(); // Sync DB when server starts
});
