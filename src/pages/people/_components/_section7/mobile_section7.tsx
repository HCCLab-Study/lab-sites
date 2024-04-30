import { alumniData } from '../../_data/alumnuData';

// Alumni 부분
function Mobile_Section7() {
    return (
        <section className='relative w-full h-auto bg-section-gray'>
            <div className='relative font-roboto items-center text-start mt-4 ml-10 mr-10 pb-6 pt-2'>
                <div className='text-custom-navy font-semibold text-2xl tracking-widest border-b-2 border-custom-blue pb-3 mt-8 mb-2'>
                    <div>Alumni</div>
                </div>
                <div className='grid grid-cols-1 relative top-[10px] ml-4'>
                    <div>
                        <h3 className='text-custom-blue font-semibold text-base py-4'>대학원생 (Graduate Researcher)</h3>
                        <ul className='list-disc list-inside text-sm pb-4'>
                            {alumniData.graduateResearchers.map((researcher, index) => (
                                <li key={index} className='mb-2'>{researcher.name} {researcher.period}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-custom-blue font-semibold text-base py-4'>학부연구생 (Undergraduate Researcher)</h3>
                        <ul className='list-disc list-inside text-sm pb-4'>
                            {alumniData.undergraduateResearchers.map((researcher, index) => (
                                <li key={index} className='mb-2'>{researcher.name} {researcher.period}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Mobile_Section7;
