import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './api/queryClient.ts';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

async function enableMocking() {
	console.log('msw worker is start');
	if (process.env.NODE_ENV !== 'development') return;

	if (typeof window === 'undefined') {
		// 서버
		const { server } = await import('./mocks/server.ts');
		server.listen();
	} else {
		// 브라우저
		const { worker } = await import('./mocks/worker.ts');
		worker.start();
	}

	// return worker.start();
}

enableMocking().then(() => {
	ReactDOM.createRoot(document.getElementById('root')!).render(
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<ReactQueryDevtools initialIsOpen={true} />
				<React.StrictMode>
					<App />
				</React.StrictMode>
			</BrowserRouter>
		</QueryClientProvider>,
	);
});
