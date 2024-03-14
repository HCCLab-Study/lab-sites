import React from 'react';

function Section8() {
    return (
        <section className='relative w-full h-[450px] left-0 right-0'>
            <div className='absolute h-[350px] w-[1000px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-roboto text-custom-navy'>
                <div className='absolute h-[50px] w-full border-b-2 border-custom-blue'>
                    <h2 className='absolute flex items-center text-3xl font-semibold tracking-widest'>Awards</h2>
                </div>
                <div className='pt-20 pl-6'>
                  <ul className='list-disc'>
                    <li className='mb-2'>2017 대한인간공학회 우수논문상</li>
                    <li className='mb-2'>2016 기술사업화경진대회 미래창조과학부장관상</li>
                    <li className='mb-2'>2016 포스텍 해커톤 대회 3위</li>
                    <li className='mb-2'>2016 경북 SW융합센터 주관 빌게이츠 창업 아이디어 경진대회 1위</li>
                    <li className='mb-2'>2015 포스텍 해커톤 대회 1위</li>
                    <li className='mb-2'>2014 HCI학술대회 최우수논문상</li>
                    <li className='mb-2'>2013 지식경제부 주관 검색결과 지식서비스 비즈니스플랜 공모전 2위</li>
                    <li className='mb-2'>2012 한국과학기술단체총연합회 주관 과학기술정책아이디어 공모전 1위</li>
                  </ul>
                </div>
            </div>
        </section>
    );
}

export default Section8;
