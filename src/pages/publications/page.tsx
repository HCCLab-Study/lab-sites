import Section1 from './_components/section1';
import Section2 from './_components/section2';
import { Journals, Conferences } from '../../model/publication.type';
import { useGetAllPublications } from './_hooks/useGetAllPublications';

export default function PublicationsPage() {
	const { data: publication, isFetching, isError } = useGetAllPublications();

	let journals: Journals[] = [];
	let conferences: Conferences[] = [];

	if (publication) {
		for (const item of publication) {
			if ('journals' in item) {
				journals.push(item);
			}
			if ('conferences' in item) {
				conferences.push(item);
			}
		}
	}

	return (
		<main className="mt-14">
			<Section1 />
			<Section2 journals={journals} conferences={conferences} />
		</main>
	);
}
