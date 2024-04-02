import { useQuery } from "@tanstack/react-query";

export const useGetAllProjects = () => {
    return useQuery(
        {
            queryKey: ['projects'],
            queryFn:  async () => {
                const response = await fetch('/api/project');
                if (!response.ok) throw new Error('Failed to fetch projects');
                const data = await response.json();
                return data.project;
            },
            staleTime: 1000 * 10,
            initialData: [],
        }
        );
}