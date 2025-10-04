import React from "react";
import { Calendar, Award, BookOpen } from "lucide-react";
import { education } from "../assets/data";

const Education = () => {
  return (
    <div>
      <section
        id="education"
        aria-labelledby="education-title"
        className="py-24 bg-gray-50 relative overflow-hidden"
      >
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-16 animate-fade-in">
            <h2
              id="education-title"
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              My academic journey and the foundations that shaped my technical expertise
            </p>
          </div>

          {/* Education Cards */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20"
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  {/* Left: Education info */}
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <BookOpen aria-hidden="true" className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {edu.degree}
                        </h3>
                        <p className="text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                          {edu.institution}
                        </p>
                      </div>
                    </div>

                    {edu.description && (
                      <p className="text-gray-600 leading-relaxed mb-4">{edu.description}</p>
                    )}
                  </div>

                  {/* Right: Dates & CGPA */}
                  <div className="flex flex-col sm:flex-row lg:flex-col gap-4 lg:text-right">
                    <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
                      <Calendar aria-hidden="true" className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-semibold text-blue-600">{edu.year}</span>
                    </div>

                    {edu.cgpa && (
                      <div className="flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full">
                        <Award aria-hidden="true" className="w-4 h-4 text-purple-600" />
                        <span className="text-sm font-semibold text-purple-600">
                         {edu.cgpa}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
