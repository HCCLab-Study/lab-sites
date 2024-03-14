import React from 'react';

function Section4() {

    return (
        <section className='relative w-full h-[450px] left-0 right-0'>
            <div className='absolute h-[350px] w-[1000px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-roboto text-custom-navy'>
                <div className='absolute h-[50px] w-full border-b-2 border-custom-blue'>
                    <h2 className='absolute flex items-center text-3xl font-semibold tracking-widest'>Work Experience</h2>
                </div>
                <div className='pt-20 pl-6'>
                  <ul className='list-disc'>
                    <li className='mb-2'>2020.09 - now 광운대학교 조교수</li>
                    <li className='mb-2'>2019.01 - 2020.08 삼성SDS CX팀 Senior Engineer</li>
                    <li className='mb-2'>2012.01 - 2018.12 포항공과대학교 연구조교</li>
                    <li className='mb-2'>2014.01 - 2015.02 Beemeal, CTO</li>
                    <li className='mb-2'>2013.07 - 2013.08 REDSTAR VENTURES (Boston, US), Intern</li>
                    <li className='mb-2'>2012.07 - 2013.02 Funsumer, CTO</li>
                    <li className='mb-2'>2011.03 - 2011.08 i-Care (Sydney, AUS), Intern</li>
                    <li>2010.08 - 2013.02 삼성소프트웨어멤버십, 정회원</li>
                  </ul>
                </div>
            </div>
        </section>
    );
}

export default Section4;
