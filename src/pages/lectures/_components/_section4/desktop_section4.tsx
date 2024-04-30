import { undergraudateCourses } from '../../_data/undergraduateCourse';

function DeskTop_Section4() {
    return (
        <section className='relative w-full h-auto'>
            <div className='relative w-full max-w-[1000px] m-auto pb-10 font-roboto text-custom-navy'>
                <div className='border-b-2 border-custom-blue mb-3 mt-1'>
                    <h2 className='flex items-center text-3xl font-semibold tracking-widest mb-3 pt-12'>UNDERGRADUATE COURSEWORK (학부)</h2>
                </div>
                <div className='pt-1 pl-12'>
                    <ul className='grid grid-cols-2 gap-16 list-disc'>
                        {undergraudateCourses.map((undergraudateCourses, index) => (
                            <li key={index} className='font-semibold p-4 pb-2 text-xl whitespace-pre-wrap'>
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

export default DeskTop_Section4;
