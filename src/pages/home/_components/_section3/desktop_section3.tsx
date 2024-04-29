import { instagram } from '../../_data/home_section3';

function DeskTop_Section3() {
    return (
        <section className='relative w-full	h-[950px] left-0 right-0 bg-section-gray flex justify-center'>
            <div className='relative font-roboto items-center text-center w-[1000px]'>
                <div className='text-left font-extrabold text-xl tracking-widest text-custom-blue pt-16'>
                    {instagram.title}
                </div>
                <div className='text-left font-extrabold text-4xl tracking-tight text-custom-navy mt-5'>
                    {instagram.subTitle}
                </div>
                <div className='flex'>
                    <div className='font-normal text-l tracking-normal text-font-gray mt-5'>
                        {instagram.newsIntroText}
                    </div>
                    <img
                        src={instagram.instagramLogo.src}
                        alt='인스타그램 로고 이미지'
                        className='h-[30px] w-[30px] object-contain ml-3 mr-1 my-4'
                    />
                    <a
                        className='font-extrabold text-l tracking-normal text-font-gray underline mt-5'
                        href={instagram.instagramLink.url}>
                        {instagram.instagramLink.text}
                    </a>
                </div>
                <img
                    src={instagram.newsImage.src}
                    alt='연구실 소식 이미지'
                    className='w-[1000px] object-contain mt-5'
                />
            </div>
        </section>
    );
}

export default DeskTop_Section3;
