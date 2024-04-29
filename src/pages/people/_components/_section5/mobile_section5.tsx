import Person from '../../_data/Person';
import { undergraduateResearchers } from '../../_data/undergraduateResearchers';
import { Mobile_PopupComponent } from '../_popup/mobile_popup';
import { usePopup } from '../../_hook/usePopup';

// Undergraduate Researchers 부분

function Mobile_Section5() {
	const { showPopup, selectedPerson, handlePopupOpen, handleClosePopup } = usePopup();

	return (
		<section className='relative w-full h-auto bg-section-gray'>
			<div className='relative font-roboto items-center text-start mt-4 ml-10 mr-10 pb-4 pt-2'>
				<div className='text-custom-navy font-semibold text-2xl tracking-widest border-b-2 border-custom-blue pb-3 mt-8 mb-2'>
					<div>
						Undergraduate Researchers
					</div>
				</div>
				<div className='grid grid-cols-2 relative top-[20px]'>
					{undergraduateResearchers.map((person: Person, index: number) => (
						<div key={index} onClick={() => handlePopupOpen(person)} className='flex flex-col items-center justify-center hover:underline cursor-pointer pb-8'>
							<img
								src={person.imageUrl}
								alt={`${person.name} 이미지`}
								className='w-[140px] h-[140px] object-cover'
							/>
							<p className='font-bold'>{person.name}</p>
							<p className='text-sm pt-2'>{person.department}</p>
							<p className='text-sm text-font-gray w-[140px] h-[40px] text-center flex justify-center items-center'>
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

export default Mobile_Section5;
