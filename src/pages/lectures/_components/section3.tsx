import React from 'react';

// 연구실 대학원 과정 정보
const graduateCourse = [
    { title: 'AI SERVICE DEVELOPMENT STUDIO\n(인공지능서비스개발스튜디오)',
      semester: '대학원 2023-1',
      description: 'Design Thinking 및 Business canvas 기반의 기획 방법론에 따라 인공지능 서비스를 기획하고, 이를 직접 구현해본다. 인간의 관점에서 시각 (이미지 인식), 청각 (음성, 소리), 이해 (자연어처리), 창조 (생성모델)와 관련된 여러 인공지능 모델을 서비스화 하기 위한 개발 방법론을 배운다. 또한 fastAPI를 통해 인공지능 서비스를 빠르게 구축하고 배포하는 과정을 실습하면서 MLOps의 개념을 익힌다.'
    },
    { title: 'USER EXPERIENCE EXPERIMENT AND STATISTICS (UX실험및통계)',
    semester: '대학원 2021-2',
    description: '인간을 대상으로 실험을 계획하고, 이를 통해 수집한 데이터를 분석하는 방법을 다룬다. 통계 결과를 해석하고 논문으로 작성하기 위한 방법을 배운다'
    },
    { title: 'RESEARCH METHODS IN HCI\n(HCI연구방법론)',
    semester: '대학원 2022-1',
    description: '인간-컴퓨터 상호작용 분야에서 연구를 수행하기 위한 여러가지 방법론 (설문조사, 인터뷰, 에스노그라피, 사용성평가 등)을 배우고 실습한다. 국제 우수 학술대회 (CHI, UIST, IUI)에 발표된 논문과 최근 저널에 게재된 연구들을 함께 살펴보며 트렌드를 익히고 인터페이스 개발을 실습해본다.'
    },
    { title: 'UX ANALYTICS (UX 애널리틱스)',
    semester: '대학원 2022-2',
    description: '사용자 경험(UX)을 최적화하기 위해 UX 수준을 측정하고 분석하는 방법에 대해 배우면서 정량 UX 리서처 (Quant UX Researcher) 로서 갖추어야할 능력을 함양한다. 시선추적기, 마우스 움직임, IMU센서, 자세 추정 알고리즘을 통해 획득한 행동 데이터와 뇌전도, 심전도, 근전도, 피부 저항 등 생리학적 신호를 기반으로 인간의 다양한 상태를 측정하고 분석하는 과정을 실습한다.'
    },
    { title: 'TOPICS IN HCI AND UX (HCI/UX특론)',
    semester: '대학원 2023-2',
    description: '인간-컴퓨터 상호작용 (Human-Computer Interaction)과 사용자 경험 (User Experience)에 대한 실제적인 기술을 주요 주제별로 나누어 다룬다. 세미나와 토론을 병행하여 최신 HCI/UX 연구 동향과 산업 동향을 파악하면서, 인공지능 (AI) 기술과 이러한 주제들을 어떻게 융합할 것인지에 대한 답을 찾아나간다.'
    },
    { title: 'NEW MEDIA DESIGN FOR LEARNING AND PROJECT MANAGEMENT\n(뉴미디어기반 학습설계 및 프로젝트 관리)',
    semester: '교육대학원 2021-2 (팀티칭)',
    description: '본 교과목들을 통해 다양한 뉴미디어를 이해하고 교육현장에서의 활용을 위해 설계-개발-실행-평가관리의 교수설계 과정을 실습하여 뉴미디어 기술, 운영체제, 소프트웨어, 하드웨어 역할에 대한 기초지식을 쌓을 수 있다. 블럭 기반의 VR/AR 콘텐츠를 만드는 방법을 실습하여 이를 토대로 수업 설계에 활용한다.'
    }
    ];


function Section3() {
    return (
        <section className='relative w-full h-[1200px] left-0 right-0 bg-section-gray'>
            <div className='absolute h-[1100px] w-[1000px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-roboto text-custom-navy'>
                <div className='absolute h-[50px] w-full border-b-2 border-custom-blue'>
                    <h2 className='absolute flex items-center text-3xl font-semibold tracking-widest'>GRADUATE COURSEWORK (대학원)</h2>
                </div>
                <div className='pt-16 pl-12'>
                    <ul className='grid grid-cols-2 gap-16 list-disc'>
                        {graduateCourse.map((graduateCourse, index) => (
                            <li key={index} className='font-semibold p-4 pb-2 text-xl whitespace-pre-wrap'>
                                {graduateCourse.title}
                                <p className='text-font-gray text-base pt-6'>개설년도/학기: {graduateCourse.semester}</p>
                                <p className='text-font-gray text-base font-normal pt-2'>{graduateCourse.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Section3;
