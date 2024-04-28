import React from 'react';
import { Link } from 'react-router-dom';

// 교수님 연구실 소개 및 연락처
function Section2() {
	const copyEmail = async (text: string) => {
		try {
			await navigator.clipboard.writeText(text);
			alert('Copied to clipboard.');
		} catch (e) {
			alert('Copy failed.');
		}
	};

	return (
		<section className="relative w-full h-[280px] left-0 right-0">
			<div className="absolute h-[250px] w-[900px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-roboto text-custom-navy">
				<div className="mt-6">
					<p className="relative left-48">
						Dr. Kyudong Park is an Assistant Professor in the{' '}
						<Link to="https://ic.kw.ac.kr:501/main/main.php" className="text-custom-blue underline font-semibold">
							School of Information Convergence
						</Link>{' '}
						at{' '}
						<Link to="https://www.kw.ac.kr/ko/" className="text-custom-blue underline font-semibold">
							KwangWoon University
						</Link>
						, and he directs Human-centered Computing Lab. He received his Ph.D. in Interdisciplinary Engineering
						(Computer Science & Industrial and Management Engineering) at{' '}
						<Link to="https://postech.ac.kr/kor/" className="text-custom-blue underline font-semibold">
							POSTECH
						</Link>{' '}
						in South Korea. Before joining KwangWoon University, he was in charge of data-driven UX design as a Senior
						Researcher at SAMSUNG SDS.
					</p>
				</div>
				<div className="relative left-56 mt-6">
					<ul className="font-semibold list-disc">
						<li>
							Email:{' '}
							<u className="cursor-pointer" onClick={() => copyEmail('kdpark@kw.ac.kr')}>
								kdpark@kw.ac.kr
							</u>
						</li>
						<li>Tel: +82-2-940-5638</li>
						<li>Office: Room 804, Bldg. Saebit, KwangWoon University, Seoul, South Korea</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

export default Section2;
