import { professorInfo } from '../../_data/professor';
import { useClipboard } from '../../../../hooks/useClipboard';


function Tablet_Section2() {
    const { copyToClipboard } = useClipboard();

    return (
        <section className='relative w-full h-auto'>
            <div className='relative h-[350px] font-roboto items-center text-start mt-12 ml-10 mr-10 mb-2'>
                <div className='text-custom-navy font-semibold text-3xl tracking-widest border-b-2 border-custom-blue pb-3 mt-4'>
                    <div>Professor</div>
                </div>
                <div className='absolute h-[300px] w-[220px] top-[50px] flex justify-center items-center'>
                    <img
                        src={professorInfo.imageUrl}
                        alt='교수님 이미지'
                        className='w-[210px] h-[210px] object-cover'
                    />
                </div>
                <div className='absolute h-[300px] w-[750px] top-[50px] left-[220px] p-5'>
                    <p className='text-xl'>
                        <strong>{professorInfo.name} | </strong>{professorInfo.title}
                    </p>
                    <p className='pt-3 pb-3'>{professorInfo.department}</p>
                    <ul className='list-disc list-inside pb-4'>
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
                        className='inline-block w-[144.68px] h-[40px] bg-custom-blue rounded-full text-white filter drop-shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)] flex justify-center items-center'>
                        자세히
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Tablet_Section2;
