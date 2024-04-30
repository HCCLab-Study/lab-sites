import { professorInfo } from '../../_data/professor';
import { useClipboard } from '../../../../hooks/useClipboard';

function DeskTop_Section2() {
    const { copyToClipboard } = useClipboard();

    return (
        <section className='relative w-full h-[400px] left-0 right-0'>
            <div className='absolute h-[350px] w-[1000px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-roboto text-custom-navy'>
                <div className='absolute h-[50px] w-full border-b-2 border-custom-blue'>
                    <h2 className='absolute flex items-center text-3xl font-semibold tracking-widest'>Professor</h2>
                </div>
                <div className='absolute h-[300px] w-[250px] top-[50px] flex justify-center items-center'>
                    <img
                        src={professorInfo.imageUrl}
                        alt='교수님 이미지'
                        className='w-[210px] h-[210px] object-cover'
                    />
                </div>
                <div className='absolute h-[300px] w-[750px] top-[50px] left-[250px] p-5'>
                    <p className='text-xl'>
                        <strong>{professorInfo.name} | </strong>{professorInfo.title}
                    </p>
                    <p className='pt-3 pb-3'>{professorInfo.department}</p>
                    <ul className='list-disc list-inside pb-4'>
                        <li>Email: <u onClick={() => copyToClipboard(professorInfo.email)} className='cursor-pointer'>{professorInfo.email}</u></li>
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
                        className='inline-block w-[144.68px] h-[40px] bg-custom-blue rounded-full text-white filter drop-shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)] flex justify-center items-center'>
                        자세히
                    </a>
                </div>
            </div>
        </section>
    );
}

export default DeskTop_Section2;
