import { list } from '../../_data/list';

// 교수님이 수업하신 강의 list
function DeskTop_Section2() {

    return (
        <section className='relative w-full h-[550px] left-0 right-0'>
            <div className='absolute h-[450px] w-[1000px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-roboto text-custom-navy'>
                <div className='absolute h-[50px] w-full border-b-2 border-custom-blue'>
                    <h2 className='absolute flex items-center text-3xl font-semibold tracking-widest'>List</h2>
                </div>
                <div className='relative top-[80px] left-0 right-0 bottom-4 border-2 border-custom-blue font-roboto text-custom-navy'>
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