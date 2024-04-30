import React from 'react';
import { professionalActivities } from '../../_data/professionalActivities';

// 전문 활동
function DeskTop_Section7() {
	return (
        <section className='relative w-full h-auto bg-section-gray'>
            <div className='relative w-full max-w-[1000px] mx-auto py-10 font-roboto text-custom-navy'>
                <div className='border-b-2 border-custom-blue mb-6'>
                    <h2 className='flex items-center text-3xl font-semibold tracking-widest mb-3'>Professional Activities</h2>
                </div>
				<div className='pl-3'>
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

export default DeskTop_Section7;
