import React from 'react';

// 교수님이 하신 초빙 강의 및 세미나
function Section6() {
	return (
		<section className="relative w-full h-[650px] left-0 right-0">
			<div className="absolute h-[550px] w-[1000px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-roboto text-custom-navy">
				<div className="absolute h-[50px] w-full border-b-2 border-custom-blue">
					<h2 className="absolute flex items-center text-3xl font-semibold tracking-widest">
						Invited Talks / Seminars
					</h2>
				</div>
				<div className="pt-20 pl-6">
					<ul className="list-disc">
						<li className="mb-2">
							2024 2024 "Kiosk development using C#", Robotics collaborative robot SI training course
						</li>
						<li className="mb-2">2023 "The Future of Internet", Namdaemoon middle school</li>
						<li className="mb-2">2023 "The concept of Kiosk", Intelligent robot food tech start-up training course</li>
						<li className="mb-2">2023 "Connectivity and Value Design: Software-defined Vehicle", KIA</li>
						<li className="mb-2">2023 Human-centered Data Science, HCI Korea 학술대회, 튜토리얼 세션</li>
						<li className="mb-2">
							2023 "The Present and Future of Data-Driven UX: Human-Centered Data Science", Korea HCI & UI/UX Grand
							Summit
						</li>
						<li className="mb-2">2023 "Human-centered Data Science", Samsung SDS</li>
						<li className="mb-2">2022 "Human AI Interaction", Namdaemoon middle school</li>
						<li className="mb-2">2022 "UX/CX with Data", LG Uplus</li>
						<li className="mb-2">2022 "Data Science Practice", Kyunghee University</li>
						<li className="mb-2">2020 "Recommendation System", Ewha Womans University</li>
						<li className="mb-2">2020 "HCI and AI", Pusan National University</li>
						<li className="mb-2">2020 "HCI in B2B sector", Dept. of Industrial & Management Engineering, POSTECH</li>
						<li className="mb-2">
							2019 "UX Design in perspective of Engineer", Dept. of Industrial & Management Engineering, Incheon
							National University
						</li>
						<li className="mb-2">
							2017 "User Segmentation with Clustering Technique", Dept. of Industrial & Management Engineering, POSTECH
						</li>
						<li className="mb-2">
							2016 "Introduction to Computer Engineering and App development", Dept. of Educational Technology, Ewha
							Womans University
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

export default Section6;
