import React from 'react';

// 교수님 학력
function Section5() {
	return (
		<section className="relative w-full h-[250px] left-0 right-0 bg-section-gray">
			<div className="absolute h-[150] w-[1000px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-roboto text-custom-navy">
				<div className="absolute h-[50px] w-full border-b-2 border-custom-blue">
					<h2 className="absolute flex items-center text-3xl font-semibold tracking-widest">Education</h2>
				</div>
				<div className="pt-20 pl-6">
					<ul className="list-disc">
						<li className="mb-2">
							2012.03 - 2019.02 Ph.D. in HCI/UX (Convergence IT Engineering), Pohang University of Science and
							Technology (POSTECH)
						</li>
						<li className="mb-2">
							2006.03 - 2012.02 B.S. in Computer Science and Engineering, Kyungpook National University (National Full
							Scholarship)
						</li>
						<li className="mb-2">2003.03 - 2006.02 Daegu High School</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

export default Section5;
