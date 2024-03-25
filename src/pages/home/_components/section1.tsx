// Title
function Section1() {
	return (
		<section
			className="flex flex-col gap-y-12 items-start justify-center justify w-full h-[690px] left-0 right-0 bg-gradient-to-br from-[#A64D4D] to-[#2370C8]"
			style={{ paddingLeft: '380px', paddingRight: '350px' }}>
			<div className="inset-x-0 font-semibold leading-10 text-white font-roboto text-7xl">
				Human-Centered
				<br />
				<br />
				Computing Lab
			</div>
			<div className="inset-x-0 text-xl font-light leading-7 text-white font-roboto">
				We conduct <b>Human-Computer Interaction</b> (HCI) research by designing an interactive computing system from
				human perspectives. Our main research interests are <b>1) UX/CX Research to identify customer pain points,</b>{' '}
				2) Human-centered AI to derive insights from data, and{' '}
				<b>3) Rapid development of MVP (Minimum viable product) to verify solutions.</b> Currently looking for
				self-motivated, passionate students. If you are interested in research assistants studying HCI, UX, or AI
				applications, please feel free to contact me at email.

			</div>
			{/* // TODO: Introduction 바로가기 연결하기 */}
			<div
				className="p-3 px-12 text-xl font-semibold text-black bg-white rounded-full font-roboto"
				// style={{ marginLeft: '280px', marginBottom: '130px' }}
			>
				Learn More
			</div>
		</section>
	);
}

export default Section1;
