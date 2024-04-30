import { invitedTalkSeminars } from '../../_data/invitedTalkSeminars';

// 교수님이 하신 초빙 강의 및 세미나
function DeskTop_Section6() {
    return (
        <section className='relative w-full h-auto'>
            <div className='relative w-full max-w-[1000px] mx-auto py-10 font-roboto text-custom-navy'>
                <div className='border-b-2 border-custom-blue mb-6'>
                    <h2 className='flex items-center text-3xl font-semibold tracking-widest mb-3'>Invited Talks / Seminars</h2>
                </div>
                <ul className='list-disc pl-6'>
                    {invitedTalkSeminars.map((talk, index) => (
                        <li key={index} className='mb-2'>
                            {talk.year} '{talk.title}', {talk.target}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default DeskTop_Section6;
