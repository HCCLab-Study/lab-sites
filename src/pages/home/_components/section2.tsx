// Introduction: 연구분야
function Section2() {
	return (
		<section className="relative w-full	h-[900px] left-0 right-0 flex justify-center">
			<div
				className="relative font-roboto items-center text-start w-[1000px]"
				style={{ marginTop: '30px', marginLeft: '100px', marginRight: '100px' }}>
				<div
					className="text-custom-navy font-semibold text-3xl tracking-widest border-b-2 border-custom-blue pb-3"
					style={{ marginTop: '30px', marginBottom: '30px' }}>
					Introduction
				</div>
				<div className="text-custom-gray font-medium tracking-tight leading-8" style={{ marginBottom: '10px' }}>
					디지털경험분석 연구실(IDEA Lab.) 은{' '}
					<span className="font-bold">1) 디지털 세상에서 인간을 이해하고 분석하는 인공지능 기술</span>을 탐구하고, 이를
					기반으로 <span className="font-bold">2) 사용자를 널리 이롭게 하는 소프트웨어를 개발</span>합니다. 사용자
					경험을 핵심가치로 삼아 기획, 분석, 개발의 영역을 다루고 있으며, 특히 여러 영역의 경계에서 창의적인 IDEA로
					도전적인 문제를 해결하고 있습니다.
					<br />
					<br />
					<span className="font-bold">
						연구생(학부연구생/석사과정/박사과정)에 관심이 있다면{' '}
						<a
							href="https://kdpark.notion.site/IDEA-Lab-f5ef11264d2a4e8e8d0c5e7469491f06"
							className="text-custom-blue text-xl underline underline-offset-1">
							모집 안내문
						</a>
						을 참고하세요
					</span>
				</div>
				<div className="flex flex-row gap-x-20 relative top-[50px]" style={{ marginBottom: '100px' }}>
					<div className="w-full">
						<div className="h-[50px] mb-6">
							<h2 className="flex items-center text-xl font-semibold">
								Research Scope
								<br />
								(Products' Lifecycle)
							</h2>
						</div>
						<ul className="list-disc list-outside text-sm pl-8 text-font-gray">
							<li className="mb-2">설계 / 기획 : UX Design, Interaction Design</li>
							<li className="mb-2">개발 / 구현 : Web, Mobile, IoT, XR applications</li>
							<li className="mb-2">
								분석 : Human Activity Recognition, UX analytics, Causal Inference, AI applications (NLP, Vision, Voice)
							</li>
							<li className="mb-2">운영 : DevOps, MLOps, CXM</li>
						</ul>
					</div>
					<div className="w-full">
						<div className="h-[50px]">
							<h2 className="flex items-center text-xl font-semibold">Application Domain</h2>
						</div>
						<ul className="list-disc list-outside text-sm pl-8 text-font-gray">
							<li className="mb-2">Healthcare / Medical / Rehabilitation</li>
							<li className="mb-2">Education / Learning</li>
							<li className="mb-2">E-commerce</li>
							<li className="mb-2">Assistive Technology</li>
							<li className="mb-2">Automotive UX / Robot UX</li>
						</ul>
					</div>
				</div>
				<div className="text-custom-gray font-medium tracking-tight leading-8" style={{ marginTop: '50px' }}>
					IDEA Lab. (Interactive Digital Experience Analytics Lab.) conduct{' '}
					<span className="font-bold">Human-Computer Interaction</span> (HCI) research by designing an interactive
					computing system from human perspectives. Our main research interests are{' '}
					<span className="font-bold">1) UX/CX Research</span> to identify customer pain points,{' '}
					<span className="font-bold">2) Human-centered AI</span> to derive insights from data, and{' '}
					<span className="font-bold">3) Rapid development of MVP</span> (Minimum viable product) to verify solutions.
					<br />
					<br />
					Currently looking for self-motivated, passionate students. If you are interested in research assistants
					studying HCI, UX, or AI applications, please feel free to contact me via email.
				</div>
			</div>
		</section>
	);
}

export default Section2;
