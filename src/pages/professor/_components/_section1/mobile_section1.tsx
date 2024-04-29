import { professorInfo } from '../../_data/professorProfile';

// 교수님 프로필 이미지, 소개
function Mobile_Section1() {


    return (
        <section className='relative w-full h-[250px] left-0 right-0 bg-gradient-to-br from-custom-red to-custom-blue'>
            <div className='absolute bottom-10 inset-x-0 font-roboto font-bold text-4xl leading-6 flex items-center justify-center text-white mb-14'>
                Director
            </div>
            <div className='absolute h-[200px] w-[150px] top-[150px] left-2 flex justify-center items-center'>
                <img src={professorInfo.imageUrl} alt={professorInfo.altText} className='w-[150px] h-[150px] object-cover' />
            </div>
            <div className='relative top-48 left-36 px-8 py-2'>
                <p className='font-semibold text-white text-sm'>{professorInfo.name}</p>
                <p className='text-white text-sm'>| {professorInfo.title}</p>
            </div>
            <button
                className='absolute right-[12px] bottom-16 mb-4 px-3 py-2 bg-white font-semibold text-sm shadow-md hover:bg-gray-100 rounded-3xl'
                type='button'>
                ENG.ver.
            </button>
        </section>
    );
}

export default Mobile_Section1;