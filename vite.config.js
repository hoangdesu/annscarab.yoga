import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		// Generates responsive AVIF/WebP variants for `?enhanced` image imports at build time.
		enhancedImages(),
		sveltekit()
	],
	server: {
		port: 2203
	}
});
