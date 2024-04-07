import React from 'react';

// Graduate Students(part-time) 부분

const graduateStudentData = [
	{
		name: '박교형',
		department: 'AI융합산업학과 석사과정',
		interests: ['#UX', '#Blockchain', '#Datascience'],
		imageUrl: 'src/assets/images/people/박교형.png',
	},
	{
		name: '강민조',
		department: 'AI융합산업학과 석사과정',
		interests: ['#UX_Research', '#Fintech'],
		imageUrl: 'src/assets/images/people/강민조.png',
	},
];

function Section4() {
	return (
		<section className="relative w-full	h-[400px] left-0 right-0">
			<div className="absolute h-[350px] w-[1000px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-roboto text-custom-navy">
				<div className="absolute h-[50px] w-full border-b-2 border-custom-blue">
					<h2 className="absolute flex items-center text-3xl font-semibold tracking-widest">
						Graduate Students (Part-Time)
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

export default Section4;
