import React from 'react';

// 교수님 연구 경험
function Section4() {
	return (
		<section className="relative w-full h-[450px] left-0 right-0">
			<div className="absolute h-[350px] w-[1000px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-roboto text-custom-navy">
				<div className="absolute h-[50px] w-full border-b-2 border-custom-blue">
					<h2 className="absolute flex items-center text-3xl font-semibold tracking-widest">Work Experience</h2>
				</div>
				<div className="pt-20 pl-6">
					<ul className="list-disc">
						<li className="mb-2">
							2020.09 - now Assistant Professor, School of Information Convergence, Kwangwoon University, Seoul, South
							Korea
						</li>
						<li className="mb-2">
							2019.01 - 2020.08 Senior Engineer, Customer Experience Strategy Group, SAMSUNG SDS, Seoul, South Korea
						</li>
						<li className="mb-2">
							2012.01 - 2018.12 Teaching & Research Assistant, Pohang University of Science and Technology (POSTECH),
							Pohang, South Korea
						</li>
						<li className="mb-2">2014.01 - 2015.02 Co-founder (CTO), Beemeal</li>
						<li className="mb-2">2013.07 - 2013.08 Summer Internship, REDSTAR VENTURES, Boston, US</li>
						<li className="mb-2">2012.07 - 2013.02 Co-founder (CTO), Funsumer</li>
						<li className="mb-2">2011.03 - 2011.08 Intern, i-Care, Sydney, Australia</li>
						<li className="mb-2">2010.08 - 2013.02 Member, SAMSUNG Software Membership</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

export default Section4;
