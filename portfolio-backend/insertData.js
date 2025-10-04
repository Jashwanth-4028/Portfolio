// insertData.js
const mongoose = require("mongoose");
require("dotenv").config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// ===== Schemas =====
const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  tech: [String],
  imagelink1: String,
  imagelink2: String,
  imagelink3: String,
  github: String,
  live: String,
  details: String,
  detailedDescription: String,
  features: [String],
  featured: { type: Boolean, default: false },
});

const personalInfoSchema = new mongoose.Schema({
  name: String,
  role: String,
  tagline: String,
  image: String,
  about: String,
  email: String,
  phone: String,
  location: String,
  github: String,
  linkedin: String
});

const Project = mongoose.model("Project", projectSchema);
const PersonalInfo = mongoose.model("PersonalInfo", personalInfoSchema);

// ===== Data to insert =====
const personalInfo = {
  name: "JASHWANTH G P",
  role: "MERN Stack Developer",
  tagline: "Building innovative web solutions with passion and precision",
  image: "/assets/images/jash_img.png", // your assets path
  about: "I’m a dedicated MERN Stack developer passionate about crafting responsive web applications that make life easier.",
  email: "jashnkl05@gmail.com",
  phone: "+91 9629108562",
  location: "Coimbatore, Tamilnadu.",
  github: "https://github.com/Jashwanth-4028",
  linkedin: "https://www.linkedin.com/in/jashwanth-g-p-32650330b/"
};

const projects = [
  {
    title: "Ecomart - MERN E-Commerce Platform",
    description: "Full-stack MERN e-commerce application with authentication, payments, and admin dashboard.",
    imagelink1: "/assets/images/e_commerce.jpg",
    imagelink2: "/assets/images/e_commerce1.png",
    imagelink3: "/assets/images/e_commerce2.png",
    tech: [
      "React.js",
      "Tailwind CSS",
      "Firebase Auth",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Razorpay"
    ],
    github: "https://github.com/Jashwanth-4028/E-Commerce",
    live: "https://jashwanth-ecomart.vercel.app/",
    details:
      "A complete MERN stack e-commerce platform with user authentication, product management, shopping cart, payments, and admin functionalities.",
    detailedDescription: `Ecomart is a modern full-stack e-commerce platform developed using the MERN stack. 
    The application allows users to browse collections, view detailed product pages, 
    add items to a personalized cart, and place secure online orders. 
    Admins can manage products, track orders, and maintain inventory through a dedicated dashboard.`,
    features: [
      "User authentication with Firebase (Email/Password + Google Sign-In)",
      "Persistent shopping cart linked to user account",
      "Dynamic collections page with category-based filtering",
      "Secure order placement with Razorpay payment gateway",
      "Admin dashboard with role-based access for managing products/orders",
      "Responsive UI optimized for all devices using Tailwind CSS",
      "Order & cart history stored in MongoDB"
    ],
    featured: true
  },
  {
    title: "Bulk Mailer",
    description: "Full-stack bulk email sender app with Excel upload and Nodemailer integration.",
    imagelink1: "/assets/images/mail.png",
    imagelink2: "/assets/images/mail2.png",
    imagelink3: "/assets/images/mail3.png",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "XLSX.js", "Nodemailer", "JavaScript"],
    github: "https://github.com/Jashwanth-4028/bulk-mail",
    live: "https://bulk-mail-theta.vercel.app/",
    details: "Bulk email sender with Excel parsing, real-time feedback, and secure email auth.",
    detailedDescription: `A full-stack bulk mailer tool allowing users to upload Excel sheets with email lists and send personalized emails using Nodemailer.`,
    features: [
      "Upload Excel (XLSX) files to extract email addresses",
      "Secure sender credentials with MongoDB storage",
      "Bulk email sending via Nodemailer backend",
      "Real-time success/failure alerts with React Toastify",
      "Email preview and dynamic subject support"
    ],
    featured: false
  },
  {
    title: "Weather Dashboard",
    description: "Responsive weather app with OpenWeatherMap API and search history tracking.",
    imagelink1: "/assets/images/weather.png",
    imagelink2: "/assets/images/weather2.png",
    imagelink3: "/assets/images/weather3.png",
    tech: ["React.js", "Vite", "Tailwind CSS", "Axios", "OpenWeatherMap API","JavaScript"],
    github: "https://github.com/Jashwanth-4028/Weather",
    live: "https://jashwanth-4028.github.io/Weather/",
    details: "Weather forecasting app with real-time updates, search history, and responsive UI.",
    detailedDescription: `A weather dashboard app that fetches real-time data from the OpenWeatherMap API using Axios and displays city-specific weather information.`,
    features: [
      "Real-time weather updates using OpenWeatherMap API",
      "Search city with recent search history",
      "Responsive design with Tailwind CSS",
      "State management via React Context API",
      "Displays temp, humidity, wind, and error handling"
    ],
    featured: false
  }
];

// ===== Insert data =====
const insertData = async () => {
  try {
    await Project.deleteMany({});
    await PersonalInfo.deleteMany({});

    await PersonalInfo.create(personalInfo);
    await Project.insertMany(projects);

    console.log("Data inserted successfully!");
    mongoose.connection.close();
  } catch (err) {
    console.error(err);
  }
};

insertData();
