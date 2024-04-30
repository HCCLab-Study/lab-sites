import { awards } from '../../_data/awards';

// 교수님 수상 내역
function Mobile_Section8() {
    return (
        <section className='relative w-full h-auto'>
            <div className='relative font-roboto items-center text-start mt-1 pt-1 ml-10 mr-10 pb-10'>
                <div className='text-custom-navy font-semibold text-2xl tracking-widest border-b-2 border-custom-blue pb-3 mt-8 mb-2'>
                    <div>Awards</div>
                </div>
                <div className='pt-4 pl-6'>
                  <ul className='list-disc text-sm'>
                  {awards.map((award, index) => (
                            <li key={index} className='mb-2'>{award.year} {award.award}</li>
                        ))}
                  </ul>
                </div>
            </div>
        </section>
    );
}

export default Mobile_Section8;
