import { instagram } from '../../_data/home_section3';

function Mobile_Section3() {
    return (
        <section className='relative w-full	h-auto bg-section-gray flex justify-center'>
            <div className='relative font-roboto items-center text-center w-full pb-6 pl-10 pr-10 pt-2'>
                <div className='text-left font-extrabold text-md tracking-widest text-custom-blue pt-12'>
                    {instagram.title}
                </div>
                <div className='text-left font-extrabold text-xl tracking-tight text-custom-navy mt-3'>
                    {instagram.subTitle}
                </div>
                <div className='flex'>
                    <div className='font-normal text-sm tracking-normal text-font-gray mt-4'>
                        {instagram.newsIntroText}
                    </div>
                    <img
                        src={instagram.instagramLogo.src}
                        alt='인스타그램 로고 이미지'
                        className='h-[25px] w-[25px] object-contain ml-3 mr-1 my-3 mt-3'
                    />
                    <a
                        className='font-extrabold text-sm tracking-normal text-font-gray underline mt-4'
                        href={instagram.instagramLink.url}>
                        {instagram.instagramLink.text}
                    </a>
                </div>
                <img
                    src={instagram.newsImage.src}
                    alt='연구실 소식 이미지'
                    className='w-full object-contain mt-5'
                />
            </div>
        </section>
    );
}

export default Mobile_Section3;
