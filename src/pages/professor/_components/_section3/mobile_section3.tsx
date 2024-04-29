import { researchInterests } from '../../_data/researchInterest';

// 교수님 연구 분야
function Mobile_Section3() {
    return (
        <section className='relative w-full h-auto bg-section-gray'>
            <div className='relative font-roboto items-center text-start mt-8 ml-10 mr-10 pb-6 pt-2'>
                <div className='text-custom-navy font-semibold text-2xl tracking-widest border-b-2 border-custom-blue pb-3 mt-8 mb-2'>
                    <div>Research Interests</div>
                </div>
                <div className='pt-4 pl-6'>
                <ul className='list-disc text-sm'>
                        {researchInterests.map((interest, index) => (
                            <li key={index} className='mb-2'>{interest}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Mobile_Section3;
