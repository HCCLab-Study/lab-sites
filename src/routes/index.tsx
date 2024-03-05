import { Navigate, useRoutes } from 'react-router-dom';

import Header from '../layout/header';
import HomePage from '../pages/home/page';
import PeoplePage from '../pages/people/page';
import { routes } from '../constants/routes';
import ProjectsPage from '../pages/projects/page';
import PublicationsPage from '../pages/publications/page';
import LecturesPage from '../pages/lectures/page';
import ClubPage from '../pages/club/page';

export default function Router() {
	const elements = [
		{
			path: '/',
			element: <Header />,
			children: [
				{
					path: routes.home, // /home
					element: <HomePage />,
				},
				{
					path: routes.people, // /people
					element: <PeoplePage />,
				},
				{
					path: routes.projects, // projects
					element: <ProjectsPage />,
				},
				{
					path: routes.publications, // publications
					element: <PublicationsPage />,
				},
				{
					path: routes.lectures, // lectures
					element: <LecturesPage />,
				},
				{
					path: routes.club, // club
					element: <ClubPage />,
				},

				{
					path: '/',
					element: <Navigate replace to={routes.home} />,
				},
			],
		},
	];

	return useRoutes(elements);
}
