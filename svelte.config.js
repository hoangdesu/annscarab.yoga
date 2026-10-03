import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		// Static output for GitHub Pages: every route is prerendered to plain HTML.
		// `404.html` is the page GitHub Pages serves for unknown URLs.
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			// GitHub Pages compresses responses itself, so pre-compressed copies are wasted.
			precompress: false,
			strict: true
		}),
		// Inline small per-page stylesheets to save a few round trips on first load.
		inlineStyleThreshold: 2048,
		paths: {
			// Custom domain deploys at the root; set BASE_PATH (e.g. "/repo-name") for a project-page URL.
			base: process.argv.includes('dev') ? '' : (process.env.BASE_PATH ?? '')
		}
	}
};

export default config;
