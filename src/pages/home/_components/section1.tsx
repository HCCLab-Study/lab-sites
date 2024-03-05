// Title
function Section1() {
    return (
        <section className='relative w-full h-[689px] left-0 right-0 bg-gradient-to-br from-custom-red to-custom-blue'>
            <div className="absolute bottom-0 inset-x-0 justify-start font-roboto font-semibold text-7xl leading-10 flex items-center justify-start text-white" style={{ marginLeft:'280px', marginBottom: '380px' }}>
                Human-Centered<br /><br />Computing Lab
            </div>
            <div className="absolute bottom-0 inset-x-0 justify-start font-roboto font-light text-xl leading-7 flex items-center justify-start text-white" style={{ marginLeft:'280px', marginRight:'310px', marginBottom: '220px' }}>
                We conduct Human-Computer Interaction (HCI) research by designing an interactive computing system from human perspectives. Our main research interests are 1) UX/CX Research to identify customer pain points, 2) Human-centered AI to derive insights from data, and 3) Rapid development of MVP (Minimum viable product) to verify solutions. Currently looking for self-motivated, passionate students. If you are interested in research assistants studying HCI, UX, or AI applications, please feel free to contact me at email.
            </div>
            {/* // TODO: Introduction 바로가기 연결하기 */}
            <div className="absolute bottom-0 justify-start font-roboto font-semibold text-xl justify-start text-black rounded-full bg-white px-12 p-3" style={{ marginLeft:'280px', marginBottom: '130px' }}>
                Learn More
            </div>
        </section>
    );
}

export default Section1;