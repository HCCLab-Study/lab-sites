import React from 'react';
import { professionalActivities } from '../../_data/professionalActivities';

// 전문 활동
function Tablet_Section7() {
	return (
        <section className='relative w-full h-auto bg-section-gray'>
            <div className='relative font-roboto items-center text-start mt-12 ml-10 mr-10 mb-2 pt-8 pb-5'>
                <div className='text-custom-navy font-semibold text-3xl tracking-widest border-b-2 border-custom-blue pb-3 mt-4'>
                    <div>Professional Activities</div>
                </div>
				<div className='pt-6 pl-3'>
				{professionalActivities.categories.map((category, index) => (
                        <React.Fragment key={index}>
                            <li className='mb-2 list-disc'>{category.name}</li>
                            <ul className='list-disc pl-12 pb-5'>
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

export default Tablet_Section7;
