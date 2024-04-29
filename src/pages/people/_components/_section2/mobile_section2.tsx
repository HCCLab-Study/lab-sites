import { professorInfo } from '../../_data/professor';
import { useClipboard } from '../../../../hooks/useClipboard';


function Mobile_Section2() {
    const { copyToClipboard } = useClipboard();

    return (
        <section className='relative w-full h-auto'>
            <div className='relative font-roboto items-center text-start mt-14 ml-10 mr-10 pb-2'>
                <div className='text-custom-navy font-semibold text-2xl tracking-widest border-b-2 border-custom-blue pb-3 mt-8 mb-2'>
                    <div>Professor</div>
                </div>
                <div className='relative h-[180px] w-full top-[50px] flex justify-center items-center'>
                    <img
                        src={professorInfo.imageUrl}
                        alt='교수님 이미지'
                        className='w-[200px] h-[200px] object-cover'
                    />
                </div>
                <div className='relative h-[450px] w-full top-[100px]'>
                    <p className='text-lg relative left-8'>
                        <strong>{professorInfo.name} <br />| </strong>{professorInfo.title}
                    </p>
                    <p className='pt-5 pb-3 pl-7 pr-7'>{professorInfo.department}</p>
                    <ul className='list-disc list-inside pb-4 ml-6'>
                        <li onClick={() => copyToClipboard(professorInfo.email)} className='cursor-pointer'>Email: {professorInfo.email}</li>
                        <li>Tel: {professorInfo.phone}</li>
                        {professorInfo.office.map((office, index) => (
                            <li key={index}>Office: {office}</li>
                        ))}
                        <li>
                            <a href={professorInfo.scheduleUrl} className='underline underline-offset-1'>
                                일정보기
                            </a>
                        </li>
                    </ul>
                    <a
                        href={professorInfo.detailUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-block w-[120px] h-[40px] mt-4 ml-4 bg-custom-blue rounded-full text-white filter drop-shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)] flex justify-center items-center'>
                        자세히
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Mobile_Section2;
