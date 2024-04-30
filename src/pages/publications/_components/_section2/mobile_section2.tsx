import { conferences } from '../../_data/conferences';
import { journals } from '../../_data/journals';

// Journals
function Mobile_Section2() {
	return (
        <section className='relative w-full h-auto'>
            <div className='relative w-full max-w-[1000px] m-auto pb-6 font-roboto text-custom-navy'>
				<div className='grid grid-cols-1 gap-y-24 relative p-10'>
					<div className='pb-4'>
                    <div className='text-custom-navy font-semibold text-2xl tracking-widest border-b-2 border-custom-blue pb-3 mt-2 mb-6'>
							<div>Journals</div>
						</div>
						<ul className='list-disc list-outside text-sm pl-6 text-font-gray'>
							{journals.map((journal, index) => (
								<div key={index}>
									<li className='mb-2'>
										<span dangerouslySetInnerHTML={{ __html: journal.author }} />
										{journal.year && ` (${journal.year})`} "{journal.content}", <i>{journal.journal}</i>
										{journal.volumeAndIssue && `, ${journal.volumeAndIssue}`}
										{journal.registered_journal && <b className='text-custom-navy'> {journal.registered_journal}</b>}
										{journal.award && <b className='text-custom-blue'> {journal.award}</b>}
									</li>
								</div>
							))}

						</ul>
						<a
							className='absolute font-roboto font-medium text-sm justify-start text-white rounded-full bg-custom-blue px-4 p-2'
							style={{ marginTop: '15px', boxShadow: '0 4px 3px rgba(0, 0, 0, 0.3)' }}
							href='https://scholar.google.co.kr/citations?user=gb_6VUIAAAAJ'
							target='_blank'
							rel='noopener noreferrer'>
							Refer to <b>google scholar page</b>
						</a>
					</div>
					<div>
                    <div className='text-custom-navy font-semibold text-2xl tracking-widest border-b-2 border-custom-blue pb-3 mt-2 mb-6'>
							<div>Conferences</div>
						</div>
						<ul className='list-disc list-outside text-sm pl-6 text-font-gray'>
							{conferences.map((reference, index) => (
								<div key={index}>
									<p>
										<li className='mb-2'>
											<span dangerouslySetInnerHTML={{ __html: reference.author }} />(
											{reference.year}){reference.content} {reference.conference}{' '}
											<b className='text-custom-blue'>{reference.congress}</b>
										</li>
									</p>
								</div>
							))}

						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
export default Mobile_Section2;
