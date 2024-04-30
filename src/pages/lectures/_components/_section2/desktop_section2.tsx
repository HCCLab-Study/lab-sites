import { list } from '../../_data/list';

// 교수님이 수업하신 강의 list
function DeskTop_Section2() {

    return (
        <section className='relative w-full h-auto'>
            <div className='relative w-full max-w-[1000px] m-auto pb-10 font-roboto text-custom-navy'>
                <div className='border-b-2 border-custom-blue mb-7 mt-12'>
                    <h2 className='flex items-center text-3xl font-semibold tracking-widest mb-3'>List</h2>
                </div>
                <div className='relative border-2 border-custom-blue font-roboto text-custom-navy'>
                    <ul className='list-disc list-inside pb-4 pl-6 pt-8'>
                        {list.map((item, index) => (
                            <li key={index} className='pb-3'>
                                {item.semester}: {item.lectures}
                                {item.score && ` (${item.score})`}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

        </section>
    );
}

export default DeskTop_Section2;