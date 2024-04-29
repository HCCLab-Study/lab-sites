import { introduction, researchScope, applicationDomain, closing } from '../../_data/home_section2';

function Mobile_Section2() {
    return (
        <section className='relative w-[110%] h-auto flex justify-center'>
            <div className='relative font-roboto items-center text-start mt-8 ml-10 mr-20 pb-2'>
                <div className='text-custom-navy font-semibold text-2xl tracking-widest border-b-2 border-custom-blue pb-3 mt-8 mb-8'>
                    {introduction.title}
                </div>
                <div className='text-custom-gray tracking-tight leading-8 mb-2 text-sm'>
                    {introduction.description}
                </div>
                <div className='flex flex-col gap-y-10 relative top-[45px] mb-20'>
                    <div className='w-full'>
                        <div className='h-[50px] mb-6'>
                            <h2 className='flex items-center text-lg font-semibold'>
                                {researchScope.title}
                            </h2>
                        </div>
                        <ul className='list-disc list-outside text-sm pl-6 text-font-gray'>
                            {researchScope.items.map((item, index) => <li key={index} className='mb-2'>{item}</li>)}
                        </ul>
                    </div>
                    <div className='w-full'>
                        <div className='h-[50px]'>
                            <h2 className='flex items-center text-lg font-semibold'>{applicationDomain.title}</h2>
                        </div>
                        <ul className='list-disc list-outside text-sm pl-6 text-font-gray'>
                            {applicationDomain.items.map((item, index) => <li key={index} className='mb-2'>{item}</li>)}
                        </ul>
                    </div>
                </div>
                <div className='text-custom-gray text-sm tracking-tight leading-8 mt-5 mb-8'>
                    {closing.description}
                </div>
            </div>
        </section>
    );
}

export default Mobile_Section2;
