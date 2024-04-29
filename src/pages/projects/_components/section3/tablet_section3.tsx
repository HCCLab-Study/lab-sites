import { useState } from 'react';
import Tablet_PopupComponent from '../_popup/tablet_popup'; // PopupComponent 컴포넌트 가져오기
import Project from '../../_data/Project'; // Project 인터페이스 가져오기
import { finishedProjects } from '../../_data/finishedProjects'; // 변경된 데이터 가져오기
import { usePopup } from '../../_hooks/usePopup';

// Finished Projects부분
function Tablet_Section3() {
	const { showPopup, selectedProject, handlePopupOpen, handleClosePopup } = usePopup();
    const [visibleCount, setVisibleCount] = useState(13);

    // 더보기 클릭하면 전체 데이터 펼침
    const handleShowMoreProjects = () => {
        setVisibleCount(finishedProjects.length);
    };

    return (
        <section className='relative w-full	h-auto left-0 right-0 bg-section-gray'>
            <div className='relative font-roboto items-center text-start mt-4 ml-10 mr-10 pb-4'>
                <div className='text-custom-navy font-semibold text-3xl tracking-widest border-b-2 border-custom-blue pb-3 mt-4 pt-10'>
                    <div>Finished Projects</div>
                </div>
                <ul className='list-disc list-outside pb-4 ml-2 text-font-gray'>
                    {finishedProjects.slice(0, visibleCount).map((project: Project, index: number) => (
                        <li key={index} onClick={() => handlePopupOpen(project)} className='hover:underline cursor-pointer mt-3'>
                            {project.date} {project.title} (<b>{project.organization}</b>)
                        </li>
                    ))}
                </ul>
                {visibleCount < finishedProjects.length && (
                    <button onClick={handleShowMoreProjects} className='p-2 mt-2 mb-2 text-white bg-gray-500 opacity-80 rounded-sm hover:bg-gray-800 transition-colors'>
                        프로젝트 정보 더보기
                    </button>
                )}
            </div>
            {showPopup && selectedProject && (
                <Tablet_PopupComponent
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
export default Tablet_Section3;
