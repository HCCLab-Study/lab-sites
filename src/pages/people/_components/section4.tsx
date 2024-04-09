import React, { useState } from 'react';
import PopupComponent from './Popup';
import Person from '../_data/Person';
import graduateStudents_part from '../_data/graduateStudents_part';

// Graduate Students(part-time) 부분

function Section4() {
	const [showPopup, setShowPopup] = useState(false);
    const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

    const handlePopupOpen = (person: Person) => {
        setSelectedPerson(person);
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

	return (
		<section className="relative w-full	h-[400px] left-0 right-0">
			<div className="absolute h-[350px] w-[1000px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-roboto text-custom-navy">
				<div className="absolute h-[50px] w-full border-b-2 border-custom-blue">
					<h2 className="absolute flex items-center text-3xl font-semibold tracking-widest">
						Graduate Students (Part-Time)
					</h2>
				</div>
				<div className="flex flex-row relative top-[50px]">
					{graduateStudents_part.map((person: Person, index: number) => (
						<div key={index} onClick={() => handlePopupOpen(person)} className="flex flex-col items-center justify-center hover:underline cursor-pointer">
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
			{showPopup && selectedPerson && (
                <PopupComponent
                    onClose={handleClosePopup}
                    name={selectedPerson.name}
                    department={selectedPerson.department}
                    interests={selectedPerson.interests}
                    imageUrl={selectedPerson.imageUrl}
					content={selectedPerson.content}
                />
            )}
		</section>
	);
}

export default Section4;
