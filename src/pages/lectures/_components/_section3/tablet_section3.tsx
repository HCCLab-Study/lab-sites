import { graduateCourse } from '../../_data/graduateCourse';

function Tablet_Section3() {
    return (
        <section className='relative w-full h-auto bg-section-gray'>
            <div className='relative font-roboto items-center text-start mt-12 ml-10 mr-10 pt-8'>
                <div className='text-custom-navy font-semibold text-3xl tracking-widest border-b-2 border-custom-blue pb-3 mt-4'>
                    <div>GRADUATE COURSEWORK (대학원)</div>
                </div>
                <div className='pt-4 pl-8 pb-10'>
                    <ul className='grid grid-cols-2 gap-10 list-disc'>
                        {graduateCourse.map((graduateCourse, index) => (
                            <li key={index} className='font-semibold pb-2 pr-2 pt-2 text-xl whitespace-pre-wrap'>
                                {graduateCourse.title}
                                <p className='text-font-gray text-base pt-6'>개설년도/학기: {graduateCourse.semester}</p>
                                <p className='text-font-gray text-base font-normal pt-2'>{graduateCourse.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Tablet_Section3;
