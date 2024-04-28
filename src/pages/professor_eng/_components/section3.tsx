import React from 'react';

// 교수님 연구 분야
function Section3() {
	return (
		<section className="relative w-full h-[300px] left-0 right-0 bg-section-gray">
			<div className="absolute h-[150] w-[1000px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-roboto text-custom-navy">
				<div className="absolute h-[50px] w-full border-b-2 border-custom-blue">
					<h2 className="absolute flex items-center text-3xl font-semibold tracking-widest">Research Interests</h2>
				</div>
				<div className="pt-20 pl-6">
					<ul className="list-disc">
						<li className="mb-2">Human-Computer Interaction</li>
						<li className="mb-2">Ditigal prototyping (Web / Mobile application)</li>
						<li className="mb-2">Software engineering (DevOps / MLOps)</li>
						<li className="mb-2">Accessible Computing and Assistive Technology</li>
						<li className="mb-2">Data-driven Customer Experience Management (CXM)</li>
						<li className="mb-2">Product Analytics</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

export default Section3;
