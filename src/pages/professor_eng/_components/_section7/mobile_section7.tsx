import React from 'react';
import { professionalActivities } from '../../_data/professionalActivities';

// 전문 활동
function Mobile_Section7() {
	return (
        <section className='relative w-full h-auto bg-section-gray'>
            <div className='relative font-roboto items-center text-start mt-8 ml-10 mr-10 pb-4 pt-2'>
                <div className='text-custom-navy font-semibold text-2xl tracking-widest border-b-2 border-custom-blue pb-3 mt-8 mb-2'>
                    <div>Professional Activities</div>
                </div>
				<div className='pt-4 pl-3'>
				{professionalActivities.categories.map((category, index) => (
                        <React.Fragment key={index}>
                            <li className='mb-2 list-disc text-sm'>{category.name}</li>
                            <ul className='list-disc pl-12 pb-5 text-sm'>
                                {category.items.map((item, idx) => (
                                    <li key={idx} className='mb-2'>
                                        {('role' in item) ? `${item.role}${item.organization ? `, ${item.organization}` : ''}` : `${item.journal} (${item.category})`}
                                    </li>
                                ))}
                            </ul>
                        </React.Fragment>
                    ))}
				</div>
			</div>
		</section>
	);
}

export default Mobile_Section7;
