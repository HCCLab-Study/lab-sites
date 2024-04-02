import { Journals, Conferences } from '../../../model/publication.type';

function Section2({ journals, conferences }: { journals: Journals[]; conferences: Conferences[] }) {
	return (
		<section className="relative w-full h-auto left-0 right-0">
			<div className="relative w-[1000px] h-[3700px] left-1/2 top-1/4 transform -translate-x-1/2 -translate-y-1/16 font-roboto text-custom-navy">
				<div className="flex flex-row gap-x-20 relative top-[50px]">
					{/* 저널 */}
					<div className="w-full">
						<div className="h-[50px] w-full border-b-2 border-custom-blue mb-6">
							<h2 className="flex items-center text-3xl font-semibold tracking-widest">Journals</h2>
						</div>
						<ul className="list-disc list-outside text-sm pl-8 text-font-gray">
							{journals.map((journal, index) => (
								<li className="mb-2" key={index}>
									{renderAuthor(journal.author)} {journal.date} {journal.description} {journal.journals}
									<b className="text-custom-navy">{journal.citationIndex}</b>
									<b className="text-custom-blue">{journal.award}</b>
								</li>
							))}
						</ul>
						<a
							className="absolute justify-start font-roboto font-medium text-lg justify-start text-white rounded-full bg-custom-blue px-8 p-2"
							style={{ marginTop: '30px', boxShadow: '0 4px 3px rgba(0, 0, 0, 0.3)' }}
							href="https://scholar.google.co.kr/citations?user=gb_6VUIAAAAJ"
							target="_blank"
							rel="noopener noreferrer">
							Refer to <b>google scholar page</b>
						</a>
					</div>
					{/* 컨퍼런스 */}
					<div className="w-full">
						<div className="h-[50px] w-full border-b-2 border-custom-blue mb-6">
							<h2 className="flex items-center text-3xl font-semibold tracking-widest">Conferences</h2>
						</div>
						<ul className="list-disc list-outside text-sm pl-8 text-font-gray">
							{conferences.map((conference, index) => (
								<li className="mb-2" key={index}>
									{renderAuthor(conference.author)} {conference.date} {conference.description} {conference.conferences}
									<b className="text-custom-blue">{conference.award}</b>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}

function renderAuthor(author: string) {
	const parts = author.split('Park, K.');
	if (parts.length === 2) {
		return (
			<>
				<span>{parts[0]}</span>
				<b>Park, K.</b>
				<span>{parts[1]}</span>
			</>
		);
	}
	return <>{author}</>;
}

export default Section2;
