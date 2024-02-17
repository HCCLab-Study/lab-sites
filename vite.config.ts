import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],

	resolve: {
		alias: [
			{ find: '@', replacement: path.resolve(__dirname, '/src') },
			{ find: '@components', replacement: path.resolve(__dirname, '/src/components') },
			{ find: '@constants', replacement: path.resolve(__dirname, '/src/constants') },
			{ find: '@pages', replacement: path.resolve(__dirname, '/src/pages') },
			{ find: '@styles', replacement: path.resolve(__dirname, '/src/styles') },
			{ find: '@utils', replacement: path.resolve(__dirname, '/src/utils') },
			{ find: '@assets', replacement: path.resolve(__dirname, '/src/assets') },
			{ find: '@hooks', replacement: path.resolve(__dirname, '/src/hooks') },
			{ find: '@model', replacement: path.resolve(__dirname, '/src/model') },
			{ find: '@routes', replacement: path.resolve(__dirname, '/src/routes') },
			{ find: '@api', replacement: path.resolve(__dirname, '/src/api') },
			{ find: '@layout', replacement: path.resolve(__dirname, '/src/layout') },
		],
	},
});
