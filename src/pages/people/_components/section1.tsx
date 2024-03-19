import { useQueryClient } from '@tanstack/react-query';
import React from 'react';

// 타이틀부분
function Section1() {
	const queryClient = useQueryClient();
	const data = queryClient.getQueryData(['people', 'all']);

	// queryClient.invalidateQueries(['people']);
	console.log(data);

	return (
		<section className="relative w-full	h-[250px] left-0 right-0 bg-gradient-to-br from-custom-red to-custom-blue">
			<div
				className="absolute inset-x-0 bottom-0 flex items-center justify-center text-5xl font-bold leading-6 text-white font-roboto"
				style={{ marginBottom: '50px' }}>
				People
			</div>
		</section>
	);
}

export default Section1;
