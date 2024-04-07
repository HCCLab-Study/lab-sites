import React from 'react';

// On-going Projects 부분
function Section2() {
	return (
		<section className="relative w-full	h-[350px] left-0 right-0">
			<div className="absolute h-[250px] w-[1000px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-roboto text-custom-navy">
				<div className="absolute h-[50px] w-full border-b-2 border-custom-blue">
					<h2 className="absolute flex items-center text-3xl font-semibold tracking-widest">On-going Projects</h2>
				</div>
				<div className="absolute h-[300px] w-[1000px] top-[50px] p-5">
					<ul className="list-disc list-outside pb-4 text-font-gray">
						<li>
							2023.10 - 2025.09 머신러닝 기반 파킨슨병 환자의 변화 지표 모니터링과 맞춤형 자조관리 시스템 (
							<b>중소벤처기업부</b>)
						</li>
						<li>
							2022.08 - 2024.07 파킨슨병 환자의 신체기능 모니터링 및 운동관리를 위한 스마트폰 어플리케이션 개발 및
							임상시험 (<b>서울대학교병원</b>)
						</li>
						<li>
							2022.07 - 2025.02 실시간 온라인교육에서 학습몰입과 참여를 강화하기 위한 AI 알고리즘 기반 맞춤형 피드백
							시스템 개발 (<b>National Research Foundation of Korea, 한국연구재단</b>)
						</li>
						<li>
							2021.03 - 2024.02 신뢰 조절을 활용한 자율주행시스템의 운전자 경험 설계 및 모델링 Experience Design and
							Modeling of Autonomous Driving System using Trust Calibration (
							<b>National Research Foundation of Korea, 한국연구재단</b>)
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
export default Section2;
