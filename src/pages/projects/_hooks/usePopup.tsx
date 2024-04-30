import { useState } from 'react';
import Project from '../_data/Project';

export const usePopup = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const handlePopupOpen = (project: Project) => {
        setSelectedProject(project);
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return {
        showPopup,
        selectedProject,
        handlePopupOpen,
        handleClosePopup
    };
};
