import React from 'react';

// 교수님 학력
function Section5() {
    return (
        <section className='relative w-full h-[250px] left-0 right-0 bg-section-gray'>
            <div className='absolute h-[150] w-[1000px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-roboto text-custom-navy'>
                <div className='absolute h-[50px] w-full border-b-2 border-custom-blue'>
                    <h2 className='absolute flex items-center text-3xl font-semibold tracking-widest'>Education</h2>
                </div>
                <div className='pt-20 pl-6'>
                    <ul className='list-disc'>
                        <li className='mb-2'>2012.03 - 2019.02 포항공과대학교 IT융합공학과 공학박사</li>
                        <li className='mb-2'>2006.03 - 2012.02 경북대학교 컴퓨터학부 (국가이공계장학생)</li>
                        <li>2003.03 - 2006.02 대구고등학교</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Section5;
