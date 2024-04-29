import { education } from '../../_data/education';

// 교수님 학력
function DeskTop_Section5() {
    return (
        <section className='relative w-full h-auto bg-section-gray'>
            <div className='relative w-full max-w-[1000px] mx-auto py-10 font-roboto text-custom-navy'>
                <div className='border-b-2 border-custom-blue mb-6'>
                    <h2 className='flex items-center text-3xl font-semibold tracking-widest mb-3'>Education</h2>
                </div>
                <ul className='list-disc pl-6'>
                    {education.map((item, index) => (
                        <li key={index} className='mb-2'>{item.period} {item.process}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default DeskTop_Section5;
