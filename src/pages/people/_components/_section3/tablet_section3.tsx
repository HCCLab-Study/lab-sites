import Person from '../../_data/Person';
import { graduateStudents_full } from '../../_data/graduateStudents_full';// 변경된 데이터 가져오기
import { Tablet_PopupComponent } from '../_popup/tablet_popup';
import { usePopup } from '../../_hook/usePopup';

function Tablet_Section3() {
	const { showPopup, selectedPerson, handlePopupOpen, handleClosePopup } = usePopup();
	return (
		<section className='relative w-full h-auto bg-section-gray'>
			<div className='relative h-[450px] font-roboto items-center text-start mt-12 ml-10 mr-10 mb-2 pt-8'>
				<div className='text-custom-navy font-semibold text-3xl tracking-widest border-b-2 border-custom-blue pb-3 mt-4'>
					<div>
						Graduate Students (Full-Time)
					</div>
				</div>
				<div className='flex flex-row relative top-[30px]'>
					{graduateStudents_full.map((person: Person, index: number) => (
						<div key={index} onClick={() => handlePopupOpen(person)} className='flex flex-col items-center justify-center hover:underline cursor-pointer'>
							<img
								src={person.imageUrl}
								alt={`${person.name} 이미지`}
								className='w-[130px] h-[130px] object-cover mx-5 my-2'
							/>
							<p className='font-bold'>{person.name}</p>
							<p className='text-sm p-2 ml-3'>{person.department}</p>
							<p className='text-sm text-font-gray w-[140px] h-[50px] text-center flex justify-center items-center'>
								{person.interests.join(' ')}
							</p>
						</div>
					))}
				</div>
			</div>
			{showPopup && selectedPerson && (
				<Tablet_PopupComponent
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

export default Tablet_Section3;
