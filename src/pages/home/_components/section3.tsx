function Section3() {
    return (
        <section className='relative w-full h-[600px] left-0 right-0' style={{marginTop: '300px'}}>
            <div className='absolute h-[350px] w-[1700px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-roboto text-start flex items-center'>
                <div className='flex' style={{marginLeft: '170px'}}>
                    <img src='src\assets\images\main\concept2.png' alt='연구분야 이미지' className='h-[450px] w-[470px] object-cover mr-10' />
                    <div className="relative">
                        <div className="text-custom-navy font-semibold text-5xl tracking-tight" style={{marginTop: '50px', marginBottom: '50px'}}>
                            We develop technology for people
                        </div>
                        <div className="w-[910px] text-custom-gray font-medium text-xl tracking-tight leading-6 mt-3">
                            인간중심컴퓨팅연구실 (HCC Lab)은 사람을 더 잘 이해하는 방법을 탐구하는 동시에, 사용자를 널리 이롭게 하는 소프트웨어 개발과 인공지능 기술을 연구합니다.
                        </div>
                        <div className="w-[910px] text-custom-gray font-medium text-xl tracking-tight leading-6 mt-3">
                            세상에 실존하는 문제의 해결 과정은 늘 복잡하고 여러 분야의 지식이 얽혀있습니다.
                        </div>
                        <div className="w-[910px] text-custom-gray font-medium text-xl tracking-tight leading-6 mt-3">
                            HCC Lab은 사용자경험(UX)을 핵심가치로 삼아 기획, 분석, 개발의 영역을 다루고 있으며, 특히 여러 영역의 경계에서 도전적인 문제를 해결하고 있습니다.
                        </div>
                        <div className="w-[910px] text-custom-gray font-medium text-xl tracking-tight leading-6 mt-3">
                            연구생(학부연구생/석사과정/박사과정)에 관심이 있다면 모집 안내문을 참고하세요.
                        </div>
                        {/* // TODO: 모집안내문 하이퍼링크 연결하기 */}
                        <div className="absolute justify-start font-roboto font-semibold text-lg justify-start text-white rounded-full bg-custom-blue px-8 p-3" style={{marginTop: '30px', boxShadow: '0 4px 3px rgba(0, 0, 0, 0.3)'}}>
                            모집 안내문 바로가기
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section3;
