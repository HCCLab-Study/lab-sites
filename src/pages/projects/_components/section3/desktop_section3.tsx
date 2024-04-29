import DeskTop_PopupComponent from '../_popup/desktop_popup'; // PopupComponent 컴포넌트 가져오기
import Project from '../../_data/Project'; // Project 인터페이스 가져오기
import { finishedProjects } from '../../_data/finishedProjects'; // 변경된 데이터 가져오기
import { usePopup } from '../../_hooks/usePopup';

// Finished Projects부분
function DeskTop_Section3() {
	const { showPopup, selectedProject, handlePopupOpen, handleClosePopup } = usePopup();
    return (
        <section className='relative w-full	h-[1050px] left-0 right-0 bg-section-gray'>
            <div className='absolute h-[950px] w-[1000px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-roboto text-custom-navy'>
                <div className='absolute h-[50px] w-full border-b-2 border-custom-blue'>
                    <h2 className='absolute flex items-center text-3xl font-semibold tracking-widest'>Finished Projects</h2>
                </div>
                <div className='absolute h-[300px] w-[1000px] top-[50px] p-5'>
                    <ul className='list-disc list-outside pb-4 text-font-gray'>
                        {finishedProjects.map((project: Project, index: number) => (
                            <li key={index} onClick={() => handlePopupOpen(project)} className='hover:underline cursor-pointer'>
                                {project.date} {project.title} (<b>{project.organization}</b>)
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {showPopup && selectedProject && (
                <DeskTop_PopupComponent
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
export default DeskTop_Section3;
