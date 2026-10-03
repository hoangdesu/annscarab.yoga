/**
 * All editable site content lives here so text, offerings and contact
 * details can be updated without touching layout code.
 *
 * Wording guideline (from the website spec): gentle, support-oriented
 * language — never promise to diagnose, cure or treat.
 */

import type { PropIconName } from '$lib/components/brand/propIcons';
import type { IconName } from '$lib/components/Icon.svelte';

export const site = {
	name: 'Yoga with Ann Scarab',
	shortName: 'Ann Scarab',
	tagline: 'Breathe • Move • Heal',
	subtitle: 'Gentle yoga for every body',
	url: 'https://annscarab.yoga',
	description:
		'Therapeutic yoga, mindful breathing, gentle movement, and wellness with Ann Scarab.',
	ogImage: '/images/og.jpg'
};

export const contact = {
	email: 'annscarab@gmail.com',
	phoneDisplay: '(470) 564-9727',
	phoneHref: 'tel:+14705649727',
	addressLines: ['11 Mountain Laurel Lane', 'Ellijay, GA 30536'],
	address: '11 Mountain Laurel Lane, Ellijay, GA 30536',
	sessions: ['One-on-one yoga', 'Online or in person', 'Personalized practice'],
	/** Add profile URLs here when they exist, e.g. { label: 'Instagram', href: 'https://…' }. */
	social: [] as { label: string; href: string }[]
};

/**
 * Contact form delivery via Web3Forms (https://web3forms.com) — free, no backend needed.
 * Create an access key with Ann's email address and paste it below; submissions are
 * then emailed straight to her. The key is designed to be public, so it is safe here.
 * Until a key is set, the form falls back to opening the visitor's email app.
 */
export const contactForm = {
	endpoint: 'https://api.web3forms.com/submit',
	accessKey: '',
	subject: 'New class enquiry — Yoga with Ann Scarab',
	notSureOption: 'Not sure yet — help me choose'
};

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
	contact.address
)}`;

export const navLinks = [
	{ label: 'About', hash: 'about' },
	{ label: 'Therapeutic Yoga', hash: 'therapeutic-yoga' },
	{ label: 'Classes', hash: 'classes' },
	{ label: 'Gallery', hash: 'gallery' },
	{ label: 'Contact', hash: 'contact' }
];

export const hero = {
	intro:
		'Discover the power of mindful breathing, gentle movement, and therapeutic yoga to restore balance, reduce stress, and support your well-being.'
};

export const breath = {
	heading: 'Breath is the First Medicine',
	lead: 'Every breath influences both body and mind.',
	body: [
		"Gentle, mindful breathing helps reduce stress, calm the nervous system, improve circulation, and support the body's natural ability to restore balance.",
		'Through breath, movement, and awareness, yoga becomes a pathway to greater ease, strength, and well-being.'
	]
};

export const about = {
	heading: 'Welcome',
	lead: 'I believe healing begins with awareness.',
	body: [
		'Through therapeutic yoga, mindful breathing, and gentle movement, I help students reconnect with their bodies, improve mobility, and cultivate a sense of calm and balance in everyday life.'
	],
	credentials: [
		'200-hour & 300-hour Yoga Alliance teacher training',
		'Practicing yoga for more than 10 years',
		'Balanced restorative yoga, centred on breath, spine & balance'
	]
};

/** Longer story for the /about page — adapted from Ann's own handwritten notes. */
export const aboutStory = {
	intro: [
		'My name is Nguyet Nga Huynh — you can call me Ann. I am a yoga instructor, and I have completed both the 200-hour and 300-hour teacher training programs certified by Yoga Alliance.',
		'I have been practicing yoga for over ten years. Along the way I explored several styles, including Hatha yoga. I chose to teach balanced restorative yoga because it is gentle and safe for students, and it carries naturally from the mat into daily life.'
	],
	approachHeading: 'Balanced restorative yoga',
	approach: [
		'My practice focuses on three things: the breath, the spine, and balance. Here, balance means more than standing steadily. It means harmony between body, energy, emotions, and mind.',
		'Safety always comes first. I use supportive props such as blocks, straps, bolsters, a wall or a chair, so you can enter poses more easily, hold them comfortably, and keep a gentle, deep, steady breath.',
		'When the body returns to balance, the breath flows more smoothly, and many students leave feeling refreshed and lighter after an hour on the mat.',
		'Yoga is not only an hour on the mat. Good alignment and mindful breathing become part of how you sit, stand and move every day. Gentle meditation practices, such as mindfulness and gratitude meditation, can help nurture a more positive outlook, self-kindness, and a deeper love for life.'
	],
	whoFor:
		'This practice welcomes men and women of all ages, including beginners, older adults, and women during pregnancy and after birth (with the approval of your care provider).'
};

export type Service = { title: string; description: string; icon?: IconName };

export const therapeutic = {
	heading: 'Therapeutic Yoga',
	intro:
		'Each session is shaped around your body and what it needs today. Movements are slow, supported, and guided by the breath, so the practice stays safe and comfortable.',
	services: [
		{
			title: 'Back Pain',
			icon: 'spine',
			description:
				'Gentle movement for the spine, gradually building comfort, mobility, and support through the back and core.'
		},
		{
			title: 'Neck & Shoulder Care',
			icon: 'shoulders',
			description:
				'Easing tension that gathers in the neck and shoulders, with attention to posture and daily habits.'
		},
		{
			title: 'Balance',
			icon: 'tree-pose',
			description:
				'Steady, supported practice to build stability and confidence on your feet, one step at a time.'
		},
		{
			title: 'Stress Relief',
			icon: 'wind',
			description:
				'Slow breathing and restorative poses that invite the body and mind to settle and rest.'
		},
		{
			title: 'Hormonal Balance Support',
			icon: 'moon',
			description:
				'A calm, restorative practice that supports your well-being through life’s natural changes.'
		},
		{
			title: 'Healthy Aging',
			icon: 'tree',
			description:
				'Practice adapted for every age, helping you stay mobile, strong, and at ease in your body.'
		}
	] satisfies Service[],
	note: 'Yoga supports, but does not replace, medical care. Please check with your doctor if you have a health condition.'
};

export const benefits = {
	heading: 'Why Breath Matters',
	intro: 'A few quiet minutes of mindful breathing can change how the whole day feels.',
	items: [
		{
			title: 'Better Breathing',
			icon: 'lungs',
			description: 'Notice your breath and let it become slower, deeper and more even.'
		},
		{
			title: 'Stress Reduction',
			icon: 'waves',
			description: 'Long, easy exhales help the body shift into a calmer, more relaxed state.'
		},
		{
			title: 'Calmer Mind',
			icon: 'mind',
			description: 'Following the breath brings your attention gently back to the present moment.'
		},
		{
			title: 'Healthy Circulation',
			icon: 'heart-pulse',
			description: 'Steady breathing and gentle movement can support healthy blood flow.'
		},
		{
			title: 'Body Awareness',
			icon: 'body',
			description: 'Reconnect with how your body feels as it moves, rests and breathes.'
		},
		{
			title: 'Balance & Well-being',
			icon: 'stones',
			description: 'Small, regular practice supports both physical and mental well-being.'
		}
	] satisfies Service[]
};

export const classes = {
	heading: 'Yoga Designed Around You',
	intro:
		'Whether you are recovering from injury, improving mobility, reducing stress, or simply looking for a gentle and mindful practice, each session is tailored to your individual needs.',
	items: [
		{
			title: 'Private Yoga',
			description:
				'One-on-one sessions, online or in person, built entirely around your body, goals and pace.'
		},
		{
			title: 'Gentle & Beginner Yoga',
			description:
				'An unhurried introduction to yoga. No experience or flexibility needed, just curiosity.'
		},
		{
			title: 'Restorative Yoga',
			description:
				'Long, fully supported poses with props that let the body rest deeply and recover.'
		},
		{
			title: 'Balance Yoga',
			description:
				'Practice focused on stability, posture and core strength, so you feel steady in everyday life.'
		},
		{
			title: 'Pranayama · Breathing Practice',
			description:
				'Guided breathing techniques to calm the nervous system and bring more ease to each day.'
		},
		{
			title: 'Meditation',
			description:
				'Simple mindfulness and gratitude meditation to quiet the mind and nurture a positive outlook.'
		}
	] satisfies Service[],
	focusHeading: 'Sessions can also focus on',
	focus: [
		'Flexibility & Mobility',
		'Balance & Stability',
		'Strength Training',
		'Posture Improvement',
		'Stress Relief'
	],
	propsHeading: 'Supportive yoga with props',
	propsIntro:
		'Safety always comes first. Props help you enter poses more easily, hold them comfortably, and keep a gentle, steady breath.',
	props: [
		{ icon: 'blocks', label: 'Yoga blocks' },
		{ icon: 'bolster', label: 'Yoga bolster' },
		{ icon: 'strap', label: 'Yoga strap' },
		{ icon: 'chair', label: 'Supportive chair' },
		{ icon: 'balls', label: 'Massage balls' },
		{ icon: 'sticks', label: 'Therapy sticks' },
		{ icon: 'blankets', label: 'Blankets' },
		{ icon: 'lotus', label: 'Other supportive props' }
	] satisfies { icon: PropIconName; label: string }[]
};

export const gallery = {
	heading: 'Gallery',
	intro: 'Quiet moments of light, land and practice.'
};

export const contactSection = {
	heading: "Let's Begin",
	intro:
		'Wherever you are starting from, you are welcome here. Leave a few details and Ann will get back to you to find a time that suits you.'
};
