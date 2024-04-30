import { education } from '../../_data/education';

// 교수님 학력
function Mobile_Section5() {
    return (
        <section className='relative w-full h-auto bg-section-gray'>
            <div className='relative font-roboto items-center text-start mt-8 ml-10 mr-10 pb-8 pt-2'>
                <div className='text-custom-navy font-semibold text-2xl tracking-widest border-b-2 border-custom-blue pb-3 mt-8 mb-2'>
                    <div>Education</div>
                </div>
                <div className='pt-4 pl-6'>
                    <ul className='list-disc text-sm'>
                        {education.map((item, index) => (
                            <li key={index} className='mb-2'>{item.period} {item.process}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Mobile_Section5;
