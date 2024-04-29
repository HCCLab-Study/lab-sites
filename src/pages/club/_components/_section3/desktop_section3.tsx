import { clubContents } from "../../_data/clubContents";

// 셀터디, TED*CHIC
function DeskTop_Section3() {

    return (
        <section className='relative w-full h-[1000px] left-0 right-0'>
            <div className='absolute h-[1100px] w-[1000px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-roboto text-custom-navy'>
                <div className='grid grid-cols-2 gap-24 relative left-6'>
                    {clubContents.map((section, index) => (
                        <div className='flex flex-col' key={index}>
                            <div className='relative top-[80px] h-14 left-0 right-0 bottom-4 border-2 border-custom-blue flex items-center justify-center'>
                                <p className='font-semibold'>
                                    {section.title}
                                </p>
                            </div>
                            <img src={section.imageUrl} className='mt-28' alt={`Section ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}

export default DeskTop_Section3;