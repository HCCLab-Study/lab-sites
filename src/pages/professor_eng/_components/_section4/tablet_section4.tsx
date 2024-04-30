import { workExperience } from '../../_data/workExperience';

// 교수님 연구 경험
function Tablet_Section4() {
	return (
        <section className='relative w-full h-auto'>
            <div className='relative font-roboto items-center text-start mt-2 ml-10 mr-10 mb-2 pt-6 pb-6'>
                <div className='text-custom-navy font-semibold text-3xl tracking-widest border-b-2 border-custom-blue pb-3 mt-4'>
                    <div>Work Experience</div>
                </div>
				<div className='pt-6 pl-6'>
					<ul className='list-disc'>
						{workExperience.map((item, index) => (
							<li key={index} className='mb-2'>{item.period} {item.description}</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}

export default Tablet_Section4;
