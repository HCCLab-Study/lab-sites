// Title
function Section1() {
	return (
		<section className="flex flex-col gap-y-12 items-center justify-center justify w-full h-[689px] left-0 right-0 bg-gradient-to-br from-custom-red to-custom-blue">
			<div className="inset-x-0 font-semibold leading-10 text-white font-roboto text-7xl">
				Human-Centered
				<br />
				<br />
				Computing Lab
			</div>
			<div className="inset-x-0 text-xl font-light leading-7 text-white px-52 font-roboto">
				We conduct Human-Computer Interaction (HCI) research by designing an interactive computing system from human
				perspectives. Our main research interests are 1) UX/CX Research to identify customer pain points, 2)
				Human-centered AI to derive insights from data, and 3) Rapid development of MVP (Minimum viable product) to
				verify solutions. Currently looking for self-motivated, passionate students. If you are interested in research
				assistants studying HCI, UX, or AI applications, please feel free to contact me at email.
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
