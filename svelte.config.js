import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({ strict: false, fallback: 'index.html', pages: 'docs' }),
		prerender: {
			handleHttpError: 'warn'
		}
	}
};

export default config;
