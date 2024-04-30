import { clubContents } from "../../_data/clubContents";

// 셀터디, TED*CHIC
function Tablet_Section3() {

    return (
        <section className='relative w-full h-auto'>
            <div className='relative font-roboto text-custom-navy pb-10 ml-8'>
                <div className='grid grid-cols-2 gap-14 relative'>
                    {clubContents.map((section, index) => (
                        <div className='flex flex-col pl-2 pr-2' key={index}>
                            <div className='relative top-[10px] h-14 border-2 border-custom-blue flex items-center justify-center right-4'>
                                <p className='font-semibold p-2'>
                                    {section.title}
                                </p>
                            </div>
                            <img src={section.imageUrl} className='mt-12 pr-4 mr-4' alt={`Section ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}

export default Tablet_Section3;