import { undergraudateCourses } from '../../_data/undergraduateCourse';

function Mobile_Section4() {
    return (
        <section className='relative w-full h-auto left-0 right-0'>
            <div className='relative font-roboto items-center text-start mt-14 ml-10 mr-10'>
                <div className='text-custom-navy font-semibold text-2xl tracking-widest border-b-2 border-custom-blue pb-3 mt-8 mb-2'>
                    <div>UNDERGRADUATE COURSEWORK (학부)</div>
                </div>
                <div className='pt-5 pl-6 pb-8'>
                    <ul className='grid grid-cols-1 gap-1 list-disc'>
                        {undergraudateCourses.map((undergraudateCourses, index) => (
                            <li key={index} className='font-semibold pb-5 text-lg whitespace-pre-wrap'>
                                {undergraudateCourses.title}
                                <p className='text-font-gray text-sm pt-4'>개설년도/학기: {undergraudateCourses.semester}</p>
                                <p className='text-font-gray text-sm font-normal pt-2'>{undergraudateCourses.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Mobile_Section4;
