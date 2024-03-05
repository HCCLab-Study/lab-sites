//
function Section4() {

	return (
		<section className="relative w-full	h-[1200px] left-0 right-0 bg-section-gray">
			<div className="relative items-center justify-start font-roboto">
				<div className="text-xl font-extrabold tracking-widest text-custom-blue" style={{ paddingTop: '80px' }}>
					News
				</div>
				<div className="text-5xl font-extrabold tracking-tight text-custom-navy" style={{ marginTop: '20px' }}>
					Our recent news
				</div>
				<div className="flex">
					<div className="text-xl font-normal tracking-normal text-font-gray" style={{ marginTop: '10px' }}>
						더 많은 소식과 근황 보기 :
					</div>
					{/* // TODO: insta logo 첨부 및 하이퍼링크 연결하기 */}
					<div
						className="text-xl font-extrabold tracking-normal underline text-font-gray"
						style={{ marginTop: '10px', paddingLeft: '10px' }}>
						@hcclab
					</div>
				</div>
				<img
					src="src\assets\images\home\news.png"
					alt="연구실 소식 이미지"
					className="h-[830px] object-cover"
					style={{ marginTop: '30px' }}
				/>
			</div>
		</section>
	);

}

export default Section4;
