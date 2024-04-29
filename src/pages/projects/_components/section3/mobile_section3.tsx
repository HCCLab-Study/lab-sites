import { useState } from 'react';
import { finishedProjects } from '../../_data/finishedProjects';
import Mobile_PopupComponent from '../_popup/mobile_popup';
import { usePopup } from '../../_hooks/usePopup';

function Mobile_Section3() {
	const { showPopup, selectedProject, handlePopupOpen, handleClosePopup } = usePopup();
    const [visibleCount, setVisibleCount] = useState(6);    // 처음에 보여줄 프로젝트 수 6개


    // 더보기 클릭하면 전체 데이터 펼침
    const handleShowMoreProjects = () => {
        setVisibleCount(finishedProjects.length); 
    };

    return (
        <section className='relative w-full h-auto bg-section-gray'>
            <div className='font-roboto text-start mt-8 ml-10 mr-10 pb-4'>
                <div className='text-custom-navy font-semibold text-2xl tracking-widest border-b-2 border-custom-blue pb-3 mt-8 mb-8 pt-12'>
                    <div>Finished Projects</div>
                </div>
                <ul className='list-disc list-outside pb-4 pl-4 text-font-gray text-sm'>
                    {finishedProjects.slice(0, visibleCount).map((project, index) => (
                        <li key={index} onClick={() => handlePopupOpen(project)} className='hover:underline cursor-pointer mt-3'>
                            {project.date} {project.title} (<b>{project.organization}</b>)
                        </li>
                    ))}
                </ul>
                {visibleCount < finishedProjects.length && (
                    <button onClick={handleShowMoreProjects} className='p-2 mt-2 mb-2 text-white bg-gray-500 opacity-80 rounded-sm hover:bg-gray-600 transition-colors'>
                        프로젝트 정보 더보기
                    </button>
                )}
            </div>
            {showPopup && selectedProject && (
                <Mobile_PopupComponent
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

export default Mobile_Section3;
