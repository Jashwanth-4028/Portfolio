const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// ===== MongoDB Connection =====
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected to portfolio DB"))
.catch(err => console.log("MongoDB connection error:", err));

// ===== Schemas =====
const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  tech: [String],
  imagelink1: String,
  imagelink2: String,
  imagelink3: String,
  featured: { type: Boolean, default: false },
  github: String,
  live: String,
  details: String,
  detailedDescription: String,
  features: [String]
}, { timestamps: true });

const personalInfoSchema = new mongoose.Schema({
  name: String,
  role: String,
  tagline: String,
  email: String,
  phone: String,
  location: String,
  github: String,
  linkedin: String,
  image: String
});

const Project = mongoose.model("Project", projectSchema, "projects"); // specify collection name
const PersonalInfo = mongoose.model("PersonalInfo", personalInfoSchema, "personalinfos");

// ===== Routes =====

// Get all projects
app.get("/project/all-projects", async (req, res) => {
  try {
    const allProjects = await Project.find().sort({ createdAt: -1 });
    res.json({ allProjects });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch projects", error: err });
  }
});

// Get personal info
app.get("/api/personal-info", async (req, res) => {
  try {
    const info = await PersonalInfo.findOne();
    res.json(info);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch personal info", error: err });
  }
});

// ===== Start Server =====
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
