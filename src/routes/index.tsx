import { Navigate, useRoutes } from 'react-router-dom';

import Header from '../layout/header';
import HomePage from '../pages/home/page';
import PeoplePage from '../pages/people/page';
import { routes } from '../constants/routes';
import ProjectsPage from '../pages/projects/page';

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
					path: routes.projects, // /home
					element: <ProjectsPage />,
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
