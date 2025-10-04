import React, { useState, useEffect } from 'react';
import { navItems } from '../assets/data';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Skills from '../components/Skills';
import { toast } from 'react-toastify';

const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const navbarHeight = 80; // match your navbar
            const y = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            window.scrollTo({ top: y, behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };


    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://getform.io/f/aqoeyjza', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                toast.error('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error(error);
            toast.error('Something went wrong. Please try again.');
        }
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY + 80; 
            let current = navItems[0].id; 

            for (let i = navItems.length - 1; i >= 0; i--) {
                const section = document.getElementById(navItems[i].id);
                if (section && section.offsetTop <= scrollY) {
                    current = navItems[i].id;
                    break;
                }
            }

            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
            <HeroSection scrollToSection={scrollToSection} />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Contact
                formData={formData}
                handleFormSubmit={handleFormSubmit}
                handleInputChange={handleInputChange}
            />
            <Footer />
        </div>
    );
};

export default Home;
