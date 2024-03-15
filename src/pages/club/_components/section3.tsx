import React from "react";

// 셀터디, TED*CHIC
function Section3 () {

    return (
        <section className='relative w-full h-[1000px] left-0 right-0'>
            <div className='absolute h-[1100px] w-[1000px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-roboto text-custom-navy'>
                <div className='grid grid-cols-2 gap-24 relative left-6'>
                    <div className='flex flex-col'>
                        <div className='relative top-[80px] h-14 left-0 right-0 bottom-4 border-2 border-custom-blue font-roboto text-custom-navy flex items-center justify-center'>
                            <p className='font-semibold'>
                                1. 셀 형태의 스터디 지원
                            </p>
                        </div>
                        <img src='src/assets/images/club/seltudy.png' className='mt-28' />
                    </div>
                    <div className='flex flex-col'>
                        <div className='relative top-[80px] h-14 left-0 right-0 bottom-4 border-2 border-custom-blue font-roboto text-custom-navy flex items-center justify-center'>
                            <p className='font-semibold'>
                                2. 정기적인 테크세미나를 개최, 회원 간 SW기술 공유
                            </p>
                        </div>
                        <img src='src/assets/images/club/tedchic.png' className='mt-28'/>
                    </div>
                    <div className='flex flex-col'>
                        <div className='relative top-[80px] h-14 left-0 right-0 bottom-4 border-2 border-custom-blue font-roboto text-custom-navy flex items-center justify-center'>
                            <p className='font-semibold'>
                                3. CHIC 동아리만의 자유로운 해커톤, CHICATION
                            </p>
                        </div>
                        <img src='src/assets/images/club/chication.png' className='mt-28'/>
                    </div>
                    <div className='flex flex-col'>
                        <div className='relative top-[80px] h-14 left-0 right-0 bottom-4 border-2 border-custom-blue font-roboto text-custom-navy flex items-center justify-center'>
                            <p className='font-semibold'>
                                4. 창의과제를 통한 협업 경험과 실무 능력 향상
                            </p>
                        </div>
                        <img src='src/assets/images/club/creative.png' className='mt-28'/>
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default Section3;