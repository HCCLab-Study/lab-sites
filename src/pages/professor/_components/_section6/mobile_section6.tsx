import { seminarLectureData } from '../../_data/seminarLectureData';

// 교수님이 하신 초빙 강의 및 세미나
function Mobile_Section6() {
    return (
        <section className='relative w-full h-auto'>
            <div className='relative font-roboto items-center text-start mt-1 pt-1 ml-10 mr-10 pb-10'>
                <div className='text-custom-navy font-semibold text-2xl tracking-widest border-b-2 border-custom-blue pb-3 mt-8 mb-2'>
                    <div>초빙 강의 및 세미나</div>
                </div>
                <div className='pt-4 pl-6'>
                    <ul className='list-disc text-sm'>
                        {seminarLectureData.lectures.map((lecture, index) => (
                            <li key={index} className='mb-2'>{lecture.year} {lecture.title}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Mobile_Section6;
