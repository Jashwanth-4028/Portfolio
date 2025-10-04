import react_img from '../assets/images/react native_react_icon.png';
import html_img from '../assets/images/html_html5_icon.png';
import css_img from '../assets/images/css.png';
import js_img from '../assets/images/javascript_icon.png';
import node_img from '../assets/images/node_icon.png';
import express_img from '../assets/images/expressjs.png';
import mongo_img from '../assets/images/mongodb_icon.png';
import git_img from '../assets/images/git_icon.png';
import github_img from '../assets/images/github_icon.png';
import vs_img from '../assets/images/vscode_fill_icon.png';
import postman_img from '../assets/images/postman_icon.png';
import tailwind_img from '../assets/images/Tailwind.png';
import firebase_img from '../assets/images/firebase.png';
import canva_img from '../assets/images/canva.png';
import rest_img from '../assets/images/rest_api.png';
import jash_img from '../assets/jash.png';
import mail from '../assets/mail.png';
import mail2 from '../assets/mail2.png';
import mail3 from '../assets/mail3.png';
import weather from '../assets/weather.jpeg';
import weather2 from '../assets/weather2.png';
import weather3 from '../assets/weather3.png';
import ecomart from '../assets/e_commerce.jpg';
import ecomart2 from '../assets/e_commerce1.png';
import ecomart3 from '../assets/e_commerce2.png';

export const personalInfo = {
  name: "JASHWANTH G P",
  role: "MERN Stack Developer",
  tagline: "Building innovative web solutions with passion and precision",
  image: jash_img,
  about: `I’m a dedicated MERN Stack developer passionate about crafting responsive web applications that make life easier.`,
  email: "jashnkl05@gmail.com",
  phone: "+91 9629108562",
  location: "Coimbatore, Tamilnadu.",
  github: "https://github.com/Jashwanth-4028",
  linkedin: "https://www.linkedin.com/in/jashwanth-g-p-32650330b/"
};

export const skills = {
  frontend: [
    { name: "HTML", img: html_img },
    { name: "CSS", img: css_img },
    { name: "JavaScript", img: js_img },
    { name: "React Js", img: react_img },
    { name: "Tailwind CSS", img: tailwind_img },
  ],
  backend: [
    { name: "Node.js", img: node_img },
    { name: "Express", img: express_img },
    { name: "MongoDB", img: mongo_img },
    { name: "Rest API", img: rest_img }
  ],
  tools: [
    { name: "Git", img: git_img },
    { name: "GitHub", img: github_img },
    { name: "Postman", img: postman_img },
    { name: "Firebase", img: firebase_img },
    { name: "VS Code", img: vs_img },
    { name: "Canva", img: canva_img }
  ]
};
export const projects = [
   {
    id: 1,
    title: "EcoMart – Sustainable E-Commerce Platform",
    description: "Eco-friendly e-commerce site with product browsing, secure payments, user authentication, and admin management.",
    image: ecomart,
    image2: ecomart2,
    image3: ecomart3,
    tech: [
      "React.js", "Tailwind CSS", "Firebase Auth", "Node.js",
      "Express.js", "MongoDB", "Razorpay"
    ],
    github: "https://github.com/Jashwanth-4028/E-Commerce",
    live: "https://jashwanth-ecomart.vercel.app/",
    details: "Full-stack eco-friendly e-commerce site with product catalog, user authentication, order history, and Razorpay payment integration.",
    detailedDescription: `EcoMart is a modern full-stack sustainable e-commerce platform designed to promote eco-friendly products and deliver a seamless shopping experience. 
  The application allows users to browse curated product categories, view detailed pages with multiple images, manage a personalized cart, and place secure online orders. 
  Admins can manage products, orders, and customer queries through a dedicated dashboard.
  
  EcoMart supports category-based browsing (e.g. home essentials, personal care, reusable items), product filtering, and dynamic product displays. 
  With Firebase Authentication, users can sign in via email/password or Google, and their cart persists across sessions. 
  Razorpay integration ensures secure checkout, while MongoDB stores product, order, and user details. 
  The admin dashboard provides order tracking, product management, and contact message viewing.`,
    features: [
      "Product catalog with categories and detailed product pages",
      "Firebase authentication (Email/Password + Google Sign-In)",
      "Shopping cart and order management with MongoDB",
      "Order placement & Razorpay payment gateway integration",
      "Admin dashboard with role-based access to manage products and orders",
      "Contact form with message storage for admin view",
      "Responsive UI optimized for mobile and desktop using Tailwind CSS",
      "User order history retrieval by email"
    ],
    featured: true
  },
  {
    id: 2,
    title: "Bulk Mailer",
    description: "Full-stack bulk email sender app with Excel upload and Nodemailer integration.",
    image: mail,
    image2: mail2,
    image3: mail3,
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "XLSX.js", "Nodemailer", "JavaScript"],
    github: "https://github.com/Jashwanth-4028/bulk-mail",
    live: "https://bulk-mail-theta.vercel.app/",
    details: "Bulk email sender with Excel parsing, real-time feedback, and secure email auth.",
    detailedDescription: `A full-stack bulk mailer tool allowing users to upload Excel sheets with email lists and send personalized emails using Nodemailer.

The frontend is built using React.js, offering a form for uploading spreadsheets and collecting email credentials. 
The backend uses Express.js and NodeMailer to dispatch bulk emails, with real-time status updates and alert notifications.`,
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
  id: 3,
    title: "Weather Dashboard",
    description: "Responsive weather app with OpenWeatherMap API and search history tracking.",
    image: weather,
    image2: weather2,
    image3: weather3,
    tech: ["React.js", "Vite", "Tailwind CSS", "Axios", "OpenWeatherMap API", "JavaScript"],
    github: "https://github.com/Jashwanth-4028/Weather",
    live: "https://jashwanth-4028.github.io/Weather/",
    details: "Weather forecasting app with real-time updates, search history, and responsive UI.",
    detailedDescription: `A weather dashboard app that fetches real-time data from the OpenWeatherMap API using Axios and displays city-specific weather information including temperature, humidity, wind speed, and more.

Built with React + Vite for fast loading, Tailwind CSS for styling, and Context API for managing global state and search history.`,
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

export const education = [
    {
      degree: "B.E Computer Science and Engineering",
      institution: "Sri Ramakrishna Institute of Technology",      
      year: "2023-2027",
      cgpa: "CGPA: 8.6/10",
      description: "Focused on Core Computer Science and Emerging Technologies"
    },
    {
      degree: " Higher Secondary Certificate (HSC).",
      institution: "Trinity International School(CBSE)",
      year: "2023",
      cgpa: "Percentage: 78%",
      description: "Completed higher secondary education with a focus on core science and mathematics subjects."
    }
  ];


 export const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];