import React, { useContext } from "react";
import { Code, Zap } from "lucide-react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { ProjectContext } from "../context/ProjectProvider";
import Loader from "./Loader";

const About = () => {
  const [ref, isVisible] = useScrollAnimation();
  const { personalInfo, loading } = useContext(ProjectContext);

  return (
    <div>
      <section
        id="about"
        ref={ref}
        className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      >
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div
            className={`text-center mb-16 ${
              isVisible ? "animate-up" : "opacity-0"
            }`}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {personalInfo?.tagline ||
                "I love crafting digital products with clean, scalable code."}
            </p>
          </div>

         {/* Content */}
{loading ? (
  <div className="flex justify-center items-center h-96">
    <Loader />
  </div>
) : personalInfo ? (
  <div className="grid lg:grid-cols-2 gap-16 items-center">
    {/* Left: About Text */}
    <div
      className={`space-y-8 p-6 rounded-2xl shadow-md bg-white ${
        isVisible ? "animate-left" : "opacity-0"
      }`}
    >
      <p className="text-lg text-gray-700 leading-relaxed">
        {personalInfo.about ||
          "I am a MERN Stack Developer passionate about building scalable web applications."}
      </p>

      <div className="grid grid-cols-2 place-items-center">
        {/* Clean Code */}
        <div className="p-4 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <Code className="text-white" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Clean Code</h3>
              <p className="text-sm text-gray-600">Quality First</p>
            </div>
          </div>
        </div>

        {/* Fast Learning */}
        <div className="p-4 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
              <Zap className="text-white" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Fast Learning</h3>
              <p className="text-sm text-gray-600">Always Growing</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Right: Image */}
    <div className={`${isVisible ? "animate-right" : "opacity-0"}`}>
      <img
        src={personalInfo.image || "/default-avatar.png"}
        alt={personalInfo.name || "Portfolio owner"}
        loading="lazy"
        className="w-full md:w-[70%] h-96 mx-auto rounded-2xl object-cover shadow-lg"
      />
    </div>
  </div>
) : (
  <div className="flex justify-center items-center h-96">
    <p className="text-gray-500 text-lg">
      Waking up server… please wait ⏳
    </p>
  </div>
)}
