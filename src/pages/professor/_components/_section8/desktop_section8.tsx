import { awards } from '../../_data/awards';

// 교수님 수상 내역
function DeskTop_Section8() {
    return (
        <section className='relative w-full h-auto'>
            <div className='relative w-full max-w-[1000px] mx-auto py-10 font-roboto text-custom-navy'>
                <div className='border-b-2 border-custom-blue mb-6'>
                    <h2 className='flex items-center text-3xl font-semibold tracking-widest mb-3'>Awards</h2>
                </div>
                <ul className='list-disc pl-6'>
                    {awards.map((award, index) => (
                        <li key={index} className='mb-2'>{award.year} {award.award}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default DeskTop_Section8;
