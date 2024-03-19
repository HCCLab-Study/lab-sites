import Section1 from './_components/section1';
import Section2 from './_components/section2';
import Section3 from './_components/section3';

import { Project } from '../../model/projects.type.ts';

import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useGetAllProjects } from './_hooks/useGetAllProjects.ts';

export default function ProjectsPage() {

    const { data: projects, isFetching, isError } = useGetAllProjects();

    return (
            <main className='mt-14'>
                <Section1 />
                <Section2 ongoingProjects ={filterProject(projects, 'onGoing')} />
                <Section3 finishedProjects={filterProject(projects, 'finished')} />
            </main>
    );
};

function filterProject(projects: Project[], status = 'onGoing'){
    return projects.filter((p) => p.status === status);
}
