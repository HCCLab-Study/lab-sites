import Person from '../../_data/Person';
import { graduateStudents_full } from '../../_data/graduateStudents_full'; // 변경된 데이터 가져오기
import { Mobile_PopupComponent } from '../_popup/mobile_popup';
import { usePopup } from '../../_hook/usePopup';

function Mobile_Section3() {
	const { showPopup, selectedPerson, handlePopupOpen, handleClosePopup } = usePopup();
	return (
		<section className='relative w-full h-auto bg-section-gray'>
			<div className='relative font-roboto items-center text-start mt-8 ml-10 mr-10 pb-5 pt-2'>
				<div className='text-custom-navy font-semibold text-2xl tracking-widest border-b-2 border-custom-blue pb-3 mt-8 mb-2'>
					<div>
						Graduate Students (Full-Time)
					</div>
				</div>
				<div className='grid grid-cols-2 relative top-[20px]'>
					{graduateStudents_full.map((person: Person, index: number) => (
						<div key={index} onClick={() => handlePopupOpen(person)} className='flex flex-col items-center justify-center hover:underline cursor-pointer pb-8'>
							<img
								src={person.imageUrl}
								alt={`${person.name} 이미지`}
								className='w-[140px] h-[140px] object-cover'
							/>
							<p className='font-bold'>{person.name}</p>
							<p className='text-sm pr-3 pl-5 pt-2'>{person.department}</p>
							<p className='text-sm text-font-gray w-[140px] h-[50px] text-center flex justify-center items-center'>
								{person.interests.join(' ')}
							</p>
						</div>
					))}
				</div>
			</div>
			{showPopup && selectedPerson && (
				<Mobile_PopupComponent
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

export default Mobile_Section3;
