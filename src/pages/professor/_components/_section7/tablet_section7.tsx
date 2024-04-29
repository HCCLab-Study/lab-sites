import { Review, Society, professionalActivities } from '../../_data/professionalActivities';

function isSociety(item: Society | Review): item is Society {
    return 'organization' in item;
}

function isReview(item: Society | Review): item is Review {
    return 'journal' in item;
}

function Tablet_Section7() {
    return (
        <section className='relative w-full h-auto bg-section-gray'>
            <div className='relative font-roboto items-center text-start mt-12 ml-10 mr-10 mb-2 pt-8 pb-5'>
                <div className='text-custom-navy font-semibold text-3xl tracking-widest border-b-2 border-custom-blue pb-3 mt-4'>
                    <div>Professional Activities</div>
                </div>
                <div className='pt-6 pl-6'>
                    <ul className='list-disc'>
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
            </div>
        </section>
    );
}

export default Tablet_Section7;
