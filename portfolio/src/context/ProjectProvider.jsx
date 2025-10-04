    import React, { createContext, useEffect, useState } from 'react';
    import axios from 'axios';

    export const ProjectContext = createContext();

    const ProjectProvider = ({ children }) => {
    const baseURL = import.meta.env.VITE_API_BASE_URL;

    const [projects, setProjects] = useState([]);
    const [personalInfo, setPersonalInfo] = useState(null);

    const [projectsLoading, setProjectsLoading] = useState(false);
    const [personalLoading, setPersonalLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setProjectsLoading(true);
        try {
        const res = await axios.get(`${baseURL}/project/all-projects`);
        setProjects(res.data.allProjects);
        } catch (err) {
        console.error(err);
        setError('Failed to fetch projects');
        } finally {
        setProjectsLoading(false);
        }
    };

    const fetchPersonalInfo = async () => {
        setPersonalLoading(true);
        try {
        const res = await axios.get(`${baseURL}/api/personal-info`);
        setPersonalInfo(res.data);
        } catch (err) {
        console.error("Error fetching personal info", err);
        setError('Failed to fetch personal info');
        } finally {
        setPersonalLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
        fetchPersonalInfo();
    }, []);

    return (
        <ProjectContext.Provider
        value={{
            projects,
            personalInfo,
            projectsLoading,
            personalLoading,
            error,
            fetchData,
            fetchPersonalInfo
        }}
        >
        {children}
        </ProjectContext.Provider>
    );
    };

    export default ProjectProvider;
