import { Link } from "react-router-dom";
import { clubData } from "../../_data/clubInfo";

function Tablet_Section2() {
    return (
        <section className='relative w-full h-auto'>
            <div className='relative font-roboto text-custom-navy -mb-12 mt-6 mr-4 right-8'>
                <div className=' flex justify-center relative w-full h-[500px]'>
                    <img src={clubData.logo} alt="Club CHIC Logo" className='relative h-[250px] top-10' />
                    <div className='grid grid-cols-3'>
                        <div className='relative top-9 right-10 h-[290px] w-[2px] bg-custom-blue' />
                    </div>
                    <div className='grid grid-rows-2'>
                        <div className='relative top-10'>
                            <span className='font-black text-3xl'>C</span><span className='font-semibold text-2xl mr-2'>omputer</span>
                            <span className='font-black text-3xl'>H</span><span className='font-semibold text-2xl mr-2'>uman</span>
                            <span className='font-black text-3xl'>I</span><span className='font-semibold text-2xl mr-2'>nteraction</span>
                            <span className='font-black text-3xl'>C</span><span className='font-semibold text-2xl'>ommunity</span>
                        </div>
                        <div className='relative bottom-36'>
                            <p className='tracking-tighter leading-8 mt-9 whitespace-pre-wrap'>{clubData.description}</p>
                        </div>
                        {Object.entries(clubData.socialMedia).map(([key, { icon, url, handle }]) => (
                            <div key={key} className='flex relative bottom-40'>
                                <img src={icon} alt={`${key} Icon`} className='w-5 h-6 pb-1 mt-2' />
                                <Link to={url} target='_blank' rel='noopener noreferrer' className='underline font-semibold mt-1 ml-1'>
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

export default Tablet_Section2;
