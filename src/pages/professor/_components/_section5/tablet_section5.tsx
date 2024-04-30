import { education } from '../../_data/education';

// 교수님 학력
function Tablet_Section5() {
    return (
        <section className='relative w-full h-auto bg-section-gray'>
            <div className='relative font-roboto items-center text-start mt-12 ml-10 mr-10 mb-2 pt-8 pb-8'>
                <div className='text-custom-navy font-semibold text-3xl tracking-widest border-b-2 border-custom-blue pb-3 mt-4'>
                    <div>Education</div>
                </div>
                <div className='pt-6 pl-6'>
                    <ul className='list-disc'>
                        {education.map((item, index) => (
                            <li key={index} className='mb-2'>{item.period} {item.process}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Tablet_Section5;
