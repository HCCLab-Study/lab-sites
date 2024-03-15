import React from "react";

// 셀터디, TED*CHIC
function Section3 () {

    // 셀터디, TED*CHIC, CHIVATION, 창의과제 정보를 배열로 정의
    const sections = [
        {
            title: '1. 셀 형태의 스터디 지원',
            imageUrl: 'src/assets/images/club/seltudy.png'
        },
        {
            title: '2. 정기적인 테크세미나를 개최, 회원 간 SW기술 공유',
            imageUrl: 'src/assets/images/club/tedchic.png'
        },
        {
            title: '3. CHIC 동아리만의 자유로운 해커톤, CHICATION',
            imageUrl: 'src/assets/images/club/chication.png'
        },
        {
            title: '4. 창의과제를 통한 협업 경험과 실무 능력 향상',
            imageUrl: 'src/assets/images/club/creative.png'
        },
    ]

    return (
        <section className='relative w-full h-[1000px] left-0 right-0'>
            <div className='absolute h-[1100px] w-[1000px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-roboto text-custom-navy'>
                <div className='grid grid-cols-2 gap-24 relative left-6'>
                    {sections.map((section, index) => (
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

export default Section3;