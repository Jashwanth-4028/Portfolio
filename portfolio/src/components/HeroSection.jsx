import React, { useContext } from "react";
import {
    ArrowRight,
    Eye,
    Mail,
    Play,
    Github,
    Linkedin,
    Phone,
} from "lucide-react";
import { ProjectContext } from "../context/ProjectProvider";
import Loader from "./Loader";

const HeroSection = ({ scrollToSection }) => {
    const { personalInfo, loading } = useContext(ProjectContext);

    return (
        <div>
            {loading ? (
                <div className="flex justify-center items-center h-96">
                    <Loader />
                </div>
            ) : personalInfo ? (
                <section
                    id="home"
                    className="pt-20 sm:pt-24 min-h-screen flex items-center justify-center relative overflow-hidden"
                >
                    {/* Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>

                    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="animate-fade-in">
                            <div className="mb-8">
                                {/* Profile Image */}
                                <div className="relative inline-block sideDown">
                                    <img
                                        src={personalInfo.image}
                                        alt={personalInfo.name || "Profile Picture"}
                                        className="w-96 mx-auto"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Name & Role */}
                                {/* Name & Role */}
                                <div className="sideUp">
                                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                                        {personalInfo.name}
                                    </h1>
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                        {personalInfo.role}
                                    </h2>
                                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                        {personalInfo.tagline}
                                    </p>
                                </div>

                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                                <button
                                    type="button"
                                    onClick={() => scrollToSection("contact")}
                                    className="cursor-pointer group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3"
                                >
                                    <Mail size={20} aria-hidden="true" />
                                    Let's Connect
                                    <ArrowRight
                                        size={20}
                                        className="group-hover:translate-x-1 transition-transform duration-300"
                                        aria-hidden="true"
                                    />
                                </button>

                                <button
                                    type="button"
                                    onClick={() => scrollToSection("projects")}
                                    className="group border-2 cursor-pointer border-blue-600 text-blue-600 px-8 py-4 rounded-full font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3"
                                >
                                    <Eye size={20} aria-hidden="true" />
                                    View My Work
                                    <Play
                                        size={20}
                                        className="group-hover:translate-x-1 transition-transform duration-300"
                                        aria-hidden="true"
                                    />
                                </button>
                            </div>

                            {/* Social Links */}
                            <div className="flex items-center justify-center gap-4 mb-5">
                                <a
                                    href={personalInfo.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub Profile"
                                    className="group p-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 transition-all duration-300 transform hover:scale-105"
                                >
                                    <Github size={20} aria-hidden="true" className="text-white" />
                                </a>
                                <a
                                    href={personalInfo.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn Profile"
                                    className="group p-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 transition-all duration-300 transform hover:scale-105"
                                >
                                    <Linkedin
                                        size={20}
                                        aria-hidden="true"
                                        className="text-white"
                                    />
                                </a>
                                <a
                                    href={`tel:${personalInfo.phone}`}
                                    aria-label="Phone"
                                    className="group p-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 transition-all duration-300 transform hover:scale-105"
                                >
                                    <Phone size={20} aria-hidden="true" className="text-white" />
                                </a>
                                <a
                                    href={`mailto:${personalInfo.email}`}
                                    aria-label="Email"
                                    className="group p-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 transition-all duration-300 transform hover:scale-105"
                                >
                                    <Mail size={20} aria-hidden="true" className="text-white" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                <div className="flex justify-center items-center h-96">
                    <p className="text-red-600 text-lg font-medium">
                        Waking up server… please wait ⏳
                    </p>
                </div>
            )}
        </div>
    );
};

export default HeroSection;
