import { Review, Society, professionalActivities } from '../../_data/professionalActivities';

function isSociety(item: Society | Review): item is Society {
    return 'organization' in item;
}

function isReview(item: Society | Review): item is Review {
    return 'journal' in item;
}

function DeskTop_Section7() {
    return (
        <section className='relative w-full h-auto bg-section-gray'>
            <div className='relative w-full max-w-[1000px] mx-auto py-10 font-roboto text-custom-navy'>
                <div className='border-b-2 border-custom-blue mb-6'>
                    <h2 className='flex items-center text-3xl font-semibold tracking-widest mb-3'>Professional Activities</h2>
                </div>
                <ul className='list-disc pl-6'>
                    {professionalActivities.categories.map((category, index) => (
                        <li key={index} className='mb-10'>
                            {category.name}
                            <ul className='list-disc pl-8 pt-2'>
                                {category.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className='mb-2'>
                                        {isSociety(item) ? `${item.organization} ${item.role}` : ''}
                                        {isReview(item) ? `${item.journal} (${item.category})` : ''}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default DeskTop_Section7;
