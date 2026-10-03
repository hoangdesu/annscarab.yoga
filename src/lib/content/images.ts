/**
 * Photo slots used across the site.
 *
 * To swap a photo: drop the new file into `src/lib/assets/photos/`,
 * change the matching import below and update its `alt` text.
 * Responsive AVIF/WebP sizes are generated automatically at build time.
 * Stock photo credits live in `src/lib/assets/photos/CREDITS.md`.
 *
 * Ann's canyon photo appears only in the hero (home) and on the About page.
 */
import heroAnnCanyon from '$lib/assets/photos/hero-ann-canyon.jpg?enhanced';
import annCanyonPortrait from '$lib/assets/photos/ann-canyon-portrait.jpg?enhanced';
import gardenPractice from '$lib/assets/photos/garden-practice.jpg?enhanced';
import gardenPractice2 from '$lib/assets/photos/garden-practice-2.jpg?enhanced';
import leafInLight from '$lib/assets/photos/leaf-in-light.jpg?enhanced';
import yogaSilhouetteDusk from '$lib/assets/photos/yoga-silhouette-dusk.jpg?enhanced';
import pineForestLight from '$lib/assets/photos/pine-forest-light.jpg?enhanced';
import whiteLotus from '$lib/assets/photos/white-lotus.jpg?enhanced';

type Picture = typeof heroAnnCanyon;

export type Photo = {
	src: Picture;
	/** Empty string marks the image as decorative. */
	alt: string;
	/** CSS object-position, used to keep the subject in frame when cropped. */
	position?: string;
};

export type GalleryPhoto = Photo & {
	category: 'Forest' | 'Light' | 'Flowers' | 'Seasons' | 'Practice';
	caption: string;
};

export const images = {
	hero: {
		src: heroAnnCanyon,
		alt: 'Ann meditating cross-legged on a canyon rim in the soft light of dawn',
		position: '50% 60%'
	},
	breath: {
		src: yogaSilhouetteDusk,
		alt: 'Silhouette of a person in tree pose, arms raised, against a warm dusk sky',
		position: '50% 50%'
	},
	about: {
		src: gardenPractice2,
		alt: 'Ann and a student balancing together in dancer pose in a sunny flower garden',
		position: '50% 55%'
	},
	therapeutic: {
		src: leafInLight,
		alt: 'Patterned green and pink leaves growing in a glass bowl of water by a bright window',
		position: '50% 40%'
	},
	aboutPage: {
		src: annCanyonPortrait,
		alt: 'Ann seated in meditation on a canyon rim at sunrise',
		position: '50% 62%'
	}
} satisfies Record<string, Photo>;

/** Editorial gallery — the first image is shown large. */
export const galleryPhotos: GalleryPhoto[] = [
	{
		src: pineForestLight,
		alt: 'Sun rays falling through a dense pine forest',
		category: 'Forest',
		caption: 'Light between the pines',
		position: '45% 50%'
	},
	{
		src: whiteLotus,
		alt: 'A white lotus flower resting on a green lotus leaf',
		category: 'Flowers',
		caption: 'White lotus',
		position: '50% 45%'
	},
	{
		src: gardenPractice,
		alt: 'Ann and a student in dancer pose among the flowers of a summer garden',
		category: 'Practice',
		caption: 'Practice in the garden',
		position: '50% 55%'
	}
];
