import React from 'react';

// 전문 활동
function Section7() {
	return (
		<section className="relative w-full h-[850px] left-0 right-0 bg-section-gray">
			<div className="absolute h-[750px] w-[1000px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-roboto text-custom-navy">
				<div className="absolute h-[50px] w-full border-b-2 border-custom-blue">
					<h2 className="absolute flex items-center text-3xl font-semibold tracking-widest">Professional Activities</h2>
				</div>
				<div className="pt-20 pl-6">
					<ul className="list-disc">
						<li className="mb-2">Organization Committee</li>
						<ul className="list-disc pl-8">
							<li className="mb-2">
								Program Committee, IEA 2024 (22nd Triennial Congress of the International Ergonomics Association)
							</li>
							<li className="mb-2">
								Associate Editor, Communications of the Korean Institute of Information Scientists and Engineers (KIISE)
							</li>
							<li className="mb-2">Associate Editor, Journal of Information Processing Systems, (JIPS)</li>
							<li className="mb-2">Program Committee Chair, HCI Korea 2022 Conference</li>
							<li className="mb-2">
								Doctoral Consortium Committee, International Conference on Computers in Education 2014
							</li>
						</ul>
						<li className="mb-2">Member</li>
						<ul className="list-disc pl-8">
							<li className="mb-2">ACM SIGCHI Member</li>
							<li className="mb-2">Ergonomics Society of Korea</li>
							<li className="mb-2">HCI Society of Korea</li>
							<li className="mb-2">Korean Institute of Industrial Engineers</li>
							<li className="mb-2">Korean Society of Augmentative and Alternative Communication</li>
						</ul>
						<li className="mb-2">Reviewer</li>
						<ul className="list-disc pl-8">
							<li className="mb-2">IEEE Transactions on Software Engineering (SCIE)</li>
							<li className="mb-2">Behaviour & Information Technology (SSCI)</li>
							<li className="mb-2">Mobile Information Systems (SCIE)</li>
							<li className="mb-2">International Review of Research in Open and Distributed Learning (SSCI)</li>
							<li className="mb-2">International Journal of Automotive Technology (SCIE)</li>
							<li className="mb-2">Applied Sciences (SCIE)</li>
							<li className="mb-2">Universal Access in the Information Society (SSCI)</li>
						</ul>
					</ul>
				</div>
			</div>
		</section>
	);
}

export default Section7;
