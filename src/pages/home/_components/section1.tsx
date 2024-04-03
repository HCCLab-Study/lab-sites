// Title

// 버튼 누르면 Section2로 넘어가는 함수 생성
function scrollToSection2() {
	const section2 = document.getElementById('section2');
	if (section2) {
	  section2.scrollIntoView({ behavior: 'smooth' });
	}
  }

function Section1() {
	return (
		<section className="relative w-full	h-[690px] left-0 right-0 bg-gradient-to-br from-[#A64D4D] to-[#2370C8]">
			<div className="absolute w-[1100px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-bold leading-6 text-white font-roboto">
				<div className="font-semibold text-white font-roboto text-7xl">
					Human-Centered<br />Computing Lab
				</div>
				<div className="text-xl font-light text-white font-roboto py-8">
					We conduct <span className="font-bold">Human-Computer Interaction</span> (HCI) research by designing an interactive computing system from
					human perspectives. Our main research interests are <span className="font-bold">1) UX/CX Research to identify customer pain points,</span> 
					2) Human-centered AI to derive insights from data, and 
					<span className="font-bold">3) Rapid development of MVP (Minimum viable product) to verify solutions.</span> Currently looking for
					self-motivated, passionate students. If you are interested in research assistants studying HCI, UX, or AI
				applications, please feel free to contact me at email.
				</div>
				{/* // TODO: Introduction 바로가기 연결하기 */}
				<button onClick={scrollToSection2} className="w-fit p-3 px-12 text-xl font-semibold text-black bg-white rounded-full font-roboto">
					Learn More
				</button>
			</div>
		</section>
	);
}

export default Section1;
