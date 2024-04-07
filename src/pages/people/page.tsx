import { useEffect, useState } from 'react';
import Section1 from './_components/section1';
import Section2 from './_components/section2';
import Section3 from './_components/section3';
import Section4 from './_components/section4';
import Section5 from './_components/section5';
import Section6 from './_components/section6';
import Section7 from './_components/section7';
import { useQuery } from '@tanstack/react-query';

export default function PeoplePage() {
	const { data } = useQuery({
		queryKey: ['people', 'all'],
		queryFn: async () => {
			const response = await fetch('/api/people');
			const data = await response.json();
			return data;
		},
	});

	return (
		<main className="mt-14">
			<Section1 />
			<Section2 />
			<Section3 />
			<Section4 />
			<Section5 />
			<Section6 />
			<Section7 />
		</main>
	);
}
