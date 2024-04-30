import { alumniData } from '../../_data/alumnuData';

// Alumni 부분
function DeskTop_Section7() {
    return (
        <section className='relative w-full h-[400px] left-0 right-0 bg-section-gray'>
            <div className='absolute h-[350px] w-[1000px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-roboto text-custom-navy'>
                <div className='absolute h-[50px] w-full border-b-2 border-custom-blue'>
                    <h2 className='absolute flex items-center text-3xl font-semibold tracking-widest'>Alumni</h2>
                </div>
                <div className='flex flex-row relative top-[50px]'>
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

export default DeskTop_Section7;
