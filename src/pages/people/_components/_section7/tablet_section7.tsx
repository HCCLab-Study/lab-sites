import { alumniData } from '../../_data/alumnuData';

// Alumni 부분
function Tablet_Section7() {
    return (
        <section className='relative w-full h-auto bg-section-gray pb-6'>
            <div className='relative h-[400px] font-roboto items-center text-start mt-6 ml-10 mr-10 pt-8'>
                <div className='text-custom-navy font-semibold text-3xl tracking-widest border-b-2 border-custom-blue pb-3 mt-3'>
                    <div>Alumni</div>
                </div>
                <div className='flex flex-row relative ml-6'>
                    <div className='flex-1'>
                        <h3 className='text-custom-blue font-semibold text-base py-4'>대학원생 (Graduate Researcher)</h3>
                        <ul className='list-disc list-inside text-sm pb-4'>
                            {alumniData.graduateResearchers.map((researcher, index) => (
                                <li key={index} className='mb-2'>{researcher.name} {researcher.period}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='flex-1'>
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

export default Tablet_Section7;
