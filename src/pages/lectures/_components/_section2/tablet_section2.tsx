import { list } from '../../_data/list';

// 교수님이 수업하신 강의 list
function Tablet_Section2() {

    return (
        <section className='relative w-full h-auto'>
            <div className='relative font-roboto items-center text-start mt-12 ml-10 mr-10'>
                <div className='text-custom-navy font-semibold text-3xl tracking-widest border-b-2 border-custom-blue pb-3 mt-4'>
                    <div>List</div>
                </div>
                <div className='relative top-[35px] mb-16 border-2 border-custom-blue font-roboto text-custom-navy'>
                    <ul className='list-disc pb-3 pl-7 pt-5'>
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

export default Tablet_Section2;