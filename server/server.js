require('dotenv').config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// Connect to database
console.log("🔌 Attempting to connect to database...");
connectDB();

app.use(cors());
app.use(express.json());

// Add a test route to verify server is working
app.get("/api/test", (req, res) => {
    res.json({ message: "Server is working!" });
});

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/tasks", require("./routes/taskRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
    console.log(`📊 MongoDB URI: ${process.env.MONGO_URI}`);
    console.log(`🔑 JWT Secret: ${process.env.JWT_SECRET ? 'Set' : 'Not set'}`);
});