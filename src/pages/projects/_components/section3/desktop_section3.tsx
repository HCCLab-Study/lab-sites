import DeskTop_PopupComponent from '../_popup/desktop_popup'; // PopupComponent 컴포넌트 가져오기
import Project from '../../_data/Project'; // Project 인터페이스 가져오기
import { finishedProjects } from '../../_data/finishedProjects'; // 변경된 데이터 가져오기
import { usePopup } from '../../_hooks/usePopup';

// Finished Projects부분
function DeskTop_Section3() {
	const { showPopup, selectedProject, handlePopupOpen, handleClosePopup } = usePopup();
    return (
        <section className='relative w-full h-auto'>
            <div className='relative w-full max-w-[1000px] m-auto pb-10 font-roboto text-custom-navy'>
                <div className='border-b-2 border-custom-blue mb-6 mt-12'>
                    <h2 className='flex items-center text-3xl font-semibold tracking-widest mb-3'>Finished Projects</h2>
                </div>
                <div className='relative pt-1'>
                    <ul className='list-disc list-outside pb-4 text-font-gray pl-6'>
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
