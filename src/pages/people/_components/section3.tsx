import React from 'react';

// Graduate Students (Full-Time) 부분

const graduateStudentData = [
	{
		name: '곽소정',
		department: '인공지능응용학과 석사과정',
		interests: ['#UX/CX', '#기획', '#DataAnalytics'],
		imageUrl: 'src/assets/images/people/곽소정.png',
	},
	{
		name: '김주현',
		department: '인공지능응용학과 석사과정',
		interests: ['#CX', '#ML', '#NLP', '#DataAnalytics'],
		imageUrl: 'src/assets/images/people/김주현.png',
	},
	{
		name: '김호준',
		department: '인공지능응용학과 석사과정',
		interests: ['#Front-end', '#UX', '#MobileHCI'],
		imageUrl: 'src/assets/images/people/김호준.png',
	},
	{
		name: '심현',
		department: '인공지능응용학과 석사과정',
		interests: ['#NLP', '#full-stack'],
		imageUrl: 'src/assets/images/people/심현.png',
	},
	{
		name: '황규민',
		department: '인공지능응용학과 석사과정',
		interests: ['#HCL/UX', '#mHealth', '#ComputerVision'],
		imageUrl: 'src/assets/images/people/황규민.png',
	},
];

function Section3() {
	return (
		<section className="relative w-full	h-[400px] left-0 right-0 bg-section-gray">
			<div className="absolute h-[350px] w-[1000px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-roboto text-custom-navy">
				<div className="absolute h-[50px] w-full border-b-2 border-custom-blue">
					<h2 className="absolute flex items-center text-3xl font-semibold tracking-widest">
						Graduate Students (Full-Time)
					</h2>
				</div>
				<div className="flex flex-row relative top-[50px]">
					{graduateStudentData.map((person, index) => (
						<div key={index} className="flex flex-col items-center justify-center">
							<img
								src={person.imageUrl}
								alt={`${person.name} 이미지`}
								className="w-[160px] h-[160px] object-cover mx-5 my-4"
							/>
							<p className="font-bold">{person.name}</p>
							<p className="text-sm p-1">{person.department}</p>
							<p className="text-sm text-font-gray w-[140px] h-[50px] text-center items-center flex justify-center items-center">
								{person.interests.join(' ')}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Section3;
