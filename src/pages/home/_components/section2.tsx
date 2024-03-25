// Introduction: 연구분야
function Section2() {
    return (
        <section className='relative w-full	h-[400px] left-0 right-0'>
            <div className='absolute h-[350px] w-[1000px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-roboto text-center'>
                <div className="text-custom-blue font-semibold text-xl tracking-widest" style={{marginTop: '100px', marginBottom: '30px'}}>
                    Introduction
                </div>
                <div className="text-custom-navy font-semibold text-4xl tracking-tight" style={{marginBottom: '30px'}}>
                    Where Technology Meets Humanity
                </div>
                <div className='flex justify-center items-center'>
                    <img src='src\assets\images\home\introduction1.png' alt='연구분야 이미지' className='h-[350px] w-[1500px] object-contain' style={{marginBottom: '300px'}}/>
                </div>
            </div>
        </section>
    );
}

export default Section2;