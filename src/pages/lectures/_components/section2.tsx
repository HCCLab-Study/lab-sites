import React from "react";

// 교수님이 수업하신 강의 list
function Section2 () {


    return (
        <section className='relative w-full h-[500px] left-0 right-0'>
             <div className='absolute h-[450px] w-[1000px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-roboto text-custom-navy'>
                <div className='absolute h-[50px] w-full border-b-2 border-custom-blue'>
                    <h2 className='absolute flex items-center text-3xl font-semibold tracking-widest'>List</h2>
                </div>
                <div className='relative top-[80px] left-0 right-0 bottom-4 border-2 border-custom-blue font-roboto text-custom-navy'>
                    <ul className='list-disc list-inside pb-4 pl-6 pt-8'>
                        <li className='pb-3'>2024년 1학기: 오픈소스소프트웨어, 실험설계및분석, 인지사물인터넷, UX애널리틱스</li>
                        <li className='pb-3'>2023년 2학기: 웹서비스설계및실습, 정보디자인프로그래밍, HCI/UX특론</li>
                        <li className='pb-3'>2023년 1학기: 오픈소스소프트웨어, 실험설계및분석, 인공지능서비스개발스튜디오 (강의평가: 4.63 / 5.00)</li>
                        <li className='pb-3'>2022년 2학기: 웹서비스설계및구현, 오픈소스소프트웨어, UX애널리틱스 (강의평가: 4.71 / 5.00)</li>
                        <li className='pb-3'>2022년 1학기: 정보디자인프로그래밍, 실험설계및분석, HCI연구방법론 (강의평가: 4.68 / 5.00)</li>
                        <li className='pb-3'>2021년 2학기: 통계학응용, 웹프로그래밍, UX실험및통계, 뉴미디어기반 학습설계 및 프로젝트 관리 (강의평가: 4.69 / 5.00)</li>
                        <li className='pb-3'>2021년 1학기: 창의설계및입문, 정보디자인, 실험설계및분석 (강의평가: 4.64 / 5.00)</li>
                        <li className='pb-3'>2020년 2학기: 디자인사고, 정보디자인, 비주얼컴퓨팅 (강의평가: 4.59 / 5.00)</li>
                    </ul>
                </div>

            </div>
            
        </section>
    );
}

export default Section2;