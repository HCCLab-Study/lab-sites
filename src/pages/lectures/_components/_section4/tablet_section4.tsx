import { undergraudateCourses } from '../../_data/undergraduateCourse';

function Tablet_Section4() {
    return (
        <section className='relative w-full h-auto'>
            <div className='relative font-roboto items-center text-start mt-12 ml-10 mr-10'>
                <div className='text-custom-navy font-semibold text-3xl tracking-widest border-b-2 border-custom-blue pb-3 mt-4'>
                    <div>UNDERGRADUATE COURSEWORK (학부)</div>
                </div>
                <div className='pt-4 pl-8 pb-10'>
                    <ul className='grid grid-cols-2 gap-10 list-disc'>
                        {undergraudateCourses.map((undergraudateCourses, index) => (
                            <li key={index} className='font-semibold pr-2 pt-2 pb-2 text-xl whitespace-pre-wrap'>
                                {undergraudateCourses.title}
                                <p className='text-font-gray text-base pt-6'>개설년도/학기: {undergraudateCourses.semester}</p>
                                <p className='text-font-gray text-base font-normal pt-2'>{undergraudateCourses.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Tablet_Section4;
