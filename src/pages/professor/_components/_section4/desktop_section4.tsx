import { workExperience } from '../../_data/workExperience';

// 교수님 연구 경험
function DeskTop_Section4() {

    return (
        <section className='relative w-full h-auto'>
            <div className='relative w-full max-w-[1000px] mx-auto py-10 font-roboto text-custom-navy'>
                <div className='border-b-2 border-custom-blue mb-6'>
                    <h2 className='flex items-center text-3xl font-semibold tracking-widest mb-3'>Work Experience</h2>
                </div>
                  <ul className='list-disc pl-6'>
                  {workExperience.map((item, index) => (
                            <li key={index} className='mb-2'>{item.period} {item.role}</li>
                        ))}
                  </ul>
            </div>
        </section>
    );
}

export default DeskTop_Section4;
