import { clubContents } from "../../_data/clubContents";

// 셀터디, TED*CHIC
function Mobile_Section3() {

    return (
        <section className='relative w-full h-auto'>
            <div className='relative pb-10 w-[90%] font-roboto text-custom-navy'>
                <div className='grid grid-cols-1 relative left-[2.25vh]'>
                    {clubContents.map((section, index) => (
                        <div className='flex flex-col' key={index}>
                            <div className='relative top-[80px] h-14 border-2 border-custom-blue flex items-center justify-center'>
                                <p className='font-semibold p-3'>
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

export default Mobile_Section3;