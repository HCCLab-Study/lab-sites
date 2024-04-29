import { professorInfo } from '../../_data/professorProfile';

// 교수님 프로필 이미지, 소개
function Tablet_Section1() {


    return (
        <section className='relative w-full h-auto left-0 right-0 bg-gradient-to-br from-custom-red to-custom-blue flex justify-center items-end pb-2'>
            <div className='absolute bottom-0 inset-x-0 font-roboto font-bold text-5xl leading-6 flex items-center justify-center text-white mb-20'>
                Director
            </div>
            <div className='relative h-[250px] w-[450px] top-[110px] left-4 flex justify-center items-center'>
                <img src={professorInfo.imageUrl} alt={professorInfo.altText} className='w-[220px] h-[220px] object-cover' />
            </div>
            <div className='flex items-center justify-center py-2 w-full pl-3'>
                <p className='font-semibold text-white text-lg mr-1'>{professorInfo.name}</p>
                <p className='text-white text-lg'> | </p>
                <p className='text-white text-lg ml-1'>{professorInfo.title}</p>
            </div>
            <button
                className='relative mb-2 mr-2 px-6 py-2 bg-white font-semibold shadow-md hover:bg-gray-100 rounded-3xl'
                type='button'>
                ENG.ver.
            </button>
        </section>
    );
}

export default Tablet_Section1;