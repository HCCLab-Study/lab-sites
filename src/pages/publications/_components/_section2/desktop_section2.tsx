import { conferences } from '../../_data/conferences';
import { journals } from '../../_data/journals';

// Journals
function Desktop_Section2() {
	return (
		<section className='relative w-full min-h-screen'>
			<div className='relative w-full max-w-[1000px] m-auto pb-20 font-roboto text-custom-navy'>
				<div className='flex flex-row gap-x-24 relative top-[50px]'>
					<div>
						<div className='border-b-2 border-custom-blue mb-6'>
							<h2 className='flex items-center text-3xl font-semibold tracking-widest mb-3'>Journals</h2>
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
							className='absolute font-roboto font-medium text-lg justify-start text-white rounded-full bg-custom-blue px-8 p-2'
							style={{ marginTop: '30px', boxShadow: '0 4px 3px rgba(0, 0, 0, 0.3)' }}
							href='https://scholar.google.co.kr/citations?user=gb_6VUIAAAAJ'
							target='_blank'
							rel='noopener noreferrer'>
							Refer to <b>google scholar page</b>
						</a>
					</div>
					<div>
						<div className='border-b-2 border-custom-blue mb-6'>
							<h2 className='flex items-center text-3xl font-semibold tracking-widest mb-3'>Conferences</h2>
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
export default Desktop_Section2;
