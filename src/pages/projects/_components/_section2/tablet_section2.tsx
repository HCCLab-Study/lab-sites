import Tablet_PopupComponent from '../_popup/tablet_popup'; // PopupComponent 컴포넌트 가져오기
import Project from '../../_data/Project'; // Project 인터페이스 가져오기
import { onGoingProjects } from '../../_data/onGoingProjects'; // 변경된 데이터 가져오기
import { usePopup } from '../../_hooks/usePopup';

// On-going Projects 부분
function Tablet_Section2() {
	const { showPopup, selectedProject, handlePopupOpen, handleClosePopup } = usePopup();

    return (
        <section className='relative w-full h-[400px]'>
            <div className='relative font-roboto items-center text-start mt-12 ml-10 mr-10'>
                <div className='text-custom-navy font-semibold text-3xl tracking-widest border-b-2 border-custom-blue pb-3 mt-4'>
                    <div>On-going Projects</div>
                </div>
                <div className='relative h-[300px] w-full top-[8px] p-2'>
                    <ul className='list-disc list-outside pb-4 ml-3 text-font-gray'>
                        {onGoingProjects.map((project: Project, index: number) => (
                            <li key={index} onClick={() => handlePopupOpen(project)} className='hover:underline cursor-pointer mt-3'>
                                {project.date} {project.title} (<b>{project.organization}</b>)
                            </li>
                        ))}
                    </ul>
                </div>
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

export default Tablet_Section2;
