import Person from '../../_data/Person';
import { graduateStudents_full } from '../../_data/graduateStudents_full'; // 변경된 데이터 가져오기
import { usePopup } from '../../_hook/usePopup';
import { DeskTop_PopupComponent } from '../_popup/desktop_popup';



function DeskTop_Section3() {
	const { showPopup, selectedPerson, handlePopupOpen, handleClosePopup } = usePopup();

	return (
		<section className='relative w-full	h-[400px] left-0 right-0 bg-section-gray'>
			<div className='absolute h-[350px] w-[1000px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-roboto text-custom-navy'>
				<div className='absolute h-[50px] w-full border-b-2 border-custom-blue'>
					<h2 className='absolute flex items-center text-3xl font-semibold tracking-widest'>
						Graduate Students (Full-Time)
					</h2>
				</div>
				<div className='flex flex-row relative top-[50px]'>
					{graduateStudents_full.map((person: Person, index: number) => (
						<div key={index} onClick={() => handlePopupOpen(person)} className='flex flex-col items-center justify-center hover:underline cursor-pointer'>
							<img
								src={person.imageUrl}
								alt={`${person.name} 이미지`}
								className='w-[160px] h-[160px] object-cover mx-5 my-4'
							/>
							<p className='font-bold'>{person.name}</p>
							<p className='text-sm p-1'>{person.department}</p>
							<p className='text-sm text-font-gray w-[140px] h-[50px] text-cente flex justify-center items-center'>
								{person.interests.join(' ')}
							</p>
						</div>
					))}
				</div>
			</div>
			{showPopup && selectedPerson && (
				<DeskTop_PopupComponent
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

export default DeskTop_Section3;
