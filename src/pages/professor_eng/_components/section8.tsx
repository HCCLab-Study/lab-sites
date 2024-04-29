import React from 'react';

// 교수님 수상 내역
function Section8() {
	return (
		<section className="relative w-full h-[450px] left-0 right-0">
			<div className="absolute h-[350px] w-[1000px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-roboto text-custom-navy">
				<div className="absolute h-[50px] w-full border-b-2 border-custom-blue">
					<h2 className="absolute flex items-center text-3xl font-semibold tracking-widest">Awards</h2>
				</div>
				<div className="pt-20 pl-6">
					<ul className="list-disc">
						<li className="mb-2">2024 Best paper award, Korean Association of Computer Education</li>
						<li className="mb-2">2023 Silver award, Korea Digital Contents Society</li>
						<li className="mb-2">2022 Gold award, Bronze award, Korea Digital Contents Society</li>
						<li className="mb-2">2022 Encouragement award, Korea Information Processing Society</li>
						<li className="mb-2">2017 2nd Prize, Excellent Paper Award, Ergonomics Society of Korea</li>
						<li className="mb-2">
							2016 1st Prize, Technology Commercialization Contest, Ministry of Science, ICT and Future Planning in
							Korea
						</li>
						<li className="mb-2">2016 3rd Prize, Hackathon Contest, POSTECH Entrepreneurship Center</li>
						<li className="mb-2">
							2016 1st Prize, Startup Business Idea Contest, Kyungbook Software Convergence Center
						</li>
						<li className="mb-2">2015 1st Prize, Hackathon Contest, POSTECH</li>
						<li className="mb-2">2014 1st Prize, Best Paper Award, ACM Conference in HCI Korea</li>
						<li className="mb-2">
							2013 2nd Prize, Business Plan Contest with Knowledge Service, National IT Industry Promotion Agency in
							Korea
						</li>
						<li className="mb-2">
							2012 1st Prize, Idea Contest Exhibit of Science and Technology Policy, The Korean Federation of Science
							and Technology Societies
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

export default Section8;
