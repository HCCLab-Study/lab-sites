//
function Section4() {
	return (
		<section className="relative w-full	h-[1200px] left-0 right-0 bg-section-gray">
			<div className="relative justify-start font-roboto items-center" style={{ marginLeft: '280px' }}>
				<div className="font-extrabold text-xl tracking-widest text-custom-blue" style={{ paddingTop: '80px' }}>
					News
				</div>
				<div className="font-extrabold text-5xl tracking-tight text-custom-navy" style={{ marginTop: '20px' }}>
					Our recent news
				</div>
				<div className="flex">
					<div className="font-normal text-xl tracking-normal text-font-gray" style={{ marginTop: '20px' }}>
						더 많은 소식과 근황 보기 :
					</div>
					{/* // TODO: insta logo 첨부 및 하이퍼링크 연결하기 */}
					<img
						src="src\assets\images\home\instagram-logo.png"
						alt="인스타그램 로고 이미지"
						className="h-[35px] w-[35px] object-contain ml-3 mr-1 my-4"
					/>
					<a
						className="font-extrabold text-xl tracking-normal text-font-gray underline"
						style={{ marginTop: '20px' }}
						href="">
						@hcclab
					</a>
				</div>
				<img
					src="src\assets\images\home\news.png"
					alt="연구실 소식 이미지"
					className="h-[830px] w-[1350px] object-contain"
					style={{ marginTop: '15px' }}
				/>
			</div>
		</section>
	);

}

export default Section4;
