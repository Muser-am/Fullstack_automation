const express = require("express");
const app = express();
app.use(express.json());

let profiles = [];

app.post("/create-profile", (req, res) => {
  const { name, age, gender, location, interests } = req.body;
  if (!name || !age || !gender || !location || !interests) {
    return res.status(400).json({ message: "All fields are required." });
  }
  profiles.push(req.body);
  res.status(201).json({ message: "Profile created successfully!" });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "test" && password === "password123") {
    return res.status(200).json({ message: "Login successful." });
  }
  res.status(401).json({ message: "Invalid credentials." });
});

module.exports = app;
