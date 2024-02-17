import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [
			{ find: '@', replacement: '/src' },
			{ find: '@components', replacement: '/src/components' },
			{ find: '@constants', replacement: '/src/constants' },
			{ find: '@pages', replacement: '/src/pages' },
			{ find: '@styles', replacement: '/src/styles' },
			{ find: '@utils', replacement: '/src/utils' },
			{ find: '@assets', replacement: '/src/assets' },
			{ find: '@hooks', replacement: '/src/hooks' },
			{ find: '@model', replacement: '/src/model' },
			{ find: '@routes', replacement: '/src/routes' },
			{ find: '@api', replacement: '/src/api' },
		],
	},
});
