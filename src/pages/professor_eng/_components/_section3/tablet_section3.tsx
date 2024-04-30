import { researchInterests } from '../../_data/researchInterests';

// 교수님 연구 분야
function Tablet_Section3() {
	return (
        <section className='relative w-full h-auto bg-section-gray'>
            <div className='relative font-roboto items-center text-start mt-12 ml-10 mr-10 mb-2 pt-8 pb-6'>
                <div className='text-custom-navy font-semibold text-3xl tracking-widest border-b-2 border-custom-blue pb-3 mt-4'>
                    <div>Research Interests</div>
                </div>
				<div className='pt-6 pl-6'>
					<ul className='list-disc'>
						{researchInterests.map((interest, index) => (
							<li key={index} className='mb-2'>{interest}</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}

export default Tablet_Section3;
