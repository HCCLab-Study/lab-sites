import { workExperience } from '../../_data/workExperience';

// 교수님 연구 경험
function Mobile_Section4() {

    return (
        <section className='relative w-full h-auto'>
            <div className='relative font-roboto items-center text-start mt-1 pt-1 ml-10 mr-10 pb-6'>
                <div className='text-custom-navy font-semibold text-2xl tracking-widest border-b-2 border-custom-blue pb-3 mt-8 mb-2'>
                    <div>Work Experience</div>
                </div>
                <div className='pt-4 pl-6'>
                  <ul className='list-disc text-sm'>
                  {workExperience.map((item, index) => (
                            <li key={index} className='mb-2'>{item.period} {item.role}</li>
                        ))}
                  </ul>
                </div>
            </div>
        </section>
    );
}

export default Mobile_Section4;
