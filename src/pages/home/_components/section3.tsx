function Section3() {
    return (
        <section className='relative w-full h-[600px] left-0 right-0' style={{marginTop: '300px'}}>
            <div className='absolute h-[350px] w-[1000px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-roboto text-start flex items-center'>
                <div className='flex'>
                    <img src='src\assets\images\home\introduction2.png' alt='연구분야 이미지' className='h-[350px] w-[350px] object-contain mr-10' />
                    <div className="relative w-[650px]">
                        <div className="text-custom-navy font-semibold text-4xl tracking-tight" style={{marginBottom: '30px'}}>
                            We develop technology for people
                        </div>
                        <div className="w-[650px] text-custom-gray font-medium text-m tracking-tight leading-6 mt-3">
                            인간중심컴퓨팅연구실 (HCC Lab)은 사람을 더 잘 이해하는 방법을 탐구하는 동시에, 사용자를 널리 이롭게 하는 소프트웨어 개발과 인공지능 기술을 연구합니다.<br/>
                            세상에 실존하는 문제의 해결 과정은 늘 복잡하고 여러 분야의 지식이 얽혀있습니다.<br/>
                            HCC Lab은 사용자경험(UX)을 핵심가치로 삼아 기획, 분석, 개발의 영역을 다루고 있으며, 특히 여러 영역의 경계에서 도전적인 문제를 해결하고 있습니다.<br/>
                            연구생(학부연구생/석사과정/박사과정)에 관심이 있다면 모집 안내문을 참고하세요.<br/>
                        </div>
                        {/* // TODO: 모집안내문 하이퍼링크 연결하기 */}
                        <button className="absolute justify-start font-roboto font-semibold text-l justify-start text-white rounded-full bg-custom-blue px-8 p-3" style={{marginTop: '30px', boxShadow: '0 4px 3px rgba(0, 0, 0, 0.3)'}}>
                            모집 안내문 바로가기
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Section3;
