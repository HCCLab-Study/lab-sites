import { professorInfo } from '../../_data/professorProfile';

// 교수님 프로필 이미지, 소개
function DeskTop_Section1() {


    return (
        <section className='relative w-full h-[250px] left-0 right-0 bg-gradient-to-br from-custom-red to-custom-blue flex justify-center items-end pb-2'>
            <div className='absolute bottom-0 inset-x-0 font-roboto font-bold text-5xl leading-6 flex items-center justify-center text-white' style={{ marginBottom: '80px' }}>
                Director
            </div>
            <div className='absolute h-[300px] w-[250px] top-[110px] left-80 flex justify-center items-center'>
                <img src={professorInfo.imageUrl} alt={professorInfo.altText} className='w-[250px] h-[250px] object-cover' />
            </div>
            <div className='flex items-center justify-center px-8 py-2 mr-16'>
                <p className='font-semibold text-white mr-4 text-xl'>{professorInfo.name}</p>
                <p className='text-white text-xl'> | </p>
                <p className='text-white text-xl ml-4'>{professorInfo.title}</p>
            </div>
            <button
                className='absolute right-0 bottom-0 mb-4 mr-80 px-8 py-2 bg-white font-semibold shadow-md hover:bg-gray-100 rounded-3xl'
                type='button'>
                ENG.ver.
            </button>
        </section>
    );
}

export default DeskTop_Section1;