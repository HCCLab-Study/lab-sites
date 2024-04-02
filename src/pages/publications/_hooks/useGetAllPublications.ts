import { useQuery } from '@tanstack/react-query';

export const useGetAllPublications = () => {
	return useQuery({
		queryKey: ['publication'],
		queryFn: async () => {
			const response = await fetch('/api/publication');
			if (!response.ok) throw new Error('Failed to fetch publications');
			const data = await response.json();
			return data.publication;
		},
		staleTime: 1000 * 10,
		initialData: [],
	});
};
