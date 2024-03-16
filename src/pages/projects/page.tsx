import Section1 from './_components/section1';
import Section2 from './_components/section2';
import Section3 from './_components/section3';

import { Project } from '../../model/projects.type.ts';

import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

export default function ProjectsPage() {
    const queryClient = new QueryClient();

    const { data: projects } = useQuery('projects', async () => {
        const response = await fetch('/api/project');
        if (!response.ok) throw new Error('Failed to fetch projects');
        const data = await response.json();
        return data.project;
    });


    const ongoingProjects = projects ? projects.filter((project : Project) => project.status === 'onGoing') : [];
    const finishedProjects = projects ? projects.filter((project : Project) => project.status === 'finished') : [];

    return (
        <QueryClientProvider client={queryClient}>
            <main className='mt-14'>
                <Section1 />
                <Section2 ongoingProjects ={ongoingProjects} />
                <Section3 finishedProjects={finishedProjects} />
            </main>
        </QueryClientProvider>
    );
};
