require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT;

// Allow all requests from React Server to avoid CORS errors
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credential: true,
};
app.use(cors(corsOptions));

// Testing API
app.get("/api", (req, res) => {
  res.json({ users: ["himanshu", "abhishek", "ankit"] });
});

// Global Error Handler
app.use((err, req, res, next) => res.status(500).json({ error: err.message }));

app.listen(PORT, () => {
  console.log(`server running successfully on PORT: ${PORT}`);
});
