import Person from '../../_data/Person';
import { undergraduateResearchers } from '../../_data/undergraduateResearchers';
import { Tablet_PopupComponent } from '../_popup/tablet_popup';
import { usePopup } from '../../_hook/usePopup';

// Undergraduate Researchers 부분

function Tablet_Section5() {
    const { showPopup, selectedPerson, handlePopupOpen, handleClosePopup } = usePopup();

    return (
        <section className='relative w-full h-auto bg-section-gray'>
            <div className='relative h-[400px] font-roboto items-center text-start mt-6 ml-10 mr-10 mb-12 pt-8'>
                <div className='text-custom-navy font-semibold text-3xl tracking-widest border-b-2 border-custom-blue pb-3 mt-3'>
                    <div>
                        Undergraduate Researchers
                    </div>
                </div>
                <div className='flex flex-row relative top-[30px]'>
                    {undergraduateResearchers.map((person: Person, index: number) => (
                        <div key={index} onClick={() => handlePopupOpen(person)} className='flex flex-col items-center justify-center hover:underline cursor-pointer'>
                            <img
                                src={person.imageUrl}
                                alt={`${person.name} 이미지`}
                                className='w-[130px] h-[130px] object-cover mx-5 my-2'
                            />
                            <p className='font-bold'>{person.name}</p>
                            <p className='text-sm p-2'>{person.department}</p>
                            <p className='text-sm text-font-gray w-[140px] h-[40px] text-center flex justify-center items-center'>
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

export default Tablet_Section5;
