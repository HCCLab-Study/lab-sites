import Section1 from './_components/section1';
import Section2 from './_components/section2';
import Section3 from './_components/section3';
import Section4 from './_components/section4';

export default function HomePage() {
	return (
		<main className="overflow-x-hidden min-h-11">
			<Section1 />
			<Section2 />
			<Section3 />
			<Section4 />
		</main>
	);
}
