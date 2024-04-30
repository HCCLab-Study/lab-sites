import { Link } from "react-router-dom";
import { clubData } from "../../_data/clubInfo";

function DeskTop_Section2() {
    return (
        <section className='relative w-full h-[450px] left-0 right-0'>
            <div className='absolute h-[350px] w-[1000px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-roboto text-custom-navy'>
                <div className='flex relative w-full h-[500px]'>
                    <img src={clubData.logo} alt="Club CHIC Logo" className='relative w-[350px] h-[300px] right-12 top-10' />
                    <div className='grid grid-cols-3'>
                        <div className='relative top-9 right-8 h-[290px] w-[2px] bg-custom-blue' />
                    </div>
                    <div className='grid grid-rows-2 relative w-[720px]'>
                        <div className='relative top-10'>
                            <span className='font-black text-4xl'>C</span><span className='font-semibold text-3xl mr-2'>omputer</span>
                            <span className='font-black text-4xl'>H</span><span className='font-semibold text-3xl mr-2'>uman</span>
                            <span className='font-black text-4xl'>I</span><span className='font-semibold text-3xl mr-2'>nteraction</span>
                            <span className='font-black text-4xl'>C</span><span className='font-semibold text-3xl'>ommunity</span>
                        </div>
                        <div className='relative bottom-32 w-[720px]'>
                            <p className='tracking-tighter leading-8 mt-9 whitespace-pre-wrap'>{clubData.description}</p>
                        </div>
                        {Object.entries(clubData.socialMedia).map(([key, { icon, url, handle }]) => (
                            <div key={key} className='flex relative bottom-44'>
                                <img src={icon} alt={`${key} Icon`} className='w-8 pb-2' />
                                <Link to={url} target='_blank' rel='noopener noreferrer' className='underline font-semibold mt-1 ml-1 pb-4'>
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

export default DeskTop_Section2;
