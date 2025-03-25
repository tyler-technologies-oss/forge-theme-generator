import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({ strict: false, fallback: 'index.html', pages: 'forge-theme-generator' }),
    prerender: {
      handleHttpError: 'warn'
    },
    paths: {
      base: '/forge-theme-generator',
      relative: false
    }
  }
};
export default config;
