import { introduction, researchScope, applicationDomain, closing } from '../../_data/home_section2';

function DeskTop_Section2() {
    return (
        <section className='relative w-full h-[900px] left-0 right-0 flex justify-center'>
            <div className='relative font-roboto items-center text-start w-[1000px] mt-8 ml-20 mr-20'>
                <div className='text-custom-navy font-semibold text-3xl tracking-widest border-b-2 border-custom-blue pb-3 mt-8 mb-8'>
                    {introduction.title}
                </div>
                <div className='text-custom-gray font-medium tracking-tight leading-8 mb-2'>
                    {introduction.description}
                </div>
                <div className='flex flex-row gap-x-20 relative top-[50px] mb-24'>
                    <div className='w-full'>
                        <div className='h-[50px] mb-6'>
                            <h2 className='flex items-center text-xl font-semibold'>
                                {researchScope.title}
                            </h2>
                        </div>
                        <ul className='list-disc list-outside text-sm pl-8 text-font-gray'>
                            {researchScope.items.map((item, index) => <li key={index} className='mb-2'>{item}</li>)}
                        </ul>
                    </div>
                    <div className='w-full'>
                        <div className='h-[50px]'>
                            <h2 className='flex items-center text-xl font-semibold'>{applicationDomain.title}</h2>
                        </div>
                        <ul className='list-disc list-outside text-sm pl-8 text-font-gray'>
                            {applicationDomain.items.map((item, index) => <li key={index} className='mb-2'>{item}</li>)}
                        </ul>
                    </div>
                </div>
                <div className='text-custom-gray font-medium tracking-tight leading-8 mt-5'>
                    {closing.description}
                </div>
            </div>
        </section>
    );
}

export default DeskTop_Section2;
