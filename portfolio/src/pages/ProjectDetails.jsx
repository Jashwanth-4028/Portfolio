import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    ArrowLeft,
    ExternalLink,
    Github,
    Star,
    Calendar,
    Code,
    ChevronLeft,
    ChevronRight,
    Home,
    Play
} from 'lucide-react';
import { ProjectContext } from '../context/ProjectProvider';
import Loader from '../components/Loader';

const ProjectDetails = () => {
    const { projects, loading } = useContext(ProjectContext);
    const { id } = useParams();
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [project, setProject] = useState(null);

    useEffect(() => {
        if (!projects.length) return;

        const foundProject = projects.find(p => String(p._id) === id);
        if (foundProject) {
            const images = [foundProject.imagelink1, foundProject.imagelink2, foundProject.imagelink3].filter(Boolean);
            setProject({ ...foundProject, images });
        } else {
            navigate('/');
        }
    }, [id, projects, navigate]);

    const handleBack = () => navigate('/');

    const nextImage = () => {
        setCurrentImageIndex(prev =>
            prev === project.images.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex(prev =>
            prev === 0 ? project.images.length - 1 : prev - 1
        );
    };

    if (loading) return <Loader />;

    if (!project) return null;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-6 py-4">
                    <nav className="flex justify-between items-center">
                        <button
                            onClick={handleBack}
                            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            <ArrowLeft size={18} />
                            <span>Back</span>
                        </button>
                        <button
                            onClick={() => navigate('/')}
                            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            <Home size={18} />
                            <span>Home</span>
                        </button>
                    </nav>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-6 py-8">
                {/* Hero Section */}
                <div className="mb-12">
                    {project.featured && (
                        <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                            <Star size={14} />
                            Featured
                        </div>
                    )}

                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6 leading-tight">
                        {project.title || 'Untitled Project'}
                    </h1>

                    <p className="text-xl text-gray-600 mb-8 max-w-3xl">
                        {project.description || 'No description available.'}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 mb-12">
                        {project.live && (
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                            >
                                <Play size={18} />
                                Live Demo
                                <ExternalLink size={16} />
                            </a>
                        )}

                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                            >
                                <Github size={18} />
                                Source Code
                                <ExternalLink size={16} />
                            </a>
                        )}

                    </div>
                </div>

                {/* Image Gallery */}
                {project.images?.length > 0 && (
                    <div className="mb-12">
                        <div className="relative bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                            <div className="relative h-80 md:h-96">
                                <img
                                    src={project.images[currentImageIndex]}
                                    alt={project.title ? `${project.title} - Image ${currentImageIndex + 1}` : `Project Image ${currentImageIndex + 1}`}
                                    className="w-full h-full object-contain"
                                />

                                {project.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevImage}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-md hover:bg-white transition-colors"
                                        >
                                            <ChevronLeft size={20} />
                                        </button>
                                        <button
                                            onClick={nextImage}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-md hover:bg-white transition-colors"
                                        >
                                            <ChevronRight size={20} />
                                        </button>
                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                            {project.images.map((_, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => setCurrentImageIndex(index)}
                                                    className={`rounded-full transition-all ${index === currentImageIndex
                                                            ? 'bg-white w-6 h-2'
                                                            : 'bg-white/60 w-2 h-2 hover:bg-white/80'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Technologies Section */}
                {project.tech?.length > 0 && (
                    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <Code size={24} className="text-blue-600" />
                            Technologies Used
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {project.tech.map((tech, index) => (
                                <span
                                    key={index}
                                    className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-medium border border-blue-200"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="space-y-8">
                    {/* Project Overview */}
                    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            Project Overview
                        </h2>
                        <div className="prose prose-gray max-w-none">
                            <p className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">
                                {project.detailedDescription || 'No detailed description available.'}
                            </p>
                        </div>
                    </div>

                    {/* Key Features */}
                    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            Key Features
                        </h2>
                        {project.features?.length > 0 ? (
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {project.features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100 hover:bg-gray-100 transition-colors"
                                    >
                                        <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                                        <span className="text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-600">No features listed.</p>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ProjectDetails;
