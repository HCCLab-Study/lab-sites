import Person from '../../_data/Person';
import { developerInternship } from '../../_data/developerInternship';
import { Mobile_PopupComponent } from '../_popup/mobile_popup';
import { usePopup } from '../../_hook/usePopup';

// Developer internship 부분

function Mobile_Section6() {
	const { showPopup, selectedPerson, handlePopupOpen, handleClosePopup } = usePopup();

	return (
		<section className='relative w-full min-h-screen'>
			<div className='relative font-roboto items-center text-start mt-1 pt-1 ml-10 mr-10 pb-8'>
				<div className='text-custom-navy font-semibold text-2xl tracking-widest border-b-2 border-custom-blue pb-3 mt-8 mb-2'>
					<div>Developer Intership</div>
				</div>
				<div className='grid grid-cols-2 relative top-[20px]'>
					{developerInternship.slice(0, 4).map((person: Person, index: number) => (
						<div key={index} onClick={() => handlePopupOpen(person)} className='flex flex-col items-center justify-center hover:underline cursor-pointer pb-8'>
							<img
								src={person.imageUrl}
								alt={`${person.name} 이미지`}
								className='w-[140px] h-[140px] object-cover'
							/>
							<p className='font-bold'>{person.name}</p>
							<p className='text-sm p-2'>{person.department}</p>
							<p className='text-sm text-font-gray w-[140px] h-[40px] text-center flex justify-center items-center'>
								{person.interests.join(' ')}
							</p>
						</div>
					))}
				</div>
				<div className='grid grid-cols-2 relative top-[20px]'>
					{developerInternship.slice(4, 9).map((person, index) => (
						<div key={index} onClick={() => handlePopupOpen(person)} className='flex flex-col items-center justify-center hover:underline cursor-pointer pb-8'>
							<img
								src={person.imageUrl}
								alt={`${person.name} 이미지`}
								className='w-[140px] h-[140px] object-cover'
							/>
							<p className='font-bold'>{person.name}</p>
							<p className='text-sm p-2'>{person.department}</p>
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

export default Mobile_Section6;
