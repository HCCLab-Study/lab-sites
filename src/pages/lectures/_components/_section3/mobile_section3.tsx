import { graduateCourse } from '../../_data/graduateCourse';

function Mobile_Section3() {
    return (
        <section className='relative w-full h-auto bg-section-gray'>
            <div className='relative font-roboto items-center text-start mt-14 ml-10 mr-10 pt-5'>
                <div className='text-custom-navy font-semibold text-2xl tracking-widest border-b-2 border-custom-blue pb-3 mt-8 mb-2'>
                    <div>GRADUATE COURSEWORK (대학원)</div>
                </div>
                <div className='pt-5 pl-6 pb-8'>
                    <ul className='grid grid-cols-1 gap-1 list-disc'>
                        {graduateCourse.map((graduateCourse, index) => (
                            <li key={index} className='font-semibold pb-5 text-lg whitespace-pre-wrap'>
                                {graduateCourse.title}
                                <p className='text-font-gray text-sm pt-4'>개설년도/학기: {graduateCourse.semester}</p>
                                <p className='text-font-gray text-sm font-normal pt-2'>{graduateCourse.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Mobile_Section3;
