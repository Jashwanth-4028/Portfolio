import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Star, Eye } from "lucide-react";
import { ProjectContext } from "../context/ProjectProvider";
import Loader from "./Loader";

const Projects = () => {
  const { projects, loading } = useContext(ProjectContext);
  const navigate = useNavigate();

  const handleViewDetails = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  if (loading) {
    return (
      <section id="projects" className="py-24 bg-white">
        <div className="flex justify-center items-center h-64">
          <Loader />
        </div>
      </section>
    );
  }

  if (!projects || projects.length === 0) {
    return (
      <section id="projects" className="py-24 bg-white">
        <div className="flex justify-center items-center h-64">
          <p className="text-red-600 text-lg font-medium">
            Error fetching projects. Please try again later.
          </p>
        </div>
      </section>
    );
  }

  // Separate featured project from others
  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Some of my most recent work that I'm proud of
          </p>
        </div>

        {/* Featured Project */}
        {featuredProject && (
          <div
            key={`featured-${featuredProject._id}`}
            className="mb-12 relative overflow-hidden rounded-3xl shadow-xl"
          >
            <img
              src={featuredProject.imagelink1}
              alt={featuredProject.title || "Project Image"}
              loading="lazy"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-black/30 p-8 flex flex-col justify-end rounded-3xl">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Star className="text-yellow-300" size={20} />
                  <span className="text-white/80 text-sm font-medium">
                    Featured Project
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">
                  {featuredProject.title}
                </h3>
                <p className="hidden md:block text-white/90 text-lg mb-6">
                  {featuredProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {featuredProject.tech.slice(0, 5).map((tech, i) => (
                    <span
                      key={`featured-tech-${i}`}
                      className="bg-white/20 text-white text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => handleViewDetails(featuredProject._id)}
                  className="cursor-pointer bg-white/20 text-white px-4 py-2 rounded-full flex items-center gap-2 backdrop-blur-sm"
                >
                  <Eye size={18} /> View Details
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-8">
          {otherProjects.map((project, index) => (
            <div
              key={`project-${project._id}-${index}`}
              className="relative overflow-hidden rounded-3xl shadow-xl"
            >
              <img
                src={project.imagelink1}
                alt={project.title || "Project Image"}
                loading="lazy"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black/20 p-8 flex flex-col justify-end rounded-3xl">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-white/80 text-sm font-medium">
                      Project
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="hidden md:block text-white/90 text-lg mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 5).map((tech, i) => (
                      <span
                        key={`tech-${project.id}-${i}`}
                        className="bg-white/20 text-white text-sm px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => handleViewDetails(project._id)}
                    className="cursor-pointer bg-white/20 text-white px-4 py-2 rounded-full flex items-center gap-2 backdrop-blur-sm"
                  >
                    <Eye size={18} /> View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;