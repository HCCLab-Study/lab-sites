import { invitedTalkSeminars } from '../../_data/invitedTalkSeminars';

// 교수님이 하신 초빙 강의 및 세미나
function Tablet_Section6() {
	return (
        <section className='relative w-full h-auto'>
            <div className='relative font-roboto items-center text-start mt-2 ml-10 mr-10 mb-2 pt-6 pb-6'>
                <div className='text-custom-navy font-semibold text-3xl tracking-widest border-b-2 border-custom-blue pb-3 mt-4'>
                    <div>Invited Talks / Seminars</div>
                </div>
				<div className='pt-6 pl-6'>
					<ul className='list-disc'>
						{invitedTalkSeminars.map((talk, index) => (
							<li key={index} className='mb-2'>
								{talk.year} '{talk.title}', {talk.target}
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}

export default Tablet_Section6;
