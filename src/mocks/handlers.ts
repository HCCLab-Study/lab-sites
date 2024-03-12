import { people } from './people.mock';
import { HttpResponse, http } from 'msw';

export const handlers = [
	http.get('/api/people', ({ request, params, cookies }) => {
		console.log('api');
		return HttpResponse.json({ people: [...people] });
	}),

	http.get('/api/project', () => {
		return HttpResponse.json({});
	}),
];
