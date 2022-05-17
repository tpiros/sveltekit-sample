import adapter from '@sveltejs/adapter-static';
import path from 'path';

export default {
	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false
		}),
		vite: {
			resolve: {
				alias: {
					$lib: path.resolve('./src/lib')
				}
			}
		}
	}
};
