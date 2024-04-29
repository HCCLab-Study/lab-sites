import { list } from '../../_data/list';

// 교수님이 수업하신 강의 list
function Mobile_Section2() {

    return (
        <section className='relative w-full h-auto'>
            <div className='relative font-roboto items-center text-start mt-14 ml-10 mr-10'>
                <div className='text-custom-navy font-semibold text-2xl tracking-widest border-b-2 border-custom-blue pb-3 mt-8 mb-2'>
                    <div>List</div>
                </div>
                <div className='relative top-[20px] mb-12 border-2 border-custom-blue font-roboto text-custom-navy'>
                    <ul className='list-disc pb-4 pl-6 pt-4'>
                        {list.map((item, index) => (
                            <li key={index} className='pb-2 text-sm'>
                                <b>{item.semester}</b><br />: {item.lectures}
                                <br />
                                {item.score && ` (${item.score})`}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

        </section>
    );
}

export default Mobile_Section2;