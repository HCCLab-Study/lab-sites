import { Link } from "react-router-dom";
import { clubData } from "../../_data/clubInfo";

function Mobile_Section2() {
    return (
        <section className='relative w-full h-auto'>
            <div className='font-roboto text-custom-navy flex flex-col items-center'>
                <img src={clubData.logo} alt="Club CHIC Logo" className='w-[350px] h-[300px] mt-10' />
                <div className='w-[90%] h-[2px] bg-custom-blue my-4' />
                <div>
                    <div className='text-center pl-12 pr-12'>
                        <span className='font-black text-2xl'>C</span><span className='font-semibold text-lg mr-1'>omputer</span>
                        <span className='font-black text-2xl'>H</span><span className='font-semibold text-lg mr-1'>uman</span>
                        <span className='font-black text-2xl'>I</span><span className='font-semibold text-lg mr-1'>nteraction</span>
                        <span className='font-black text-2xl'>C</span><span className='font-semibold text-lg'>ommunity</span>
                    </div>
                    <p className='tracking-tighter leading-8 mt-4 whitespace-pre-wrap text-center pl-20 pr-20 text-sm'>{clubData.description}</p>
                    <div className='flex flex-wrap justify-center mt-4'>
                        {Object.entries(clubData.socialMedia).map(([key, { icon, url, handle }]) => (
                            <div key={key} className='flex items-center m-2'>
                                <img src={icon} alt={`${key} Icon`} className='w-7 pb-2' />
                                <Link to={url} target='_blank' rel='noopener noreferrer' className='underline font-semibold ml-1 pb-3'>
                                    {handle}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Mobile_Section2;
