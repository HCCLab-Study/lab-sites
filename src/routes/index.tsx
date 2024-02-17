import { Navigate, useRoutes } from 'react-router-dom';

import Header from '@layout/header';
import HomePage from '@pages/home/page';
import PeoplePage from '@/pages/people/page';
import { routes } from '@constants/routes';

export default function Router() {
	const elements = [
		{
			path: '/',
			element: <Header />,
			children: [
				{
					path: routes.home,
					element: <HomePage />,
				},
				{
					path: routes.people,
					element: <PeoplePage />,
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
