import React, { useState } from 'react';
import PopupComponent from './Popup'; // PopupComponent 컴포넌트 가져오기
import Project from '../_data/Project'; // Project 인터페이스 가져오기
import onGoingProjects from '../_data/onGoingProjects'; // 변경된 데이터 가져오기

// On-going Projects 부분
function Section2() {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const handlePopupOpen = (project: Project) => {
        setSelectedProject(project);
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <section className="relative w-full h-[350px] left-0 right-0">
            <div className="absolute h-[250px] w-[1000px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-roboto text-custom-navy">
                <div className="absolute h-[50px] w-full border-b-2 border-custom-blue">
                    <h2 className="absolute flex items-center text-3xl font-semibold tracking-widest">On-going Projects</h2>
                </div>
                <div className="absolute h-[300px] w-[1000px] top-[50px] p-5">
                    <ul className="list-disc list-outside pb-4 text-font-gray">
                        {onGoingProjects.map((project: Project, index: number) => (
                            <li key={index} onClick={() => handlePopupOpen(project)} className="hover:underline cursor-pointer">
                                {project.date} {project.title} (<b>{project.organization}</b>)
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {showPopup && selectedProject && (
                <PopupComponent
                    onClose={handleClosePopup}
                    title={selectedProject.title}
                    date={selectedProject.date}
                    organization={selectedProject.organization}
                    content={selectedProject.content}
                />
            )}
        </section>
    );
}

export default Section2;
