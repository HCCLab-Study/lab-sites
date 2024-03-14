import React from 'react';

function Section3() {
    return (
        <section className='relative w-full h-[300px] left-0 right-0 bg-section-gray'>
            <div className='absolute h-[150] w-[1000px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-roboto text-custom-navy'>
                <div className='absolute h-[50px] w-full border-b-2 border-custom-blue'>
                    <h2 className='absolute flex items-center text-3xl font-semibold tracking-widest'>Research Interests</h2>
                </div>
                <div className='pt-20 pl-6'>
                    <ul className='list-disc'>
                        <li className='mb-2'>인간 컴퓨터 상호작용 (소프트웨어 및 인공지능 서비스 개발)</li>
                        <li className='mb-2'>데이터 기반 고객경험(CX) 분석 및 관리</li>
                        <li className='mb-2'>디지털 접근성 (배리어프리), 재활 및 보조공학</li>
                        <li>자율주행 자동차 인간공학</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Section3;
