import { graduateCourse } from '../../_data/graduateCourse';

function DeskTop_Section3() {
    return (
        <section className='relative w-full h-[1200px] left-0 right-0 bg-section-gray'>
            <div className='absolute h-[1100px] w-[1000px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-roboto text-custom-navy'>
                <div className='absolute h-[50px] w-full border-b-2 border-custom-blue'>
                    <h2 className='absolute flex items-center text-3xl font-semibold tracking-widest'>GRADUATE COURSEWORK (대학원)</h2>
                </div>
                <div className='pt-16 pl-12'>
                    <ul className='grid grid-cols-2 gap-16 list-disc'>
                        {graduateCourse.map((graduateCourse, index) => (
                            <li key={index} className='font-semibold p-4 pb-2 text-xl whitespace-pre-wrap'>
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

export default DeskTop_Section3;