import { people } from './people.mock';
import { publication } from './publication.mock';
import { project } from './projects.mock';
import { HttpResponse, http } from 'msw';

export const handlers = [
	http.get('/api/people', ({ request, params, cookies }) => {
		return HttpResponse.json({ people: [...people] });
	}),

	http.get('/api/project', ({ request, params, cookies }) => {
		console.log('api');
		return HttpResponse.json({ project: [...project]});
	}),

	http.get('/api/publication', ({ request, params, cookies }) => {
		console.log('api');
		return HttpResponse.json({ publication: [...publication] });
	}),
];
