/**
 * Gently fades an element in the first time it scrolls into view.
 * Pair with the `.reveal` class (see app.css); `delay` staggers siblings.
 */
export function reveal(node: HTMLElement, delay = 0) {
	node.classList.add('reveal');
	if (delay) node.style.setProperty('--reveal-delay', `${delay}ms`);

	if (!('IntersectionObserver' in window)) {
		node.classList.add('is-visible');
		return;
	}

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.classList.add('is-visible');
					observer.disconnect();
				}
			}
		},
		{ rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
	);
	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
