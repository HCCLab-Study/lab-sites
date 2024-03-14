import React from 'react';

// 교수님이 하신 초빙 강의 및 세미나
function Section6() {
    return (
        <section className='relative w-full h-[650px] left-0 right-0'>
            <div className='absolute h-[550px] w-[1000px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-roboto text-custom-navy'>
                <div className='absolute h-[50px] w-full border-b-2 border-custom-blue'>
                    <h2 className='absolute flex items-center text-3xl font-semibold tracking-widest'>초빙 강의 및 세미나</h2>
                </div>
                <div className='pt-20 pl-6'>
                  <ul className='list-disc'>
                    <li className='mb-2'>2024 C#을 활용한 키오스크 개발, 로보틱스 협동로봇SI 양성과정</li>
                    <li className='mb-2'>2023 키오스크의 개념과 구성, 지능형 로봇 푸드테크 창업교육 과정</li>
                    <li className='mb-2'>2023 SW기술 관점에서의 Connectivity & Value Design, KIA</li>
                    <li className='mb-2'>2023 데이터 기반 UX의 현재와 미래, 코리아 HCI & UI/UX 그랜드 서밋 2023</li>
                    <li className='mb-2'>2023 Human-centered Data Science, HCI Korea 학술대회, 튜토리얼 세션</li>
                    <li className='mb-2'>2022 데이터와 CX의 현재와 미래, LG유플러스 CX College</li>
                    <li className='mb-2'>2022 데이터사이언스 기초와 입문, 경희대학교 소프트웨어융합학과</li>
                    <li className='mb-2'>2022 인공지능 교육을 위한 Python 기초 / 심화, 이화여자대학교 사범대학</li>
                    <li className='mb-2'>2021 추천시스템의 원리와 활용, 이화여자대학교 교육공학과</li>
                    <li className='mb-2'>2020 추천시스템 입문, 이화여자대학교 교육공학과</li>
                    <li className='mb-2'>2020 HCI와 인공지능, 부산대학교 정보컴퓨터공학부</li>
                    <li className='mb-2'>2020 B2B 도메인에서의 HCI, 포항공과대학교 산업경영공학과</li>
                    <li className='mb-2'>2019 공학도 관점에서 바라본 UX 디자인, 인천대학교 산업경영공학과</li>
                    <li className='mb-2'>2017 군집화 기법을 활용한 사용자 세그먼테이션, 포항공과대학교 산업경영공학과</li>
                    <li className='mb-2'>2016 비전공자를 위한 컴퓨터공학 입문 및 모바일 어플리케이션 개발, 이화여자대학교 교육공학과</li>
                  </ul>
                </div>
            </div>
        </section>
    );
}

export default Section6;
