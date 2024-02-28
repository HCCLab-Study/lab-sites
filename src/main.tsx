import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './api/queryClient.ts';
import { BrowserRouter } from 'react-router-dom';
// import '@/index.css';

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
